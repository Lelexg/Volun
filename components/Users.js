import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';

const User = ({user}) => (
  <div className="card">
    <style jsx>{`
      .card {
        margin-top: 20px;
      }
      .card-header-title{
          font-weight: bold;
      }
    `}</style>
    <header className="card-header">
      <h1 className="card-header-title">{user.firstname} {user.lastname}</h1>
    </header>
    <div className="card-content">
      <div className="content">{user.email}</div>
      <div className="content">{user.phone}</div>
    </div>
    <br></br>
    <footer className="card-footer">
      <div className="card-footer-item">
        Interests: {user.interests.map(interest => <Interest key={interest.id} interest={interest} />)}
      </div>
    </footer>
  </div>
);

const Interest = ({interest}) => (
    <div className="item">
        <style jsx>{`
            .item {
            margin-top: 5px;
            padding-left: 20px;
            }
        `}</style>
        {interest.description}
    </div>
);

const UserList = ({data}) => {
  const {error, users} = data;
  if (error) {
    console.log(error)
    return <div>Error loading users.</div>;
  }
  if (users && users.length) {
    return (
      <section>
        <ul>{users.map(user => <User key={user.id} user={user} />)}</ul>
      </section>
    );
  }
  return <div>Loading</div>;
};

export const allUsers = gql`
  query {
    users {
      id
      firstname
      lastname
      email
      phone
      interests {
        description
      }
    }
  }
`;
// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (UserList)
export default graphql(allUsers)(UserList);