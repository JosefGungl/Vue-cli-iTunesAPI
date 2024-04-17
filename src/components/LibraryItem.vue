<script>
import BookDetails from "@/components/BookDetails.vue";
import MovieDetails from "@/components/MovieDetails.vue";
import APIMediaDetails from "@/components/APIMediaDetails.vue";
export default {
  name: "LibraryItem",
  components: {BookDetails, MovieDetails, APIMediaDetails},
  props: {
    item: Object,
  },
  removeItem:{
    type: Function,
  },
}
</script>

<template>
  <div class="card h-100" :class="{'border-warning' : !item.isAvailable()}">
    <div class="card-body">
      <component :is="item.constructor.detailsComponent" :item="item"></component>
    </div>
    <div class="card-footer d-flex justify-content-end">
      <button v-if="item.isAvailable()" class="btn btn-outline-success" @click="item.checkOut()">Check Out</button>
      <button v-else class="btn btn-outline-warning" @click="item.checkIn()">Check In</button>
      <button class="btn btn-outline-danger" @click="$emit('remove', item)">Remove</button>
    </div>
  </div>
</template>

<style scoped>

</style>
