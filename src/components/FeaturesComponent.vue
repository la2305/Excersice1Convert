<template>
  <div class="third-page">
    <div class="grid wide">
      <div class="third-page__header">
        <div class="row b-gutter">
          <div class="col l-6">
            <div class="third-page__header-features">OUR CORE FEATURES</div>
          </div>
          <div class="col l-6">
            <div class="third-page__header-content">
              Minuteness of the parts formed a great hindrance to my speed,
              resolved, contrary to my first intention, to make the being.
              Minuteness of the parts formed a great hindrance to my speed,
              resolved, contrary to my first intention, to make the being.
            </div>
          </div>
        </div>
      </div>
      <swiper
        :modules="modules"
        :slides-per-view="2"
        :space-between="30"
        :loop="loop"
        :pagination="{ clickable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="third-page__slider"
      >
        <swiper-slide class="third-page__slider-item">
          <div class="third-page__slider-item-container">
            <img
              class="third-page__slider-item-container-icon"
              alt=""
              src="../assets/img/icon/3-triangle.svg"
            />
            <div class="third-page__slider-item-container-header">
              WHITE LABEL
            </div>
            <div class="third-page__slider-item-container-content">
              Minuteness of the parts formed a great hindrance to my speed,
              resolved, contrary to my first intention, to make the being.
            </div>
          </div>
        </swiper-slide>
        <swiper-slide
          class="third-page__slider-item third-page__slider-item-green"
        >
          <div class="third-page__slider-item-container">
            <img
              class="third-page__slider-item-container-icon"
              src="../assets/img/icon/benzen.svg"
              alt=""
            />
            <div class="third-page__slider-item-container-header">
              CODE EXPORT
            </div>
            <div class="third-page__slider-item-container-content">
              Minuteness of the parts formed a great hindrance to my speed,
              resolved, contrary to my first intention, to make the being.
            </div>
          </div>
        </swiper-slide>
        <swiper-slide
          class="third-page__slider-item third-page__slider-item-blue"
        >
          <div class="third-page__slider-item-container">
            <img
              class="third-page__slider-item-container-icon"
              src="../assets/img/icon/benzen.svg"
              alt=""
            />
            <div class="third-page__slider-item-container-header">
              CODE EXPORT
            </div>
            <div class="third-page__slider-item-container-content">
              Minuteness of the parts formed a great hindrance to my speed,
              resolved, contrary to my first intention, to make the being.
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="third-page__slider-item">
          <div class="third-page__slider-item-container">
            <img
              class="third-page__slider-item-container-icon"
              alt=""
              src="../assets/img/icon/3-triangle.svg"
            />
            <div class="third-page__slider-item-container-header">
              WHITE LABEL
            </div>
            <div class="third-page__slider-item-container-content">
              Minuteness of the parts formed a great hindrance to my speed,
              resolved, contrary to my first intention, to make the being.
            </div>
          </div>
        </swiper-slide>
        <swiper-slide
          class="third-page__slider-item third-page__slider-item-green"
        >
          <div class="third-page__slider-item-container">
            <img
              class="third-page__slider-item-container-icon"
              src="../assets/img/icon/benzen.svg"
              alt=""
            />
            <div class="third-page__slider-item-container-header">
              CODE EXPORT
            </div>
            <div class="third-page__slider-item-container-content">
              Minuteness of the parts formed a great hindrance to my speed,
              resolved, contrary to my first intention, to make the being.
            </div>
          </div>
        </swiper-slide>
        <swiper-slide
          class="third-page__slider-item third-page__slider-item-blue"
        >
          <div class="third-page__slider-item-container">
            <img
              class="third-page__slider-item-container-icon"
              src="../assets/img/icon/benzen.svg"
              alt=""
            />
            <div class="third-page__slider-item-container-header">
              CODE EXPORT
            </div>
            <div class="third-page__slider-item-container-content">
              Minuteness of the parts formed a great hindrance to my speed,
              resolved, contrary to my first intention, to make the being.
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>


<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      loop: true,
      modules: [Pagination],
    };
  },
};
</script>

<!-- <script>
import { onMounted } from "vue";

// slick slide third page
onMounted(() => {
  $(".third-page__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    draggable: true,
    dots: true,
    autoplay: true,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
    ],
  });
});
</script> -->

<style>
/* third-page */
.third-page {
  background-color: var(--black-color);
  height: 880px;
}
.third-page__header {
}
.third-page__header-features {
  color: var(--white-color);
  font-family: "Inknut Antiqua", serif;
  font-weight: 900;
  font-size: 56px;
  line-height: 64px;
  margin-top: 139px;
}
.third-page__header-content {
  color: var(--white-color);
  opacity: 50.3%;
  font-family: "DM Sans", serif;
  font-size: 16px;
  line-height: 32px;
  height: 128px;
  margin-top: 139px;
}
.third-page__slider {
  margin-top: 135px;
}

.third-page__slider-item {
  background-color: var(--purple-color);
  height: 288px;
  border-radius: 2px;
}
.third-page__slider-item.third-page__slider-item-green {
  background-color: var(--green-color);
}
.third-page__slider-item.third-page__slider-item-blue {
  background-color: var(--blue-color);
}
.third-page__slider-item-container {
  margin: 0 48px;
}
.third-page__slider-item-container-icon {
  margin-top: 48px;
  width: 48px;
  height: 48px;
}
.third-page__slider-item-container-header {
  margin-top: 24px;
  font-family: "Roboto Condensed", serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: var(--white-color);
}
.third-page__slider-item-container-content {
  margin-top: 19px;
  font-family: "DM Sans", serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: var(--white-color);
  opacity: 50.3%;
}
/* slick slider */
.slick-slide {
  margin: 0 15px;
}
.slick-list {
  margin: 0 -15px;
}
.slick-dots {
  position: absolute;
  bottom: -88px;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 24px;
  padding: 0;
}
.slick-dots button {
  font-size: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #595959;
  border: none;
  transition: all 0.2s linear;
}
.slick-dots .slick-active button {
  background-color: var(--purple-color);
}
.swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  background-color: #595959;
}
.swiper-pagination-bullet-active {
  width: 20px;
  height: 20px;
  background-color: #9013fe;
}
.swiper-pagination {
  top: 250px !important;
}
/* slick slider */
</style>
