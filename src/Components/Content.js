import React from 'react'
import ReactDOM from 'react-dom'
import { password, username } from './secrets'

export default class Content extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            username: undefined 
        }

    }

    async getTickTickData() {
        const ticktick = require('ticktick-wrapper');
        await ticktick.login({
            email: {
                username: username,
                password: password,
            },
        });
    }

    render() {
        return <div className='message-box'>
            Hello {this.props.name}
        </div>
    }
}