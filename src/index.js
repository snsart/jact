import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import  a1 from './imgs/a1.png';
import  a2 from './imgs/a2.png';
import  a3 from './imgs/a3.png';
import  a4 from './imgs/a4.png';

import { createStore } from 'redux';

function State(){
	this.numRow=12;
	this.numCol=9;
	this.data_x=[a1,a2,a3,a4];
	this.data_y=[10,20,30,40,50,60,70,80,90,100,110,120,130];
	this.data_num=[4,11,7,5];
	this.colors=createArray(this.numRow,this.numCol);
	this.width=800;
	this.height=500;
}

function changeColor(state=new State(),action){
	switch(action.type){
		case "type_1":
			state.colors[action.row][1]=1;
			return state;
		case "type_2":
			state.colors[action.row][3]=2;
			return state;
		case "type_3":
			state.colors[action.row][5]=3;
			return state;
		case "type_4":
			state.colors[action.row][7]=4;
			return state;
		default:
			return state;
	}
}

function createArray(row,col){
	let arr=[];
	for(let i=0;i<row;i++){
		let innerArr=[];
		for(let j=0;j<col;j++){
			innerArr.push(0);
		}
		arr.push(innerArr);
	}
	return arr;
}

let store=createStore(changeColor);

function render(){
	ReactDOM.render(<App numRow={12} numCol={9}  store={store}/>, document.getElementById('root'));
}
render();

store.subscribe(function(){
	render();
})
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
