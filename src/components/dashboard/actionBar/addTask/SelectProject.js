import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import CreateProject from './CreateProject'

function SelectProject({projectHandler, project, allProjectList}) {
    const [ active, setActive] = useState(false);
    
    const projectSelectHandler = (e) => {
        projectHandler(e)
        toggleProjectSelect(e)
    }
    const toggleProjectSelect = (e) => {
        e.preventDefault()
        setActive(!active)
    }
    console.log(allProjectList)
    
    const option = allProjectList.map((projectList, index) =>  {
        let selectOption = '';
        console.log(index);
        if(index == 0) {
            selectOption = <option key={index} value={projectList.projectName}>{projectList.projectName}</option>
            console.log(selectOption)
        }
        else {
            selectOption = <option key={index} value={projectList.projectName}>{projectList.projectName}</option>
            console.log(selectOption)
        }
        return selectOption
    })

    // const option = allProjectList.map((projectList, index) => (
    //     <option key={index} value={projectList.projectName}>{projectList.projectName}</option>
    // ))

    return (
        <>
            <div className="action select-project" tabIndex="0">
                <div className="project-select" tabIndex="-1" onClick={toggleProjectSelect}><FontAwesomeIcon icon={faFolder} /> {project}</div>
                {
                    active &&  
                    <div className="project-select-window">
                        <div className="project-overlay" onClick={toggleProjectSelect}></div>
                        <div className="project-select-window-inner">
                            <div className="select">
                                <select name="project" value={project} onChange={projectSelectHandler}>
                                    <option value="">Select Project</option>
                                    {option}
                                    {/* <option value="arm">Arm</option>
                                    <option value="tech">Tech</option> */}
                                </select>
                                <label><FontAwesomeIcon icon={faFolder} /></label>
                            </div>
                            <CreateProject toggleProjectSelect={toggleProjectSelect} projectSelectHandler={projectSelectHandler} />
                        </div>
                    </div>      
                }
            </div>
        </>
    )
}

export default SelectProject
