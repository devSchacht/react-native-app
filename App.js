import React from 'react';
import {Container, Content} from 'native-base';
import {StyleSheet, Text, View} from 'react-native';
import AppFooterContainer from './containers/AppFooterContainer.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import {MODES} from './constants';

const initialState = {
	mode: MODES.ARTICLES
};

const store = createStore(reducers, initialState);

const styles = StyleSheet.create({
	container: {
		padding: 20
	},
});

const App = () => (
	<Provider store={store}>
		<Container>
			<Content>
				<View style={styles.container}>
					<Text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
						et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</Text>
				</View>
			</Content>
			<AppFooterContainer/>
		</Container>
	</Provider>
);

export default App;