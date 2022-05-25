import React, { useState } from 'react'
import { useAuth } from '../../../contexts/AuthContexts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faFileAlt, faFileContract, faFolder, faUserTie, faUsers, faUserCog, faHandsHelping, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { db } from "../../../firebase"

function Sidebar() {

    const [userName, setUserName] = useState("")
    const { currentUser, logout } = useAuth()

    const ref = db.collection("users");
    
    ref.get().then((snapshot) => {
        snapshot.docs.forEach((doc) => {
            if (doc.id == currentUser.uid) {
                // console.log(doc.id);
                // console.log(doc.data().uName);
                setUserName(doc.data().uName);
            }
        });
    });


    return (
        <>
            <div className="sidebar">
                <div className="sidebar-inner">
                    <ul className="logo">
                        <li><span>Toggl</span><FontAwesomeIcon icon={faBell} /></li>
                    </ul>
                    <div className="common-menu reports mt-4">
                        <p className="sub-heading">Analyze</p>
                        <ul className="list-menu">
                            <li><a href="#!"><FontAwesomeIcon icon={faFileAlt} /><span>Reports</span></a></li>
                            <li><a href="#!"><FontAwesomeIcon icon={faFileContract} /><span>Insights</span></a></li>
                        </ul>
                    </div>
                    <div className="common-menu manage mt-4">
                        <p className="sub-heading">Manage</p>
                        <ul className="list-menu">
                            <li><a href="#!"><FontAwesomeIcon icon={faFolder} /><span>Projects</span></a></li>
                            <li><a href="#!"><FontAwesomeIcon icon={faUserTie} /><span>Clients</span></a></li>
                            <li><a href="#!"><FontAwesomeIcon icon={faUsers} /><span>Teams</span></a></li>
                            <li><a href="#!"><FontAwesomeIcon icon={faUserCog} /><span>Settings</span></a></li>
                            <li><a href="#!"><FontAwesomeIcon icon={faHandsHelping} /><span>Helps</span></a></li>
                        </ul>
                    </div>
                    <div className="common-menu user-menu mt-4">
                        <p className="sub-heading">Workspace</p>
                        <ul className="list-menu">
                            <li><a href="#!"><span><span>{userName}</span><span>{currentUser.email}</span></span><FontAwesomeIcon icon={faUserCircle} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
