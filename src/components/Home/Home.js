import React from 'react';
import Items from './Items';

const Home = () => {
    return (
        <main>
            <div className="hero text-center">
                <h1>Welcome to Grocery Inventory Management System</h1>
            </div>
            <Items />
            <section className="pb-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <img src="./img/about.jpg" alt="about" />
                        </div>
                        <div className="col-lg-6">
                            <h1>About Us</h1>
                            <p>The Groc Stock is a simple project which allow users to manage their inventory stock. The grocery store daily sales will be stored in the system This simple project will calculate the product stock available for the grocery store automatically and if a certain product needed to be restocked.

                                It is easy to customize for any enhancement or modification  that is related to the inventory and sales management or also any other process.  </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-secondary">
                <div className="container">
                    <h1 className="text-center text-white">FAQ</h1>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="accordion " id="accordionFlushExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseOne" aria-expanded="false"
                                            aria-controls="flush-collapseOne">
                                            Do user need to login to manage inventory
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Yes, User must login to see the stokcs and update them.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                            aria-controls="flush-collapseTwo">
                                            What user can do specifically?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">User can see total inventory or only his/here own items there. He/she can delete item, add or decrease stock.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#flush-collapseThree" aria-expanded="false"
                                            aria-controls="flush-collapseThree">
                                            Is the platform secured to use?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" className="accordion-collapse collapse"
                                        aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body">Yes, it is secured by login system and also jwt token to keep data safe.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;