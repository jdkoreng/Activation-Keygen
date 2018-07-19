import React, { Component } from 'react';

class ActivationFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activationCode: '',
            email: '',
            firstName: '',
            lastName: '',
        };

        this.handleActivationCodeChange = this.handleActivationCodeChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleActivationCodeChange(event) {
        this.setState({activationCode: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleFirstNameChange(event) {
        this.setState({firstName: event.target.value});
    }

    handleLastNameChange(event) {
        this.setState({lastName: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div className ="col-md-12 mid-col text-center">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Activation Code"
                        value={this.state.activationCode}
                        onChange={this.handleActivationCodeChange}
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                    />
                    <input
                        type="text"
                        placeholder="First Name"
                        value={this.state.firstName}
                        onChange={this.handleFirstNameChange}
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={this.state.lastName}
                        onChange={this.handleLastNameChange}
                    />
                    <input
                        for="location-search"
                        type="submit"
                        value="Submit"
                    />
                </form>
            </div>
        );
    }
}

export default ActivationFormComponent;