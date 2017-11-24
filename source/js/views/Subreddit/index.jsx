import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import api from '../../api';


export class Subreddit extends Component {
  
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.app.selectedSubreddit);
    api.fetchContents(nextProps.app.selectedSubreddit).then(response => {
      console.log(response);
    })
  }


  render() {
    return (
      <div >
        Subreddit Content
      </div>
    );
  }
};

const mapToStates = state => ({
  app: state.app,
});

export default connect(mapToStates, null)(Subreddit);
