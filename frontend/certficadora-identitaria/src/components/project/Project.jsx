import { useState } from 'react';
import "./project.css";

import Logo_Admin from '../../assets/Marca_Bons_fluidos1.svg';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

const Project = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertVariant, setAlertVariant] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();

        if (user.trim() === '') {
            setAlertMessage('O campo Username não pode estar vazio.');
            setAlertVariant('danger');
            return;
        }
    
        if (user.length < 5) {
            setAlertMessage('O Username deve ter pelo menos 5 caracteres.');
            setAlertVariant('danger');
            return;
        }
    
        if (password.trim() === '') {
            setAlertMessage('O campo Senha não pode estar vazio.');
            setAlertVariant('danger');
            return;
        }
    
        if (password.length < 6) {
            setAlertMessage('A Senha deve ter pelo menos 6 caracteres.');
            setAlertVariant('danger');
            return;
        }
    
        const hasNumber = /\d/;
        const hasLetter = /[a-zA-Z]/;
    
        if (!hasNumber.test(password) || !hasLetter.test(password)) {
            setAlertMessage('A Senha deve conter pelo menos uma letra e um número.');
            setAlertVariant('danger');
            return;
        }

    };

    return (
        <div className='background'>
            <div>
                <img src={Logo_Admin} alt="" className='home_logo'/>
            </div> 
            <div>
                <Form className='Login_container' onSubmit={handleSubmit}>
                    {alertMessage && (
                        <Alert variant={alertVariant} onClose={() => setAlertMessage(null)} dismissible>
                        {alertMessage}
                    </Alert>
                    )}
                    <Form.Group className="mb-3" controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Username"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Project