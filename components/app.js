var React = require('react')
, Router = require('react-router');

Router.run(require('./routes.js'), Router.HistoryLocation, (Root) => {
  React.render(<Root {...window.__ReactInitState__} />, document.body);
  delete window.__ReactInitState__;
});
