import React from 'react';
import './App.css';
import Square from './Square';
import {connect} from 'react-redux';

class SquareRow extends React.Component{
	render(){
		const rows=[];
		for(let i=0;i<this.props.numCol;i++){
			rows.push(
				(<Square key={i} color={this.props.colors[i]} >
					
				</Square>)
			)
		}
		return(
			<div className="square-row" >
				{rows}
			</div>
		)
	}
}


const mapStateToProps=(state,ownProps)=>{  	
	return {
		numCol:state.numCol,
		colors:ownProps.colors
	};
}

SquareRow=connect(mapStateToProps)(SquareRow);
export default SquareRow;