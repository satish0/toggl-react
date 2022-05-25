import React, { useRef, useState } from "react"
import "./index.css"
import { Form, Button, Alert } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useAuth, currentUser } from "../../contexts/AuthContexts"

function Forgetpassword() {
    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [ error, setError ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ loading, setLoading ] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault()

        try{
            setMessage('')
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        } catch {
            setError("Failed to reset password");
        }
        setLoading(false);
    }

    return (
        <div className="login">
            <div className="login-inner">
                <div className="login-box">
                    <h1>Password Reset</h1>
                    <p>Log in to your account</p>
                    { error && <Alert variant="danger">{error}</Alert>}
                    { message && <Alert variant="success">{message}</Alert>}
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
                                <Form.Control type="email" placeholder="Username" ref={emailRef} required />
                                <div className="invalid-tooltip">
                                    Please choose a unique and valid username.
                                </div>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <button disabled={loading} className="btn btn-primary" type="submit">
                                Reset Password
                            </button>
                            <Link to="/login" className="btn btn-secondary">Login</Link>
                        </div>
                    </Form>
                </div>
                <div className="signup">
                    <h2>Sign Up</h2>
                    <p>
                        Need an account?
                    </p>
                    <Link to="/signup" className="btn btn-primary">Register Now!</Link>
                </div>
            </div>
        </div>
    );
}

export default Forgetpassword;
