import React from 'react';
import './App.css';
import Bored from './components/Bored';
import { connect } from 'react-redux';
import { getActivity } from './actions/actions';
import emoji from './img/emoji.png';

const App = (props) => {
  console.log("App props", props);
  return (
    <div className="App">
      <div className="header">
        <img src={emoji} alt="Bored Emoji" className="emoji"/>
        <h1 className="header-title">bored?</h1>
      </div>
      <br></br>
      
      <Bored activity={props.activity}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    activity: state.activity,
  }
}

export default connect(mapStateToProps, {getActivity})(App);
