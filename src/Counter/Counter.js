import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterOutput from '../Components/CounterOutput/CounterOutput'
import CounterControl from '../Components/CounterControl/CounterControl'
import * as actionCreators from '../Store/actions/actions';

class counter extends Component {
  render(){
    const style = {
      border: '1px solid #eee',
      margin: '2%',
      fontSize: '19px',
      width: '20%',
      cursor: 'pointer',
      backgroundColor: 'salmon'
    }
    return (
      <div>
        <CounterOutput counterValue={this.props.ctr} />
        <CounterControl onClick={this.props.onIncrement}>Increment</CounterControl>
        <CounterControl onClick={this.props.onDecrement}>Decrement</CounterControl>
        <CounterControl onClick={this.props.onAdd}>Add:10</CounterControl>
        <CounterControl onClick={this.props.onSubtract}>Subtract:5</CounterControl>
        <hr />
        <button style={style} onClick={() => this.props.onShowResult(this.props.ctr)}>
          Show results
        </button>
        <ul>
          {this.props.res.map((results) => {
            return( 
              <li key={results.id} onClick={() => this.props.onDeleteItem(results.id)}>
                {results.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counterRoot.counter,
    res: state.resultRoot.results
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: ()=> dispatch(actionCreators.increment()),
    onDecrement: ()=> dispatch(actionCreators.decrement()),
    onAdd: ()=> dispatch(actionCreators.add(10)),
    onSubtract: ()=> dispatch(actionCreators.subtract(5)),
    onShowResult: (res)=> dispatch(actionCreators.storeResult(res)),
    onDeleteItem: (id)=> dispatch(actionCreators.deleteItem(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(counter);