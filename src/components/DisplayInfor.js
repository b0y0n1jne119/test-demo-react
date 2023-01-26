import React from 'react';
import './DisplayInfor.scss';
import screen from './../logo.svg';

class DisplayInfor extends React.Component {

    state = {
        isShowListUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render() {
        //destructuring array / object
        const { listUsers } = this.props; //object
        //props => viết tắt của properties
        return (
            <div className="display-infor-container">
                <img src={screen} />
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide list user:" : "Show list user:"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {listUsers.map((user, index) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"} >
                                    <div style={{ color: 'blue' }}>My name's is {user.name}</div>
                                    <div>My age's is {user.age}</div>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}

export default DisplayInfor;