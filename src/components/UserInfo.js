import React, { Component } from 'react'
import hesperis from '../../content/images/avatar.png'
import patreon from '../../content/thumbnails/patreon.png'
import kofi from '../../content/thumbnails/kofi.png'

export default class UserInfo extends Component {
  render() {
    return (
      <aside className="note">
        <div className="container note-container">
          <div className="flex-author">
            <div className="flex-avatar">
              <img className="avatar" src={hesperis} alt="Hesperis" />
            </div>
            <div>
              <p>
                Je suis Nicolas Dessenius. Je suis développeur web autodidacte. J’ai tendance à écrire sur les sujet que j’apprends.
                Aussi, je suis auteur amateur et j’essaie de dessiner pendant mon temps libre.
                Ce site ne comprend ni publicité ni opérations commerciales.
              </p>

              <div className="flex">
                <a
                  href="https://ko-fi.com/hesperis"
                  className="donate-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={kofi} className="coffee-icon" alt="Coffee icon" />
                  Offre-moi un café :)
                </a>
                {/* <a
                  className="patreon-button"
                  href="https://www.patreon.com/taniarascia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={patreon} height="50" width="50" /> Become a Patron
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </aside>
    )
  }
}
