import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faPlayCircle, faStopCircle } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'


class AddTask extends Component {
    constructor(props){
        super(props)
        this.state = {
            taskName: '',
            project: '',
            timeCapture: '',
            startTimer: false,
            timer: false
        }
    }

    toggleButton = (e) => {
        console.log(e + "toggle")
        e.preventDefault();
        if (this.state.timer) {
            this.setState({timer: !this.state.timer})

        }
        else {
            this.setState({timer: !this.state.timer})
        }
    }

    addTask = (e) => {
        e.preventDefault()
        console.log(e.target.value + "addtask");
        this.setState({timer: !this.state.timer})
    }
    render() {

        return (
            <>
                <div className="cp add-task">
                    <form onSubmit={this.addTask}>
                        <input type="text" placeholder="What are you working on?" />
                        <div className="action-option">
                            <div className="action">
                                <select>
                                    <option>Ashoka</option>
                                    <option>krishna</option>
                                    <option>satish</option>
                                </select>
                                <label><FontAwesomeIcon icon={faFolder} /></label>
                            </div>
                            <div className="action timer">
                                <input type="text" placeholder="0:00:00" />
                            </div>
                            <div className="action play">
                                {this.state.timer ?
                                    (<button className="stop" type="submit"><FontAwesomeIcon icon={faStopCircle} /></button>)
                                    : (<button className="play" onClick={this.toggleButton}><FontAwesomeIcon icon={faPlayCircle} /></button>)}
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        AddTask: (task) => dispatch(AddTask(task))
    }
}


export default connect(null, mapDispatchToProps)(AddTask)
