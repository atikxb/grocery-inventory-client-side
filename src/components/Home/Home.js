import React from 'react';
import Items from './Items';

const Home = () => {
    return (
        <main>
            <div className="hero text-center">
                <h1>Welcome to Grocery Stock Management System</h1>
            </div>
            <Items/>
        </main>
    );
};

export default Home;