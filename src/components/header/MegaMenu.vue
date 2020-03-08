<template>
  <nav class="flex items-end text-gray-600 font-header font-semibold">
    <div class="container mx-auto flex justify-between items-end">
      <ul class="flex items-end">
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
  import MenuItem from './mega-menu/MenuItem';
  import SubMenuItem from './mega-menu/SubMenuItem';
  export default {
    components: {
      MenuItem,
      SubMenuItem,
    },
    props: {
      elements: { type: Array, required: true },
    },
  }
</script>

<style land="less">

  /* #Mega Menu Styles
 –––––––––––––––––––––––––––––––––––––––––––––––––– */
  .mega-menu {
    display: none;
    left: 0;
    position: absolute;
    text-align: left;
    width: 100%;
  }



  /* #hoverable Class Styles
  –––––––––––––––––––––––––––––––––––––––––––––––––– */
  .hoverable {
    position: static;
  }

  .hoverable:hover .mega-menu {
    display: block;
  }


  /* #toggle Class Styles
  –––––––––––––––––––––––––––––––––––––––––––––––––– */

  .toggleable > label:after {
    content: "\25BC";
    font-size: 10px;
    padding-left: 6px;
    position: relative;
    top: -1px;
  }

  .toggle-input {
    display: none;
  }
  .toggle-input:not(checked) ~ .mega-menu {
    display: none;
  }

  .toggle-input:checked ~ .mega-menu {
    display: block;
  }

  .toggle-input:checked + label {
    color: white;
  }

  .toggle-input:checked ~ label:after {
    content: "\25B2";
    font-size: 10px;
    padding-left: 6px;
    position: relative;
    top: -1px;
  }
</style>
