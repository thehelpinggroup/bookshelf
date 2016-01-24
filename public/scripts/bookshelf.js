// var instantsearch = require('instantsearch.js');
// or use the 'instantsearch' global variable when using the jsDelivr build

var search = instantsearch({
  appId: 'NSZ3ROD6WC', // Mandatory
  apiKey: '2145b63484ddc2900b008a7f498a6039', // Mandatory
  indexName: 'primary-index', // Mandatory
});

// add a searchBox widget
search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-box',
    placeholder: 'Search for books on the shelf...'
  })
);

// add a hits widget
search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits-container',
    hitsPerPage: 10,
    templates: {
      empty: 'No results',
      item: '<a href="http://localhost:9393/book?permalink={{permalink}}"><strong>{{title}}</strong> by {{{author}}}</a>'
    },
  })
);

// start
search.start();


