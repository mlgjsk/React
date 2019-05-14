/**The Counter component keeps track of a count value in state. There are two buttons which call methods increment() and decrement(). 
 * Write these methods so the counter value is incremented or decremented by 1 when the appropriate button is clicked. Also, create a 
 * reset() method so when the reset button is clicked, the count is set to 0.
Note: Make sure you don't modify the classNames of the buttons. Also, remember to add the necessary bindings for the newly-created methods in the constructor. */

class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
		// changed code below this line
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
		this.reset = this.reset.bind(this);
	}
	// changed code below this line
	increment() {
		this.setState({ count: this.state.count + 1 });
	}
	decrement() {
		this.setState({ count: this.state.count - 1 });
	}
	reset() {
		this.setState({ count: 0 });
	}
	render() {
		return (
			<div>
				<button className="inc" onClick={this.increment}>
					Increment!
				</button>
				<button className="dec" onClick={this.decrement}>
					Decrement!
				</button>
				<button className="reset" onClick={this.reset}>
					Reset
				</button>
				<h1>Current Count: {this.state.count}</h1>
			</div>
		);
	}
}
