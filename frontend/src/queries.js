import gql from 'graphql-tag'

export const GET_LATEST_POSITION = gql`
  query {
    positions(last:1) {
      x y z
    }
  }
`

export const CREATE_POSITION = gql`
  mutation ($data: PositionCreateInput!) {
    createPosition(data: $data) {
      x y z
    }
  }
`