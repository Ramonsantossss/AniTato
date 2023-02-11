<template>
    <div class="min-h-screen">
        <h1 class="text-white">Redirecting...</h1>
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
        title = response.data.data.title.toLowerCase().replace(/ /g, '-');
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