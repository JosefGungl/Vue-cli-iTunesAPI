<script>
import LibraryItem from "@/components/LibraryItem.vue";
import LibraryCollection from "@/models/LibraryCollection.js";

export default {
  name: "LibraryItemList",
  components: {LibraryItem},
  props:{
    library: LibraryCollection
  }
}
</script>

<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
    <div class="col" v-for="item in library">
      <library-item :item="item" @remove="$emit('remove', item)"></library-item>
    </div>
  </div>
</template>

<style scoped>

</style>
