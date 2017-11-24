import promisePolyfill from 'es6-promise';
import 'isomorphic-fetch';
import config from '../config/config';

promisePolyfill.polyfill();

function testAsync() {
  return fetch('http://date.jsontest.com/')
    .then(response => response.json());
}

function fetchSubreddits(query) {
  return fetch(`${config.baseURL}/subreddits/search/.json?q=${query}&limit=5`)
    .then(response => response.json())
}

function fetchContents(subreddit) {
  console.log(`${config.baseURL}/${subreddit}.json?limit=5`);
  return fetch(`${config.baseURL}/${subreddit}.json?limit=5`)
    .then(response => response.json())
}

export default {
  testAsync,
  fetchSubreddits,
  fetchContents,
};
