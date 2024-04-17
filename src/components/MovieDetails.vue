<script>
import {Movie} from "@/models/Media.js";

export default {
  name: "MovieDetails",
  props: {
    item: Movie,
  },
}
</script>

<template>
  <div>
    <h3 class="card-title">{{ item.title }}</h3>
    <p class="card-text">Run Time: {{ item.runtime }}</p>
  </div>
</template>

<style scoped>

</style>
