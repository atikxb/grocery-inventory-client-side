import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Inventory from '../ManageInventory/Inventory';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const [itemsLoading, setItemsLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {//get current user's items
        axios.get(`http://localhost:5000/useritems?email=${user.email}`, {
            headers: {//sending user token created at login route
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(response => {
                setItems(response.data);
                setItemsLoading(false);
            })
            .catch(error => {//sigout user if token doesn't match
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            });


    }, [user]);
    return (
        <main>
            <Breadcrumb title='My Items' />
            <Inventory items={items} loading={itemsLoading} setItems={setItems} />
        </main>
    );
};

export default MyItems;