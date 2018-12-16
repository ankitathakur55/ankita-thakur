import React, {Component} from 'react';
import './PearsonUsers.css';
import {pearsonHelper} from './PearsonHelper';
import Loader from './Loader';
import User from './User';

export default class PearsonUsers extends Component {
  constructor ()  {
    super ();
    this.state = {
      users: [
        {
          id: 4,
          first_name: 'Eve',
          last_name: 'Holt',
          avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg',
        },
        {
          id: 5,
          first_name: 'Charles',
          last_name: 'Morris',
          avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg',
        },
        {
          id: 6,
          first_name: 'Tracey',
          last_name: 'Ramos',
          avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg',
        },
      ],
      loading: false,
    };
  }

  handleDeleteClick = id => {
    const deletedArray = this.state.users.filter (user => user.id !== id);
    this.setState ({users: deletedArray});
  };

  componentDidMount () {
    this.setState ({loading: true});
    pearsonHelper
      .getUserList (this.state.users)
      .then (userList => this.setState ({users: userList, loading: false}));
  }

  render () {
    if (this.state.loading) {
      return <Loader />;
    }
    return (
      <div className="pearson-wrapper">
        <h1 className="pearson-heading">Pearson User Management</h1>
        <div className="pearson-content">
          {this.state.users.length
            ? <div className="pearson-outer">
                <div className="pearson-container">
                  {this.state.users.map (user => (
                    <User
                      key={user.id + user.first_name}
                      user={user}
                      handleDeleteClick={this.handleDeleteClick}
                    />
                  ))}
                </div>
              </div>
            : <div className="nouser">There is no user to show</div>}
        </div>
      </div>
    );
  }
}
