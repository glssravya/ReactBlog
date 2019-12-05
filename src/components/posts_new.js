import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class PostsNew extends Component{
	
	renderField(field) {
		const { meta : { touched, error } } = field;
		const className = `form-group ${touched && error ? 'has-danger' : ''}`;

		return (
			<div className={ className }>
			<label>{field.label}</label>
				<input 
					className="form-control"
					type="text"
					{...field.input}
				/>
				<div className="text-help">{touched ? error : " "}</div>
			</div>
		)
	}
	onSubmit(values){
		console.log(values);
	}
	render(){	
		const { handleSubmit } = this.props; 

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field 
					label = "Title"
					name = "title"  
					component = {this.renderField}
				/> 
				<Field 
					label = "Categories"
					name = "categories"  
					component = {this.renderField}
				/> 
				<Field
					label = "Post Content"	
					name = "content"
					component = {this.renderField}	
				/>		
				<button className="btn btn-primary" type="submit">Submit</button>
			</form>
		)
	}

}

function validate(values) {
	const errors = {};
	if(!values.title){
		errors.title = "Please enter title";
	}
	if(!values.categories){
		errors.categories = "Please enter categories";
	}
	if(!values.content){
		errors.content = "Please enter content";
	}
	return errors;

}

export default reduxForm({
	validate,//validate:validate
	form : 'PostNewForm' //form name
})(PostsNew);