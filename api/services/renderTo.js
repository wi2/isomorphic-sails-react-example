var React = require('react')
  , Router = require('react-router');

module.exports = function(routes, method, url, locals, state) {
  Router.run(routes, url, (Root) => {
    if (state)
      locals.state = 'window.__ReactInitState__=' + JSON.stringify(state) + ';';
    method("layout", {
      locals: locals||{title:'',description:''},
      body: React.renderToString(<Root {...state} />)
    });
  });
}
