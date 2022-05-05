import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Inventory from './Inventory';

const ManageInventory = () => {
    return (
        <main>
            <Breadcrumb title='Manage Inventory'/>
            <Inventory/>
        </main>
    );
};

export default ManageInventory;