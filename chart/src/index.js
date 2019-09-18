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
import { Provider } from 'react-redux';

function State(){
	this.numRow=12;
	this.numCol=9;
	this.data_x=[a1,a2,a3,a4];
	this.data_y=[0,1,2,3,4,5,6,7,8,9,10,11,12];
	this.data_num=[4,11,7,5];
	this.colors=createArray(this.numRow,this.numCol);
	this.width=800;
	this.height=500;
}

//reducer
function changeColor(state=new State(),action){
	let newColors=copy(state.colors);
	let newState;
	switch(action.type){
		case "type_1":
			newColors[action.row][1]=1;
			newState={...state,colors:newColors};
			return newState;
		case "type_2":
			newColors[action.row][3]=2;
			newState={...state,colors:newColors};
			return newState;
		case "type_3":
			newColors[action.row][5]=3;
			newState={...state,colors:newColors};
			return newState;
		case "type_4":
			newColors[action.row][7]=1;
			newState={...state,colors:newColors};
			return newState;
		default:
			return state;
	}
}

//深拷贝二维数组
function copy(arr){
	let newArr=[];
	for(let i=0,len=arr.length;i<len;i++){
		let innerArr=[];
		for(let j=0;j<arr[i].length;j++){
			innerArr.push(arr[i][j]);
		}
		newArr.push(innerArr);
	}
	return newArr;
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


ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
