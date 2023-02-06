import React from 'react';
import './DisplayInfor.scss';
// import screen from './../logo.svg';

class DisplayInfor extends React.Component {
    constructor(props) {
        console.log(">>> call constructor: 1")
        super(props);
        this.state = {
            isShowListUser: true
        }
    }

    componentDidMount() {
        console.log('>>> Caall me did mount')
        setTimeout(() => {
            document.title = 'Virgo'
        }, 3000);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('>>> call me update', this.props, prevProps)
        if (this.props.listUsers !== prevProps.listUsers) {
            if (this.props.listUsers.length === 5) {
                alert('You got 5 users')
            }
        }
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render() {
        console.log(">>> Call me render")
        //destructuring array / object
        const { listUsers } = this.props; //object
        //props => viết tắt của properties
        return (
            <div className="display-infor-container">
                {/* <img src={screen} /> */}
                <div>
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide list user:" : "Show list user:"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <>
                        {listUsers.map((user, index) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"} >
                                    <div style={{ color: 'blue' }}>My name's is {user.name}</div>
                                    <div>My age's is {user.age}</div>
                                    <hr />
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete </button>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                }
            </div>
        )
    }
}

export default DisplayInfor;