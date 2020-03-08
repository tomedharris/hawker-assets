<template>
  <div>
    <span
      v-if="shouldShowPrice"
      v-text="price"
    >
      &pound;
      <span
        v-text="price"
      />
    </span>
    <a
      :href="link"
      v-text="name"
    />
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    link: { type: String, required: true },
    price: { type: String, required: true },
    shouldShowPrice: { type: Boolean, required: true },
  }
}
</script>
