import client from './client'
import gql from 'graphql-tag'
import randomstring from 'randomstring'

const GET_MESSAGES = gql`
  query {
    messages(last: 10) {
      text
    }
  }
`

const CREATE_RANDOM_MESSAGE = gql`
  mutation ($data: MessageCreateInput!) {
    createMessage(data: $data) {
      id
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
        <span class="text">${message.text}</span>
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

  document.querySelector('#chatMessageGenerate').addEventListener('click', e => {
    // create random message
    client.mutate({
      mutation: CREATE_RANDOM_MESSAGE,
      variables: {
        data: {
          text: randomstring.generate({readable: true})
        }
      }
    })
  })
}