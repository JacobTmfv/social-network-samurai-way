import React from 'react';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activateMode = () => {
        this.setState({editMode: true})
    }
    deactivateMode = () =>{
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) =>{
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateMode} value={this.state.status}/>
                    </div>
                    : <div>
                        <span onDoubleClick={this.activateMode} >{this.props.status}</span>
                    </div>}


            </div>
        )
    }
}

export default ProfileStatus;