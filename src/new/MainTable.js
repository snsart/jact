import React from 'react';
import './Chart.css';
import {connect} from 'react-redux';
import {FillTable,BackTable} from './Table';
import {CanvasStage} from "./CanvasStage";
import Tips from './Tips';
import Update from './Update'


class MainTable extends React.Component{
	render(){
		return(
			<div className="contRight" style={{width:this.props.width,height:this.props.height,marginLeft:this.props.marginLeft}}>
				<div className="arrow arr-y"></div>
				<div className="arrow arr-x"></div>
				<div className="tips-y">{this.props.tipsY}</div>
				<div className="tips-x">{this.props.tipsX}</div>
				<div className="tipsWrap1"><Tips type={"drawCanvas"} show={"right"} clickable={this.props.clickable}/></div>
				<div className="tipsWrap2"><Tips type={"drawCanvas"} show={"wrong"} clickable={this.props.clickable}/></div>
				<div className="updateWrap"><Update></Update></div>
				<FillTable/>
				<BackTable/>
				<CanvasStage/>
			</div>	
		)
	}
}

const mapStateToProps=(state,ownProps)=>{
	const totalWidth=state.width;
	const totalHeight=state.height;
	const width=totalWidth-state.leftSpace;
	const height=totalHeight-state.bottomSpace;
	
  	const numRow=state.numRow;
	return {
		tipsY:state.tipsY,
		tipsX:state.tipsX,
		width:width+"px",
		height:height+"px",
		marginLeft:state.leftSpace+"px",
		tableMarginTop:totalHeight-state.tableHeight-state.bottomSpace+5+"px",
		numRow:numRow,
		colors:state.colors,
		clickable:!state.moving
	};
}

MainTable=connect(mapStateToProps)(MainTable);
export default MainTable;