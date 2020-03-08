<template>
  <div class="product-grid-horizontal">
    <ul class="flex flex-wrap justify-center clearfix -mx-2">
      <li
        v-for="product in products"
        :key="product.id"
        class="w-full sm:w-1/2 md:w-1/3 xl:w-1/6 p-2"
      >
        <product :product="product" />
      </li>
    </ul>
  </div>
</template>

<script>
  // import { chunk } from 'lodash';
  import Product from './product-grid-horizontal/Product';

  export default {
    components: {
      Product,
    },
    props: {
      products: {
        required: true,
        type: Array
      },
    },
    computed: {
      // processedRows() {
      //   let rows = chunk(this.products, this.perRow);

      //   if (this.rows === null) {
      //     return rows;
      //   }

      //   return rows.slice(0, this.rows);
      // },
      listClass() {
        return `md:w-1/${this.perRow}`;
      },
    },
  }
</script>
