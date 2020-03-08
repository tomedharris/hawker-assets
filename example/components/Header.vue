<template>
  <div>
    <h2>Header</h2>

    <hwk-header :nav-elements="navElements"></hwk-header>
  </div>
</template>

<script>
import HwkHeader from "@/components/Header";

export default {
  components: {
    HwkHeader,
  },
  data() {
    return {
      navElements: [
        {
            id: 1,
            name: "Example",
            page: {
                url: "https://example.org",
            },
        }
      ]
    };
  }
}
</script>