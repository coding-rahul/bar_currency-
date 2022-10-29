import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Link } from "react-router-dom";

const Form = () => {
    const [inputdata, setinputdata] = useState({ name: "", email: "" });

    let inputHandler = (event) => {
        setinputdata({ ...inputdata, [event.target.name]: event.target.value });
        // console.log(inputdata);
    }

    let submit = (e) => {

        if (!inputdata.name || !inputdata.email) {
            alert("All field are manadatory");
        }
        else {
            alert("Thanks for submitting the form!")
            setinputdata({ name: "", email: "" });
        }
    }
    return (
        <>
            <div className='col-4 col-offset-1 mt-8 '>
                <Card className='bg-black-alpha-20 shadow-5 flex align-items-center justify-content-center  '>
                    <form>
                        <span className="p-float-label mb-5 p-inputtext-lg block">
                            <InputText
                                id="in"
                                name='name'
                                type='text'
                                value={inputdata.name}
                                onChange={inputHandler}
                            />
                            <label htmlFor="in">Username</label>
                        </span>
                        <span className="p-float-label mb-4 p-inputtext-lg block">
                            <InputText
                                id="in"
                                name='email'
                                type='text'
                                value={inputdata.email}
                                onChange={inputHandler}
                            />
                            <label htmlFor="in">Email</label>
                        </span>
                        <Link to="/bar" className='no-underline ml-7'>
                            <Button type='submit' label="Submit" onClick={submit} />
                        </Link>
                    </form>
                </Card>
            </div>
        </>
    )
}
export default Form;