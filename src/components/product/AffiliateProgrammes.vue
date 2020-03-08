<template>
  <ul class="h-12 flex">
    <div v-if="affiliateProgrammes.length === 1">
      Buy now from
      <a
        :href="affiliateProgrammes[0].link"
        target="_blank"
        v-text="affiliateProgrammes[0].name"
      />
    </div>
    <li
      v-for="programme in affiliateProgrammes"
      v-else
      :key="programme.id"
    >
      <component
        :is="componentFor(programme.name)"
        :link="programme.link"
        :name="programme.name"
        :price="programme.price"
        :should-show-price="!hasSinglePrice"
        target="_blank"
      />
    </li>
  </ul>
</template>

<script>
import Basic from './AffiliateProgrammes/Basic';
import { map, uniq } from 'lodash';

export default {
  components: {
    Basic,
  },
  props: {
    affiliateProgrammes: { type: Array, required: true },
  },
  computed: {
    hasSinglePrice() {
      return uniq(map(this.affiliateProgrammes, ap => ap.price)).length === 1;
    },
  },
  methods: {
    componentFor(name) {
      switch(name) {
        default:
          return 'Basic';
      }
    }
  }
};
</script>
