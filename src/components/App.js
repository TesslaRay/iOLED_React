import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';

// Components.
import Navbar from './Navbar';

class App extends Component {
    
    // Render the component.
	render() {
		return (
			<BrowserRouter>
				<Navbar />
			</BrowserRouter>
		);
	}
}

export default App;
