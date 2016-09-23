var React = require('react');
var ReactDOM = require('react-dom');
var {hashHistory,Route,Router,IndexRoute}=require('react-router');
var Navbar=require('./components/Navbar');
var Home=require('./components/Home');

var Main = React.createClass({

        render: function(){
            return (
                  <div>
                     <Navbar /><br/><br/><br/>
                     {this.props.children}
                  </div>
             )
         }
});

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
        <IndexRoute component={Home}/>
        <Route path="/Home" component={Home}/>
        </Route>
    </Router >,document.getElementById("app"));
