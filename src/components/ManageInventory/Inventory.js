import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';

const Inventory = (props) => {
    const { items, setItems, loading } = props;
    const handleDeleteItem = async id => {
        const confirm = window.confirm('Are you sure to delete?');
        confirm && console.log(id);
        try {
            const response = await axios.delete(`http://localhost:5000/inventory/${id}`);
            if (response?.data?.deletedCount) {
                const remaining = items.filter(item => item._id !== id);
                setItems(remaining);
                toast.success("Item deleted");
                
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <section className="pt-5">
            <div className="container">
                {loading ? <Loading /> :
                    <div className="table-responsive">

                        {
                            items.length ? <table className="table table-light table-hover text-center rounded table-striped">
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
                                                <button onClick={()=>handleDeleteItem(`${item._id}`)} className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>)
                                    }

                                </tbody>
                            </table> : <p className='text-center'>No Item found</p>
                        }
                    </div>
                }

            </div>
            <Link to='/add-item'><button className="btn btn-success m-auto d-block mb-2 justify-content-end">Add New
                Item</button></Link>
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

export default Inventory;