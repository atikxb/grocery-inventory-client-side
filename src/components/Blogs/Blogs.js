import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

const Blogs = () => {
    return (
        <main>
            <Breadcrumb title='Blogs' />
            <section className="section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <div className="blog py-3">
                        <p>Q: Difference between javascript and nodejs</p>
                        <p><b>Ans:</b> Javascript is a programming language that is used for writing scripts on the website where NodeJS is a Javascript runtime environment. <br/>
                        Javascript can only be run in the browsers where We can run Javascript outside the browser with the help of NodeJS. <br/>
                        It is basically used on the client-side where It is mostly used on the server-side.</p>
                    </div>
                    <div className="blog py-3">
                        <p>Q: Differences between sql and nosql databases.</p>
                        <p><b>Ans: </b>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. <br/>
                        SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. <br/>
                        SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                    </div>
                    <div className="blog py-3">
                        <p>Q: What is the purpose of jwt and how does it work.</p>
                        <p><b>Ans: </b>JWT can be used as an access token to prevent unwanted access to a protected resource. They're often used as Bearer tokens, which the API will decode and validate before sending a response.Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. <br/>
                        JWT is created with a secret key and that secret key is private. That will never be revealed that to the public or inject inside the JWT token. When th website receive a JWT from the client, it verify that JWT with this that secret key stored on the server.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </main>
    );
};

export default Blogs;