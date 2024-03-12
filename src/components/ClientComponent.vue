<template>
  <section class="five-page">
    <div class="five-page__header">
      <div class="grid wide">
        <div class="five-page__header-container">
          <div class="five-page__header-main-content">What Our Clients Say</div>
          <div class="five-page__header-content">Testimonials</div>
          <div ref="fivePageSlide" class="five-page__header-slider">
            <div
              class="five-page__header-slider-article five-page__header-slider-article-green"
            >
              <div class="five-page__header-slider-article-container">
                <div class="five-page__header-slider-article-container-user">
                  <img
                    src="../assets/img/img/5.png"
                    alt="image"
                    class="five-page__header-slider-article-container-user-image"
                  />
                  <div
                    class="five-page__header-slider-article-container-user-info"
                  >
                    <div
                      class="five-page__header-slider-article-container-user-info-name"
                    >
                      Helena Brauer
                    </div>
                    <div
                      class="five-page__header-slider-article-container-user-info-company"
                    >
                      Apple Inc.
                    </div>
                  </div>
                </div>
                <div
                  class="five-page__header-slider-article-container-description"
                >
                  What looked like a small patch of purple grass, above five
                  feet square, was moving across the sand in their direction.
                  When it came near enough he perceived that it was not grass;
                  there were no blades, but only purple roots. The roots were
                  revolving, for each small plant in the whole patch, like the
                  spokes of a rimless wheel.
                </div>
              </div>
            </div>
            <div
              class="five-page__header-slider-article five-page__header-slider-article-purple"
            >
              <div class="five-page__header-slider-article-container">
                <div class="five-page__header-slider-article-container-user">
                  <img
                    src="../assets/img/img/6.png"
                    alt="image"
                    class="five-page__header-slider-article-container-user-image"
                  />
                  <div
                    class="five-page__header-slider-article-container-user-info"
                  >
                    <div
                      class="five-page__header-slider-article-container-user-info-name"
                    >
                      Kay Totleben
                    </div>
                    <div
                      class="five-page__header-slider-article-container-user-info-company"
                    >
                      Microsoft
                    </div>
                  </div>
                </div>
                <div
                  class="five-page__header-slider-article-container-description"
                >
                  What looked like a small patch of purple grass, above five
                  feet square, was moving across the sand in their direction.
                  When it came near enough he perceived that it was not grass;
                  there were no blades, but only purple roots. The roots were
                  revolving, for each small plant in the whole patch, like the
                  spokes of a rimless wheel.
                </div>
              </div>
            </div>
            <div
              class="five-page__header-slider-article five-page__header-slider-article-blue"
            >
              <div class="five-page__header-slider-article-container">
                <div class="five-page__header-slider-article-container-user">
                  <img
                    src="../assets/img/img/5.png"
                    alt="image"
                    class="five-page__header-slider-article-container-user-image"
                  />
                  <div
                    class="five-page__header-slider-article-container-user-info"
                  >
                    <div
                      class="five-page__header-slider-article-container-user-info-name"
                    >
                      Helena Brauer
                    </div>
                    <div
                      class="five-page__header-slider-article-container-user-info-company"
                    >
                      Apple Inc.
                    </div>
                  </div>
                </div>
                <div
                  class="five-page__header-slider-article-container-description"
                >
                  What looked like a small patch of purple grass, above five
                  feet square, was moving across the sand in their direction.
                  When it came near enough he perceived that it was not grass;
                  there were no blades, but only purple roots. The roots were
                  revolving, for each small plant in the whole patch, like the
                  spokes of a rimless wheel.
                </div>
              </div>
            </div>
            <div
              class="five-page__header-slider-article five-page__header-slider-article-primary"
            >
              <div class="five-page__header-slider-article-container">
                <div class="five-page__header-slider-article-container-user">
                  <img
                    src="../assets/img/img/6.png"
                    alt="image"
                    class="five-page__header-slider-article-container-user-image"
                  />
                  <div
                    class="five-page__header-slider-article-container-user-info"
                  >
                    <div
                      class="five-page__header-slider-article-container-user-info-name"
                    >
                      Kay Totleben
                    </div>
                    <div
                      class="five-page__header-slider-article-container-user-info-company"
                    >
                      Microsoft
                    </div>
                  </div>
                </div>
                <div
                  class="five-page__header-slider-article-container-description"
                >
                  What looked like a small patch of purple grass, above five
                  feet square, was moving across the sand in their direction.
                  When it came near enough he perceived that it was not grass;
                  there were no blades, but only purple roots. The roots were
                  revolving, for each small plant in the whole patch, like the
                  spokes of a rimless wheel.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="five-page__body">
      <div class="grid wide">
        <div class="five-page__header-padding"></div>
        <div class="five-page__body-button">
          <button
            @click="slideToLeft"
            class="five-page__body-button-click-left second-page__header-button-left"
          >
            <img
              class="second-page__header-button-left-img"
              src="../assets/img/icon/arrow-left.svg"
              alt="image"
            />
          </button>
          <button
            @click="slideToRight"
            class="five-page__body-button-click-right second-page__header-button-right"
          >
            <img
              class="second-page__header-button-right-img"
              src="../assets/img/icon/arrow-right.svg"
              alt="image"
            />
          </button>
        </div>
        <div class="five-page__body-footer">
          <ul class="five-page__body-footer-list">
            <li class="five-page__body-footer-item">
              <a
                href="https://www.w3schools.com"
                class="five-page__body-footer-item-link"
              >
                <img
                  src="../assets/img/img/Atlassian.svg"
                  alt="image"
                  class="five-page__body-footer-item-img"
                />
              </a>
            </li>
            <li class="five-page__body-footer-item">
              <a
                href="https://www.w3schools.com"
                class="five-page__body-footer-item-link"
              >
                <img
                  src="../assets/img/img/slack.svg"
                  alt="image"
                  class="five-page__body-footer-item-img"
                />
              </a>
            </li>
            <li class="five-page__body-footer-item">
              <a
                href="https://www.w3schools.com"
                class="five-page__body-footer-item-link"
              >
                <img
                  src="../assets/img/img/dropbox.svg"
                  alt="image"
                  class="five-page__body-footer-item-img"
                />
              </a>
            </li>
            <li class="five-page__body-footer-item">
              <a
                href="https://www.w3schools.com"
                class="five-page__body-footer-item-link"
              >
                <img
                  src="../assets/img/img/shopify.svg"
                  alt="image"
                  class="five-page__body-footer-item-img"
                />
              </a>
            </li>
            <li class="five-page__body-footer-item">
              <a
                href="https://www.w3schools.com"
                class="five-page__body-footer-item-link"
              >
                <img
                  src="../assets/img/img/Capture.svg"
                  alt="image"
                  class="five-page__body-footer-item-img"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    slideToLeft() {
      const fivePageSlide = this.$refs.fivePageSlide;
      const fivePageFirstItem = fivePageSlide.querySelector(
        ".five-page__header-slider-article:first-child"
      );
      fivePageSlide.appendChild(fivePageFirstItem);
    },
    slideToRight() {
      const fivePageSlide = this.$refs.fivePageSlide;
      const fivePageLastItem = fivePageSlide.querySelector(
        ".five-page__header-slider-article:last-child"
      );
      fivePageSlide.prepend(fivePageLastItem);
    },
  },
};
</script>


<style>
/* five-page */
.five-page {
  height: 1072px;
}
.five-page__header {
  background-color: var(--black-color);
  height: 464px;
}
.five-page__header-container {
  position: relative;
}
.five-page__header-main-content {
  position: absolute;
  top: 153px;
  left: 0px;
  color: var(--white-color);
  text-transform: uppercase;
  font-family: "Inknut Antiqua", serif;
  font-weight: 900;
  font-size: 56px;
  line-height: 64px;
  width: 455px;
  height: 128px;
}
.five-page__header-content {
  position: absolute;
  top: 315px;
  left: 0px;
  font-family: "Roboto Condensed", serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 3px;
  color: var(--white-color);
  text-transform: uppercase;
}
.five-page__header-slider {
  position: absolute;
  top: 144px;
  left: 788px;
  width: max-content;
}
.five-page__header-slider-article {
  width: 470px;
  height: 512px;
  border-radius: 2px;
  display: inline-block;
  transition: 1s;
  position: absolute;
}
.five-page__header-slider-article-green {
  background-color: var(--green-color);
}
.five-page__header-slider-article-purple {
  background-color: var(--purple-color);
}
.five-page__header-slider-article-blue {
  background-color: var(--blue-color);
}
.five-page__header-slider-article-primary {
  background-color: var(--primary-color);
}
.five-page__header-slider-article:nth-child(1) {
  transform: translate(-150%);
  opacity: 0;
}
.five-page__header-slider-article:nth-child(2) {
  transform: translate(-40%);
}
.five-page__header-slider-article:nth-child(3) {
  transform: translate(70%);
}
.five-page__header-slider-article:nth-child(4) {
  transform: translate(180%);
}
.five-page__header-slider-article:nth-child(n + 5) {
  transform: translate(290%);
  opacity: 0;
}
.five-page__header-slider-article-container {
  margin: 48px;
}
.five-page__header-slider-article-container-user {
  display: flex;
}
.five-page__header-slider-article-container-user-image {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.five-page__header-slider-article-container-user-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.five-page__header-slider-article-container-user-info-name {
  font-family: "Roboto Condensed", serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: var(--white-color);
}
.five-page__header-slider-article-container-user-info-company {
  font-family: "DM Sans", serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: var(--white-color);
}
.five-page__header-slider-article-container-description {
  margin-top: 107px;
  font-family: "DM Sans", serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: var(--white-color);
  opacity: 50.3%;
}

.five-page__body-button {
  display: flex;
  align-items: center;
  height: 320px;
  border-bottom: 2px solid var(--black-color);
}

.five-page__body-footer {
  height: 286px;
  border-bottom: 2px solid var(--black-color);
}
.five-page__body-footer-list {
  display: flex;
  justify-content: space-around;
  height: 100%;
  align-items: center;
}

.five-page__body-footer-item-img:hover {
  opacity: 0.7;
}

/* second-page */
.second-page__header-button-left {
  position: relative;
  height: 48px;
  width: 48px;
  background-color: var(--primary-color);
  border-radius: 50%;
  margin-right: 8px;
  border: none;
  cursor: pointer;
}
.second-page__header-button-left:hover {
  opacity: 0.7;
}
.second-page__header-button-left-img {
  position: absolute;
  top: 16px;
  left: 17px;
  width: 10px;
  height: 16px;
}
.second-page__header-button-right {
  position: relative;
  height: 48px;
  width: 48px;
  background-color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 24px;
  border: none;
  cursor: pointer;
}
.second-page__header-button-right:hover {
  opacity: 0.7;
}
.second-page__header-button-right-img {
  position: absolute;
  top: 16px;
  left: 21px;
  width: 10px;
  height: 16px;
}

/* mobile responsive */
@media (min-width: 280px) and (max-width: 739px) {
  .hide-on-mobile {
    display: none;
  }
  /* five page */
  .five-page {
    height: unset;
  }
  .five-page__header-slider {
    max-width: unset;
    width: 100%;
    height: 500px;
    position: unset;
  }
  .five-page__header-slider-article {
    width: 100%;
    height: 640px;
    border-radius: 2px;
    position: unset;
  }
  .five-page__header-slider-article:nth-child(1) {
    transform: translate(0%);
    display: none;
  }
  .five-page__header-slider-article:nth-child(2) {
    transform: translate(-150%);
    display: none;
  }

  .five-page__header-slider-article:nth-child(3) {
    opacity: 0;
    animation: fade-in ease 1s forwards;
    transform: translate(0%);
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .five-page__header-slider-article:nth-child(4) {
    transform: translate(180%);
    display: none;
  }
  .five-page__header-slider-article:nth-child(n + 5) {
    transform: translate(290%);
    display: none;
  }
  .five-page__header-main-content {
    position: unset;
    font-size: 40px;
    line-height: 48px;
    padding-top: 103px;
    height: unset;
    width: 100%;
  }
  .five-page__header-content {
    position: unset;
    margin-top: 36px;
    margin-bottom: 69px;
  }
  .five-page__header-padding {
    height: 512px;
    width: 100%;
  }
  .five-page__body-button {
    height: 208px;
    justify-content: center;
  }
  .five-page__body-footer-list {
    flex-direction: column;
    margin: 40px;
  }
  .five-page__body-footer {
    height: 542px;
    border: unset;
  }
}

@media (min-width: 740px) and (max-width: 1169px) {
  .hide-on-tablet {
    display: none;
  }
  /* five page */
  .five-page {
    height: unset;
  }
  .five-page__header-slider {
    max-width: unset;
    width: 100%;
    height: 500px;
    position: unset;
  }
  .five-page__header-slider-article {
    width: 100%;
    height: 640px;
    border-radius: 2px;
    position: unset;
  }
  .five-page__header-slider-article:nth-child(1) {
    transform: translate(0%);
    display: none;
  }
  .five-page__header-slider-article:nth-child(2) {
    transform: translate(-150%);
    display: none;
  }

  .five-page__header-slider-article:nth-child(3) {
    opacity: 0;
    animation: fade-in ease 1s forwards;
    transform: translate(0%);
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .five-page__header-slider-article:nth-child(4) {
    transform: translate(180%);
    display: none;
  }
  .five-page__header-slider-article:nth-child(n + 5) {
    transform: translate(290%);
    display: none;
  }

  .five-page__header-main-content {
    position: unset;
    font-size: 40px;
    line-height: 48px;
    padding-top: 103px;
    height: unset;
    width: 100%;
  }
  .five-page__header-content {
    position: unset;
    margin-top: 36px;
    margin-bottom: 69px;
  }
  .five-page__header-padding {
    height: 512px;
    width: 100%;
  }
  .five-page__body-button {
    height: 208px;
    justify-content: center;
  }
  .five-page__body-footer-list {
    flex-direction: column;
    margin: 40px;
  }
  .five-page__body-footer {
    height: 542px;
    border: unset;
  }
}
</style>
