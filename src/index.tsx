import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import createHistory from "history/createBrowserHistory";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Startup from "./containers/Startup";
import Thunk from "redux-thunk";

import reducers from "./reducers";
import "./index.scss";

const history = createHistory();

const middleware = [routerMiddleware(history), Thunk];

const store = createStore(
	reducers,
	composeWithDevTools(applyMiddleware(...middleware))
);

ReactDOM.render(
	<Provider store={store}>
		<Startup>
			<App history={history} />
		</Startup>
	</Provider>,
	document.getElementById("root") as HTMLElement
);

registerServiceWorker();
