import React, { Component } from 'react';
import './App.css';
import Table from './Table';
import Portrait from './Portrait';
import Transverse from './Transverse';
import {connect} from 'react-redux';

class App extends Component {
	
	render() {
	    return (
		    <div className="App">
		      	<div className="frame" style={{width:this.props.width,height:this.props.height,padding:"10px"}}>
		        	<Portrait/>
		        	<Table/>
		        	<Transverse  fillNum={this.props.fillNum} numRow={this.props.numRow}/>
		        </div>
		    </div>
	    );
	}
}

const mapStateToProps=(state)=>{
	return {
		height:state.height,
		width:state.width,
		fillNum:state.data_num,
		numRow:state.numRow
	};
}

App=connect(mapStateToProps)(App);

export default App;
