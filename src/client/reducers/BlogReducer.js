import { List, Record } from 'immutable';
import ActionTypes from '../constants/ActionTypes';

const initialState = {
    status: 'PENDING',
    blogs: new List([])
};

const ModeRecord = Record({
    status: '',
    blogs: new List([]),
});

const BlogRecord = Record({
    id: '',
    locale: '',
    onShelfAt: '',
    flag: '',
    title: '',
    content: '',
    nav: ''
});

const blogs = (state = new ModeRecord(initialState), action) => {
    switch(action.type) {
        case ActionTypes.Fetch.FETCH_BLOGS:
            return new ModeRecord({
                status: action.status,
                blogs: new List(action.blogs).map(
                    (blog) => new BlogRecord({ ...blog, nav: `/blog/${blog.id}` })
                )
            })
        case ActionTypes.Fetch.FETCH_BLOGS_PENDING:
            return new ModeRecord({
                status: action.status,
            })
        default:
            return state
    }
}

export default blogs;