//@ts-nocheck
import React, {Component} from 'react';
import ioledLogo from '../images/ioled.png';

// material-ui components.
import {withStyles, createStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

// Material-ui component styles.
const styles = () =>
	createStyles({
		root: {
			position: 'relative',
		},
		appbar: {
			backgroundColor: '#f8f9fa',
		},
		logo: {
			width: '110px',
			margin: '-10px',
		},
		avatar: {
			margin: '0 10px',
		},
		toolbarName: {
			margin: 'auto',
			color: 'light-green',
		},
		circular: {
			color: 'green',
		},
		logout: {
			color: '#6B757E',
			fontSize: '12px',
		},
	});

class Navbar extends Component {
	// String capitalization.
	capitalize(str) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}	
	// Render the component.
	render() {
		const {classes, user} = this.props;
		return (
			<div className={classes.root}>
				<AppBar className={classes.appbar} position="static">
					<Toolbar>
						<a href={user ? '/dashboard' : '/'} style={{flexGrow: 1}}>
							<img className={classes.logo} src={ioledLogo} alt="ioled" />
						</a>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default (withStyles(styles)(Navbar));
