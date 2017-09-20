import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Answers Hub</h2>
        </div>
	<form>
		<input type="text" name="send-link" />
		<input type="submit" value="Retrieve Answers" />
	</form>
      </div>
    );
  }
}

export default App;
