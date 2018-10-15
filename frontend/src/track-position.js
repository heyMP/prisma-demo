import client from './client'
import gql from 'graphql-tag'

const GET_LATEST_POSITION = gql`
  query {
    positions(last: 1) {
      x y z
    }
  }
`

const CREATE_POSITION = gql`
  mutation ($data: PositionCreateInput!) {
    createPosition(data: $data) {
      x y z id
    }
  }
`

export default () => {
  // get the latest mouse position from gql and subscribe to more
  client.watchQuery({ query: GET_LATEST_POSITION })
    .subscribe(res => {
      const el = document.querySelector('track-position')
      const p = res.data.positions[0]
      el.innerHTML = `x: ${p.x} y: ${p.y}`
    })
  
  // for every mouse movement, save it to the grapql database
  document.addEventListener('mousemove', e => {
    // get the position
    const position = Object.assign({}, {
      x: String(e.screenX),
      y: String(e.screenY),
      z: String(0)
    })

    // save the position
    client.mutate({
      mutation: CREATE_POSITION,
      variables: { data: position },
      update: (store, { data: { createPosition } }) => {
        const data = store.readQuery({ query: GET_LATEST_POSITION })
        data.positions[0] = createPosition
        store.writeQuery({ query: GET_LATEST_POSITION, data })
      }
    })
  })
}