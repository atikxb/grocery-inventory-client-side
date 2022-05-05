import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Inventory from '../ManageInventory/Inventory';

const MyItems = () => {
    return (
        <main>
            <Breadcrumb title='My Items' />
            <Inventory />
        </main>
    );
};

export default MyItems;