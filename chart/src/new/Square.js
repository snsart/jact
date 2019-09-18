import React from 'react';
import './Chart.css';
import {connect} from 'react-redux';

class Square extends React.Component{
	render(){
		const {width,height,color,className}=this.props;
		return(
			<div className={className} style={{width:width,height:height,backgroundColor:color}}></div>
		)
	}
}

const mapStateToProps=(state,ownProps)=>{
	
	const className=ownProps.className==undefined?"square":ownProps.className;
	const width=ownProps.width==undefined?"100%":ownProps.width;
	const height=ownProps.height==undefined?"100%":ownProps.height;
	const color=ownProps.color==undefined?"none":ownProps.color;
	
	return {
		className:className,
		width:width,
		color:color,
		height:height
	};
}

Square=connect(mapStateToProps)(Square);

export default Square;