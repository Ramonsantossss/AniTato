<template>
    <div class="flex overflow-x-auto gap-5 w-full snap-x scroll-smooth scrollbar-thin scrollbar-thumb-custom">
        <div v-if="release !== null" :release="g" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
            <div class="relative mb-3">
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
        <div v-else>
            Loading...
        </div>
    </div>
</template>

<script>
export default {
    props: ['release'],
    data() {
        return {
            genreDetail: null,
        }
    },
    props: ['genre', 'id'],
    mounted() {
        this.getGenreDetail();
    },
    methods: {
        async getGenreDetail() {
            const config = useRuntimeConfig();
            var genre = this.genre[0].replace(/\s/g, '-').toLowerCase();
            // console.log(genre);
            await fetch(config.apiUrl + 'genre/' + genre)
                .then(response => response.json())
                .then(data => {
                    // console.log(data);
                    this.genreDetail = data.results.filter(g => g.id != this.id);
                })
                .catch(err => console.log(err));
        },
    },
}
</script>

<style>

</style>