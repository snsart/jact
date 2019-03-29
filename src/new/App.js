import React, { Component } from 'react';
import './Chart.css';
import MainTable from './MainTable';
import Portrait from './Portrait';
import Transverse from './Transverse';
import {connect} from 'react-redux';
import Chart from './Chart';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { changeColor,changeColor2 } from './index-redux';

let store=createStore(changeColor);
let store2=createStore(changeColor2);

class App extends Component {
	
	render() {
	    return (
	    	<div>
		      	<Provider store={store}>
					<Chart/>
				</Provider>
				<Provider store={store2}>
					<Chart/>
				</Provider>
			</div>
	    );
	}
}

/*const mapStateToProps=(state)=>{
	const widthT=state.width;
	const heightT=state.height;
	const tableHeight=(state.height-state.bottomSpace)*state.tableScaleY;
	
	return {
		title:state.title,
		width:widthT,
		height:heightT,
		portMarginTop:(heightT-state.bottomSpace-tableHeight)-(tableHeight/state.numRow/2)+"px",
		transMarginLeft:state.leftSpace,
		fillNum:state.data_num,
		numRow:state.numRow,
		tip:state.selected
	};
}

Chart=connect(mapStateToProps)(Chart);*/

export default App;
