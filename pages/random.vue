<template>
    <main-masterpage-vue>
      <anime-full-info-vue :animeInfo="randomAnime" />
    </main-masterpage-vue>
    
  </template>
  
  <script>
  import AnimeFullInfoVue from "@/components/AnimeFullInfo.vue";
  import MainMasterpageVue from "@/masterpages/MainMasterpage.vue";
  export default {
    name: "App",
    components: {
      // AnimeMainInfoVue,
      AnimeFullInfoVue,
      MainMasterpageVue
    },
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