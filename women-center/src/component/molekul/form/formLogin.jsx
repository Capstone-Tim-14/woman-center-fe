import React, { useState, Fragment } from 'react';
import { Form } from 'react-bootstrap';
import Buttonn from '../../atom/button/button';
import { HiOutlineMail, HiOutlineLockClosed } from 'react-icons/hi';
import { LuEyeOff, LuEye } from "react-icons/lu";
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import './formLogin.css';

const FormLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleLogin = (e) => {    
        e.preventDefault();

        
        const data = {
            email: email,
            password: password
        }
        axios.post('https://api-ferminacare.tech/api/v1/admin/auth', data)
            .then(result => {
                if (result.status === 200) {
                    localStorage.setItem('token', result.data.data.token);
                    console.log(result.data);
                    navigate('/tabel-konselor');   
                }
            })
            .catch(error => {
                console.error('Error during login:', error);   
            });
    };

    return (
      
        <div >
            <Form style={{ width: '375px', height: 'auto' }} className="mt-4" >
                <Form.Group controlId="formBasicEmail" className="mb-4">
                    <div className="input-with-icon">
                    <HiOutlineMail className="input-icon" />
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    </div>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <div className="password-input-wrapper input-with-icon">
                    <HiOutlineLockClosed className="input-icon" />
                        <Form.Control
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="password-toggle-icon" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <LuEyeOff /> : <LuEye />}
                        </div>
                    </div>
                    <p className='text-danger mt-1  text-end'>Recovery password</p>
                </Form.Group>
                <div className='d-flex justify-content-center mt-5'>
                    <Buttonn className="bg-button px-5" label="Login" onClick={handleLogin} ></Buttonn>
                </div>
            </Form>
        </div>
    );
};

export default FormLogin;
