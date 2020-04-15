import React from 'react';

import { getActivity } from '../actions/actions';
import { connect } from 'react-redux';

const Bored = (props) => {
    console.log("Bored props", props);
    return (
        <div className="bored-container">
            
            <div className="activity">
                <h1>{props.activity.activity}</h1>
            </div>
            <div className="bored-button">
                <button onClick={()=> props.getActivity()}>Click Here For Ideas!</button>
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