<template>
  <div class="relative w-full lg:w-1/5 xl:w-1/4">
    <input
      v-model="search"
      type="search"
      class="focus:outline-none pl-10 pr-10 lg:pr-3 py-2 text-xs border border-solid border-gray-400 w-full text-gray-800"
      :class="{ error: errors.length > 0 }"
      @keyup.enter="submit"
    >
    <font-awesome-icon
      id="search-icon"
      icon="search"
      class="text-gray-500 text-xl lg:text-base text-dusky-pink-darker"
      @click="submit"
    />
    <font-awesome-icon
      id="search-submit-icon"
      icon="arrow-square-right"
      class="text-gray-500 text-2xl text-dusky-pink-darker lg:hidden"
      @click="submit"
    />
  </div>
</template>

<script>
// import Client from '@/lib/client';
import url from '@/lib/url';
export default {
  props: {
    initialErrors: { type: Array, default: () => [] },
  },
  data() {
    return {
      search: '',
      errors: this.initialErrors,
    };
  },
  methods: {
    submit() {
      if (this.search && this.search.length >= 3) {
        window.location.replace(url('search') + `?search_term=${this.search}`)
        // TODO json after 3 chars, and on pause.
        // TODO post form to search on submit
        // Client
        //   .post('search', {
        //     search_term: this.search,
        //   })
        //   .then(console.log);
      } else {
        this.errors.push('Min search term 3 characters');
      }
    },
  },
}
</script>

<style lang="less" scoped>
  input.error {
    @apply .border-red-400;
  }

  #search-icon {
    float: left;
    margin-left: 12px;
    margin-top: -28px;
    position: relative;
    z-index: 2;
  }

  @media only screen and (min-width: 1024px) {
    #search-icon {
      margin-top: -26px;
    }
  }

  #search-submit-icon {
    float: right;
    margin-right: 12px;
    margin-top: -30px;
    position: relative;
    z-index: 2;
  }
</style>
