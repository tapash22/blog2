<template>
<swiper :slidesPerView="3" :spaceBetween="30" :freeMode="true" :pagination="{
        clickable: true,
      }" :modules="modules" class="mySwiper">
    <swiper-slide v-for="image in images" :key="image.id">
        <v-img :src="image.image">
            <p class="mt-5">{{ image.name }}</p>
        </v-img>
    </swiper-slide>

</swiper>
</template>

<script>
// Import Swiper Vue.js components
import {
    Swiper,
    SwiperSlide
} from 'swiper/vue';
import 'swiper/css';

import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {
    FreeMode,
    Pagination
} from 'swiper';

export default {

    props:['images'],
    data() {
        return {
            // images: [{
            //         id: 1,
            //         name: 'room1',
            //         image: 'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg'
            //     },
            //     {
            //         id: 2,
            //         name: 'room2',
            //         image: 'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg'
            //     },
            //     {
            //         id: 3,
            //         name: 'room3',
            //         image: 'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg'
            //     },
            //     {
            //         id: 4,
            //         name: 'room4',
            //         image: 'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg'
            //     },
            //     {
            //         id: 5,
            //         name: 'room5',
            //         image: 'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg'
            //     },
            //     {
            //         id: 6,
            //         name: 'room6',
            //         image: 'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg'
            //     },
            //     {
            //         id: 7,
            //         name: 'room7',
            //         image: 'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg'
            //     },
            //     {
            //         id: 8,
            //         name: 'room8',
            //         image: 'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg'
            //     },
            // ]
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [FreeMode, Pagination],
        };
    },
};
</script>

<style scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
