import React from 'react';
import './Chart.css';
import {connect} from 'react-redux';



class Portrait extends React.Component{	
	render(){
		const lis=[];
		for(let i=this.props.numRow-1;i>=0;i--){
			lis.push(
				<li className="portrait-li" key={i} style={{height:this.props.liHeight,lineHeight:this.props.liHeight}}>{this.props.datas[i]}</li>
			)	
		}
		return(
			<div className="portrait" style={{height:this.props.contHeight,width:this.props.contWidth}}>
				{lis}
			</div>
		)
	}
}

const mapStateToProps=(state)=>{
	const numRow=state.data_y.length;
	const contWidth=state.leftSpace;
	const tableHeight=(state.height-state.bottomSpace)*state.tableScaleY;
	const contHeight=(tableHeight/state.numRow)*numRow;
 
	return {
		contWidth:contWidth+"px",
		contHeight:contHeight+"px",
		liHeight:contHeight/numRow+"px",
		datas:state.data_y,
		numRow:numRow
	};
}


Portrait=connect(mapStateToProps)(Portrait);

export default Portrait;