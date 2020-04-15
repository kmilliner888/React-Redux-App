import React from 'react';
import './App.css';
import Bored from './components/Bored';
import { connect } from 'react-redux';
import { getActivity } from './actions/actions';

const App = (props) => {
  console.log("App props", props);
  return (
    <div className="App">
      <h1>Bored?</h1>
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
