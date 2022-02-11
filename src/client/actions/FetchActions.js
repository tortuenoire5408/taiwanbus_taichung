import fetch from 'isomorphic-fetch';
import * as envConfig from '../../config';
import ActionTypes from '../constants/ActionTypes';

const host = envConfig.IP;
const port = envConfig.PORT;

export const getBlogs = () => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.Fetch.FETCH_BLOGS_PENDING,
            status: 'PENDING',
            blogs: []
        })
        return fetch(`http://${host}:${port}/api/blogs`)
            .then((response) => response.json())
            .then((blogs) => dispatch({
                type: ActionTypes.Fetch.FETCH_BLOGS,
                status: 'SUCCESS',
                blogs
            }));
    }
}

export const getNotices = () => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.Fetch.FETCH_NOTICES_PENDING,
            status: 'PENDING',
            notices: []
        })
        return fetch(`http://${host}:${port}/api/notices`)
            .then((response) => response.json())
            .then((notices) => dispatch({
                type: ActionTypes.Fetch.FETCH_NOTICES,
                status: 'SUCCESS',
                notices
            }));
    }
}