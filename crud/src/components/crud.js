import React from 'react';
import './App.css';

class Crud extends React.Component{
    constructor(props){
        super(props);
        this.state={
         title:'React CRUD App',
         act:0,
         index:'',
         datas:[]
        }
    }
    componentDidMount(){
        this.refs.name.focus();
    }
     fsubmit = (e)=>{
        e.preventDefault();
        console.log('try');

        let datas = this.state.datas;
        let name = this.refs.name.value;
        let address = this.refs.address.value;


        if(this.state.act === 0){
            let data ={
                name,address
            }
            datas.push(data);
        }else{
            let index = this.state.index;
            datas[index].name=name;
            datas[index].address=address;
        }

        
        
        this.setState({
           datas:datas,
           act:0
        });

        this.refs.myForm.reset();
        this.refs.name.focus();
    }
    fRemove = (i) =>{
        let datas = this.state.datas;
        datas.splice(i,1);
        this.setState({
            datas:datas
        });
    }
    fEdit =(i) =>{
        let data = this.state.datas[i];
        this.refs.name.value = data.name;
        this.refs.address.value = data.address;

        this.setState({
            act:1 ,
            index:i
        });
        
        this.refs.name.focus();
    }

    render(){
        let data = this.state.datas;
        return(
            <div className="name">
            <h2>{this.state.title}</h2>
            <form  className="myForm">
            <input type="text" ref="name" placeholder="Your name" className="formField" />
            <input type="text" ref="address" placeholder="Your address" className="formField" />
            <button onClick={this.fsubmit} className="myButton">Submit</button>
            </form>
                  
            <pre>
                {data.map((data, i) =>
                <li key={i} className="myList">
                {i+1}.{data.name},{data.address}
                <button onClick={()=>this.fRemove(i)} className="myListButton" >Remove</button>
                <button onClick={()=>this.fEdit(i)} className="myListButton" >Edit</button>
                </li>
              )}
            </pre>
            </div>
        );
    }
}
export default Crud;