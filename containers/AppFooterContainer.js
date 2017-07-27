import React from 'react';
import AppFooter from '../components/AppFooter.js';
import {connect} from 'react-redux';
import {setMode} from '../actions';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => ({
	mode: state.mode
});

const mapDispatchToProps = (dispatch) => ({
	setMode(mode) {
		console.log(mode);
		dispatch(setMode(mode));
	}
});

const AppFooterContainer = ({mode, setMode}) => (
	<AppFooter mode={mode} setMode={setMode}/>
);

AppFooterContainer.propTypes = {
	mode: PropTypes.string,
	setMode: PropTypes.func
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppFooterContainer);