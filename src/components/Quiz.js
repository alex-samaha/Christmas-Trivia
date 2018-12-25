import React, { Component } from 'react';
import { Container, Form } from 'semantic-ui-react';

class Quiz extends Component {
    constructor(props) {
        super(props)
        // Setup the state
        this.state = {
            answerOne: '',
            answerTwo: '',
            answerThree: ''
        }

    }

    onChange = e => {
        // Update the proper state attribute when the input is changed
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = e => {
        e.preventDefault();

    }

    render() {
        return(
            <div>
                <h2>Jacques' Question Here</h2>
                <Form>
                    <Form.Input
                        fluid
                        id='form-subcomponent-shorthand-input'
                        label='Answer'
                        placeholder='....'
                    />
                </Form>
            </div>
        )
    }

}

export default Quiz;