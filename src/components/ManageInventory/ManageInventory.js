import React from 'react';
import useItems from '../../hooks/useItems';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Inventory from './Inventory';

const ManageInventory = () => {
    const [items, itemsLoading] = useItems();
    return (
        <main>
            <Breadcrumb title='Manage Inventory'/>
            <Inventory items={items} loading={itemsLoading}/>
        </main>
    );
};

export default ManageInventory;