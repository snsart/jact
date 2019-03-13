import React, { Component } from 'react';
import './App.css';

class Square extends React.Component{
	
	render(){
		const colors=["#ffffff","#D81803","#F7740D","#75D74D","#10A8FF"];
		const color=colors[this.props.color];
		
		return(
			<div className="square" style={{height:this.props.height,width:this.props.width,background:color}}></div>
		)
	}
}

class SquareRow extends React.Component{
	render(){
		const rows=[];
		for(let i=0;i<this.props.numCol;i++){
			rows.push(
				(<Square key={i} height={this.props.height} width={this.props.width} color={this.props.colors[i]} ></Square>)
			)
		}
		return(
			<div className="square-row" >
				{rows}
			</div>
		)
	}
}

class Table extends React.Component{
	render(){
		const tables=[];
		for(let i=0;i<this.props.numRow;i++){
			tables.push(
				(<SquareRow key={i} numCol={this.props.numCol} height={this.props.height} width={this.props.width} colors={this.props.colors[i]}></SquareRow>)
			)
		}
		return(
			<div style={{marginLeft:this.props.marginleft,marginTop:this.props.height/2}}>
				{tables}
			</div>
		)
	}
}

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


class App extends Component {

	
	handleClick(i){
		let store=this.props.store;
	  	let state=store.getState();
	  	
		let fillNum=state.data_num;
		let row=state.numRow;
		
		switch(i){
			case 1:
				(function aa(){
					if(row<state.numRow+fillNum[0]-1){
						setTimeout(aa,100);
					}
					store.dispatch({type:"type_1",row:row-fillNum[0]});
					row++;
				})()
				break;
			case 3:
				(function aa(){
					if(row<state.numRow+fillNum[1]-1){
						setTimeout(aa,100);
					}
					store.dispatch({type:"type_2",row:row-fillNum[1]});
					row++;
				})()
				break;
			case 5:
				(function aa(){
					if(row<state.numRow+fillNum[2]-1){
						setTimeout(aa,100);
					}
					store.dispatch({type:"type_3",row:row-fillNum[2]});
					row++;
				})()
				break;
			case 7:
				(function aa(){
					if(row<state.numRow+fillNum[3]-1){
						setTimeout(aa,100);
					}
					store.dispatch({type:"type_4",row:row-fillNum[3]});
					row++;
				})()
				break;
			default:
				return;
		}
	}
	
	render() {
	  	let store=this.props.store;
	  	let state=store.getState();
	  	
	  	const frameH=state.height;
	  	const frameW=state.width;
	  	const colors=state.colors;
	  	
	  	const numRow=state.numRow;
	  	const numCol=state.numCol;
	  	
	  	const w=frameW/(numCol+1);
	  	const h=(2*frameH-2*w)/(1+2*numRow);
	  	
	  	const imgs=state.data_x;
	    return (
		    <div className="App">
		      	<div className="frame" style={{width:frameW,height:frameH,padding:"10px"}}>
		        	<Portrait num={state.data_y} numRow={numRow} height={h} width={w/2}/>
		        	<Table marginleft={w/2} numCol={numCol} numRow={numRow} height={h} width={w} colors={colors}/>
		        	<Transverse height={w} width={w} numCol={numCol} imgs={imgs} marginleft={w/2} onClick={(i)=>this.handleClick(i)}/>
		        </div>
		    </div>
	    );
	}
}

export default App;
