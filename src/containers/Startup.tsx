import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getPhotos } from "../actions/photos";
import { getEvents } from "../actions/events";
import { getUsers } from "../actions/users";
import { StoreState } from "../types";
import { Dispatch } from "redux";

type State = {};

interface Props {
	getPhotos: Function;
	getUsers: Function;
	getEvents: Function;
}

class Startup extends React.Component<Props, State> {
	componentDidMount() {
		this.props.getEvents();
		this.props.getPhotos();
		this.props.getUsers();
	}
	render() {
		return this.props.children;
	}
}

type StateToProps = {};

interface DispatchToProps extends Props {}

function mapStateToProps(state: StoreState) {
	return {};
}

function mapDispatchToProps(dispatch: Dispatch<{}>) {
	return {
		getPhotos: bindActionCreators(getPhotos, dispatch),
		getUsers: bindActionCreators(getUsers, dispatch),
		getEvents: bindActionCreators(getEvents, dispatch)
	};
}

export default connect<StateToProps, DispatchToProps>(
	mapStateToProps,
	mapDispatchToProps
)(Startup);
