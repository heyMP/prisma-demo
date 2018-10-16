import client from './client'
import gql from 'graphql-tag'

const GET_MESSAGES = gql`
  query {
    messages(last: 10) {
      text
      sentBy {
        id
        name
      }
    }
  }
`

const MESSAGES_SUBSCRIPTION = gql`
  subscription {
    message(where: {
        mutation_in: [CREATED]
      }) {
        node {
          id
          text
          sentBy {
            id
            name
          }
        }
      }
    }
`

export default () => {
  // query messages
  client.watchQuery({query: GET_MESSAGES }).subscribe(res => {
    const el = document.querySelector('chat-messages')
    const m = res.data.messages
    // clear out space
    el.innerHTML = ''
    // reprint messages and take last 10 messages
    m.slice((m.length - 10), m.length).forEach(message => {
      const div = document.createElement('div')
      div.innerHTML = `
        <span data-user="${message.sentBy.name}" data-id="${message.id}">
          <span class="user">${message.sentBy.name}:</span> <span class="text">${message.text}</span>
        </span>
      `
      el.appendChild(div)
    })
  })
  // subscribe to latest messages
  client.subscribe({
    query: MESSAGES_SUBSCRIPTION
  }).subscribe(({ data: {message: { node }}}) => {
    const data = client.readQuery({ query: GET_MESSAGES })
    data.messages = [...data.messages, node]
    client.writeQuery({ query: GET_MESSAGES, data })
  })
}