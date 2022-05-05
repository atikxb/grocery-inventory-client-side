import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Inventory = (props) => {
    const { items, loading } = props;
    return (
        <section className="pt-5">
            <div className="container">
                <div className="table-responsive">
                    {
                        loading ? <Loading /> : <table className="table table-light table-hover text-center rounded table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Supplier name</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    items.map(item => <tr key={item._id} className='align-middle'>
                                        <th scope="row">{item._id}</th>
                                        <td>{item.name}</td>
                                        <td><img width='50px' src={item.image} alt={item.name} /></td>
                                        <td>${item.price}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.supplier}</td>
                                        <td>
                                            <button className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    }
                </div>

            </div>
            <Link to='/add-item'><button className="btn btn-success m-auto d-block mb-2 justify-content-end">Add New
                Item</button></Link>
        </section>
    );
};

export default Inventory;