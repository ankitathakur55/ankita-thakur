import React from 'react';

export default class User extends React.Component {
  render () {
    const { user, handleDeleteClick } = this.props;
    return (
      <div className="pearson-grid">
        <React.Fragment>
          <img className="avatar" width="80" alt="preview" src={user.avatar} />
          <div className="name">{user.first_name}{' '}{user.last_name}</div>
          <button
            className="button"
            onClick={() => handleDeleteClick (user.id)}
          >
            Delete
          </button>
        </React.Fragment>
      </div>
    );
  }
}
