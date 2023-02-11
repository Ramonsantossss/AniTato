<template>
  <div>
    <p>{{ animeTitle }}</p>
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
        this.animeTitle = response.data.data.title
      })
      .catch(error => {
        console.error(error)
      })
  }
}
</script>