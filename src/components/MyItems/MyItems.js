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
        axios.get(`https://grocery-inventory-server-side.herokuapp.com/useritems?email=${user?.email}`, {
            headers: {//sending user token created at login route
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(response => {
                setItems(response.data);
                setItemsLoading(false);
            })
            .catch(error => {
                signOut(auth);
                navigate('/login');

            });
    }, [user, navigate]);
    return (
        <main>
            <Breadcrumb title='My Items' />
            <Inventory items={items} loading={itemsLoading} setItems={setItems} />
        </main>
    );
};

export default MyItems;