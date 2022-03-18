import React from "react";

class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"AJ",
            age:25,
        }

        this.handleIncreaseAge = () => {
            this.setState({
                ...this.state,
                age: this.state.age + 1,
            })
        }

        this.handleDecreaseAge = () => {
            this.setState({
                ...this.state,
                age: this.state.age - 1,
            })
        } 
    }

    render() {
    return <div>
        <h2>My name is {this.state.name} and i am {this.state.age}</h2>
        <button onClick={() => {this.handleIncreaseAge()}}>increase age</button>
        <br/>
        <button onClick={() => {this.handleDecreaseAge()}}>decrease age</button>
    </div>
    };
}

export default Person;