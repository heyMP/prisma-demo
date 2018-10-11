import {LitElement, html} from '@polymer/lit-element';
import client from '../../client'

class UserList extends LitElement {

  static get properties() {
    return {
      users: {type: Array}
    };
  }

  constructor() {
    super();
    const GET_USERS = gql`
      query {
        users {
          id
        }
      }
    `
    client.query({query: GET_USERS}).then(res => {
      console.log(res)
    })
  }

  render() {
    return html`<style> .mood { color: green; } </style>
      Web Components are <span class="mood">${this.mood}</span>!`;
  }

}

customElements.define('user-list', UserList);