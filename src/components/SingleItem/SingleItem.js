import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';

const SingleItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);
    const [itemLoading, setItemLoading] = useState(true);
    const [quantity, setQuantity] = useState(0);
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {//get single item
        axios.get(`https://grocery-inventory-server-side.herokuapp.com/inventory/${id}`)
            .then(response => {
                setItem(response.data);
                setItemLoading(false);
            })
            .catch(error => console.log(error));
    }, [id]);
    const handleDecreaseQuantity = () => {// decrease quantity by 1 when clicked
        if (item.quantity > 0) {
            const newQuantity = parseInt(item.quantity) - 1;
            updateQuantity(newQuantity, false);
        }
    }
    const handleIncreaseQuantity = data => {// add new inputted quantity with the previous quantity
        reset();
        const newQuantity = parseInt(item.quantity) + parseInt(data.quantity);
        (typeof (newQuantity) === 'number' && data.quantity > 0) ? updateQuantity(newQuantity, true) : toast.error("Please input a valid positive number");
    }
    const updateQuantity = async (newQuantity, showSuccess) => {//increase or decrease quantity
        try {

            const response = await axios.put(`https://grocery-inventory-server-side.herokuapp.com/inventory/${id}`, { newQuantity });
            if (response?.data?.modifiedCount) {
                setQuantity(newQuantity);
                item.quantity = newQuantity;
                showSuccess && toast.success("quantity updated");

            }
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <section className="section-padding">
            <div className="container">
                {
                    itemLoading ? <Loading /> : <div className="row">
                        <div className="col-lg-6">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="col-lg-6">
                            <p className="badge bg-warning">ID: {item._id}</p>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <h3>Price: ${item.price}</h3>
                            <p className="badge bg-secondary">Quantity: {item.quantity}</p>
                            <p className="badge bg-secondary ms-2">Supplier Name: {item.supplier}</p>
                            <br />
                            {
                                item.quantity ? <button onClick={() => handleDecreaseQuantity()} className="btn btn-warning">Delivered</button> :
                                    <button className="btn btn-danger ms-2">Sold</button>
                            }
                            <form onSubmit={handleSubmit(handleIncreaseQuantity)} className='pt-5'>
                                <div className="mb-3">
                                    <label htmlFor="restock" className="form-label">Restock the items</label>
                                    <input type="number" className="form-control" name="restock" id="restock" {...register("quantity")} required />
                                </div>
                                <button type="submit" className="btn btn-success">Restock</button>
                            </form>
                        </div>
                    </div>
                }
                <Link to="/manage-inventory"><button className="btn-lg btn-info text-white my-5 m-auto d-block">Manage
                    Inventories</button></Link>
            </div>
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
        </section>
    );
};

export default SingleItem;