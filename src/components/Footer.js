import * as React from "react";

import email from "../img/social/email.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";


const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          
          
          
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                   
                    
                  </ul>
                </section>
              </div>
             
             
             
             
              <div className="column is-4 social">
               
               
                <a title="twitter" href="https://mobile.twitter.com/traderx21502843">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="email" href="mailto:so@shinochi.com">
                  <img
                    src={email}
                    alt="Email"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;
