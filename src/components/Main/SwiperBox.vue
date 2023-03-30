<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// import required modules
import { EffectCards } from 'swiper';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-cards';


export default {
    name: 'SwiperBox',
    data() {
        return {

        }
    },
    props: {
        projects:{
            default: null
        }
        // title: String
        // ,
        // description: String,
        // srcImage: String,
        // urlImage: String,
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [EffectCards],
        };
    },

}
</script>

<template>
    <div>
        <swiper :effect="'cards'" :grabCursor="true" :modules="modules" class="mySwiper">
            <swiper-slide  v-for="(project, index) in projects">
                <div class="card h-100">
              <div v-if="project.full_path_featured_image" class="">
                <img :src="project.full_path_featured_image" class="card-img-top" alt="...">
              </div>
              <div v-else class="">
                <img src="https://picsum.photos/200" class="card-img-top" alt="...">
              </div>
              <div class="card-body d-flex justify-content-between flex-column">
                <h5 class="card-title">{{ project.title }}</h5>
                <div class="text-date">
                  {{ project.formatted_created_at }}
                </div>
                <ul class="">
                  <li class="badge bg-primary m-1" v-for="(technology, index) in project.technologies">
                    {{ technology.name }}
                  </li>
                </ul>
                <div v-if="project.type" class="">
                  {{ project.type.name }}
                </div>
                <p class="card-text">{{ project.description ?? '' }}</p>
                <template v-if="project.link_repo">
                  <a :href="project.link_repo" class="btn btn-primary">Go somewhere</a>
                </template>
              </div>
            </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<style lang="scss" scoped>
.swiper {
    width: 240px;
    height: 320px;
}

.swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
}

.swiper-slide:nth-child(1n) {
    background-color: rgb(206, 17, 17);
}

.swiper-slide:nth-child(2n) {
    background-color: rgb(0, 140, 255);
}

.swiper-slide:nth-child(3n) {
    background-color: rgb(10, 184, 111);
}

.swiper-slide:nth-child(4n) {
    background-color: rgb(211, 122, 7);
}

.swiper-slide:nth-child(5n) {
    background-color: rgb(118, 163, 12);
}

.swiper-slide:nth-child(6n) {
    background-color: rgb(180, 10, 47);
}

.swiper-slide:nth-child(7n) {
    background-color: rgb(35, 99, 19);
}

.swiper-slide:nth-child(8n) {
    background-color: rgb(0, 68, 255);
}

.swiper-slide:nth-child(9n) {
    background-color: rgb(218, 12, 218);
}

.swiper-slide:nth-child(10n) {
    background-color: rgb(54, 94, 77);
}
</style>
