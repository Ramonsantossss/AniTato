<template>
    <main-masterpage-vue>
      <anime-full-info-vue :animeInfo="randomAnime" />
    </main-masterpage-vue>
    
  </template>
  
  <script>
  export default {
    name: "App",
    computed: {
      randomAnime() {
        console.log(this.$store.state.randomAnimeInfo);
        return this.$store.state.randomAnimeInfo;
      },
    },
    mounted() {
      this.$store.dispatch("fetchRandomAnime");
    },
  };
  </script>
  
  <style></style>