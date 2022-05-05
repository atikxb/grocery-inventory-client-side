import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

const Blogs = () => {
    return (
        <main>
            <Breadcrumb title='Blogs' />
            <section class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="blog py-3">
                        <p>Q: Difference between javascript and nodejs</p>
                        <p><b>Ans: </b></p>
                    </div>
                    <div class="blog py-3">
                        <p>Q: When should you use nodejs and when should you use mongodb</p>
                        <p><b>Ans: </b></p>
                    </div>
                    <div class="blog py-3">
                        <p>Q: Differences between sql and nosql databases.</p>
                        <p><b>Ans: </b></p>
                    </div>
                    <div class="blog py-3">
                        <p>Q: What is the purpose of jwt and how does it work.</p>
                        <p><b>Ans: </b></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </main>
    );
};

export default Blogs;