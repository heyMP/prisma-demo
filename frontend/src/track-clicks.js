import client from './client'
import gql from 'graphql-tag'

const GET_LATEST_CLICK = gql`
  query {
    clicks(last: 1) {
      target
    }
  }
`

const CREATE_CLICK = gql`
  mutation ($data: ClickCreateInput!) {
    createClick(data: $data) {
      id target
    }
  }
`

export default () => {
  // get the latest click
  client.watchQuery({ query: GET_LATEST_CLICK })
    .subscribe((res) => {
      const el = document.querySelector('track-clicks')
      const c = res.data.clicks[0]
      el.innerHTML = `You clicked on ${c.target} last`
    })

  document.addEventListener('click', e => {
    const click = Object.assign({}, { target: e.target.nodeName })

    // save the click
    client.mutate({
      mutation: CREATE_CLICK,
      variables: { data: click },
      update: (store, { data: { createClick }}) => {
        const data = store.readQuery({ query: GET_LATEST_CLICK })
        data.clicks[0] = createClick
        store.writeQuery({ query: GET_LATEST_CLICK, data })
      }
    })
  })
}