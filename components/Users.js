import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_USERS = gql`
    query users {
        users {
            id
            firstname
            lastname
            email
            phone
            interests{
            description
            }
        }
    }
`;

class Users extends Component {
    render() {
        return (
            <Query query={GET_USERS}>
                {({data: {users} }) => {
                return (
                    users.map(user => {
                    return <p key={user.id}>{user.firstname} {user.lastname}</p>
                    })
                )
                }}
            </Query>
        );
    }
}

export default Users;