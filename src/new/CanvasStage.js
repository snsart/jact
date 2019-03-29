import React from 'react';
import './Chart.css';
import {connect} from 'react-redux';

class CanvasStage extends React.Component{
	
	render(){
		return(
			<canvas id={this.props.canvasId} className="canvas" width={this.props.width} height={this.props.height} style={{marginTop:this.props.tableMarginTop}}></canvas>
		)
	}
}

const mapStateToProps=(state,ownProps)=>{
	const totalWidth=state.width;
	const totalHeight=state.height;
	const width=(totalWidth-state.leftSpace)*state.tableScaleX;
	const height=(totalHeight-state.bottomSpace)*state.tableScaleY;
	
	return {
		canvasId:state.canvasId,
		type:"fillColor",
		width:width+"px",
		height:height+"px",
		numCol:state.fillCol,
		numRow:state.fillRow,
		tableMarginTop:totalHeight-height-state.bottomSpace+"px",
		colors:state.colors
	};
}


CanvasStage=connect(mapStateToProps)(CanvasStage);

export {CanvasStage}