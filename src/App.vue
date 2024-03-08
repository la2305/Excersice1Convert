<template>
  <header-component></header-component>
  <features-component></features-component>
  <projects-component></projects-component>
  <client-component></client-component>
  <blog-component></blog-component>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FeaturesComponent from "./components/FeaturesComponent.vue";
import ProjectsComponent from "./components/ProjectsComponent.vue";
import ClientComponent from "./components/ClientComponent.vue";
import BlogComponent from "./components/BlogComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    FeaturesComponent,
    ProjectsComponent,
    ClientComponent,
    BlogComponent,
    FooterComponent,
  },
};
</script>


<style>
</style>
