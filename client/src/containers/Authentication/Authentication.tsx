import React, { Component } from 'react';
import { Input } from '../../components/UI/Input/Input'
import { Button } from '../../components/UI/Button/Button'
import classes from './Authentication.module.css'

type AuthenticationState = {
    isAuthenticated: boolean,
    isSignup: boolean
}

export class Authentication extends Component<{}, AuthenticationState> {

    componentWillMount() {
        this.setState({
            isAuthenticated: false,
            isSignup: false
        });
    }

    submit = () => {
        alert('Submitted');
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return { isSignup: !prevState.isSignup }
        })
    }

    render() {
        return (
            <div className={classes.Authentication}>
                <Input placeholder="Username"> </Input>
                <Input placeholder="Password"> </Input>
                <Button
                    type="Success"
                    disabled={false}
                    clicked={this.submit}>Submit</Button>
                <Button
                    type="Danger"
                    disabled={false}
                    clicked={this.switchAuthModeHandler}>{this.state.isSignup ? 'Switch To Signin' : 'Switch To Signup'}</Button>
            </div>
        );
    }
}
