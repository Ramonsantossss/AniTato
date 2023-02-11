<template>
    <div>
      <p>{{ randomAnimeName }}</p>
      <button @click="generateRandomAnimeName">Generate Random Anime Name</button>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        randomAnimeName: ""
      };
    },
    methods: {
      async generateRandomAnimeName() {
        const response = await axios.get("https://api.jikan.moe/v4/random/anime");
        this.randomAnimeName = response.data.title;
      }
    }
  };
  </script>