<template>
    <div class="min-h-screen">
        <h1 class="text-white">{{ animeTitle }}</h1>
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
        this.animeTitle = response.data.data.title.toLowerCase().replace(/ /g, '-');
      })
      .catch(error => {
        console.error(error)
      })
    },
}
</script>

<style>

</style>