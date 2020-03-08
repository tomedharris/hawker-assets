<template>
  <li class="hoverable hover:text-dusky-pink-darker">
    <a
      :href="link"
      class="relative block pt-2 px-4 hover:text-dusky-pink-darker"
      :class="{'text-dusky-pink-darker': isActive}"
      v-text="title"
    />
    <div
      v-if="hasSub"
      class="mega-menu shadow-xl pt-2 z-10"
    >
      <div class="p-6 bg-dusky-pink">
        <div class="container mx-auto w-full flex flex-wrap justify-between mx-2">
          <!-- <ul class="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3"> -->
          <ul class="hover:underline">
            <slot />
          </ul>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
  export default {
    props: {
      link: { type: String, required: false, default: '#' },
      title: { type: String, required: true },
    },
    computed: {
      hasSub() {
        return this.$slots.default;
      },
      isActive() {
        return window.location.href.indexOf(this.link) > -1;
      },
    },
  }
</script>
