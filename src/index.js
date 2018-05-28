import './style';
import App from './components/app';
import { Provider } from 'preact-redux';
import { h } from 'preact';
import { createStore } from 'redux';
import app from './reducers';

const ConnectedApp = () => (
	<Provider store={createStore(app)}>
		<App />
	</Provider>
)

export default ConnectedApp;
