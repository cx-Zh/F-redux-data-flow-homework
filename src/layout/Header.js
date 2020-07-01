import React, { Component } from 'react';
import './Header.scss';
import { connect } from 'react-redux';
import { fetchUserDetails, setSign } from '../actions';
import { fetchPosts } from '../GetUserInfo';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header-wrapper">
          {this.props.sign === 'Sign out' ? (
            <span>
              <img src={this.props.user.avatar} alt="头像" />
              <span className="username">{this.props.user.name}</span>
            </span>
          ) : null}

          <a className="sign" onClick={this.props.handleSignChange}>
            {this.props.sign}
          </a>
          {console.log(this.props.user)}
        </div>
      </header>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleSignChange() {
    dispatch(setSign());
    fetchPosts().then(([response, json]) => {
      if (response.status === 200) {
        dispatch(fetchUserDetails(json));
      }
    });
  }
});

const mapStateToProps = ({ sign, user }) => ({
  sign,
  user
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
