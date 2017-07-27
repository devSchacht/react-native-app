import React from 'react';
import {Footer, FooterTab, Button, Text} from 'native-base';
import {MODES} from "../constants";
import PropTypes from 'prop-types';

const AppFooter = ({mode = MODES.ARTICLES, setMode = () => {}}) => (
	<Footer>
		<FooterTab>
			<Button
				active={mode === MODES.ARTICLES}
				onPress={() => setMode(MODES.ARTICLES)}>
				<Text>Статьи</Text>
			</Button>
			<Button
				active={mode === MODES.PODCAST}
				onPress={() => setMode(MODES.PODCAST)}>
				<Text>Подкасты</Text>
			</Button>
		</FooterTab>
	</Footer>
);

AppFooter.propTypes = {
	mode: PropTypes.string,
	setMode: PropTypes.func
};

export default AppFooter;