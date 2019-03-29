import React from 'react';
import './Chart.css';
import {connect} from 'react-redux';

class Tips extends React.Component{
	render(){
		const {color,className,txt}=this.props;
		return(
			<div className="tip" onClick={()=>this.props.onClick()}>
				<div className={this.props.className}></div>
				<div className="tip-txt">{this.props.title}</div>
			</div>
		)
	}
}

const mapStateToProps=(state,ownProps)=>{
	const colors=["#10A8FF","#D81803"];	
	const type=ownProps.show;
	let color,className,title,imgSrc;
	if(type=="right"){
		color=colors[0];
		title=state.tips[0];
		className="tip-img right"
		
	}else{
		color=colors[1];
		title=state.tips[1];
		className="tip-img wrong"
	}
	return {
		color:color,
		className:className,
		title:title,
	};
}

const mapDispatchToProps=(dispatch,ownProps)=>{
	return {
		onClick:()=> {
			if(ownProps.clickable){
		   		dispatch({type:ownProps.type,show:ownProps.show});
			}
		}
	}
}

Tips=connect(mapStateToProps,mapDispatchToProps)(Tips);



export default Tips;