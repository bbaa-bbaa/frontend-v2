<template>
  <v-container
    fluid
    class="fill-height align-content-center justify-center"
  >
    <v-row
      justify="center"
      align="center"
    >
      <v-col cols="12">
        <input
          v-model="search"
          type="text"
          class="d-flex flex-grow-1 search-bar grey darken-4"
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import get from "@/utils/getters"
  import search from "@/utils/search";

  export default {
    name: "Search",
    data() {
      return {
        selected: false,
        search: "",
      }
    },
    computed: {
      items () {
        return search.query(this.search)
      }
    },
    created () {
      search.ready()
    }
  }
</script>

<style scoped>
.search-bar {

  height: 4rem;
  font-size: .75rem;
  padding: .125rem;
}
</style>