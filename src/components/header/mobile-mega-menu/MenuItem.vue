<template>
  <li class="hover:underline text-white">
    <a
      :href="link"
      class="block p-2 hover:underline font-bold"
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

    <div class="container mx-auto w-full flex flex-wrap justify-between mx-2">
      <ul class="hover:underline">
        <slot />
      </ul>
    </div>
  </li>
</template>

<script>
  export default {
    props: {
      link: { type: String, required: false, default: '#' },
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
