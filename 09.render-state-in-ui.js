/**
 * In the code editor, MyComponent is already stateful. Define an h1 tag in the component's 
 * render method which renders the value of name from the component's state.
 */

class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'freeCodeCamp'
		};
	}
	render() {
		return (
			<div>
				{/* changed code below this line */}
				<h1>{this.state.name}</h1>
			</div>
		);
	}
}

/**
 * 2nd way:
 * class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // change code below this line
    const name=this.state.name;
    // change code above this line
    return (
      <div>
       
        <h1>{name}</h1>
       
      </div>
    );
  }
};
 */
