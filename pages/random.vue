<template>
    <div class="container mx-auto min-h-screen py-4">
        <div v-if="anime.title != ''">
            <div class="p-4 mt-4 mx-auto md:w-3/4" v-if="anime.genres">
                <h1 class="text-zinc-300 mb-5">Recommended for you</h1>
                <Recommend :genre="anime.genres" :id="anime.id"></Recommend>
            </div>
        </div>
        <div v-else class="grid place-content-center min-h-screen -mt-20">
            <h1 class="text-white font-extrabold">Loading...</h1>
        </div>
    </div>
</template>

<script>
import { getFirestore, query, where, getDocs, updateDoc, collection, addDoc, deleteDoc, doc } from "firebase/firestore";

export default {
    data() {
        return {
            anime: {
                id: '',
                title: '',
                description: '',
                url: '',
                img: '',
                totalEpisodes: '',
                type: '',
                episode: [],
                genres: [],
                otherName: '',
                status: '',
                releaseDate: ''
            },
            server: "",
            addedList: 'false',
            userId: '',
            serverUrl: '',
            status: [
                { id: 'no_status', name: 'Select Status' },
                { id: 'watching', name: 'Watching' },
                { id: 'completed', name: 'Completed' },
            ],
            selectStatus: null
        }
    },
    mounted() {
        this.setTitle();

        this.userId = sessionStorage.getItem('userId');

        const route = useRoute();
        var id = route.params.animes;
        const config = useRuntimeConfig();

        this.server = localStorage.getItem('server') == 'gogoanime' ? 'Gogoanime' : 'Zoro.to';

        var url = '';

        if (localStorage.getItem('server') == 'gogoanime') {
            url = config.apiUrl + 'info/' + id
            this.serverUrl = "https://gogoanime.mom"
        } else {
            url = config.apiUrl2 + 'info?id=' + id
            this.serverUrl = "https://zoro.to"
        }

        fetch(url)
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                if (data.id != null) {
                    this.anime.id = data.id;
                    this.anime.title = data.title;
                    this.anime.otherName = data.otherName
                    this.anime.description = data.description;
                    this.anime.url = data.url;
                    this.anime.img = data.image;
                    this.anime.totalEpisodes = data.totalEpisodes;
                    this.anime.type = data.type;
                    this.anime.releaseDate = data.releaseDate ?? '';
                    this.shuffle(data.genres);
                    this.anime.genres = data.genres;
                    this.anime.status = data.status;
                    this.sortEpisode(data.episodes);
                    this.anime.episode = data.episodes;
                    this.setTitle();
                    this.getAddedList()
                    // console.log(this.addedList)
                } else {
                    alert('Server is down or not found, trying to search the anime...')
                    this.$router.push('/search/' + id + "?page=1")
                }

            })
            .catch(err => console.log(err));

    },
    methods: {
        setTitle() {
            useHead({
                title: this.anime.title != '' ? this.anime.title : 'Loading...',
            })
        },
        // sort by number 
        sortEpisode(arr) {
            arr.sort((a, b) => {
                return b.number - a.number;
            });
        },
        getAddedList() {
            const db = getFirestore();
            const q = query(collection(db, "watch-list"),
                where("animeId", "==", this.anime.id),
                where("userId", "==", sessionStorage.getItem('userId')),
                where("server", "==", localStorage.getItem('server'))
            );
            const querySnapshot = getDocs(q);

            querySnapshot.then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    this.addedList = 'true';
                });
                return querySnapshot;
            }).then((s) => {
                s.docs.forEach((doc) => {
                    this.selectStatus = doc.data().status;
                })
                // console.log('inner', this.selectStatus)
            })
            // console.log('outer', this.selectStatus)
        },
        addToList() {
            const db = getFirestore();
            if (this.addedList != 'true') {
                this.addedList = '';
                try {
                    addDoc(collection(db, "watch-list"), {
                        animeId: this.anime.id,
                        userId: sessionStorage.getItem('userId'),
                        server: localStorage.getItem('server'),
                        createdAt: new Date(),
                        status: 'no_status'
                    }).then(() => {
                        this.addedList = 'true';
                    })
                } catch (error) {
                    console.log(error)
                }
            }
            if (this.addedList == 'true') {
                this.addedList = '';
                try {
                    const q = query(collection(db, "watch-list"), where("animeId", "==", this.anime.id));
                    const querySnapshot = getDocs(q);

                    querySnapshot.then((querySnapshot) => {
                        querySnapshot.forEach((docs) => {
                            if (docs.data().userId == sessionStorage.getItem('userId') && docs.data().server == localStorage.getItem('server')) {
                                deleteDoc(doc(db, "watch-list", docs.id)).then(() => {
                                    this.addedList = 'false';
                                })
                            }
                        });
                    });
                } catch (error) {
                    console.log(error)
                }
            }
        },
        changeStatus(value) {
            const db = getFirestore();
            const q = query(collection(db, "watch-list"), where("animeId", "==", this.anime.id));
            const querySnapshot = getDocs(q);

            querySnapshot.then((querySnapshot) => {
                querySnapshot.forEach((docs) => {
                    // console.log(docs.data())
                    if (docs.data().userId == sessionStorage.getItem('userId') && docs.data().server == localStorage.getItem('server')) {
                        updateDoc(doc(db, "watch-list", docs.id), {
                            status: value
                        }).then(() => {
                            this.selectStatus = value;
                            alert('Status updated successfully.')
                        })
                    }
                });
            });
        },
        // randomize array
        shuffle(array) {
            array.sort(() => Math.random() - 0.5);
        },
    }
}
</script>

<style>
.animate-bg {
    /* background: linear-gradient(90deg, #4c51bf, #6b46c1, #805ad5, #b794f4, #4c51bf); */
    background-size: 400% 400%;
    animation: gradient 5s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}
</style>