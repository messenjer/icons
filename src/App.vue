<template>
  <div>
    <header class="container">
      <img
        class="logo"
        alt="Funda"
        src="https://assets.fstatic.nl/master_3202/assets/components/logo/fundawonen-logo.svg"
      />
      <input
        class="search"
        type="search"
        placeholder="Type here to search..."
        v-model="searchKeyword"
      />
    </header>
    <ul class="icons container">
      <li v-for="icon in filteredIcons" :key="icon.title" class="icon">
        <span v-html="icon.svg" :title="icon.title"></span>
        <p>{{ icon.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import * as icons from "../lib/icons";

export default {
  data() {
    return {
      searchKeyword: "",
    };
  },
  computed: {
    filteredIcons() {
      if (this.searchKeyword === "") return icons;

      return icons.filter((icon) =>
        icon.title.toLowerCase().includes(this.searchKeyword.toLowerCase())
      );
    },
  },
};
</script>
