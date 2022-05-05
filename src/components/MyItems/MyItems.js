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
        axios.get(`http://localhost:5000/useritems?email=${user.email}`)
            .then(response => {
                setItems(response.data);
                setItemsLoading(false);
            })
            .catch(error => console.log(error));


    }, [user]);
    return (
        <main>
            <Breadcrumb title='My Items' />
            <Inventory items={items} loading={itemsLoading} setItems={setItems} />
        </main>
    );
};

export default MyItems;