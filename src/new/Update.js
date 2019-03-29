import React from 'react';
import './Chart.css';
import {connect} from 'react-redux';

class Update extends React.Component{
	render(){
		const {color,className,txt}=this.props;
		return(
			<div className="update"  title="刷新页面" onClick={()=>this.props.onClick()}>
			</div>
		)
	}
}

const mapStateToProps=(state,ownProps)=>{
	return {
		
	}
}

const mapDispatchToProps=(dispatch,ownProps)=>{
	return {
		onClick:()=> {
		   	dispatch({type:"update"});
		}
	}
}

Update=connect(mapStateToProps,mapDispatchToProps)(Update);



export default Update;