<template>
  <div class="brand-grid">
    <ul class="flex flex-wrap flex-row justify-around items-center">
      <li
        v-for="brand in brands"
        :key="brand.id"
        class="px-4 py-4 md:py-0"
      >
        <brand
          :brand="brand"
        />
      </li>
    </ul>
  </div>
</template>

<script>
  import Brand from './brand-grid-horizontal/Brand.vue'
  export default {
    components: {
      Brand,
    },
    props: {
      brands: {
        required: true,
        type: Array
      },
    }
  }
</script>
