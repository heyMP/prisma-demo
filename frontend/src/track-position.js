import client from './client'
import gql from 'graphql-tag'

const GET_POSITION = gql`
  query {
    positions(last:1) {
      x y z
    }
  }
`

const ADD_POSITION = gql`
  mutation ($data: PositionCreateInput!) {
    createPosition(data: $data) {
      x y z user
    }
  }
`

const renderPosition = () => {
  client.query({ query: GET_POSITION, fetchPolicy: 'no-cache' }).then(res => {
    const el = document.querySelector('track-position')
    const p = res.data.positions[0]
    el.innerHTML = `x: ${p.x}, y: ${p.y}`
  })
}

export default () => {
  document.addEventListener('mousemove', e => {
    const position = Object.assign({}, {
      x: String(e.screenX),
      y: String(e.screenY),
      z: String(0),
      user: 'heymp'
    })

    client.mutate({ mutation: ADD_POSITION, variables: { data: position } }).then(res => {
      renderPosition()
    })
  })
}