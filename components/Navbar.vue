<template>
    <nav class="">
        <ul class="flex items-center justify-between container list-none px-2 py-4 mx-auto">
            <li class="text-white">
                <button>
                </button>
            </li>
            <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a href="https://9animix.vercel.app/" class="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">9animix</span>
            </a>
        </div>
            <button data-collapse-toggle="navbar-default" type="button"
                class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
            <div class="hidden w-full md:block md:w-auto flex items-center gap-3" id="navbar-default">
                <ul
                    class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                            aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
                    </li>
                </ul>
            </div>
            <li class="flex items-center gap-3">
                <button @click="toggleSearch" v-show="!showSearch" class="mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                        class="w-6 h-6 text-white font-extrabold">
                        <path fillRule="evenodd"
                            d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                            clipRule="evenodd" />
                    </svg>
                </button>

                <div class="relative top-1">
                    <ProfileDropdown v-if="checkUserId || userId"></ProfileDropdown>
                    <LoginSignUpModal v-else></LoginSignUpModal>
                </div>
            </li>
        </ul>
    </nav>
    <div class="">
        <transition enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-out" leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0">
            <div class="absolute w-full" v-show="showSearch">
                <div class="flex relative justify-center container mx-auto">
                    <input type="text" name="price" id="price"
                        class="block w-full rounded-md border-gray-300 pl-7 pr-12 py-3 shadow-md focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="Search anime ..." v-model="searchQuery" autocomplete="off" autofocus>
                    <div class="absolute inset-y-0 right-0 flex items-center">
                        <button class=" p-2" @click="searchAnime">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                class="w-6 h-6 font-extrabold">
                                <path fillRule="evenodd"
                                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                    clipRule="evenodd" />
                            </svg>
                        </button>
                        <button class=" p-2 text-red-500" @click="toggleSearch">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>

export default {
    data() {
        return {
            sidebar: false,
            sidebar_item: [
                { id: 'home', name: 'Home', route: '/' },
            ],
            checkUserId: '',
            showSearch: false,
            searchQuery: ''
        }
    },
    props: ['userId'],
    mounted() {
        this.checkUserId = sessionStorage.getItem('userId')

        // if clicked enter key
        document.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                this.searchAnime()
            }
        })

        document.addEventListener('keyup', (e) => {
            if (e.key === 'Escape' && this.showSearch == true) {
                this.toggleSearch()
            }
        })
    },
    methods: {
        toggleSidebar() {
            const sidebar = document.getElementById('collapse-sidebar')
            const sidebarBg = document.getElementById('collapse-sidebar-bg')

            if (sidebar.classList.contains('fadeInFromLeft')) {
                sidebar.classList.remove('fadeInFromLeft')
                sidebar.classList.add('fadeInFromRight')
                if (sidebar.classList.contains('fadeInFromRight')) {
                    setTimeout(() => {
                        sidebar.parentElement.classList.add('hidden')
                        sidebar.parentElement.classList.remove('flex')
                        sidebarBg.classList.add('hidden')
                    }, 380)
                }
            } else {
                sidebar.classList.remove('fadeInFromRight')
                sidebar.classList.add('fadeInFromLeft')
                sidebar.parentElement.classList.remove('hidden')
                sidebar.parentElement.classList.add('flex')
                sidebarBg.classList.remove('hidden')
            }

            document.body.classList.toggle('overflow-hidden')
        },
        toggleSearch() {
            this.showSearch = !this.showSearch
            this.searchQuery = ''
        },
        searchAnime() {
            // console.log('search anime')
            // console.log(this.searchQuery)
            this.showSearch = false
            this.$router.push(`/search/${this.searchQuery}?page=1`)
        }
    }
}
</script>

<style>
.animate {
    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
}

.fadeInFromLeft {
    animation: moveInFromLeft 0.4s ease-out;
}

.fadeInFromRight {
    animation: moveInFromRight 0.4s ease-out;
}

/* animation move in from left */
@keyframes moveInFromLeft {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(0);
    }
}

/* animation move in from right */
@keyframes moveInFromRight {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-100%);
    }
}
</style>