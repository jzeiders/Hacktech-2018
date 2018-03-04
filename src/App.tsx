import * as React from "react";
import "./App.scss";
import Sider from "./containers/SiderContainer";
import { Layout } from "antd";
import { ConnectedRouter } from "react-router-redux";
import { Route } from "react-router";
import { createBrowserHistory } from "history";
import { CreateEvent, SpecificEvent, ViewEvents } from "./routes";
const { Header } = Layout;
let history = createBrowserHistory();
type Props = {
	history: typeof history;
};

class App extends React.Component<Props> {
	constructor(props: Props) {
		super(props);
	}
	render() {
		return (
			<div className="App">
				<Layout
					style={{
						minHeight: "100vh"
					}}
				>
					<Header className="Header">Photo Bucket</Header>
					<Layout>
						<Sider />
						<Layout>
							<ConnectedRouter history={this.props.history}>
								<div>
									<Route path="/Events" component={ViewEvents} />
									<Route path="/CreateEvent" component={CreateEvent} />
									<Route path="/Event/:id" component={SpecificEvent} />
								</div>
							</ConnectedRouter>
						</Layout>
					</Layout>
				</Layout>
			</div>
		);
	}
}

export default App;
