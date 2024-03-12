<template>
  <footer class="footer">
    <!-- seven-page -->
    <div class="seven-page">
      <div class="grid wide">
        <div class="seven-page-container">
          <div class="seven-page__header">News letter Sign Up</div>
          <div class="seven-page__subscribe">
            <div class="seven-page__subscribe-container">
              <div class="seven-page__subscribe-container-header">
                Get in touch
              </div>
              <input
                type="email"
                class="seven-page__subscribe-container-input"
                placeholder="Your email"
              />
              <div class="seven-page__subscribe-container-button">
                SUBSCRIBE
              </div>
            </div>
          </div>
          <div class="seven-page__border"></div>
          <div class="seven-page__footer">
            <div class="grid wide">
              <div class="row b-gutter">
                <div class="col l-3 m-6 c-12">
                  <div class="seven-page__footer-head">Agency</div>
                  <div
                    class="seven-page__footer-item seven-page__footer-item-thin"
                  >
                    Agency © 2019.
                  </div>
                  <div
                    class="seven-page__footer-item seven-page__footer-item-thin"
                  >
                    All Rights Reserved.
                  </div>
                </div>
                <div class="col l-3 m-6 c-12">
                  <div class="seven-page__footer-head">Address</div>
                  <div
                    class="seven-page__footer-item seven-page__footer-item-thin"
                  >
                    3899 Fusce Rd.
                  </div>
                  <div
                    class="seven-page__footer-item seven-page__footer-item-thin"
                  >
                    Frederick Nebraska 20620
                  </div>
                  <div
                    class="seven-page__footer-item seven-page__footer-item-margin"
                  >
                    <a href="mailto:info@agency.com">info@agency.com</a>
                  </div>
                  <div
                    class="seven-page__footer-item seven-page__footer-item-margin"
                  >
                    <a href="tel:+1(234)567-89-00">+1(234)567-89-00</a>
                  </div>
                </div>
                <div class="col l-3 m-6 c-12">
                  <div class="seven-page__footer-head">Menu</div>
                  <div class="seven-page__footer-item">About</div>
                  <div class="seven-page__footer-item">Portfolio</div>
                  <div class="seven-page__footer-item">Blog</div>
                  <div class="seven-page__footer-item">Testimonials</div>
                  <div class="seven-page__footer-item">Contract</div>
                </div>
                <div class="col l-3 m-6 c-12">
                  <ul class="seven-page__footer-list-social">
                    <li class="seven-page__footer-item-social">
                      <a href="#" class="seven-page__footer-item-social-link">
                        <img
                          src="../assets/img/icon/facebook.svg"
                          alt="image"
                          class="seven-page__footer-item-social-icon"
                        />
                      </a>
                    </li>
                    <li class="seven-page__footer-item-social">
                      <a href="#" class="seven-page__footer-item-social-link">
                        <img
                          src="../assets/img/icon/twitter.svg"
                          alt="image"
                          class="seven-page__footer-item-social-icon"
                        />
                      </a>
                    </li>
                    <li class="seven-page__footer-item-social">
                      <a href="#" class="seven-page__footer-item-social-link">
                        <img
                          src="../assets/img/icon/instagram.svg"
                          alt="image"
                          class="seven-page__footer-social-item-icon"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style>
/* seven-page */
.seven-page {
  background-color: var(--black-color);
  height: 864px;
}
.seven-page-container {
  position: relative;
}
.seven-page__header {
  color: var(--white-color);
  font-family: "Inknut Antiqua", serif;
  font-weight: 900;
  font-size: 40px;
  line-height: 48px;
  text-transform: uppercase;
  margin: 135px 0px 105px 0px;
  display: inline-block;
  height: 96px;
  width: 364px;
}
.seven-page__subscribe {
  background-color: var(--primary-color);
  position: absolute;
  width: 470px;
  height: 288px;
  border-radius: 2px;
  top: 128px;
  left: 600px;
}
.seven-page__subscribe-container {
  margin: 43px 48px;
}
.seven-page__subscribe-container-header {
  font-family: "Roboto Condensed", serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 3px;
  color: var(--white-color);
  text-transform: uppercase;
}
.seven-page__subscribe-container-input {
  margin-top: 21px;
  padding: 8px 16px;
  width: 100%;
  height: 48px;
  border-radius: 2px;
  outline: none;
  border: 0;
  font-family: "DM-sans";
}
.seven-page__subscribe-container-button {
  font-family: "Roboto Condensed", serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 48px;
  letter-spacing: 1px;
  text-align: center;
  color: var(--white-color);
  background-color: #ff635c;
  border-radius: 2px;
  margin-top: 32px;
  cursor: pointer;
}
.seven-page__border {
  border-bottom: 2px solid var(--white-color);
  margin-bottom: 174px;
}
.seven-page__footer {
  color: var(--white-color);
}
.seven-page__footer-head {
  font-family: "Roboto Condensed", serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 32px;
}
.seven-page__footer-head.seven-page__footer-head-fat {
  font-family: "Roboto Condensed";
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
}
.seven-page__footer-item {
  font-family: "DM Sans", serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
}
.seven-page__footer-item.seven-page__footer-item-margin {
  margin-top: 16px;
}
.seven-page__footer-item.seven-page__footer-item-margin a {
  text-decoration: none;
  color: var(--white-color);
}
.seven-page__footer-item.seven-page__footer-item-thin {
  opacity: 50.3%;
}

.seven-page__footer-list-social {
  display: flex;
}
.seven-page__footer-item-social {
  width: 48px;
  height: 48px;
  background-color: #333333;
  border-radius: 50%;
  margin-right: 8px;
  text-align: center;
  line-height: 48px;
  font-size: 24px;
  cursor: pointer;
}

/* mobile responsive */
@media (min-width: 280px) and (max-width: 739px) {
  .hide-on-mobile {
    display: none;
  }
  /* seven page */
  .seven-page {
    height: unset;
  }
  .seven-page__header {
    width: 213px;
    height: 144px;
  }
  .seven-page__subscribe {
    background-color: var(--primary-color);
    position: unset;
    width: 100%;
    height: 288px;
    border-radius: 2px;
  }
  .seven-page__subscribe-container {
    padding: 43px 48px;
    margin: unset;
  }
  .seven-page__border {
    border-bottom: unset;
    margin-bottom: 44px;
  }
  .seven-page__footer-head {
    margin-top: 80px;
  }
  .seven-page__footer-list-social {
    margin: 85px 0 96px;
  }
}

@media (min-width: 740px) and (max-width: 1169px) {
  .hide-on-tablet {
    display: none;
  }
  /* seven page */
  .seven-page {
    height: unset;
  }
  .seven-page__header {
    width: 100%;
    height: 144px;
    line-height: 144px;
    margin: 30px 0;
  }
  .seven-page__subscribe {
    background-color: var(--primary-color);
    position: unset;
    width: 100%;
    height: 288px;
    border-radius: 2px;
  }
  .seven-page__subscribe-container {
    padding: 43px 48px;
    margin: unset;
  }
  .seven-page__border {
    border-bottom: unset;
    margin-bottom: 44px;
  }
  .seven-page__footer-head {
    margin-top: 80px;
  }
  .seven-page__footer-list-social {
    margin: 85px 0 96px;
  }
}
</style>
