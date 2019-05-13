/**Render an instance of the ReturnTempPassword component in the parent component ResetPassword. Here, give ReturnTempPassword a prop of 
 * tempPassword and assign it a value of a string that is at least 8 characters long. Within the child, ReturnTempPassword, 
 * access the tempPassword prop within the strong tags to make sure the user sees the temporary password. */
class ReturnTempPassword extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				{/* changed code below this line */}
				<p>
					Your temporary password is: <strong>{this.props.tempPasword}</strong>
				</p>
			</div>
		);
	}
}

class ResetPassword extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h2>Reset Password</h2>
				<h3>We've generated a new temporary password for you.</h3>
				<h3>Please reset this password from your account settings ASAP.</h3>
				{/* changed code below this line */}
				<ReturnTempPassword tempPasword="123xxxzzz" />
			</div>
		);
	}
}
