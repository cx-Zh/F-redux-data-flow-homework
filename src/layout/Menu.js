import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { modules } from '../utils';
import './Menu.scss';

class Menu extends Component {
  render() {
    return (
      <nav className="menu">
        <ul>
          <li className="nav-item">
            <Link to="/">首页</Link>
          </li>
          {console.log(this.props.user.permissions)}
          {this.props.sign === 'Sign out' && this.props.user.permissions
            ? modules.map(({ name, path, permissionCode }) =>
                this.props.user.permissions.map(permission => {
                  if (permission === permissionCode) {
                    return (
                      <li className="nav-item" key={name}>
                        <Link to={path}>{name}</Link>
                      </li>
                    );
                  }
                  return null;
                })
              )
            : null}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = ({ sign, user }) => ({
  sign,
  user
});

export default connect(mapStateToProps)(Menu);
// export default Menu;
