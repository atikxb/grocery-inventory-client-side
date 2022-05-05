import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

const AddItem = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async data => {
        data.email = user.email;
        try {
            const response = await axios.post('http://localhost:5000/addItem', data);
            response?.data?.insertedId && toast.success("New Item added successfully !");
        }
        catch (error) {
            console.log(error);
        }
        reset();//reset form data after submit
    }
    return (
        <main>
            <Breadcrumb title='Add New Item' />
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-3">
                            <div className="form shadow p-5">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Item Name</label>
                                        <input type="text" className="form-control" name="itemname" id="name" {...register("name")} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="img" className="form-label">Image URL</label>
                                        <input type="text" className="form-control" name="imgurl" id="img" {...register("image")} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="price" className="form-label">Price</label>
                                        <input type="number" className="form-control" name="price" id="price" {...register("price")} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="quantity" className="form-label">Quantity</label>
                                        <input type="number" className="form-control" name="quantity" id="quantity" {...register("quantity")} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="suppliername" className="form-label">Supplier Name</label>
                                        <input type="text" className="form-control" name="suppname" id="suppliername" {...register("supplier")} required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Short Description</label>
                                        <textarea className="form-control" name="description" id="description" cols="30"
                                            rows="10" {...register("description")} required></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-primary">Add Item</button>
                                </form>
                                <ToastContainer
                                    position="top-center"
                                    autoClose={2000}
                                    hideProgressBar={false}
                                    newestOnTop={false}
                                    closeOnClick
                                    rtl={false}
                                    pauseOnFocusLoss
                                    draggable
                                    pauseOnHover
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AddItem;