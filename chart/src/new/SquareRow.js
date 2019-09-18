import React from 'react';
import './Chart.css';
import Square from './Square';
import {connect} from 'react-redux';

class SquareRow extends React.Component{
	render(){
		const rows=[];
		for(let i=0;i<this.props.numCol;i++){
			rows.push(
				(<Square key={i} width={this.props.squareWidth} color={this.props.colors[i]}></Square>)
			)
		}
		return(
			<div className="square-row" style={{width:this.props.width,height:this.props.height}}>
				{rows}
			</div>
		)
	}
}


const mapStateToProps=(state,ownProps)=>{ 
	
	const width=ownProps.width==undefined?"100%":ownProps.width;
	const height=ownProps.height==undefined?"100%":ownProps.height;
	const numCol=ownProps.numCol==undefined?10:ownProps.numCol;
	
	return {
		numCol:numCol,
		width:width,
		height:height,
		squareWidth:1/ownProps.numCol*100+"%",
		colors:ownProps.colors
	};
}

SquareRow=connect(mapStateToProps)(SquareRow);
export default SquareRow;