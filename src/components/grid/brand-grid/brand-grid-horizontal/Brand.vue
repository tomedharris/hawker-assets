<template>
  <div class="brand-grid__brand">
    <a
      :href="url(brand.page.url)"
    >
      <img
        :src="brandImage ? brandImage.urls.thumb : missing_image_url"
        :alt="brandImage ? brandImage.alt : missing_image_alt_text"
      >
    </a>
  </div>
</template>

<script>
  import MissingImageMixin from '@/components/mixins/missing-image';
  import url from '@/lib/url';

  export default {
    mixins: [
      MissingImageMixin,
    ],
    props: {
      brand: {
        required: true,
        type: Object
      },
    },
    computed: {
      brandImage() {
        return this.brand.brand_image
      }
    },
    methods: {
      url,
    }
  }
</script>

<style lang="less">
  .brand-grid__brand {
    img {
      max-height: 6rem;
    }
  }
</style>
