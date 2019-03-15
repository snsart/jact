import React from 'react';
import './App.css';
import {connect} from 'react-redux';

class Square extends React.Component{
	render(){
		const {height,width,color}=this.props;
		return(
			<div className="square" style={{height:height,width:width,background:color}}></div>
		)
	}
}

const mapStateToProps=(state,ownProps)=>{
	const colors=["#ffffff","#D81803","#F7740D","#75D74D","#10A8FF"];
	
	const frameH=state.height;
  	const frameW=state.width;
  	const numRow=state.numRow;
  	const numCol=state.numCol;
  	
  	const w=frameW/(numCol+1);
  	const h=(2*frameH-2*w)/(1+2*numRow);
	return {
		height:h,
		width:w,
		color:colors[ownProps.color],
		colorIndex:ownProps.color
	};
}

Square=connect(mapStateToProps)(Square);

export default Square;