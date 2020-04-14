import React, { Component } from "react";

export default (DecoratedComponent, styles) => {
	return class WithStyleComponent extends Component {
		componentWillMount() {
			// 服务端渲染
			if (this.props.staticContext) {
				this.props.staticContext.css.push(styles._getCss());
			}
		}
		render() {
			return <DecoratedComponent {...this.props} />;
		}
	};
};
