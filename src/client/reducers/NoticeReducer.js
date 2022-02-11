import { List, Record } from 'immutable';
import ActionTypes from '../constants/ActionTypes';

const initialState = {
    status: 'PENDING',
    notices: new List([])
};

const ModeRecord = Record({
    status: '',
    notices: new List([]),
});

const NoticeRecord = Record({
    id: '',
    locale: '',
    content: '',
    link: '',
});

const notices = (state = new ModeRecord(initialState), action) => {
    switch(action.type) {
        case ActionTypes.Fetch.FETCH_NOTICES:
            return new ModeRecord({
                status: action.status,
                notices: new List(action.notices).map((notice) => new NoticeRecord(notice))
            })
        case ActionTypes.Fetch.FETCH_NOTICES_PENDING:
            return new ModeRecord({
                status: action.status,
            })
        default:
            return state
    }
}

export default notices;