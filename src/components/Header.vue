<template>
  <header class="flex w-full bg-white border-b border-gray-400 z-10 h-14 md:h-16 relative">
    <div class="flex container mx-auto items-center lg:items-end justify-between lg:justify-start p-2 w-full text-dusky-pink h-full">
      <div class="flex lg:hidden h-full items-center">
        <button
          class="w-5"
          :class="{ hidden: showMobileMenu }"
          @click="openMobileMenu"
        >
          <font-awesome-icon :icon="['far', 'bars']" />
        </button>
        <button
          class="w-5"
          :class="{ hidden: !showMobileMenu }"
          @click="closeMobileMenu"
        >
          <font-awesome-icon :icon="['far', 'times']" />
        </button>
      </div>

      <div class="h-full">
        <a
          href="/"
          class="h-full"
        >
          <img
            src="/assets/logo.svg"
            alt="Kamboo Logo"
            class="h-full w-full"
            style="width: 185px;"
          >
        </a>
      </div>

      <mega-menu
        :elements="navElements"
        class="pl-4 hidden lg:block"
      />

      <mobile-mega-menu
        :elements="navElements"
        :class="{ hidden: !showMobileMenu }"
        class="lg:hidden"
      />

      <search
        class="ml-auto hidden lg:block"
        :initial-errors="searchErrors"
      />

      <div class="w-f" />
    </div>
    <!-- <div
        class="overflow-y-auto lg:overflow-visible lg:flex h-full fixed lg:relative lg:h-auto bg-gradient-l-ocean-light lg:bg-image-none items-center lg:px-16 xl:px-20 w-full lg:max-w-3xl hidden">
        <div class="relative w-4/5 lg:w-full mx-auto"><span class="algolia-autocomplete"
                style="position: relative; display: inline-block; direction: ltr;">
                <input type="search" id="search"
                    placeholder="Search documentation..." name="search" autocomplete="off"
                    class="placeholder-white lg:placeholder-gray-500 text-gray-500 lg:text-black -mt-px appearance-none bg-transparent lg:bg-white block h-24 outline-none pl-8 transition-all w-full ds-input"
                    spellcheck="false" role="combobox" aria-autocomplete="list" aria-expanded="false"
                    aria-label="search input" aria-owns="algolia-autocomplete-listbox-0" dir="auto"
                    style="position: relative; vertical-align: top;">
                <pre aria-hidden="true"
                    style="position: absolute; visibility: hidden; white-space: pre; font-family: -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 16px; font-style: normal; font-variant: normal; font-weight: 400; word-spacing: 0px; letter-spacing: normal; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre>
                <span class="ds-dropdown-menu" role="listbox" id="algolia-autocomplete-listbox-0"
                    style="position: absolute; top: 100%; z-index: 100; display: none; left: 0px; right: auto;">
                    <div class="ds-dataset-1"></div>
                </span></span>
            <div class="absolute flex items-center inset-y-0 text-gray-500"><svg xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512" class="fill-current w-4 h-4">
                    <path
                        d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z">
                    </path>
                </svg></div>
        </div>
    </div> -->
  </header>
</template>

<script>
  import MegaMenu from './header/MegaMenu';
  import MobileMegaMenu from './header/MobileMegaMenu';
  import Search from './header/Search';
  export default {
    components: {
      MegaMenu,
      MobileMegaMenu,
      Search,
    },
    props: {
      navElements: { type: Array, required: true },
      searchErrors: { type: Array, default: () => [] },
    },
    data() {
      return {
        showMobileMenu: false,
      };
    },
    methods: {
      openMobileMenu() {
        this.showMobileMenu = true;
      },
      closeMobileMenu() {
        this.showMobileMenu = false;
      },
    }
  }
</script>
