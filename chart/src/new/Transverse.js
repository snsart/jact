import React from 'react';
import './Chart.css';
import {connect} from 'react-redux';

function handleClick(i,fillNum,tip,dispatch){
	let j=tip=="t1"?0:1;
	let col=tip=="t1"?i-1:i;
	let index=(i-2)/3;
	showData("show",fillNum[index][j],col,dispatch);
}

function showData(type,fillNum,i,dispatch){
	const totalNum=14;
	let row=totalNum-fillNum;
	let col=i;
	(function callback(){
		if(row==totalNum-fillNum){
			dispatch({type:"moveStart"});
		}
		if(row==totalNum-1){
			dispatch({type:"moveEnd"});
		}
		if(row<totalNum-1){
			setTimeout(callback,50);
		}
		dispatch({type:type,col:col,row:row});
		row++;
	})()
}

class Transverse extends React.Component{
	render(){
		const lis=[];
		for(let i=0;i<this.props.numCol;i++){
			
			lis.push(
				(<li className="Transverse-li filldata" key={i} style={{width:this.props.liWidth}}>
					{this.props.datas[i]}
				</li>)
			)
			
		}
		return(
			<div style={{width:this.props.contWidth,height:this.props.contHeight}}>
				{lis}
			</div>
		)
	}
}

const mapStateToProps=(state)=>{
  	
  	const numCol=state.data_x.length;
  	const contWidth=(state.width-state.leftSpace)*state.tableScaleX;
  	const contHeight=state.bottomSpace;
  	
	return {
		liWidth:1/numCol*100+"%",
		contWidth:contWidth+"px",
		contHeight:contHeight+"px",
		numCol:numCol,
		datas:state.data_x,
	};
}

const mapDispatchToProps=(dispatch,ownProps)=>{
	return {
		onClick:(i)=> {
		   	handleClick(i,ownProps.fillNum,ownProps.tip,dispatch);
		}
	}
}

Transverse=connect(mapStateToProps,mapDispatchToProps)(Transverse);

export default Transverse;