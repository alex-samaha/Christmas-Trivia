import React, { Component } from 'react';
import { Form, Message } from 'semantic-ui-react';

class Quiz extends Component {
    constructor(props) {
        super(props)
        // Setup the state
        this.state = {
            answerOne: '',
            answerTwo: '',
            answerThree: '',
            errors: {questionOne: "", questionTwo: "", questionThree: ""},
            success: false
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
        let errorOne, errorTwo, errorThree = "";
        
        if(this.state.answerOne !== this.props.answerOne) {
            errorOne = "Incorrect response.";
        }

        if(this.state.answerTwo !== this.props.answerTwo) {
            errorTwo = "Incorrect response.";
        }
        if(this.state.answerThree !== this.props.answerThree) {
            errorThree = "Incorrect response.";
        }

        if(errorOne || errorTwo || errorThree) {
            this.setState({
                errors: {
                    questionOne: errorOne,
                    questionTwo: errorTwo,
                    questionThree: errorThree
                }
            });
        }

        else {
            this.setState({
                errors: {
                    questionOne: "",
                    questionTwo: "",
                    questionThree: ""
                },
                success: true
            });
        }

    }

    render() {
        const { errors, success } = this.state;

        return(
            <div>
                <h2>Trivia Questions</h2>
                <Form onSubmit={this.onSubmit}>
                    <Form.Input
                        fluid
                        value={this.state.answerOne}
                        name="answerOne"
                        id='form-subcomponent-shorthand-input'
                        label={this.props.questionOne}
                        placeholder='Answer...'
                        onChange={this.onChange}
                    />
                    {errors.questionOne && (
                    <Message negative>
                        <Message.Header>Incorrect Response</Message.Header>
                    </Message>
                    )}
                    <Form.Input
                        fluid
                        value={this.state.answerTwo}
                        name="answerTwo"
                        id='form-subcomponent-shorthand-input'
                        label={this.props.questionTwo}
                        placeholder='Answer...'
                        onChange={this.onChange}
                    />
                    {errors.questionTwo && (
                    <Message negative>
                        <Message.Header>Incorrect Response</Message.Header>
                    </Message>
                    )}
                    <Form.Input
                        fluid
                        value={this.state.answerThree}
                        name="answerThree"
                        id='form-subcomponent-shorthand-input'
                        label={this.props.questionThree}
                        placeholder='Answer...'
                        onChange={this.onChange}
                    />
                    {errors.questionThree && (
                    <Message negative>
                        <Message.Header>Incorrect Response</Message.Header>
                    </Message>
                    )}
                    <button type="submit" className="ui primary button fluid">Submit Answers</button>
                </Form>
                {success && (
                    <Message positive>
                        <Message.Header>Congratulations, you've successfully completed the quiz!</Message.Header>
                        <p>{this.props.successMessage}</p>
                    </Message>
                )}
            </div>
        )
    }

}

export default Quiz;