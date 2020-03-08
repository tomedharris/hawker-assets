<template>
  <div class="w-full relative">
    <div class="mb-2">
      Sign up for the latest news...
    </div>
    <input
      v-model="email"
      type="email"
      class="focus:outline-none pl-10 pr-10 lg:pr-3 py-2 border border-solid border-gray-400 w-full text-xs text-gray-600"
      @keyup.enter="submit"
    >
    <font-awesome-icon
      id="newsletter-icon"
      icon="envelope"
      class="text-gray-500 text-xl lg:text-base text-dusky-pink-darker"
      @click="submit"
    />
    <button
      id="newsletter-submit-button"
      @click="submit"
    >
      <font-awesome-icon
        icon="arrow-square-right"
        class="text-gray-500 text-2xl text-dusky-pink-darker"
      />
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
    }
  },
  methods: {
    submit() {
      this.email = null;
    }
  }
}
</script>

<style lang="less">
  #newsletter-icon {
    float: left;
    margin-left: 12px;
    margin-top: -26px;
    position: relative;
    z-index: 2;
  }

  // @media only screen and (min-width: 1024px) {
  //   #search-icon {
  //     margin-top: -26px;
  //   }
  // }

  #newsletter-submit-button {
    float: right;
    margin-right: 12px;
    margin-top: -30px;
    position: relative;
    z-index: 2;
  }
</style>
