import React, { Component, useState } from 'react'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    render() {
        this.handleSubmit = this.handleSubmit.bind(this);
        return <></>
    }
}

export const A = () => {

    const [data, setdata] = useState({
        firstname: '',
        lastname: '',
        telnum: '',
        email: '',
        agree: false,
        contactType: 'Tel.',
        message: ''
    })

    const handleSubmit = 

    return <></>
}

export default Contact