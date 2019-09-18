import React from 'react';
import './Chart.css';
import {connect} from 'react-redux';
import SquareRow from './SquareRow';

class Table extends React.Component{
	render(){
		const tables=[];
		for(let i=0;i<this.props.numRow;i++){
			tables.push(
				(<SquareRow key={i} type={this.props.type} width={this.props.rowWidth} height={this.props.rowHeight} colors={this.props.colors[i]} numCol={this.props.numCol} ></SquareRow>)
			)
		}
		return(
			<div className="table" style={{marginTop:this.props.tableMarginTop,width:this.props.width,height:this.props.height}}>
				{tables}
			</div>
		)
	}
}

const mapStateToProps1=(state,ownProps)=>{
	const totalWidth=state.width;
	const totalHeight=state.height;
	
	const width=(totalWidth-state.leftSpace)*state.tableScaleX;
	const height=(totalHeight-state.bottomSpace)*state.tableScaleY;
	const numRow=state.fillRow;
	const numCol=state.fillCol;
	
	return {
		width:width+"px",
		height:height+"px",
		rowWidth:width+"px",
		rowHeight:height/numRow+"px",
		numCol:numCol,
		numRow:numRow,
		tableMarginTop:totalHeight-height-state.bottomSpace+"px",
		colors:state.colors
	};
}

const mapStateToProps2=(state,ownProps)=>{
	const totalWidth=state.width;
	const totalHeight=state.height;
	
	const width=(totalWidth-state.leftSpace)*state.tableScaleX;
	const height=(totalHeight-state.bottomSpace)*state.tableScaleY;
	const numRow=state.numRow;
	const numCol=state.numCol;
	
	return {
		width:width+"px",
		height:height+"px",
		rowWidth:width+"px",
		rowHeight:height/numRow+"px",
		numCol:numCol,
		numRow:numRow,
		tableMarginTop:totalHeight-height-state.bottomSpace+"px",
		colors:state.colors
	};
}

const FillTable=connect(mapStateToProps1)(Table);
const BackTable=connect(mapStateToProps2)(Table);
export {FillTable,BackTable}