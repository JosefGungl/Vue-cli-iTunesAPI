<script>
export default {
  name: "SearchBar",
  data() {
    return {
      newQuery: {
        searchTerm: '',
        searchLimit: '',
      },
    }
  },
  emits: ['add-result'],
  methods: {
    search() {
      const url = "https://itunes.apple.com/search?term=" + this.newQuery.searchTerm +
          "&entity=movie, podcast, song, audiobook, tvShow" + "&limit=" + this.newQuery.searchLimit;
      fetch(url)
          .then(response => response.json())
          .then(result => {
            for (let i = 0; i < this.newQuery.searchLimit; i++) {
              let newResult = {artistName: '', imgUrl: '', trackName: ''};
              newResult.artistName = result.results[i].artistName;
              newResult.imgUrl = result.results[i].artworkUrl100;
              newResult.trackName = result.results[i].trackName;

              this.$emit('add-result', newResult)
            }
          })
          .catch(error => console.log('Error: ', error));
    },
  },
}
</script>

<template>
  <form>
    <div class="text-center">
      <h1>Search iTunes</h1>
    </div>
    <div class="container text-center pt-3">
      <div class="row justify-content-center row-cols-auto">
        <div class="col">
          <div class="input-group mb-3">
            <div class="form-floating" style="width: 250px;">
              <input type="text" id="artist" class="form-control" v-model="newQuery.searchTerm">
              <label for="artist">Search</label>
            </div>
            <div class="form-floating" style="width: 125px;">
              <input type="number" class="form-control" id="limit" min="0" max="50" v-model="newQuery.searchLimit">
              <label for="limit"># of Results</label>
            </div>
            <button class="btn btn-outline-secondary" @click="search" type="button" id="searchAPI">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<style scoped>

</style>
