<template>
  <header class="header">
    <div class="first-page">
      <div class="grid wide">
        <div class="first-page__nav">
          <div class="first-page__nav-agency">AGENCY</div>
          <div class="first-page__nav-catalogue">
            <ul
              class="first-page__nav-catalogue-list"
              :class="{
                'first-page__nav-catalogue-list-active': isActiveClass,
              }"
            >
              <li class="first-page__nav-catalogue-item">
                <i
                  class="first-page__nav-catalogue-item-link-icon fa-solid fa-x"
                  @click="removeActiveClass"
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
              alt="image"
              class="first-page__nav-catalogue-button-img"
              @click="addActiveClass"
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
              alt="image"
              class="first-page__slider-item-square-point"
            />
            <img
              src="../assets/img/icon/flower.svg"
              alt="image"
              class="first-page__slider-item-icon-flower"
            />
            <div class="first-page__slider-item-content">
              A PEEP AT SOME DISTANT ORB HAS POWER TO RAISE AND PURIFY
            </div>
            <div class="first-page__slider-item-box"></div>
            <img
              class="first-page__slider-item-box-img"
              alt="image"
              src="../assets/img/img/1.png"
            />
          </div>
          <div class="first-page__slider-item">
            <div class="first-page__slider-item-main-content">
              WE ALSO DESIGN WEBSITE
            </div>
            <img
              src="../assets/img/icon/square-point.svg"
              alt="image"
              class="first-page__slider-item-square-point"
            />
            <img
              src="../assets/img/icon/flower.svg"
              alt="image"
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
              alt="image"
              src="../assets/img/img/1.png"
            />
          </div>
          <div class="first-page__slider-item">
            <div class="first-page__slider-item-main-content">
              WE HAVE THE EMPLOYEE PERFECT
            </div>
            <img
              src="../assets/img/icon/square-point.svg"
              alt="image"
              class="first-page__slider-item-square-point"
            />
            <img
              src="../assets/img/icon/flower.svg"
              alt="image"
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
              alt="image"
              src="../assets/img/img/1.png"
            />
          </div>
        </div>
      </div>
    </div>
  </header>
  <section class="second-page">
    <div class="grid wide">
      <div class="second-page__header">
        <div class="second-page__header-container-button">
          <button
            class="second-page__header-button-left"
            @click="firstPreButton"
          >
            <img
              class="second-page__header-button-left-img"
              src="../assets/img/icon/arrow-left.svg"
              alt="image"
            />
          </button>
          <button
            class="second-page__header-button-right"
            @click="firstNextButton"
          >
            <img
              class="second-page__header-button-right-img"
              src="../assets/img/icon/arrow-right.svg"
              alt="image"
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
              class="second-page___body-video-background"
              ref="secondPageBackground"
              @click="playVideo"
            >
              <img
                src="../assets/img/img/2.png"
                alt="image"
                class="second-page___body-video-background-img"
              />
              <div class="second-page___body-video-background-oval"></div>
              <img
                class="second-page___body-video-background-square-top"
                alt="image"
                src="../assets/img/icon/square-point.svg"
              />
              <img
                class="second-page___body-video-background-square-bottom"
                alt="image"
                src="../assets/img/icon/square-point.svg"
              />
              <button class="second-page___body-video-background-button">
                <img
                  class="second-page___body-video-background-button-icon"
                  alt="image"
                  src="../assets/img/icon/Triangle.svg"
                />
              </button>
            </div>
            <iframe
              class="second-page___body-video-src"
              ref="secondPageVideo"
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
  </section>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    // close nav firstPage
    const isActiveClass = ref(false);
    // slide firstPage
    let firstPageCurrentIndex = ref(0);
    let isFirstPageShowSlide = true;
    let firstPageSlides = ref([]);
    // play video secondPage
    let secondPageVideo = ref(null);
    let secondPageBackground = ref(null);

    // close nav firstPage
    const addActiveClass = () => {
      isActiveClass.value = true;
    };
    const removeActiveClass = () => {
      isActiveClass.value = false;
    };
    const handleClickOutside = (event) => {
      if (!event.target.closest(".first-page__nav-catalogue")) {
        isActiveClass.value = false;
      }
    };
    // slide firstPage
    const firstPreButton = () => {
      firstPageCurrentIndex.value--;
      if (firstPageCurrentIndex.value < 0) {
        firstPageCurrentIndex.value = firstPageSlides.value.length - 1;
      }
      firstPageShowSlide(firstPageCurrentIndex.value);
    };
    const firstNextButton = () => {
      firstPageCurrentIndex.value++;
      if (firstPageCurrentIndex.value >= firstPageSlides.value.length) {
        firstPageCurrentIndex.value = 0;
      }
      firstPageShowSlide(firstPageCurrentIndex.value);
    };
    const firstPageShowSlide = (index) => {
      for (let i = 0; i < firstPageSlides.value.length; i++) {
        firstPageSlides.value[i].style.display = "none";
      }
      if (isFirstPageShowSlide) {
        firstPageSlides.value[index].style.display = "block";
        isFirstPageShowSlide = false;
      } else {
        firstPageSlides.value[index].style.display = "block";
        firstPageSlides.value[index].style.animation =
          "fadeInAnimation 2s linear";
      }
    };
    // play video secondPage
    const playVideo = () => {
      secondPageBackground.value.style.display = "none";
      secondPageVideo.value.style.zIndex = "4";
      secondPageVideo.value.src =
        "https://www.youtube.com/embed/h4Bq69HfR0Y?autoplay=1&loop=1&autopause=0&muted=1";
    };

    onMounted(() => {
      // close nav firstPage
      document.addEventListener("click", handleClickOutside);
      // slide firstPage
      firstPageSlides.value = Array.from(
        document.querySelectorAll(".first-page__slider-item")
      );
      firstPageShowSlide(firstPageCurrentIndex.value);
    });

    return {
      // close nav firstPage
      isActiveClass,
      addActiveClass,
      removeActiveClass,
      // slide firstPage
      firstPageCurrentIndex,
      firstPageSlides,
      firstPreButton,
      firstNextButton,
      firstPageShowSlide,
      // play video secondPage
      secondPageVideo,
      secondPageBackground,
      playVideo,
    };
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

/* responsive */
@media (min-width: 280px) and (max-width: 739px) {
  .hide-on-mobile {
    display: none;
  }
  /* first-page */
  .first-page {
    height: 704px;
  }
  .first-page__nav-catalogue {
    position: relative;
  }
  .first-page__nav-catalogue-list {
    position: fixed;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #3e3e3f;
    top: 0px;
    right: 0px;
    width: 180px;
    z-index: 5;
    text-align: start;
    padding-top: 14px;
    opacity: 0;
    right: -500px;
    transition: 0.5s;
  }
  .first-page__nav-catalogue-list-active {
    opacity: 1;
    right: 0;
  }
  .first-page__nav-catalogue-item {
    margin-left: unset;
  }
  .first-page__nav-catalogue-item-link {
    margin-left: 0;
    padding: 5px 20px;
    font-size: 20px;
    font-weight: 200;
    color: var(--white-color);
    display: inline-block;
    width: 100%;
  }
  .first-page__nav-catalogue-item-link:hover {
    background-color: burlywood;
  }
  .first-page__nav-catalogue-item-link-icon {
    cursor: pointer;
    display: inline-block;
    font-size: 22px;
    margin-left: 20px;
    margin-top: 4px;
  }
  .first-page__nav-catalogue-button-img {
    display: block;
    z-index: 4;
    cursor: pointer;
  }
  .first-page__slider-item-main-content {
    width: 312px;
    height: 192px;
    font-size: 40px;
    line-height: 48px;
    top: calc(119px - var(--height-nav-first-page));
  }
  .first-page__slider-item-icon-flower {
    top: calc(350px - var(--height-nav-first-page));
  }
  .first-page__slider-item-content {
    width: 229px;
    height: 133px;
    top: calc(347px - var(--height-nav-first-page));
    left: 90px;
  }
  .first-page__slider-item-square-point {
    position: absolute;
    top: calc(471px - var(--height-nav-first-page));
    left: 243px;
  }
  .first-page__slider-item-box {
    width: 100%;
    height: 360px;
    position: absolute;
    top: calc(560px - var(--height-nav-first-page));
    left: 0px;
  }
  .first-page__slider-item-box-img {
    width: 397px;
    height: 298px;
    position: absolute;
    top: calc(591px - var(--height-nav-first-page));
    left: -34px;
  }

  /* second-page */
  .second-page {
    height: 100%;
  }
  .second-page__header {
    display: block;
    height: 384px;
    border-bottom: 2px solid var(--black-color);
    position: relative;
  }
  .second-page__header-container-button {
    height: 100%;
    display: flex;
    align-items: unset;
    position: absolute;
    top: 272px;
  }
  .second-page___body-video {
    height: 527px;
    width: 100%;
    display: block;
    align-items: unset;
    position: relative;
  }
  .second-page___body-video-background {
    width: 100%;
    height: 340px;
    position: absolute;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 136px;
  }
  .second-page___body-video-background-img {
    width: 100%;
    height: 100%;
  }
  .second-page___body-video-background-oval {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .second-page___body-video-background-square-top {
    position: absolute;
    top: -48px;
    left: -20px;
  }
  .second-page___body-video-background-square-bottom {
    display: none;
  }
  .second-page___body-video-background-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .second-page___body-video-background-button-icon {
    position: absolute;
    top: 38px;
    left: 46px;
  }
  .second-page___body-video-src {
    position: unset;
    top: 100px;
    left: 0px;
    width: 100%;
    height: 400px;
    margin-top: 70px;
  }
  .second-page___body-content-title {
    margin-top: 40px;
    width: 312px;
    height: 96px;
    font-size: 40px;
    line-height: 48px;
  }
  .second-page___body-content-center {
    width: 100%;
    height: 32px;
    font-size: 14px;
    line-height: 32px;
    letter-spacing: 2px;
  }

  .second-page___body-content-footer {
    width: 100%;
    height: 96px;
    font-size: 16px;
  }
  .second-page___body-content-service {
    margin-bottom: 112px;
  }
  .second-page___body-content-service-explore {
    margin-left: 10px;
    width: 150px;
  }
}

@media (min-width: 740px) and (max-width: 1169px) {
  .hide-on-tablet {
    display: none;
  }
  /* first-page */
  .first-page {
    height: 704px;
  }
  .first-page__nav-catalogue {
    position: relative;
  }
  .first-page__nav-catalogue-list {
    position: fixed;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #3e3e3f;
    top: 0px;
    right: 0px;
    width: 180px;
    z-index: 5;
    text-align: start;
    padding-top: 14px;
    opacity: 0;
    right: -500px;
    transition: 0.5s;
  }
  .first-page__nav-catalogue-list-active {
    opacity: 1;
    right: 0;
  }
  .first-page__nav-catalogue-item {
    margin-left: unset;
  }
  .first-page__nav-catalogue-item-link {
    margin-left: 0;
    padding: 5px 20px;
    font-size: 20px;
    font-weight: 200;
    color: var(--white-color);
    display: inline-block;
    width: 100%;
  }
  .first-page__nav-catalogue-item-link:hover {
    background-color: burlywood;
  }
  .first-page__nav-catalogue-item-link-icon {
    cursor: pointer;
    display: inline-block;
    font-size: 22px;
    margin-left: 20px;
    margin-top: 4px;
  }
  .first-page__nav-catalogue-button-img {
    display: block;
    z-index: 4;
    cursor: pointer;
  }
  .first-page__slider-item-main-content {
    width: 500px;
    height: 192px;
    font-size: 40px;
    line-height: 48px;
    top: calc(119px - var(--height-nav-first-page));
  }
  .first-page__slider-item-icon-flower {
    top: calc(350px - var(--height-nav-first-page));
  }
  .first-page__slider-item-content {
    width: 229px;
    height: 133px;
    top: calc(347px - var(--height-nav-first-page));
    left: 90px;
  }
  .first-page__slider-item-square-point {
    position: absolute;
    top: 60px;
    left: 600px;
  }
  .first-page__slider-item-box {
    width: 50%;
    height: 360px;
    position: absolute;
    top: 150px;
    left: 330px;
  }
  .first-page__slider-item-box-img {
    width: 397px;
    height: 298px;
    position: absolute;
    top: 150px;
    left: 330px;
  }

  /* second-page */
  .second-page {
    height: 100%;
  }
  .second-page__header {
    display: block;
    height: 200px;
    border-bottom: 2px solid var(--black-color);
    position: relative;
  }
  .second-page__header-container-button {
    height: 100%;
    display: flex;
    align-items: center;
    position: unset;
    top: 272px;
  }
  .second-page___body-video {
    height: 527px;
    width: 100%;
    display: block;
    align-items: unset;
    position: relative;
  }
  .second-page___body-video-background {
    width: 100%;
    height: 340px;
    position: absolute;
    left: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 136px;
  }
  .second-page___body-video-background-img {
    width: 100%;
    height: 100%;
  }
  .second-page___body-video-background-oval {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .second-page___body-video-background-square-top {
    position: absolute;
    top: -48px;
    left: -20px;
  }
  .second-page___body-video-background-square-bottom {
    display: none;
  }
  .second-page___body-video-background-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .second-page___body-video-background-button-icon {
    position: absolute;
    top: 38px;
    left: 46px;
  }
  .second-page___body-video-src {
    position: unset;
    top: 100px;
    left: 0px;
    width: 100%;
    height: 400px;
    margin-top: 70px;
  }
  .second-page___body-content-title {
    margin-top: 80px;
    width: 312px;
    height: 96px;
    font-size: 40px;
    line-height: 48px;
  }
  .second-page___body-content-center {
    width: 100%;
    height: 32px;
    font-size: 14px;
    line-height: 32px;
    letter-spacing: 2px;
  }

  .second-page___body-content-footer {
    width: 100%;
    height: 96px;
    font-size: 16px;
  }
  .second-page___body-content-service {
    margin-bottom: 112px;
  }
  .second-page___body-content-service-explore {
    margin-left: 10px;
    width: 150px;
  }
}
</style>
