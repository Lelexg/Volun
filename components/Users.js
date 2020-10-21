import React from 'react';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import { useAuth0 } from "@auth0/auth0-react";

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
        Interests: {user.interests.length > 0 
                    ? user.interests.map(interest => <Interest key={interest.id} interest={interest} />) 
                    : "None."}
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
  const { user, isAuthenticated } = useAuth0();
  const {error, users} = data;
  if (!isAuthenticated) {
    return <div>Please login first.</div>;
  }
  if (error) {
    console.log(error)
    return <div>Error loading users.</div>;
  }
  if (users && users.length) {
    return (
      <section>
        <h1>User List</h1>
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