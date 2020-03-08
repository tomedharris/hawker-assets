<template>
  <li class="hoverable hover:bg-dusky-pink text-white py-2 text-lg">
    <a
      :href="link"
      class=""
      v-text="title"
    />
  </li>
</template>

<script>
  export default {
    props: {
      link: { type: String, required: true },
      title: { type: String, required: true },
    }
  }
</script>
