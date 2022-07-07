import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CounterActions from '../modules/counter';
import * as PostActions from '../modules/post';





class Main extends React.Component{
    componentDidMount(){
        const {number,PostActions} = this.props;
        PostActions.getPost(number)
    }

    componentDidUpdate(prevProps,prevState){
        const {PostActions} = this.props;
        if(this.props.number !== prevProps.number){
            PostActions.getPost(this.props.number)
        }
    }

    render(){
        const{CounterActions,number,post,loading,error} = this.props;

        return(
            <div>
                <h1>Number :{number} </h1>
                <button onClick={()=> CounterActions.increment()}>+</button>
                <button onClick={()=> CounterActions.decrement()}>-</button>
                {loading && <h2>Loading Message</h2>}
                {
                    error ? (
                        <h1>Error</h1>
                    ):(
                        <div>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    )
                }

            </div>
        );
    }
}



export default connect(
    (state) => ({
      number: state.counter,
      post: state.post.data
      
    }),
   ( dispatch) => ({
      CounterActions: bindActionCreators(CounterActions, dispatch),
      PostActions: bindActionCreators(PostActions, dispatch)
    })
  )(Main);