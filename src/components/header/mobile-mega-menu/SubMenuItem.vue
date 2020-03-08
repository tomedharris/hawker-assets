<template>
  <li class="hoverable hover:bg-dusky-pink text-white p-2 pl-6">
    <a
      :href="link"
      :class="{'underline': isActive}"
      @click="onClick"
    >
      {{ title }}
      <font-awesome-icon
        v-if="loading"
        :icon="['far', 'spinner']"
        pulse
        class="ml-2"
      />
    </a>
  </li>
</template>

<script>
  export default {
    props: {
      link: { type: String, required: true },
      title: { type: String, required: true },
    },
    data() {
      return {
        loading: false,
      };
    },
    computed: {
      isActive() {
        return window.location.href.indexOf(this.link) > -1;
      },
    },
    methods: {
      onClick() {
        this.loading = true;
      },
    },
  }
</script>
