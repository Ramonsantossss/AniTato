<template>
  <div class="container mx-auto min-h-screen py-4">
    <div class="text-white my-4 min-h-[20vh] flex items-center">
            <h1 class="text-4xl font-extrabold">
                Random <br>
                <span class="text-purple-500 flex items-center">Anime
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="w-8 h-8 ml-2">
                        <path fill-rule="evenodd"
                            d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
                            clip-rule="evenodd" />
                    </svg>
                </span>
            </h1>
        </div>
      <div class="p-4 mt-4 mx-auto md:w-3/4" v-if="anime.genres">
        <Recommend :genre="anime.genres" :id="anime.id"></Recommend>
      </div>
      <div v-if="loading == false" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            <div v-for="release in recentRelease" :key="release" class="relative mb-3">
                <a :href="'/animes/' + release.id" class="relative">
                    <div class="">
                        <img :src="release.image" alt="" class="rounded-xl object-cover h-72 lg:h-[32rem]">
                    </div>
                    <div class="relative flex justify-between items-center ">
                        <div
                            class="w-full h-32 absolute bottom-0 bg-gradient-to-t from-black to-transparent rounded-b-xl">
                        </div>
                        <div class="px-2 py-1 rounded-md bg-purple-500 text-white absolute left-1 bottom-1">
                            <h3 class="truncate text-xs lg:text-sm max-w-[4rem] lg:max-w-[10rem]">
                                {{ release.title }}
                            </h3>
                        </div>
                        <span class="bg-white rounded-md text-sm px-2 absolute bottom-1 right-3"
                            v-if="release.episode || release.episodeNumber">
                            EP {{ release.episode ?? release.episodeNumber }}
                        </span>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>