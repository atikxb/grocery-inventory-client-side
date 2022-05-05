import React from 'react';
import { Link } from 'react-router-dom';

const SingleItem = () => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src="https://media.istockphoto.com/photos/pouring-oil-picture-id153517859?k=20&m=153517859&s=612x612&w=0&h=EohpipRmTDPGlXH5PnBCt1qhh_wMD3vuqAVbpQQdPF4=" alt=""/>
                    </div>
                    <div className="col-lg-6">
                        <p className="badge bg-warning">ID: 34234</p>
                        <h3>Nishiki Medium Grain Rice</h3>
                        <p>Nishiki is a premium medium grain rice grown with the rich soil and crystal clear water of
                            California.</p>
                        <h3>Price: $12/kg</h3>
                        <p className="badge bg-secondary">Quantity: 5</p>
                        <p className="badge bg-secondary">Supplier Name: JFC International Inc.</p>
                        <br/>
                            <button className="btn btn-warning">Delivered</button>
                            <form className='pt-5'>
                            <div className="mb-3">
                                <label htmlFor="restock" className="form-label">Restock the items</label>
                                <input type="number" className="form-control" name="restock" id="restock" required/>
                            </div>
                            <button type="submit" className="btn btn-success">Restock</button>
                        </form>
                    </div>
                </div>
                <Link to="/manage-inventory"><button className="btn-lg btn-info text-white my-5 m-auto d-block">Manage
                    Inventories</button></Link>
            </div>
        </section>
    );
};

export default SingleItem;