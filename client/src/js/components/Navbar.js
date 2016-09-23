var React = require('react');
var {Link}=require('react-router');

var Navbar = React.createClass({

    render: function() {
        return (
        <div>
            <div className="container-fluid" id="main">
                <div className="navbar navbar-fixed-top navbar-inverse">
                  <div className="container-fluid">
                       <a className="navbar-brand" href="#">WAVE|MANAGEMENT</a>
                       <ul className="nav navbar-nav">
                          <li>
                              <Link to="/Home">Home</Link>
                          </li>
                      </ul>

                   </div>
               </div>
           </div>
       </div>
        );
        }
    });

module.exports=Navbar;
