'use strict';

import React from 'react';
import instantsearch from 'instantsearch.js';

class Bookshelf extends React.Component {
  constructor(props) {
    super(props);
    this.search = instantsearch({
      appId: '5XC2UZIWS0',
      apiKey: 'cd170872e1fa42f6c6b5118e2c1f8624',
      indexName: 'master-bookshelf',
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
      instantsearch.widgets.menu({
        container: '#publisher-menu',
        attributeName: 'Publisher',
        limit: 10,
        templates: {
          header: 'Publisher'
        }
      })
    );

    this.search.addWidget(
      instantsearch.widgets.rangeSlider({
        container: '#pages',
        attributeName: 'Pages',
        templates: {
          header: 'Pages'
        },
        tooltips: {
          format: function (formattedValue) {
            return formattedValue;
          }
        }
      })
    );

    this.search.addWidget(
      instantsearch.widgets.hits({
        container: '#hits-container',
        hitsPerPage: 10,
        templates: {
          empty: 'No results',
          item: '<a href="/#/book/{{permalink}}">{{Original Title}}</a> by {{{Author}}}',
        },
      })
    );
    this.search.start();
  }

  render() {
    return(
      <div>
        <div id="search-box"></div>
        <br />
        <div id="publisher-menu"></div>
        <br />
        <div id="pages" style={{maxWidth: 450}}></div>
        <br />
        <div id="hits-container"></div>
      </div>
    );
  }
}

export default Bookshelf;
