/*import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'https://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=MYBABYBLOG';

export function fetch_posts() {
	const request = axios.get(`${ROOT_URL}${API_KEY}`);
	return{
		type:FETCH_POSTS,
		payload:
	}
}*/

import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=MYREACTBLOG';

export function fetchPosts() {
	const request = axios.get(`${ROOT_URL}${API_KEY}`);
	
	return {
			type: FETCH_POSTS,
			payload: request
		};
}


