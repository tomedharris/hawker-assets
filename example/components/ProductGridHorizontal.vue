<template>
  <div>
    <h2>Product Grid Horizontal</h2>

    <product-grid-horizontal :products="products"></product-grid-horizontal>
  </div>
</template>

<script>
import ProductGridHorizontal from "@/components/grid/product-grid/ProductGridHorizontal";

export default {
  components: {
    ProductGridHorizontal,
  },
  data() {
    return {
      products: [
        {
          name: "Product name",
          brand: {
            name: "Brand name",
          },
          page: {
            url: "https://example.org",
          },
          main_product_image: "",
          product_images: [],
        }
      ],
    };
  }
}
</script>