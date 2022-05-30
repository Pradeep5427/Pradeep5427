import React from 'react';
const Wrapper = NewComponent => {
    class Wrapper extends React.Component {
        constructor(props){
            super(props)
            this.state = {
                count: 0,
                color:"black"
            }
        }
        CountIncrement = () => {
        this.state.count++;
        this.setState({count: this.state.count,background:'red'});
        
    }
        render () {
            return (
                <NewComponent
                    count={this.state.count}
                    CountIncrement={this.CountIncrement}
                    color
                />
            )
        }
    }
    return Wrapper;
}
export default Wrapper;