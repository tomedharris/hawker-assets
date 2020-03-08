<template>
  <!-- eslint-disable-next-line vue/no-v-html vue/max-attributes-per-line -->
  <component :is="el" class="kb-markdown" v-html="renderedValue" />
</template>

<script>
  const md = require('markdown-it')()
    .use(require('markdown-it-sup'))
    .use(require('markdown-it-sub'));

  export default {
    props: {
      md: { type: String, default: '' },
      el: { type: String, default: 'div' },
    },
    computed: {
      renderedValue () {
        return md.render(this.md)
      }
    }
}
</script>
