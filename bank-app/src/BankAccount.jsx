import React, {Component} from 'react';

class BankAccount extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h2>Welcome {this.props.customerName}</h2>
                <h2>Your account balance is ${this.props.balance}</h2>
            </div>   
        );
    }
}

export default BankAccount;