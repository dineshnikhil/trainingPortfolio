import React, { useState } from 'react'
import './Explore.css'

import personalTraining from '../../Images/Personal Trainer.svg'
import cardio from '../../Images/cardio-img.png'
import crossfit from '../../Images/crossfit-img.png'
import strength from '../../Images/strength-img.png'

function Explore() {

    // all usefull variables
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [bmi, setBmi] = useState('');
    const [bmiMsg, setBmiMsg] = useState('');
    const [bmr, setBmr] = useState(0);
    // image url
    const [imgUrl, setimgUrl] = useState(personalTraining);
    const [recTraining, setrecTraining] = useState('Calculate ur BMR!');

    const weightChangeHandler = (event) => {
        setWeight(event.target.value)
    };

    const heightChangeHandler = (event) => {
        setHeight(event.target.value)
    };

    const ageChangeHandler = (event) => {
        setAge(event.target.value)
    };

    const genderChangeHandler = (event) => {
        setGender(event.target.value)
    };


    const onSubmitHandler = (event) => {
        event.preventDefault();

        // validating the form.
        if (weight != '' && height != '' && age != '') {

            // ================ calulating the bmi ===========

            const calBmi = +weight/(+height) ** 2;
            var calbmiMsg = '';
            setBmi(calBmi.toFixed(2));

            if (calBmi < 18.5) {
                calbmiMsg = "You are Under Weight!"
            } else if (18.5 < calBmi && calBmi < 24.9) {
                calbmiMsg = "You are Normal Weight!"
            } else if (25 < calBmi && calBmi < 29.9) {
                calbmiMsg = "You are OverWeight!"
            } else {
                calbmiMsg = "You are sefering with Obesity!"
            }

            setBmiMsg(calbmiMsg)

            // ===================================================


            // ============ calculating the bmr ===================

            var calbmr = '';
            if (gender === "male") {
                calbmr = 88.362 + (13.396 * +weight) + (4.799 * (+height * 100)) - (5.677 * +age);
                setBmr(calbmr.toFixed(0));
            } else if (gender === "female") {
                calbmr = 447.593 + (9.247 * +weight) + (3.098 * (+height * 100)) - (4.330 * +age);
                setBmr(calbmr.toFixed(0));
            } else {
                alert("Please select your Gender!")
            }

            // ======================================================

            // ================= setting the recommed section ==========

            if (calbmiMsg === "You are Under Weight!") {
                setimgUrl(strength)
                setrecTraining('Strength Training')
            } else if (calbmiMsg === "You are Normal Weight!") {
                setimgUrl(crossfit)
                setrecTraining('Crossfit Training')
            } else if (calbmiMsg === "You are OverWeight!" || calbmiMsg === "You are sefering with Obesity!") {
                setimgUrl(cardio)
                setrecTraining('Cardio Training')
            } else {
                setimgUrl(personalTraining)
                setrecTraining('Calulate ur BMR!')
            }

            // ========================================================


            setWeight('');
            setGender('');
            setHeight('');
            setAge('');

        } else {

            alert("Check your weight, height, age fields again!");

        }
    }

    

    return (
        <div className="container-fluid explore-div" id="explore">
            <h2>Calculate Your <span>BMI</span> AND <span>BMR</span>!</h2>
            <div className="row">
                <div className="col-lg-4 col-md-6 explore-form-div">
                    <form onSubmit={onSubmitHandler}>

                        {/* asking weight */}
                        <label htmlFor="weight">Weight (kg)</label>
                        <input value={weight} type="number" id="weight" name="weight" onChange={weightChangeHandler} />
                        

                        {/* asking height */}
                        <label htmlFor="height">Height (Meters)</label>
                        <input value={height} type="float" id="height" name="height" onChange={heightChangeHandler} />
                        

                        {/* asking age */}
                        <label htmlFor="age">Age (Year)</label>
                        <input value={age} type="number" id="age" name="age" onChange={ageChangeHandler} />
                        
                        
                        <select value={gender} name="gender" id="gender" onChange={genderChangeHandler}>
                            <option value="">Choose your Gender..</option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </select>
                        

                        <button type="submit" className="btn btn-primary" id="cal-btn">Calculate <i class="fas fa-calculator"></i></button>
                    </form>
                </div>
                <div className="col-lg-4 col-md-6 result-div">
                    <h5>BMI <i class="fas fa-weight"></i></h5>
                    <p><span>{bmi}</span> ({bmiMsg})</p>
                    <h5>BMR <i class="fas fa-fire"></i></h5>
                    <p><span>{bmr}</span> (calories you burn Daily!)</p>
                </div>
                <div className="col-lg-4 training-recommend-div">
                    <h4>Recommended Training is</h4>
                    <img src={imgUrl} alt='' />
                    <h5>{recTraining}</h5>
                    <a href="#training" className="btn btn-primary">EnrolNow <i class="fas fa-dumbbell"></i></a>
                </div>
            </div>
            
        </div>
    )
}

export default Explore;
