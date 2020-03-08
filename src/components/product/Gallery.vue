<template>
  <div v-cloak>
    <kamboo-carousel
      :carousel="gallery"
    />
  </div>
</template>

<script>
export default {
  props: {
    gallery: { type: Object, required: true },
  }
}
</script>

<style>

</style>
