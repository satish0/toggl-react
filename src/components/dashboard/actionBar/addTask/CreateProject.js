import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { addProject } from '../../../../store/actions/taskActions'
import { useDispatch } from 'react-redux'
import shortid from 'shortid'

function CreateProject({toggleProjectSelect, projectSelectHandler}) {
    const [prinput, setPrinput] = useState('')
    const [active, setActive] = useState(false)
    const dispatch = useDispatch()


    const handleChangeProject = (e) => {
        e.preventDefault()
        setPrinput(e.target.value)
        console.log(e.target.value)
    }
    const createProject = (e) => {
        e.preventDefault()
        toggleProjectSelect(e)
        console.log("done")

        const projectPayload = {
            id: shortid.generate(),
            projectName: prinput
        }
        console.log("done")
        dispatch(addProject(projectPayload))
        console.log(projectPayload.projectName)
    }

    return (
        <>
            <div className="create-project">
                {!active ?
                <button className="btn btn-success" onClick={() => setActive(!active)}><FontAwesomeIcon icon={faFolder} /> Create Project?</button> :
                <div className="create-project-child">
                    <input className="form-control" onChange={handleChangeProject} type="text" value={prinput} />
                    <button className="btn btn-success" type="submit" onClick={createProject}>Create</button>
                </div>}
            </div>
        </>
    )
}

export default CreateProject
