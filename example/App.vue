<template>
  <div>
    <hwk-header></hwk-header>
    <carousel></carousel>
    <product-grid-horizontal></product-grid-horizontal>
  </div>
</template>

<script>
import Carousel from "./components/Carousel";
import HwkHeader from "./components/Header";
import ProductGridHorizontal from "./components/ProductGridHorizontal";

export default {
  components: {
    Carousel,
    HwkHeader,
    ProductGridHorizontal,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
