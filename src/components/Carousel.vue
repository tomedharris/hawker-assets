<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <carousel
    :per-page="perPage"
    :mouse-drag="mouseDrag"
    :autoplay="autoplay"
    :autoplay-timeout="autoplayTimeout"
    :navigation-enabled="navigationEnabled"
    navigation-next-label=">"
    navigation-prev-label="<"
    style="min-height: 19rem;"
  >
    <!-- eslint-disable vue/no-v-html -->
    <slide
      v-for="(slide, index) in slides"
      :key="index"
      v-html="slide.html"
    />
    <!-- eslint-enable vue/no-v-html -->
  </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide,
  },
  props: {
    carousel: {type: Object, required: true},
  },
  computed: {
    slides() {
      return this.carousel.slides;
    },
    autoplay() {
      return this.carousel.autoplay;
    },
    autoplayTimeout() {
      return this.carousel.autoplayTimeout;
    },
    mouseDrag() {
      return this.carousel.mouseDrag;
    },
    perPage() {
      return this.carousel.perPage;
    },
    navigationEnabled() {
      return this.carousel.navigationEnabled;
    },
  }
}
</script>

<style lang="less">
  .VueCarousel-dot-container {
    margin-top: 0 !important;
    button {
      margin-top: 0 !important;
    }
  }

  .VueCarousel-navigation {
    .VueCarousel-navigation-button {
      background: #fff;
      margin: 0 !important;
      padding: 2px 8px !important;

      &.VueCarousel-navigation-prev {
        margin-left: 20px !important;
      }

      &.VueCarousel-navigation-next {
        margin-right: 20px !important;
      }
    }
  }
</style>
