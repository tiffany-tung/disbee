import React from 'react'

export default class Overlay extends React.Component {
	constructor() {
		super();
	}

	render() {
		return <div>{this.children}<h2 id={"modal"}>asdfajoiewjfawe</h2></div>
	}
}