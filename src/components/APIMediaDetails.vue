<script>
import {APIMedia} from "@/models/Media.js";
export default {
  name: "APIMediaDetails",
  props: {
    item: APIMedia,
  },
  data(){
    return{
      img: this.item.artworkUrl100
    }
  }
}
</script>

<template>
  <div>
    <div class="row">
      <div class="col col-auto">
        <img :src="img" alt="">
      </div>
      <div class="col">
        <div class="row">
          <h3 class="card-title">{{item.trackName}}</h3>
        </div>
        <div class="row">
          <p class="card-text">{{item.artistName}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
