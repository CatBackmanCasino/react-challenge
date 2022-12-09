import React, { Component } from "react";
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends Component {

    constructor(props) {
        super(props);

        this.state = {
            message: "Hello Guest!",
            buttonText: "Log In"
        }
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            return {
                message: prevState.message === "Hello Guest!" ? "Hello User!" : "Hello Guest!",
                buttonText: prevState.buttonText === "Log In" ? "Log Out" : "Log In",
            }
        })
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                    <span>{this.state.message}</span>
                    <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                </div>
            </div>
        )
    }
}

export default NavBarSimple

