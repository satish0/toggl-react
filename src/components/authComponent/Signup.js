import React, { useRef, useState } from "react"
import "./index.css"
import { Form, Button, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { useAuth, currentUser } from "../../contexts/AuthContexts"

function Signup() {
    const emailRef = useRef();
    const uNameRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("Password do not match");
        }

        try{
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value, uNameRef.current.value);
            history.push("/")
        } catch {
            setError("Failed to create an account");
        }
        setLoading(false);
    }

    return (
        <div className="login">
            <div className="login-inner">
                <div className="login-box">
                    <h1>Sign up</h1>
                    <p>Sign up to your account</p>
                    { error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <div className="form-row">

                        <div className="col-md-12 mb-3">
                                <Form.Group className="input-group">
                                <div className="input-group-prepend">
                                    <span
                                    className="input-group-text"
                                    id="validationTooltipUsernamePrepend"
                                    >
                                    <i className="bi bi-person"></i>
                                    </span>
                                </div>
                                <Form.Control type="text" placeholder="User Name" ref={uNameRef} required />
                                <div className="invalid-tooltip">
                                    Please choose a unique user name.
                                </div>
                                </Form.Group>
                            </div>

                            <div className="col-md-12 mb-3">
                                <Form.Group className="input-group">
                                <div className="input-group-prepend">
                                    <span
                                    className="input-group-text"
                                    id="validationTooltipUsernamePrepend"
                                    >
                                    <i className="bi bi-envelope-fill"></i>
                                    </span>
                                </div>
                                <Form.Control type="email" placeholder="Email" ref={emailRef} required />
                                <div className="invalid-tooltip">
                                    Please choose a unique and valid username.
                                </div>
                                </Form.Group>
                            </div>
                            <div className="col-md-12 mb-3">
                                <Form.Group className="input-group">
                                <div className="input-group-prepend">
                                    <span
                                    className="input-group-text"
                                    id="validationTooltipUsernamePrepend"
                                    >
                                    <i className="bi bi-lock"></i>
                                    </span>
                                </div>
                                <Form.Control type="password" placeholder="Password" ref={passwordRef} required />
                                <div className="invalid-tooltip">
                                    Please choose a unique and valid Password.
                                </div>
                                </Form.Group>
                            </div>

                            
                            <div className="col-md-12 mb-3">
                                <Form.Group className="input-group">
                                <div className="input-group-prepend">
                                    <span
                                    className="input-group-text"
                                    id="validationTooltipUsernamePrepend"
                                    >
                                    <i className="bi bi-lock"></i>
                                    </span>
                                </div>
                                <Form.Control type="password" placeholder="Confirm Password" ref={passwordConfirmRef} required />
                                <div className="invalid-tooltip">
                                    Please choose a unique and valid Password.
                                </div>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <button disabled={loading} className="btn btn-primary" type="submit">
                                Sign up
                            </button>
                        </div>
                    </Form>
                </div>
                <div className="signup">
                    <h2>Login</h2>
                    <p>
                        I already have a account i want to login!
                    </p>
                    <Link to="/login" className="btn btn-primary">Login Now!</Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;
