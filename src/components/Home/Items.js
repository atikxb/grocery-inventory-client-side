import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import Loading from '../Loading/Loading';

const Items = () => {
    const [items, setItems, itemsLoading] = useItems();
    const navigate = useNavigate();
    return (
        <section className="py-5">
            <div className="container">
                <h1 className="text-center pb-3">Grocery Items</h1>
                {itemsLoading ? <Loading /> : <div className="row">
                    {
                        items.slice(0, 6).map(item => <div key={item._id} className="col-lg-4 mb-2">
                            <div style={{ height: '100%' }} className="item shadow p-3 rounded">
                                <img src={item.image} alt={item.name} />
                                <h4>{item.name}</h4>
                                <p>{item.description}</p>
                                <h5>Price: ${item.price}</h5>
                                <p className="badge bg-secondary">Quantity: {item.quantity}</p>
                                <p className="badge bg-secondary ms-2">Supplier Name: {item.supplier}</p>
                                <br />
                                <button onClick={() => navigate(`/inventory/${item._id}`)} className="btn btn-primary">Update</button>
                            </div>
                        </div>)
                    }
                </div>
                }
                <Link to="/manage-inventory"><button className="btn-lg btn-info text-white my-5 m-auto d-block">Manage
                    Inventories</button></Link>
            </div>
        </section>
    );
};

export default Items;