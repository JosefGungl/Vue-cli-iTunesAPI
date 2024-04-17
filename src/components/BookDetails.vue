<script>
import {Book} from "@/models/Media.js";

export default {
  name: "BookDetails",
  props: {
    item: Book,
  },
}
</script>

<template>
  <div>
    <h3 class="card-title">{{ item.title }}</h3>
    <p class="card-text">Page: {{ item.pages }}</p>
  </div>
</template>

<style scoped>

</style>
