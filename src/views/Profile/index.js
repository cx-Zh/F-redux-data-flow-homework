import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
  render() {
    return (
      <div className="main-view profile">
        <h2>个人信息</h2>
        {this.props.sign === 'Sign out' ? (
          <ul>
            <li>用户名：{this.props.user.name}</li>
            <li>用户id：{this.props.user.id}</li>
            <li>用户头像：</li>
            <img src={this.props.user.avatar} alt="头像" />
          </ul>
        ) : (
          <ul>
            <li>用户名：</li>
            <li>用户id：</li>
            <li>用户头像：</li>
            <img src="" alt="头像" />
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ sign, user }) => ({
  sign,
  user
});

export default connect(mapStateToProps)(Profile);
