import React from 'react';
import './App.css';
import {connect} from 'react-redux';

class Portrait extends React.Component{
	
	render(){
		const lis=[];
		for(let i=this.props.numRow;i>=0;i--){
			lis.push(
				(<li className="portrait-li" key={i} style={{height:this.props.height,width:this.props.width,lineHeight:this.props.height+"px"}}>{this.props.num[i]}</li>)
			)
		}
		return(
			<div className="portrait">
				{lis}
			</div>
		)
	}
}

const mapStateToProps=(state)=>{
	
	const frameH=state.height;
  	const frameW=state.width;
  	const numRow=state.numRow;
  	const numCol=state.numCol;
  	
  	const w=frameW/(numCol+1);
  	const h=(2*frameH-2*w)/(1+2*numRow);
	return {
		height:h,
		width:w/2,
		num:state.data_y,
		numRow:numRow
	};
}

Portrait=connect(mapStateToProps)(Portrait);

export default Portrait;