<template>
  <div class="product mb-3">
    <a
      :href="product.page.url"
    >
      <img
        :src="mainProductImage ? mainProductImage.urls.thumb : missing_image_url"
        :alt="mainProductImage ? mainProductImage.alt : missing_image_alt_text"
        class="object-cover w-full mb-2 h-full sm:h-64 md:h-56"
      >
    </a>

    <div
      class="product__title pb-2 border-b border-solid border-dusky-pink text-gray-600 text-sm"
      v-text="title"
    />
  </div>
</template>

<script>
  import MissingImageMixin from '@/components/mixins/missing-image';
  export default {
    mixins: [
      MissingImageMixin,
    ],
    props: {
      product: {
        required: true,
        type: Object
      },
    },
    computed: {
      productImages() {
        return this.product.product_images
      },
      mainProductImage() {
        return this.product.main_product_image
      },
      title() {
        if (this.product.brand) {
          return `${this.product.brand.name} ${this.product.name}`
        }

        return this.product.name;
      },
    }
  }
</script>

<style lang="less">
  // product {
  //   .featured-product__title {
  //     height: 72px;
  //   }
  // }
</style>
