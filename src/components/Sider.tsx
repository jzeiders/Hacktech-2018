import * as React from "react";
import { Layout, Menu, Icon } from "antd";
import { ClickParam } from "antd/lib/menu";

const { Sider } = Layout;

type Props = {
	updateLocation: Function;
};

type State = {
	collapsed: boolean;
};

export default class SiderDemo extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			collapsed: false
		};
	}
	onCollapse = (collapsed: boolean) => {
		this.setState({ collapsed });
	};
	onMenuClick = (params: ClickParam) => {
		this.props.updateLocation(params.key);
	};
	render() {
		return (
			<Sider
				collapsible={true}
				collapsed={this.state.collapsed}
				onCollapse={this.onCollapse}
			>
				<Menu
					theme="dark"
					defaultSelectedKeys={["1"]}
					mode="inline"
					onClick={this.onMenuClick}
				>
					<Menu.Item key="Events">
						<Icon type="pie-chart" />
						<span>Events</span>
					</Menu.Item>
					<Menu.Item key="CreateEvent">
						<Icon type="desktop" />
						<span>Create Event</span>
					</Menu.Item>
				</Menu>
			</Sider>
		);
	}
}
