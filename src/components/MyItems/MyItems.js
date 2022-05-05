import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Inventory from '../ManageInventory/Inventory';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const [itemsLoading, setItemsLoading] = useState(true);
    useEffect(() => {//get current user's items
        axios.get(`http://localhost:5000/useritems?email=${user?.email}`, {
            headers: {//sending user token created at login route
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(response => {
                setItems(response.data);
                setItemsLoading(false);
            })
            .catch(error => {
                alert('JWT Token can not be verified. JWT token was not implemented for google login. Pls login with email/pass and reload browser to see the items. Due to login using google, if you again login with email/pass, it can not verify token. If reload browser after login with email/pass, items will show and JWT works well.');
                setItemsLoading(false);
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