<template>
  <div
    id="content-panels"
    class="flex mb-3"
  >
    <ul class="w-1/4 content-panels_nav pt-2">
      <li
        v-for="(_, index) in panels"
        :key="index"
        :class="{'text-gray-400': current !== index}"
        class="border-b border-dusky-pink py-2 mr-4 cursor-pointer"
        @click="current = index"
        v-text="index"
      />
    </ul>
    <div
      v-for="(panel, index) in panels"
      v-show="current === index"
      :key="index"
      class="w-3/4 p-6 border-dusky-pink border"
      :v-html="panel"
    />
  </div>
</template>

<script>
export default {
  props: {
    panels: { type: Object, required: true },
  },
  data() {
    return {
      current: Object.keys(this.panels)[0] || null,
    };
  },
}
</script>
