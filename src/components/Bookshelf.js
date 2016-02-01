'use strict';

import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { Link } from 'react-router';
import lodash from 'lodash';
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
        placeholder: 'Search for books on the shelf...',
      })
    );

    this.search.addWidget({
      init: function () {
        console.log('HI');
      },

      getConfiguration: function () {
        return {};
      },

      render: function (args) {
        let hits = args['results']['hits'];

        // lodash.forEach(hits, function (hit) {
        //   var link = <Link to={`/book/${hit['permalink']}`}><strong>{hit['title']}</strong> by {hit['author']}</Link>;
        //   ReactDOMServer.renderToString(link);
        // });
        var links = lodash.reduce(hits, function (accLinks, hit) {
          var link = <Link to={`/book/${hit['permalink']}`}><strong>{hit['title']}</strong> by {hit['author']}</Link>;
          var linkHtml = ReactDOMServer.renderToString(link);
          accLinks.push(linkHtml);
          return accLinks;
        }, []);

        return lodash.join(links, '\n');
      },
    });

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
