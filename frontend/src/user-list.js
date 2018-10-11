import client from './client'
import gql from 'graphql-tag'
import { html, render } from 'lit-html';
const GET_USERS = gql`
  query {
    users {
      id
      name
      email
    }
  }
`

const USER_LIST_SUBSCRIBE = gql`
  subscription {
    user {
      mutation
    }
  }
`

const userListTemplate = (users) => html`
  <div>
    This is your user list:
    <ul>
      ${users.map(i => html`
      <li data-id="${i.id}">
        ${i.name} : ${i.email}
      </li>
      `)}
    </ul>
  </div>
`;

const userListRender = (target) => {
  client.query({ query: GET_USERS, fetchPolicy: 'no-cache' }).then(res => {
    const users = res.data.users
    render(userListTemplate(users), target);
  })
}

export default (() => {
  const target = document.querySelector('user-list')
  // initially call userListRender
  userListRender(target)
  // then subscribe to any changes
  const subscription = client.subscribe({ query: USER_LIST_SUBSCRIBE })
  subscription.subscribe(() => {
    userListRender(target)
  })
})()