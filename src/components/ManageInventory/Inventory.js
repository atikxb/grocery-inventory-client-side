import React from 'react';
import { Link } from 'react-router-dom';

const Inventory = () => {
    return (
        <section className="pt-5">
        <div className="container">
            <div className="table-responsive">
                <table className="table table-dark table-hover text-center rounded">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Supplier name</th>
                            <th scope="col">Sold</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1323</th>
                            <td>Nishiki Medium Grain Rice</td>
                            <td><img className="w-50" src="../../img/p1.jpg" alt=""/></td>
                            <td>Nishiki is a premium medium grain rice grown with the rich soil and crystal clear water
                                of
                                California.</td>
                            <td>$12/kg</td>
                            <td>10</td>
                            <td>JFC International Inc.</td>
                            <td><span className="badge bg-info">SLOD</span></td>
                            <td>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
        <Link to='/add-item'><button className="btn btn-success m-auto d-block mb-2 justify-content-end">Add New
                    Item</button></Link>
    </section>
    );
};

export default Inventory;