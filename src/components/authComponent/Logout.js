import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContexts'
import { Link, useHistory } from 'react-router-dom'

function Logout() {

    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")

        try {
            await logout()
            history.push("/login")
        } catch {
            setError("Failed to Logout")
        }
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h1>Dash Board</h1>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <h2><strong>Email: </strong> {currentUser.email}</h2>
                    <Link to="/updateprofile" className="btn btn-primary mt-2">Update Profile</Link>
                </Card.Body>
            </Card>
            <div className="col-12">
                <div className="w-100 mt-2">
                    <Button onClick={handleLogout} className="btn btn-danger">Log Out</Button>
                </div>
            </div>
        </>
    )
}

export default Logout
