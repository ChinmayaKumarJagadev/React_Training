import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert(`The details entered was: ${formData.name}  ${formData.email}  ${formData.age}`);
    };

    return (
        <div>
            <h1>Form Example</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter your name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </label>
                <br />

                <label>
                    Enter your email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </label>
                <br />

                <label>
                    Enter your age:
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    />
                </label>
                <br />


                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Form;
