import React, { Component } from 'react';
import './Chart.css';
import MainTable from './MainTable';
import Portrait from './Portrait';
import Transverse from './Transverse';
import {connect} from 'react-redux';



class Chart extends Component {
	
	render() {
	    return (
	      	<div className="frame" style={{width:this.props.width,height:this.props.height}}>
	      		<h1 className="title">{this.props.title}</h1>
	      		<div className="innerFrame">
	      			<div className="portraitWrap" style={{marginTop:this.props.portMarginTop}}>
	      				<Portrait/>
	      			</div>
		        	<MainTable/>
		        	<div className="TransWrap" style={{marginLeft:this.props.transMarginLeft}}>
		   	  	   		<Transverse fillNum={this.props.fillNum} tip={this.props.tip}/>
		        	</div>
		       	</div>
	        </div>
	    );
	}
}

const mapStateToProps=(state)=>{
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

Chart=connect(mapStateToProps)(Chart);

export default Chart;
