import React, { useState } from 'react'
import formImg from '../Images/form-img.png'

import './Contact.css'

function Contact() {

    // variables
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [query, setQuery] = useState('');

    function nameChangeHandler(event) {
        setName(event.target.value);
    };

    function emailChangeHandler(event) {
        setEmail(event.target.value);
    };

    function queryChangeHandler(event) {
        setQuery(event.target.value);
    };


    function onSubmitChangeHandler(event) {
        event.preventDefault();

        if (name != '' && email != '' && query != '') {

            alert(`Thanks ${name} for your Query, We will Back with in 24 hours with response!`);
            setName('');
            setQuery('');
            setEmail('');

        } else {
            alert("Check name, email and query fields! (not be empty)");
        }

        
    }

    return (
        <div className="container-fluid contact-div" id="contact">
            <div className="row">
                <div className="col-lg-6 col-md-6 contact-img-div">
                    <img src={formImg} id="contact-img" alt="" />
                </div>
                <div className="col-lg-6 col-md-6 contact-form-div">
                    <form onSubmit={onSubmitChangeHandler}>
                        <label for="name">Name</label>
                        <input onChange={nameChangeHandler} value={name} type="text" id="name" />

                        <label for="email">Email</label>
                        <input onChange={emailChangeHandler} value={email}  type="email" id="email"/>

                        <textarea onChange={queryChangeHandler} value={query} name="query" id="query" placeholder="write your query here..."></textarea>

                        <button className="btn btn-primary" type="submit">Send <i class="far fa-paper-plane"></i></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
