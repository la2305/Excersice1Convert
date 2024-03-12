<template>
  <section class="six-page">
    <div class="grid wide">
      <div class="six-page__header">
        <div class="row b-gutter">
          <div class="col l-6 m-6 c-12">
            <div class="six-page__header-blog">Our latest blog post</div>
          </div>
          <div class="col l-6 m-6 c-12">
            <div class="six-page__header-content">
              Minuteness of the parts formed a great hindrance to my speed,
              resolved, contrary to my first intention, to make the being.
              Minuteness of the parts formed a great hindrance to my speed,
              resolved, contrary to my first intention, to make the being.
            </div>
          </div>
        </div>
      </div>
      <div class="six-page__blog">
        <div class="row b-gutter">
          <div class="col l-4 m-12 c-12">
            <a href="#" class="six-page__blog-container">
              <div class="six-page__blog-container-transition">
                <img
                  src="../assets/img/img/7.png"
                  alt="image"
                  class="six-page__blog-img"
                />
                <div class="six-page__blog-topic">design</div>
                <div class="six-page__blog-content">
                  Truly it was a great journey and in it I met with many
                </div>
                <div class="six-page__blog-date">14 November, 2019</div>
              </div>
            </a>
          </div>
          <div class="col l-4 m-12 c-12">
            <a href="#" class="six-page__blog-container">
              <div class="six-page__blog-container-transition">
                <img
                  src="../assets/img/img/8.png"
                  alt="image"
                  class="six-page__blog-img"
                />
                <div class="six-page__blog-topic">Tech</div>
                <div class="six-page__blog-content">
                  What looked like a small patch of purple grass
                </div>
                <div class="six-page__blog-date">14 November, 2019</div>
              </div>
            </a>
          </div>
          <div class="col l-4 m-12 c-12">
            <a href="#" class="six-page__blog-container">
              <div class="six-page__blog-container-transition">
                <img
                  src="../assets/img/img/9.png"
                  alt="image"
                  class="six-page__blog-img"
                />
                <div class="six-page__blog-topic">Life</div>
                <div class="six-page__blog-content">
                  The roots were revolving small plant
                </div>
                <div class="six-page__blog-date">14 November, 2019</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
/* six-page */
.six-page {
  height: 910px;
  background-color: var(--white-color);
}
.six-page__header {
  padding-top: 103px;
}
.six-page__header-blog {
  font-family: "Inknut Antiqua";
  font-weight: 900;
  font-size: 56px;
  line-height: 64px;
  color: var(--black-color);
  width: 460px;
  height: 120px;
  text-transform: uppercase;
}
.six-page__header-content {
  font-family: "DM Sans", serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: var(--black-color);
  opacity: 50.13%;
}

.six-page__blog {
  margin-top: 87px;
}
.six-page__blog-container {
  text-decoration: none;
}
.six-page__blog-container-transition {
  width: 100%;
  transition: transform 0.3s ease;
  height: 520px;
}
.six-page__blog-container-transition:hover {
  transform: translateY(-10px);
}
.six-page__blog-img {
  width: 100%;
  height: 288px;
}
.six-page__blog-topic {
  font-family: "Roboto Condensed", serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: var(--black-color);
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-top: 27px;
}
.six-page__blog-content {
  margin-top: 13px;
  font-family: "Roboto Condensed", serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: var(--black-color);
}
.six-page__blog-date {
  margin-top: 19px;
  font-family: "DM Sans", serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: var(--black-color);
  opacity: 50.13%;
}
/* mobile responsive */
@media (min-width: 280px) and (max-width: 739px) {
  .hide-on-mobile {
    display: none;
  }
  /* six page */
  .six-page {
    height: unset;
    margin-bottom: 110px;
  }
  .six-page__header {
    border-top: 2px solid var(--black-color);
    margin-top: 20px;
    padding-top: 85px;
  }
  .six-page__header-blog {
    font-size: 40px;
    line-height: 48px;
    width: 100%;
    margin-bottom: 10px;
  }
  .six-page__blog {
    margin-top: unset;
  }
  .six-page__blog-container {
    display: inline-block;
    margin-top: 60px;
  }
  .six-page__blog-container-transition {
    transition: unset;
    height: unset;
  }
  .six-page__blog-container-transition:hover {
    transform: unset;
  }
}

@media (min-width: 740px) and (max-width: 1169px) {
  .hide-on-tablet {
    display: none;
  }
  /* six page */
  .six-page {
    height: unset;
    margin-bottom: 110px;
  }
  .six-page__header {
    border-top: 2px solid var(--black-color);
    margin-top: 20px;
    padding-top: 85px;
  }
  .six-page__header-blog {
    font-size: 40px;
    line-height: 48px;
    width: 100%;
    margin-bottom: 10px;
  }
  .six-page__blog {
    margin-top: unset;
  }
  .six-page__blog-container {
    display: inline-block;
    margin-top: 60px;
    width: 100%;
  }
  .six-page__blog-container-transition {
    transition: unset;
    height: unset;
  }
  .six-page__blog-container-transition:hover {
    transform: unset;
  }
}
</style>
