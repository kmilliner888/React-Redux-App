import React from 'react';

import { getActivity } from '../actions/actions';
import { connect } from 'react-redux';

const Bored = (props) => {
    console.log("Bored props", props);
    return (
        <div className="bored-container">
            <div className="bored-button">
                <button onClick={()=> props.getActivity()}>Click Here.</button>
            </div>
            <div className="activity">
                <h1>{props.activity.activity}</h1>
                <h2>{props.activity.accessibility}</h2>
                <h2>{props.activity.type}</h2>
                <h2>{props.activity.participants}</h2>
                <h2>{props.activity.price}</h2>
                <h2>{props.activity.link}</h2>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return {
      activity: state.activity
    }
  }
  
  export default connect(mapStateToProps, {getActivity})(Bored);