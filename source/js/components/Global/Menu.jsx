import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { routeCodes } from 'config/routes';
import { selectSubreddit } from '../../actions/app';
import api from '../../api';

export class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      subreddits: [],
      selectedReddit: ''
    };
  }

  componentDidMount() {
  }

  onQuery = (e) => {
    if (e.target.value === '') {
      this.setState({ subreddits: [], query: '', selectedReddit: '' });
      return;
    }
    this.setState({ query: e.target.value }, () => {
      api.fetchSubreddits(this.state.query).then(response => {
        this.state.subreddits = response.data.children.map(subreddit => {
          return {
            displayName: subreddit.data.display_name,
            displayNamePrefixed: subreddit.data.display_name_prefixed,
          }
        });
        this.setState({ subreddits: this.state.subreddits });
      })
    });
  }
  
  selectReddit = (selectedReddit) => {
    this.setState({ selectedReddit });
    this.props.selectSubreddit(selectedReddit);
  }

  render() {
    return (
      <div className='Menu'>
        Menu
        <input
          type="text"
          value={this.state.query}
          onChange={this.onQuery}
        />
        <ul className="list-group">
        {
          this.state.subreddits.map(subreddit => (              
              <li 
                className={`list-group-item ${this.state.selectedReddit === subreddit.displayNamePrefixed ? 'active' : ''}`} 
                onClick={() => {this.selectReddit(subreddit.displayNamePrefixed)}}>
                {subreddit.displayName}
              </li>
            )
          )
        }
        </ul>
      </div>
    );
  }
}

const mapToActions = dispatch => bindActionCreators({
  selectSubreddit,
}, dispatch);

export default connect(null, mapToActions)(Menu);