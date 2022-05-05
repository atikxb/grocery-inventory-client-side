import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

const SingleItem = () => {
    const {id} = useParams();
    const [item, setItem] = useState([]);
    const [itemLoading, setItemLoading] = useState(true);
    useEffect(() => {//get single item
        axios.get(`http://localhost:5000/inventory/${id}`)
            .then(response => {
                setItem(response.data);
                setItemLoading(false);
            })
            .catch(error => console.log(error));


    }, [id]);
    console.log(item);
    return (
        <section className="section-padding">
            <div className="container">
                {
                    itemLoading ? <Loading/> : <div className="row">
                    <div className="col-lg-6">
                        <img src={item.image} alt={item.name}/>
                    </div>
                    <div className="col-lg-6">
                        <p className="badge bg-warning">ID: {item._id}</p>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <h3>Price: ${item.price}</h3>
                        <p className="badge bg-secondary">Quantity: {item.quantity}</p>
                        <p className="badge bg-secondary ms-2">Supplier Name: {item.supplier}</p>
                        <br/>
                            <button className="btn btn-warning">Delivered</button>
                            <button className="btn btn-danger ms-2">Sold</button>
                            <form className='pt-5'>
                            <div className="mb-3">
                                <label htmlFor="restock" className="form-label">Restock the items</label>
                                <input type="number" className="form-control" name="restock" id="restock" required/>
                            </div>
                            <button type="submit" className="btn btn-success">Restock</button>
                        </form>
                    </div>
                </div>
                }
                <Link to="/manage-inventory"><button className="btn-lg btn-info text-white my-5 m-auto d-block">Manage
                    Inventories</button></Link>
            </div>
        </section>
    );
};

export default SingleItem;