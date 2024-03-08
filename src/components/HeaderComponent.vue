<template>
  <header class="header">
    <div class="first-page">
      <div class="grid wide">
        <div class="first-page__nav">
          <div class="first-page__nav-agency">AGENCY</div>
          <div class="first-page__nav-catalogue">
            <ul
              class="first-page__nav-catalogue-list"
              :class="{ 'first-page__nav-catalogue-list-active': isNavActive }"
            >
              <li class="first-page__nav-catalogue-item">
                <i
                  class="first-page__nav-catalogue-item-link-icon fa-solid fa-x"
                  @click="closeNav"
                ></i>
              </li>
              <li class="first-page__nav-catalogue-item">
                <a href="#" class="first-page__nav-catalogue-item-link"
                  >About</a
                >
              </li>
              <li class="first-page__nav-catalogue-item">
                <a href="#" class="first-page__nav-catalogue-item-link"
                  >Portfolio</a
                >
              </li>
              <li class="first-page__nav-catalogue-item">
                <a href="#" class="first-page__nav-catalogue-item-link"
                  >Contact</a
                >
              </li>
            </ul>
            <img
              src="../assets/img/icon/bar.svg"
              alt=""
              class="first-page__nav-catalogue-button-img"
              @click="toggleNav"
            />
          </div>
        </div>
        <div class="first-page__slider">
          <div class="first-page__slider-item">
            <div class="first-page__slider-item-main-content">
              WE CREATE AMAZING SITES WITH EASE
            </div>
            <img
              src="../assets/img/icon/square-point.svg"
              alt=""
              class="first-page__slider-item-square-point"
            />
            <img
              src="../assets/img/icon/flower.svg"
              alt=""
              class="first-page__slider-item-icon-flower"
            />
            <div class="first-page__slider-item-content">
              A PEEP AT SOME DISTANT ORB HAS POWER TO RAISE AND PURIFY
            </div>
            <div class="first-page__slider-item-box"></div>
            <img
              class="first-page__slider-item-box-img"
              alt=""
              src="../assets/img/img/1.png"
            />
          </div>
          <div class="first-page__slider-item">
            <div class="first-page__slider-item-main-content">
              WE ALSO DESIGN WEBSITE
            </div>
            <img
              src="../assets/img/icon/square-point.svg"
              alt=""
              class="first-page__slider-item-square-point"
            />
            <img
              src="../assets/img/icon/flower.svg"
              alt=""
              class="first-page__slider-item-icon-flower"
            />
            <div class="first-page__slider-item-content">
              CREATE VALUE FOR PEOPLE IS MY HAPPY
            </div>
            <div
              class="first-page__slider-item-box first-page__slider-item-box-green"
            ></div>
            <img
              class="first-page__slider-item-box-img"
              alt=""
              src="../assets/img/img/1.png"
            />
          </div>
          <div class="first-page__slider-item">
            <div class="first-page__slider-item-main-content">
              WE HAVE THE EMPLOYEE PERFECT
            </div>
            <img
              src="../assets/img/icon/square-point.svg"
              alt=""
              class="first-page__slider-item-square-point"
            />
            <img
              src="../assets/img/icon/flower.svg"
              alt=""
              class="first-page__slider-item-icon-flower"
            />
            <div class="first-page__slider-item-content">
              PRODUCT GOOD, VALUE GOOD, VALUE VALUE
            </div>
            <div
              class="first-page__slider-item-box first-page__slider-item-box-blue"
            ></div>
            <img
              class="first-page__slider-item-box-img"
              alt=""
              src="../assets/img/img/1.png"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="second-page">
    <div class="grid wide">
      <div class="second-page__header">
        <div class="second-page__header-container-button">
          <button
            @click="previousSlide"
            class="second-page__header-button-left"
          >
            <img
              class="second-page__header-button-left-img"
              src="../assets/img/icon/arrow-left.svg"
              alt=""
            />
          </button>
          <button @click="nextSlide" class="second-page__header-button-right">
            <img
              class="second-page__header-button-right-img"
              src="../assets/img/icon/arrow-right.svg"
              alt=""
            />
          </button>
          <div class="second-page__header-button-pagination">
            <span class="second-page__header-button-pagination-page-number">{{
              firstPageCurrentIndex + 1
            }}</span
            >/<span
              class="second-page__header-button-pagination-total-page-number"
              >{{ firstPageSlides.length }}</span
            >
          </div>
        </div>
      </div>
      <div class="row b-gutter">
        <div class="col l-6 m-6 c-12">
          <div class="second-page___body-video">
            <div
              ref="background"
              class="second-page___body-video-background"
              @click="playVideo"
            >
              <img
                src="../assets/img/img/2.png"
                alt=""
                class="second-page___body-video-background-img"
              />
              <div class="second-page___body-video-background-oval"></div>
              <img
                class="second-page___body-video-background-square-top"
                alt=""
                src="../assets/img/icon/square-point.svg"
              />
              <img
                class="second-page___body-video-background-square-bottom"
                alt=""
                src="../assets/img/icon/square-point.svg"
              />
              <button class="second-page___body-video-background-button">
                <img
                  class="second-page___body-video-background-button-icon"
                  alt=""
                  src="../assets/img/icon/Triangle.svg"
                />
              </button>
            </div>
            <iframe
              class="second-page___body-video-src"
              ref="video"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>

        <div class="col l-6 m-6 c-12">
          <div class="second-page___body-content">
            <div class="second-page___body-content-background">
              <h3 class="second-page___body-content-title">
                LETS TAKE ADVANTAGE
              </h3>
              <div class="second-page___body-content-center">
                SABLE CLOUD BENEATH WAS DISHED
              </div>
              <div class="second-page___body-content-footer">
                Best for active freelancers and designers who need more projects
                and premium features code and unlock more.
              </div>
              <div class="second-page___body-content-service">
                <a href="#" class="second-page___body-content-service-link">
                  <div class="second-page___body-content-service-button">
                    LEARN MORE
                  </div>
                </a>
                <a href="#" class="second-page___body-content-service-link">
                  <div class="second-page___body-content-service-explore">
                    Explore services
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
import { ref } from "vue";

export default {
  setup() {
    const isNavActive = ref(false);

    const toggleNav = () => {
      isNavActive.value = !isNavActive.value;
    };

    const closeNav = () => {
      isNavActive.value = false;
    };

    const handleClick = (e) => {
      if (!e.target.closest(".first-page__nav-catalogue-button-img")) {
        closeNav();
      }
    };

    document.addEventListener("click", handleClick);

    return {
      isNavActive,
      toggleNav,
      closeNav,
    };
  },
  beforeUnmount() {
    document.removeEventListener("click", this.handleClick);
  },
  data() {
    return {
      firstPageSlides: [],
      firstPageCurrentIndex: 0,
      isFirstPageShowSlide: true,
    };
  },
  mounted() {
    this.firstPageSlides = document.querySelectorAll(
      ".first-page__slider-item"
    );
    this.firstPageShowSlide(this.firstPageCurrentIndex);
  },
  methods: {
    // slide page first
    previousSlide() {
      this.firstPageCurrentIndex--;
      if (this.firstPageCurrentIndex < 0) {
        this.firstPageCurrentIndex = this.firstPageSlides.length - 1;
      }
      this.firstPageShowSlide(this.firstPageCurrentIndex);
    },
    nextSlide() {
      this.firstPageCurrentIndex++;
      if (this.firstPageCurrentIndex >= this.firstPageSlides.length) {
        this.firstPageCurrentIndex = 0;
      }
      this.firstPageShowSlide(this.firstPageCurrentIndex);
    },
    firstPageShowSlide(index) {
      for (let i = 0; i < this.firstPageSlides.length; i++) {
        this.firstPageSlides[i].style.display = "none";
      }
      let slide = this.firstPageSlides[index];
      if (this.isFirstPageShowSlide) {
        slide.style.display = "block";
        this.isFirstPageShowSlide = false;
      } else {
        slide.style.display = "block";
        slide.style.animation = "fadeInAnimation 2s linear";
      }
    },

    // slide page second
    playVideo() {
      const secondPageBackground = this.$refs.background;
      const secondPageVideo = this.$refs.video;
      secondPageBackground.style.display = "none";
      secondPageVideo.style.zIndex = "4";
      secondPageVideo.src =
        "https://www.youtube.com/embed/h4Bq69HfR0Y?autoplay=1&loop=1&autopause=0&muted=1";
    },
  },
};
</script>


<style>
/* first-page */
.first-page {
  height: 704px;
  background-color: var(--black-color);
}
.first-page__nav {
  display: flex;
  justify-content: space-between;
  height: var(--height-nav-first-page);
  color: var(--white-color);
  align-items: center;
}
.first-page__nav-agency {
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
}
.first-page__nav-catalogue {
  display: flex;
}
.first-page__nav-catalogue-list {
  display: flex;
  font-family: "DM Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
}
.first-page__nav-catalogue-item {
  margin-left: 60px;
}
.first-page__nav-catalogue-item-link {
  text-decoration: none;
  color: var(--white-color);
  font-family: "DM sans", sans-serif;
}
.first-page__nav-catalogue-item-link-icon {
  display: none;
}
.first-page__nav-catalogue-button-img {
  display: none;
  margin-left: 60px;
  width: 30px;
  height: 28px;
  cursor: pointer;
}
.first-page__slider {
  position: relative;
}
.first-page__slider-item {
  /* animation: fadeInAnimation 2s linear; */
}
@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.first-page__slider-item-main-content {
  color: var(--white-color);
  font-family: "Inknut Antiqua", serif;
  font-weight: 900;
  width: 724px;
  height: 240px;
  font-size: 72px;
  line-height: 80px;
  position: absolute;
  top: calc(202px - var(--height-nav-first-page));
  left: 0px;
  z-index: 1;
}
.first-page__slider-item-square-point {
  width: 268px;
  height: 268px;
  position: absolute;
  top: calc(225px - var(--height-nav-first-page));
  right: 0;
}
.first-page__slider-item-icon-flower {
  width: 56px;
  height: 56px;
  position: absolute;
  top: calc(494px - var(--height-nav-first-page));
}
.first-page__slider-item-content {
  color: var(--white-color);
  font-family: "Roboto Condensed", serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 3px;
  width: 370px;
  height: 62px;
  position: absolute;
  top: calc(491px - var(--height-nav-first-page));
  left: 100px;
}
.first-page__slider-item-box {
  width: 570px;
  height: 624px;
  background-color: var(--primary-color);
  position: absolute;
  top: calc(320px - var(--height-nav-first-page));
  left: 500px;
}
.first-page__slider-item-box.first-page__slider-item-box-green {
  background-color: var(--green-color);
}
.first-page__slider-item-box.first-page__slider-item-box-blue {
  background-color: var(--blue-color);
}
.first-page__slider-item-box-img {
  width: 684px;
  height: 513px;
  position: absolute;
  top: 384px;
  left: 443px;
}

/* second-page */
.second-page {
  background-color: var(--white-color);
  height: 1216px;
}
.second-page__header {
  height: 336px;
  border-bottom: 2px solid var(--black-color);
}
.second-page__header-container-button {
  height: 100%;
  display: flex;
  align-items: center;
}
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

.second-page__header-button-pagination {
  font-family: "Roboto Condensed", sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
}
.second-page___body {
  border-top: 2px solid var(--black-color);
}
.second-page___body-video {
  height: 878px;
  display: flex;
  align-items: center;
  position: relative;
}
.second-page___body-video-background {
  width: 756px;
  height: 567px;
  position: absolute;
  left: -135px;
  /* chú ý  */
  z-index: 2;
  background-color: var(--white-color);
}
.second-page___body-video-background-img {
  width: 756px;
  height: 567px;
  position: absolute;
  z-index: 3;
  cursor: pointer;
}
.second-page___body-video-background-oval {
  position: absolute;
  top: calc((536px - 470px) / 2);
  left: calc((756px - 470px) / 2);
  background-color: var(--yellow-color);
  width: 470px;
  height: 470px;
  z-index: 2;
  border-radius: 50%;
}
.second-page___body-video-background-square-top {
  position: absolute;
  top: 0;
  left: 183px;
  z-index: 1;
}
.second-page___body-video-background-square-bottom {
  position: absolute;
  top: 268px;
  left: 183px;
  z-index: 1;
}
.second-page___body-video-background-button {
  position: absolute;
  top: calc((567px - 110px) / 2);
  left: calc((756px - 110px) / 2);
  width: 110px;
  height: 110px;
  background-color: var(--white-color);
  border-radius: 50%;
  z-index: 4;
  border: 0;
  cursor: pointer;
}
.second-page___body-video-background-button:hover {
}
.second-page___body-video-background-button-icon {
  position: absolute;
  left: 46px;
  top: 38px;
}
.second-page___body-video-src {
  width: 500px;
  height: 500px;
  position: absolute;
  left: 10px;
  /* chú ý  */
  z-index: 1;
}
.second-page___body-content {
  position: relative;
  /* chú ý  */
  z-index: 3;
}
.second-page___body-content-background {
}
.second-page___body-content-title {
  margin-top: 231px;
  font-family: "Inknut Antiqua";
  font-weight: 900;
  font-size: 56px;
  line-height: 64px;
  width: 449px;
  height: 128px;
}
.second-page___body-content-center {
  font-family: "Roboto Condensed", serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 3px;
  margin-top: 34px;
}
.second-page___body-content-footer {
  font-family: "DM Sans", serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: var(--black-color);
  opacity: 50.13%;
  width: 470px;
  height: 71px;
  margin-top: 32px;
}
.second-page___body-content-service {
  display: flex;
  margin-top: 30px;
}
.second-page___body-content-service-link {
  text-decoration: none;
}
.second-page___body-content-service-button {
  background-color: var(--primary-color);
  color: var(--white-color);
  width: 170px;
  height: 48px;
  text-align: center;
  line-height: 48px;
  border-radius: 3px;
  font-family: "Roboto Condensed", serif;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 1px;
  cursor: pointer;
}
.second-page___body-content-service-button:hover {
  opacity: 0.7;
}
.second-page___body-content-service-explore {
  font-family: "Roboto Condensed", serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 48px;
  margin-left: 50px;
  background-color: var(--white-color);
  color: var(--black-color);
  width: 170px;
  height: 48px;
  text-align: center;
  border-radius: 3px;
  cursor: pointer;
}
.second-page___body-content-service-explore:hover {
  background-color: burlywood;
}
</style>
