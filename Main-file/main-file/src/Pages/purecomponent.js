import React ,{PureComponent} from 'react';


export default class PureComponents extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            name : "PureComponent"
        };
    }

    change = () =>{
        this.setState({name:'PureComponent'});
    };

    render(){
        console.log("rendered");
        return(
            <div>
                <h2>This is {this.state.name} method</h2>
                <button onClick={this.change}>Pure</button>

            </div>
        )
    }
}