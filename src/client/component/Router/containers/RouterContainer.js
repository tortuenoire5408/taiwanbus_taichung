import { connect } from 'react-redux';
import Router from '../presentation/Router';
import * as Actions from '../../../actions';
// refactor from connected-react-router's ConnectedRouter

const mapStateToProps = (state) => {
    return {
        ...state
    };
}

const mapDispatchToProps = {
    ...Actions
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Router);