import client from './client'
import { CREATE_POSITION, GET_LATEST_POSITION } from './queries'
import { SubscriptionClient } from 'subscriptions-transport-ws';

export default () => {
  const watchQuery = client.watchQuery({ query: GET_LATEST_POSITION })
    .subscribe(res => {
      const el = document.querySelector('track-position')
      const p = res.data.positions[0]
      el.innerHTML = `x: ${p.x} y: ${p.y}`
    })

  document.addEventListener('mousemove', e => {
    const position = Object.assign({}, {
      x: String(e.screenX),
      y: String(e.screenY),
      z: String(0),
    })

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