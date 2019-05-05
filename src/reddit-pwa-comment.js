import { LitElement, html, css } from 'lit-element';

class RedditPwaComment extends LitElement {
  static get properties() {
    return {
      depth: { type: Number },
      comment: { type: String },
      childrenComments: { type: String },
      collapsed: { type: Boolean, reflect: true },
      author: { type: String }
    };
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
          overflow: hidden;
          margin-top: 5px;
        }

        :host([collapsed]) {
          height: 15px;
          background-color: grey;
          color: white;
        }
        .depth-0 {margin-left: 20px;}
        .depth-1 {margin-left: 40px;}
        .depth-2 {margin-left: 60px;}
        .depth-3 {margin-left: 80px;}

        button {
          width: 100%;
          background-color: Transparent;
          border: none;
          text-align: left;
          padding-left: 0;
        }
      `,
    ];
  }

  render() {
    return html`
      <button class="depth-${this.depth}" @click=${() => this.collapsed = !this.collapsed}>
        ${this.collapsed ? '►' : '▼'}
        ${this.author}
      </button>
      <div class="depth-${this.depth}">${this.comment} depth: ${this.depth}</div>

      ${this.childrenComments.length > 0
        ? this.childrenComments.map(child => html`
          <reddit-pwa-comment
            .author=${child.author}
            .depth=${child.depth}
            .comment=${child.comment}
            .childrenComments=${child.children}>
          </reddit-pwa-comment>
        `)
        : ''
      }
    `;
  }
}

customElements.define('reddit-pwa-comment', RedditPwaComment);
