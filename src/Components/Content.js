import React from 'react'
import ReactDOM from 'react-dom'


class Content extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            username: undefined 
        }

    }

    getTickTickData() {
        const ticktick = require('ticktick-wrapper');

    }

    render() {
        return <div className='message-box'>
            Hello {this.props.name}
        </div>
    }
}