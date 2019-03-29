function State(){
	this.canvasId="canvas1";
	this.moving=false;
	this.selected="t1";
	this.title="图表一";
	this.tipsY="";
	this.tipsX="";
	this.numRow=8;
	this.numCol=6;
	this.fillRow=8;
	this.fillCol=6;
	this.data_x=["第一天","第二天","第三天"];
	this.data_y=["0","1","2","3","4","5","6","7","8"];
	this.data_num=[[4,2,3],[4,3,6]];
	this.colors=createArray(this.fillRow,this.fillCol);
	this.width=900;
	this.height=600;
	this.leftSpace=50;
	this.bottomSpace=70;
	this.tableScaleX=0.9;
	this.tableScaleY=0.8;
	this.tips=["正确","错误"];
}

//reducer
function changeColor(state=new State(),action){
	let newColors=copy(state.colors);
	let newState,col,color;
	col=action.col;
	
	switch(action.type){
		case "show":
			newColors[action.row][col]=color;
			newState={...state,colors:newColors};
			return newState;
		case "drawCanvas":
			draw(state,action);
			return state;
		case "moveStart":
			newState={...state,moving:true}
			return newState;
		case "moveEnd":
			newState={...state,moving:false}
			return newState;
		case "update":
			updateHandler(state);
			return state;
		default:
			return state;
	}
}

function State2(){
	this.canvasId="canvas2";
	this.moving=false;
	this.selected="t1";
	this.title="图表二";
	this.tipsY="";
	this.tipsX="";
	this.numRow=10;
	this.numCol=8;
	this.fillRow=10;
	this.fillCol=8;
	this.data_x=["第一天","第二天","第三天","第四天"];
	this.data_y=["0","1","2","3","4","5","6","7","8","9","10"];
	this.data_num=[[4,2,3,8],[1,3,1,9]];
	this.colors=createArray(this.fillRow,this.fillCol);
	this.width=900;
	this.height=600;
	this.leftSpace=50;
	this.bottomSpace=70;
	this.tableScaleX=0.9;
	this.tableScaleY=0.8;
	this.tips=["正确","错误"];
}

//reducer
function changeColor2(state=new State2(),action){
	let newColors=copy(state.colors);
	let newState,col,color;
	
	switch(action.type){
		case "show":
			newColors[action.row][action.col]=color;
			newState={...state,colors:newColors};
			return newState;
		case "drawCanvas":
			draw(state,action);
			return state;
		case "moveStart":
			newState={...state,moving:true}
			return newState;
		case "moveEnd":
			newState={...state,moving:false}
			return newState;
		case "update":
			updateHandler(state);
			return state;
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
			innerArr.push("#ffffff");
		}
		arr.push(innerArr);
	}
	return arr;
}

function draw(state,action){
	let tableHeight=(state.height-state.bottomSpace)*state.tableScaleY;
	let canvas=document.getElementById(state.canvasId);
	let ctx=canvas.getContext("2d");
	let liWidth=(state.width-state.leftSpace)*0.9/state.numCol;
	let liHeight=tableHeight/state.numRow;
	let data,shape,color;
	
	if(action.show==="right"){
		data=state.data_num[0];
		shape=Triangle;
		color="#10A8FF";
	}else{
		data=state.data_num[1];
		shape=Rect;
		color="#D81803";
	}
	
	let arr=[];
	for(let i=0;i<data.length;i++){
		let x=(i*2+1)*liWidth;
		let y=tableHeight-data[i]*liHeight;
		arr.push({x:x,y:y});
	}
	drawPot(state,arr,ctx,shape);
	setTimeout(function(){
		drawLine(state,arr,ctx,color);
	},1000)
	
}


function Rect(){
	this.x=0;
	this.y=0;
	this.width=20;
	this.height=20;
	this.color="#D81803"
}

Rect.prototype.draw=function(context){
	context.save();
	context.translate(this.x,this.y);
	context.fillStyle=this.color;
	context.fillRect(-10,-10,this.width,this.height);
	context.restore();
}

function Triangle(){
	this.x=0;
	this.y=0;
	this.radius=15;
	this.color="#10A8FF";
}

Triangle.prototype.draw=function(context){
	context.save();
	context.translate(this.x,this.y);
	context.fillStyle=this.color;
	context.beginPath();
	context.moveTo(0,-this.radius);
	context.lineTo(-Math.cos(Math.PI/6)*this.radius,this.radius/2);
	context.lineTo(Math.cos(Math.PI/6)*this.radius,this.radius/2);
	context.lineTo(0,-this.radius);
	context.closePath();
	context.fill();
	context.restore();
}

function drawLine(state,arr,context,color){
	if(state.moving){
		return;
	}
	state.moving=true;
	context.save();
	context.strokeStyle=color;
	context.lineWidth=3;
	context.beginPath();
	context.moveTo(arr[0].x,arr[0].y)
	let i=0,j=0,space=10;
	
	(function drawing(){
		j++;
		let startX=arr[i].x;
		let startY=arr[i].y;
		let endX=arr[i+1].x;
		let endY=arr[i+1].y;
		let nextX=startX+((endX-startX)/space)*j;
		let nextY=startY+((endY-startY)/space)*j;
		
		context.lineTo(nextX,nextY);
		context.stroke();
		
		if(j==space){
			j=0;
			i++;
		}
		
		if(i<arr.length-1){
			requestAnimationFrame(drawing);
		}else{
			state.moving=false;
		}
		
	})();
}

function drawPot(state,arr,ctx,shape){
	if(state.moving){
		return;
	}
	state.moving=true;
	
	let i=0;
	
	(function drawing(){
		let sp=new shape();
		sp.x=arr[i].x;
		sp.y=arr[i].y;
		sp.draw(ctx);
		i++;
		if(i<arr.length){
			requestAnimationFrame(drawing);
		}else{
			state.moving=false;
		}
	})();
}

function updateHandler(state){
	let canvas=document.getElementById(state.canvasId);
	let ctx=canvas.getContext("2d");
	ctx.clearRect(0,0,canvas.width,canvas.height);
}


export {changeColor,changeColor2}
