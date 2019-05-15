class ControlledInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ''
		};
	}
	// changed code below this line
	handleChange(event) {
		this.setState({ input: event.target.value });
	}

	render() {
		return (
			<div>
				{/* changed code below this line */}
				<input value={this.state.input} onChange={this.handleChange.bind(this)} />

				<h4>Controlled Input:</h4>
				<p>{this.state.input}</p>
			</div>
		);
	}
}
