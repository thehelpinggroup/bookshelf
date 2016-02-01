'use strict';

import React from 'react';
import instantsearch from 'instantsearch.js';

class Bookshelf extends React.Component {
  constructor(props) {
    super(props);
    this.search = instantsearch({
      appId: 'NSZ3ROD6WC',
      apiKey: '2145b63484ddc2900b008a7f498a6039',
      indexName: 'primary-index',
    });
  }

  componentDidMount() {
    this.search.addWidget(
      instantsearch.widgets.searchBox({
        container: '#search-box',
        placeholder: 'Search for books on the shelf...'
      })
    );

    this.search.addWidget(
      instantsearch.widgets.hits({
        container: '#hits-container',
        hitsPerPage: 10,
        templates: {
          empty: 'No results',
          item: '<a href="/#/book/{{permalink}}"><strong>{{title}}</strong> by {{{author}}}</a>',
        },
      })
    );

    this.search.start();
  }

  render() {
    return(
      <div>
        <div id="search-box"></div>
        <div id="hits-container"></div>
      </div>
    );
  }
}

export default Bookshelf;
