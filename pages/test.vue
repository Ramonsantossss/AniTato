<template>
  <div class="container p-4 mx-auto min-h-screen">
      <div class="text-white my-4 min-h-[20vh] flex items-center">
          <h1 class="text-4xl font-extrabold">
              Redirecting...
          </h1>
      </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      animeTitle: ''
    }
    },
    created() {
    axios.get('https://api.jikan.moe/v4/random/anime')
      .then(response => {
        var title = response.data.data.title.toLowerCase().replace(/ /g, '-');
        this.$router.push('/animes/' + title)
      })
      .catch(error => {
        console.error(error)
      })
    },
}
</script>

<style>

</style>