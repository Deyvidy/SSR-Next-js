import React, { useState } from 'react';

export default function Login ( { onChange } ) {
    const [ phoneNumber, setPhoneNumber ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ rememberMe, setRememberMe ] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        onChange({
            phoneNumber,
            password,
            rememberMe
        });
    };
 
    return (
        <main className="main-content">
            <div className="bg-white rounded shadow-7 w-400 mw-100 p-6" >
                <h5 className="mb-7">Sign into your account</h5>
                <form id="login" onSubmit={handleSubmit} >
                    <div className="form-group">
                        <input onChange={(e)=> setPhoneNumber(e.target.value)} 
                            value={phoneNumber}
                            type="text" className="form-control"
                            name="phone_number"
                            placeholder="eg. +34645136228" 
                        />
                    </div>

                    <div className="form-group">
                        <input onChange={(e)=> setPassword(e.target.value)} 
                            value={password}
                            type="password" className="form-control"
                            name="customer_pin"
                            placeholder="Enter your pin"
                        />
                    </div>

                    <div className="form-group flexbox py-3">
                        <div className="">
                            <input type="checkbox" 
                                value={rememberMe}
                                onChange={(e)=> setRememberMe(e.target.checked)} 
                                className="remember"
                            />
                            <label className="remember">Remember me</label>
                        </div>
                        <a className="text-muted small-2" href="/reset">Forgot password?</a>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-block btn-primary" 
                            type="submit">Login
                        </button>
                    </div>
                </form>

                <hr className="w-30"/>
                <p className="text-center text-muted small-2">
                    Don't have an account? <a href="/register">Register
                    here</a></p>

            </div>
        </main>
    )
}
