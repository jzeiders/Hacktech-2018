import React from "react";
import { StoreState } from "../types";
import Sider from "../components/Sider";
import { Dispatch, connect } from "react-redux";
import { push } from "react-router-redux";

type Props = {
	updateLocation: Function;
};

class SiderContainer extends React.Component<Props> {
	render() {
		return <Sider updateLocation={this.props.updateLocation} />;
	}
}

type StateToProps = {};
type DispatchToProps = { updateLocation: Function };

const mapStateToProps = (state: StoreState) => ({});

const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
	updateLocation: (key: string) => dispatch(push(key))
});

export default connect<StateToProps, DispatchToProps, void>(
	mapStateToProps,
	mapDispatchToProps
)(SiderContainer);
