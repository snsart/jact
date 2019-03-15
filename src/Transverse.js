import React from 'react';
import './App.css';
import {connect} from 'react-redux';

function handleClick(i,fillNum,numRow,dispatch){	
	switch(i){
		case 1:
			showData("type_1",fillNum[0],numRow,dispatch);
			break;
		case 3:
			showData("type_2",fillNum[1],numRow,dispatch);
			break;
		case 5:
			showData("type_3",fillNum[2],numRow,dispatch);
			break;
		case 7:
			showData("type_4",fillNum[3],numRow,dispatch);
			break;
		default:
			return;
	}
}

function showData(type,fillNum,numRow,dispatch){
	let row=numRow-fillNum;
	(function callback(){
		if(row<numRow-1){
			setTimeout(callback,100);
		}
		dispatch({type:type,row:row});
		row++;
	})()
}

class Transverse extends React.Component{
	render(){
		const lis=[];
		for(let i=0;i<this.props.numCol;i++){
			if(i%2===0){
				lis.push(
					(<li className="Transverse-li" key={i} style={{height:this.props.height,width:this.props.width}}></li>)
				)
			}else{
				lis.push(
					(<li className="Transverse-li" key={i} style={{height:this.props.height,width:this.props.width}} onClick={()=>this.props.onClick(i)}>
						<img className="Transverse-img" src={this.props.imgs[(i-1)/2]} alt="图标"/>
					</li>)
				)
			}
		}
		return(
			<div style={{marginLeft:this.props.marginleft}}>
				{lis}
			</div>
		)
	}
}

const mapStateToProps=(state)=>{
	
  	const frameW=state.width;
  	const numCol=state.numCol;	
  	const w=frameW/(numCol+1);
  	
	return {
		height:w,
		width:w,
		numCol:numCol,
		imgs:state.data_x,
		marginleft:w/2 
	};
}

const mapDispatchToProps=(dispatch,ownProps)=>{
	return {
		onClick:(i)=> {
		   	handleClick(i,ownProps.fillNum,ownProps.numRow,dispatch);
		}
	}
}

Transverse=connect(mapStateToProps,mapDispatchToProps)(Transverse);

export default Transverse;