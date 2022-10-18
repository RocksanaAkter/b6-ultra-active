import React from 'react';
import './Person.css'

const Person = () => {
    return (
        <div>
            <div className='person-name'>
            <img src="https://i.ibb.co/BjvK2cQ/person.png" alt="" />
            <p>Shahidur Rahman</p>
            </div>
            <div className='person-info'>
            <div>
            <p>3rd Semester</p>
            <p>CSE</p>
            <p>ULAB</p>
            </div>
            </div>
        </div>
    );
};

export default Person;