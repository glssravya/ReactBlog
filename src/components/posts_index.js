import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetch_posts} from '../actions/index'
import { Link } from 'react-router-dom';
import _ from 'lodash';

class PostsIndex extends Component{
	render(){
		return(
			<div>
				PostsIndex
			</div>
		);
	
	}
}

export default PostsIndex;

/*class PostsIndex extends Component{
	componentDidMount(){
		this.props.fetchPosts()
		//console.log();
	}
	renderPosts(){
		return _.map(this.props.posts,post =>{
			return (
				<li className="list-group-item" key={post.id}>
					{post.title}
				</li>
			)

		});
	}
	render(){
		return (
			<div>
				<div className="text-xs-right">
					<Link className="btn btn-primary" to="/posts/new">
					New Post
					</Link>
				</div>
				<h3>Posts</h3>

				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state){
	return { posts: state.posts };
}
export default connect(mapStateToProps, {fetchPosts})(PostsIndex);*/