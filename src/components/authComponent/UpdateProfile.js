import React, { useRef, useState } from "react";
import "./index.css"
import { Form, Button, Alert } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { useAuth, currentUser } from "../../contexts/AuthContexts"

function UpdateProfile() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { currentUser, updateEmail, updatePassword } = useAuth();
    const [error, setError ] = useState('');
    const [ loading, setLoading ] = useState(false);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError("Password do not match");
        }

        const promises = []
        setLoading(true)
        setError('')

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push("/")
        }).catch(() => {
            setError("Failed to update account")            
        }).finally(() => {
            setLoading(false)            
        })

    }

    return (
        <div className="login">
            <div className="login-inner">
                <div className="login-box">
                    <h1>Update Profile</h1>
                    <p>Update your Profile</p>
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
                                <Form.Control type="email" placeholder="Username" ref={emailRef} required defaultValue={currentUser.email} />
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
                                <Form.Control type="password" placeholder="Leave black to keep the same" ref={passwordRef} />
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
                                <Form.Control type="password" placeholder="Leave black to keep the same" ref={passwordConfirmRef} />
                                <div className="invalid-tooltip">
                                    Please choose a unique and valid Password.
                                </div>
                                </Form.Group>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <button disabled={loading} className="btn btn-primary" type="submit">
                                Update
                            </button>
                        </div>
                    </Form>
                </div>
                <div className="signup">
                    <h2>DashBoard</h2>
                    <p>
                        Back to DashBoard? 
                    </p>
                    <Link to="/" className="btn btn-primary">DashBoard</Link>
                </div>
            </div>
        </div>
    );
}

export default UpdateProfile;
