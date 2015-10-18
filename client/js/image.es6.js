import React from 'react'
import GridTile from 'material-ui';


export default class Image extends React.Component {
	constructor() {
		super();
		this.render = this.render.bind(this);
	}

	render() {
		return <img src={this.props.src}/>

	}
}