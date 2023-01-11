import { Card } from 'primereact/card';
import { useEffect, useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import Bardata from './Bardata';
// updated code 
const Home = () => {
    const [data, updateData] = useState([]);
    const [flag, updateflag] = useState(false);
    const [input, updatdeInput] = useState({ name: "", email: "" });

    const inputHandler = (event) => {
        updatdeInput({ ...input, [event.target.name]: event.target.value })
    }

    const submit = () => {
        if (!input.name || !input.email) {
            alert("all field are maindatery")
        }
        else {
            alert("submitted")
            updatdeInput({ name: "", email: "" })
            updateflag(true)
        }
    }

    useEffect(() => {
        fetch("https://v6.exchangerate-api.com/v6/4eb8268eef5c2c5d27367c0e/latest/USD")
            .then(response => response.json())
            .then(Apidata => updateData(Apidata.conversion_rates))
    }, []);
    return (
        <>
            <div className='grid'>
                <div className='col-12 text-center'>
                    <h1 className=' text-red-400 text-5xl mt-2'>Welcome to Home Page</h1>
                </div>
            </div>
            <div className="grid mt-5" >
                <div className="col-6 text-center flex justify-content-center">
                    <Card className='bg-black-alpha-20 shadow-5 flex justify-content-center card mt-8  '>
                        <form>
                            <span className="p-float-label mb-3">
                                <InputText
                                    id="in"
                                    name="name"
                                    value={input.name}
                                    onChange={inputHandler}
                                />
                                <label htmlFor="in">Username</label>
                            </span>

                            <span className="p-float-label mb-3">
                                <InputText
                                    id="in"
                                    name="email"
                                    value={input.email}
                                    onChange={inputHandler}
                                />
                                <label htmlFor="in">Email</label>
                            </span>
                        </form>
                        <Button label="Submit" className='p-button-sucess p-button-sm' onClick={submit} />
                    </Card>
                </div>
                <div className="col-6">
                    <Bardata data={data} flag={flag} />
                </div>

            </div>

        </>
    )

}

export default Home;