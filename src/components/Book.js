'use strict';

import React from 'react';
import './book.css';
import algoliasearch from 'algoliasearch';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      coverUrl: '',
      title: ''
    };
  }

  componentDidMount() {
    var client = algoliasearch('NSZ3ROD6WC', '2145b63484ddc2900b008a7f498a6039');
    var queries = [{
      indexName: 'primary-index',
      query: this.props.permalink,
      params: {hitsPerPage: 1},
      restrictSearchableAttributes: 'permalink'
    }];
    client.search(queries)
    .then(function searchSuccess(content) {
      console.log(content);
      this.setState({
        author: content.results[0].hits[0].author,
        coverUrl: content.results[0].hits[0].cover_url,
        title: content.results[0].hits[0].title
      });
    }.bind(this))
    .catch(function searchError(err) {
      console.error(err);
    });
  }

  render() {
    return (
      <div>
        {this.state.title} by {this.state.author}
        <aside>
          <img src={this.state.coverUrl} />
        </aside>
      </div>
    );
  }
};

export default Book;
