import React from 'react'
import ReactDOM from 'react-dom'
import { ticktick, username, password } from './secrets'

export default class Content extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: undefined
        }
        
    }

    async componentWillMount() {
        this.getTickTickData();
    }

    async getTickTickData() {

        await ticktick.login({
            email: {
                username: username,
                password: password,
            },
        });

        var d = new Date();

        console.log(d.getDay() + "." + d.getMonth)

        ticktick.getListByName("J").then(res => res.getTodoTasks().then(res2 => {

        }))
    }

    render() {
        return <div className='message-box'>
            <button onClick={this.getTickTickData()}> Load Habits</button>
            Hello {this.props.name}
        </div>
    }
}