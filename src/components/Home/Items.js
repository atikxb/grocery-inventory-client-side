import React from 'react';
import { Link } from 'react-router-dom';

const Items = () => {
    return (
        <section className="py-5">
        <div className="container">
            <h1 className="text-center pb-3">Grocery Items</h1>
            <div className="row">
                <div className="col-lg-4">
                    <div className="item shadow p-3 rounded">
                        <img src="./img/p1.jpg" alt=""/>
                        <a href="#">
                            <h4>Nishiki Medium Grain Rice</h4>
                        </a>
                        <p>Nishiki is a premium medium grain rice grown with the rich soil and crystal clear water of
                            California.</p>
                        <h5>Price: $12/kg</h5>
                        <p className="badge bg-secondary">Quantity: 5</p>
                        <p className="badge bg-secondary">Supplier Name: JFC International Inc.</p>
                        <br/>
                        <a href="#"><button className="btn btn-primary">Update</button></a>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="item shadow p-3 rounded">
                        <img src="./img/p2.jpg" alt=""/>
                        <a href="#">
                            <h4>NIDO Fortificada Dry Whole Milk</h4>
                        </a>
                        <p>Nurture your child’s growth and development with Nestle NIDO Fortificada Whole Powdered Milk
                            Beverage for Ages 4+</p>
                        <h5>Price: $399</h5>
                        <p className="badge bg-secondary">Quantity: 10</p>
                        <p className="badge bg-secondary">Supplier Name: Nido</p>
                        <br/>
                        <a href="#"><button className="btn btn-primary">Update</button></a>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="item shadow p-3 rounded">
                        <img src="./img/p3.jpg" alt=""/>
                        <a href="#">
                            <h4>Goya Foods Manzanilla Olives</h4>
                        </a>
                        <p>Goya Stuffed Olives with Minced Anchovies are known for their rich taste, firm texture and
                            tangy flavor.</p>
                        <h5>Price: $249</h5>
                        <p className="badge bg-secondary">Quantity: 20</p>
                        <p className="badge bg-secondary">Supplier Name: Goya Foods, Inc.</p>
                        <br/>
                        <a href="#"><button className="btn btn-primary">Update</button></a>
                    </div>
                </div>
                <div className="col-lg-4 mt-3">
                    <div className="item shadow p-3 rounded">
                        <img src="./img/p4.jpg" alt=""/>
                        <a href="#">
                            <h4>Sunflower Oil & Extra Virgin Olive Oil</h4>
                        </a>
                        <p>he composition of Iberia's sunflower and extra virgin olive oil blend makes it resistant to
                            high temperatures and ideal
                            for high heat frying</p>
                        <h5>Price: $99</h5>
                        <p className="badge bg-secondary">Quantity: 32</p>
                        <p className="badge bg-secondary">Supplier Name: Iberia Foods Corp.</p>
                        <br/>
                        <a href="#"><button className="btn btn-primary">Update</button></a>
                    </div>
                </div>
                <div className="col-lg-4 mt-3">
                    <div className="item shadow p-3 rounded">
                        <img src="./img/p5.jpg" alt=""/>
                        <a href="#">
                            <h4>Fiesta Mild Salsa Con Queso</h4>
                        </a>
                        <p>Kick up the flavor of your next plate of nachos with the rich and cheesy flavor of CHI-CHI'S
                            Salsa Con Queso.</p>
                        <h5>Price: $50</h5>
                        <p className="badge bg-secondary">Quantity: 8</p>
                        <p className="badge bg-secondary">Supplier Name: Hormel</p>
                        <br/>
                        <a href="#"><button className="btn btn-primary">Update</button></a>
                    </div>
                </div>
                <div className="col-lg-4 mt-3">
                    <div className="item shadow p-3 rounded">
                        <img src="./img/p6.jpg" alt=""/>
                        <a href="#">
                            <h4>Welch's Fruit Snacks, Mixed Fruit</h4>
                        </a>
                        <p>Welch's Fruit Snacks Mixed Fruit. Family farmer owned.80 Calorie pouches. Fruit is our 1st
                            ingredient. Natural &
                            artificial flavors. Made with real fruit</p>
                        <h5>Price: $150</h5>
                        <p className="badge bg-secondary">Quantity: 14</p>
                        <p className="badge bg-secondary">Supplier Name: THE PROMOTION IN MOTION</p>
                        <br/>
                        <a href="#"><button className="btn btn-primary">Update</button></a>
                    </div>
                </div>
            </div>
            <Link to="/manage-inventory"><button className="btn-lg btn-info text-white my-5 m-auto d-block">Manage
                    Inventories</button></Link>
        </div>
    </section>
    );
};

export default Items;