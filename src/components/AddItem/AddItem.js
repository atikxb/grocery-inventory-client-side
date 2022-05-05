import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

const AddItem = () => {
    return (
        <main>
            <Breadcrumb title='Add New Item'/>
            <section className="py-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-3">
                    <div className="form shadow p-5">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="id" className="form-label">ID</label>
                                <input type="text" className="form-control" id="id"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Item Name</label>
                                <input type="text" className="form-control" name="itemname" id="name"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="img" className="form-label">Image URL</label>
                                <input type="text" className="form-control" name="imgurl" id="img"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Price</label>
                                <input type="text" className="form-control" name="price" id="price"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="quantity" className="form-label">Quantity</label>
                                <input type="text" className="form-control" name="quantity" id="quantity"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="suppliername" className="form-label">Supplier Name</label>
                                <input type="text" className="form-control" name="suppname" id="suppliername"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Short Description</label>
                                <textarea className="form-control" name="description" id="description" cols="30"
                                    rows="10"></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary">Add Item</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </main>
    );
};

export default AddItem;