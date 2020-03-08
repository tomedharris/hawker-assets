<template>
  <nav class="mobile-mega-menu bg-dusky-pink font-header">
    <div class="container mx-auto">
      <search
        class="px-2 py-2"
      />

      <ul>
        <menu-item
          v-for="element in elements"
          :key="element.id"
          :title="element.name"
          :link="element.page.url"
          :class="{'text-sm': elements.length > 4}"
        >
          <sub-menu-item
            v-for="child in element.children"
            :key="child.id"
            :title="child.name"
            :link="child.page.url"
          />
        </menu-item>
      </ul>
    </div>
  </nav>
</template>

<script>
  import MenuItem from './mobile-mega-menu/MenuItem';
  import SubMenuItem from './mobile-mega-menu/SubMenuItem';
  import Search from './Search';

  export default {
    components: {
      Search,
      MenuItem,
      SubMenuItem,
    },
    props: {
      elements: { type: Array, required: true },
    },
  }
</script>

<style lang="less" scoped>

  /* #Mega Menu Styles
 –––––––––––––––––––––––––––––––––––––––––––––––––– */
  .mobile-mega-menu {
    left: 0;
    top: 100%;
    position: absolute;
    text-align: left;
    width: 100%;
  }

</style>
