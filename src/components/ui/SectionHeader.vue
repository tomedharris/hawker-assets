<template>
  <div class="section-header pt-6 mb-6 border-b border-dusky-pink text-center relative font-header">
    <span class="section-header__budge">
      <span class="section-header__text py-2 px-3 md:px-5 bg-white font-semibold text-dusky-pink-darker text-2xl">
        <slot />
      </span>
    </span>
    <div class="section-header__top-border border-b border-dusky-pink" />
  </div>
</template>

<style lang="less">
  .section-header {
    .section-header__budge {
      position: absolute;
      bottom: -0.8em;

      .section-header__text {
        margin-left: -100%;
      }
    }

    .section-header__top-border {
      margin-bottom: 2px;
    }
  }
</style>
