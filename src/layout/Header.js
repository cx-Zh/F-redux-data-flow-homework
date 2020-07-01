import React, { Component } from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import { setSign } from '../actions';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-wrapper">
          {this.props.sign === 'Sign out' ? (
            <span>
              <img src="" alt="头像" />
              <span className="username">用户名</span>
            </span>
          ) : null}
          {/*<img src="" alt="头像" />*/}
          {/*<span className="username">用户名</span>*/}

          <a className="sign" onClick={this.props.handleSignChange}>
            {this.props.sign}
          </a>
        </div>
      </header>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleSignChange() {
    dispatch(setSign());
  }
});

const mapStateToProps = ({ sign }) => ({
  sign
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
