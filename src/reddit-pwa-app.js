import { LitElement, html, css } from 'lit-element';
import './reddit-pwa-comment.js';

// response[0] is some data about the post
// response[1].data.children has the comments

// and then for each comment its replies.data.children



class RedditPwaApp extends LitElement {
  static get properties() {
    return {
      childrenComments: { type: String },
    };
  }

  constructor() {
    super();
    this.childrenComments = [
      {
        depth: 0,
        author: 'author',
        comment: 'Do you like hamburgers',
        children: [
          {
            depth: 1,
            author: 'author',
            comment: 'Yes I really like hamburgers',
            children: [
              {
                depth: 2,
                author: 'author',
                comment: 'Me too!',
                children: []
              },
              {
                depth: 2,
                author: 'author',
                comment: 'I dont like hamburgers',
                children: []
              }
            ]
          }
        ]
      },
      {
        depth: 0,
        author: 'author',
        comment: 'Do you like pizza',
        children: [
          {
            depth: 1,
            author: 'author',
            comment: 'I love pizza!',
            children: []
          }
        ]
      }
    ];
  }

  static get styles() {
    return [
      css`

      `,
    ];
  }

  render() {
    return html`
      ${this.childrenComments.map(child => html`
        <reddit-pwa-comment
          .author=${child.author}
          .depth=${child.depth}
          .comment=${child.comment}
          .childrenComments=${child.children}>
        </reddit-pwa-comment>
      `)}
    `;
  }
}

customElements.define('reddit-pwa-app', RedditPwaApp);
