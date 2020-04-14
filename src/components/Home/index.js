import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getHomeList } from '../../store/Home/store/actions'
import { CHANGE_VISIT_TIME } from '../../store/Home/store/constants'
import style from './index.css'

class Home extends Component {
	componentWillMount() {
		// 只有服务端渲染才有staticContext
		if (this.props.staticContext) {
			this.props.staticContext.css.push(style._getCss())
		}
	}
	componentDidMount() {
		!this.props.list.length && this.props.getHomeList()
		this.props.addVisitTime()
	}
	render() {
		return (
			<div>
				Home components
				<button
					onClick={() => {
						console.log('click')
					}}
				>
					click me
				</button>
				<ul>
					{this.props.list.map((item) => (
						<li key={item.id}>{item.title}</li>
					))}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	list: state.home.list,
	visitTime: state.home.visitTime,
})

const mapDispatchToProps = (dispatch) => ({
	getHomeList() {
		dispatch(getHomeList())
	},
	addVisitTime() {
		dispatch({
			type: CHANGE_VISIT_TIME,
		})
	},
})

Home.loadData = (store) => {
	return store.dispatch(getHomeList())
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
