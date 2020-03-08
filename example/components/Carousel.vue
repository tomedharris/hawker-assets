<template>
  <div>
    <h2>Carousel</h2>

    <carousel :carousel="carousel"></carousel>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel";

export default {
  components: {
    Carousel,
  },
  data() {
    return {
      carousel: {
          "autoplay": false,
          "mouseDrag": true,
          "perPage": 1,
          "navigationEnabled": true,
          "slides": [
              {
                "html": "<p>Slide 1</p>",
              },
              {
                "html": "<p>Slide 2</p>",
              },
          ]
      },
    };
  }
}
</script>