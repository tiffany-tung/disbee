import React from 'react'
import Tags from './tags.es6.js';
import CommentContainer from './comment-container.es6.js';
import * as MUI from 'material-ui'

const Dialog = MUI.Dialog; 

export default class Post extends React.Component {
	constructor(props) {
		super();
		this.componentDidMount = this.componentDidMount.bind(this);
	}

	componentDidMount() {
		console.log(this.props.count)
		for (let modal in this.refs) {
			this.refs[modal].show();
		}
	}
	render() {
		let thing = 
		(<div>
			<Tags {...this.props.tags} />
			<CommentContainer {...this.props.comments} />
		</div>
		);

		return <Dialog title={this.props.caption} ref={"modal" + this.props.count}
              autoDetectWindowHeight={true} autoScrollBodyContent={true}>
              {thing}
        </Dialog>
	}
}
