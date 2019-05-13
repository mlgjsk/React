/**
 * 
 *The ShoppingCart component now renders a child component Items. This Items component has a default prop quantity set to the integer 0.
  Override the default prop by passing in a value of 10 for quantity.props 
 */

const Items = (props) => {
	return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};

Items.defaultProps = {
	quantity: 0
};

class ShoppingCart extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		{
			/* changed code below this line */
		}
		return <Items quantity={10} />;
	}
}
