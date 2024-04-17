<script>

import {defineComponent} from "vue";
import LibraryItemList from "@/components/LibraryItemList.vue";
import SearchBar from "@/components/SearchBar.vue"
import LibraryCollection from "@/models/LibraryCollection.js";
import {APIMedia, Book, Movie} from "@/models/Media.js";

export default defineComponent({
  methods: {APIMedia},
  components: {SearchBar, LibraryItemList},
  data() {
    return {
      library: new LibraryCollection()
          .add(new Book('Clean Code', 600))
          .add(new Book('1000 Miles Home', 345))
          .add(new Movie('John Wick', 141))
          .add(new Movie('Lord of the Rings', 180)),
    }
  },
})
</script>

<template>
  <nav class="navbar bg-dark">
    <span class="navbar-brand text-light "><i class="fas fa-shopping-bag ms-4 me-3"></i> CHECK IT OUT!</span>
  </nav>

  <div class="container-fluid mt-3">
    <search-bar
        @add-result="item => library.add(new APIMedia(item.artistName, item.trackName, item.imgUrl))"
    ></search-bar>
    <library-item-list
        :library=library
        @remove="item => library.remove(item)"
    ></library-item-list>
  </div>
</template>

<style scoped>

</style>
