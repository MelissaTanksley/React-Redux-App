import App from './App';
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>
