import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import SquareRow from './SquareRow';

class Table extends React.Component{
	render(){
		const tables=[];
		for(let i=0;i<this.props.numRow;i++){
			tables.push(
				(<SquareRow key={i} colors={this.props.colors[i]}></SquareRow>)
			)
		}
		return(
			<div style={{marginLeft:this.props.marginLeft,marginTop:this.props.marginTop}}>
				{tables}
			</div>
		)
	}
}

const mapStateToProps=(state,ownProps)=>{
	const frameH=state.height;
  	const frameW=state.width;
  	const numRow=state.numRow;
  	const numCol=state.numCol;
  	
  	const w=frameW/(numCol+1);
  	const h=(2*frameH-2*w)/(1+2*numRow);
  	
	return {
		numRow:numRow,
		colors:state.colors,
		marginLeft:w/2,
		marginTop:h/2
	};
}

Table=connect(mapStateToProps)(Table);

export default Table;