<script>
import ProjectsCard from './ProjectsCard.vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// import required modules
import { Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


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
        ProjectsCard,
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },

}
</script>

<template>
    <div class="h-100">
        <swiper
            :direction="'vertical'"
            :pagination="{
            clickable: true,
            }"
            :modules="modules"
            class="mySwiper"
        >
            <swiper-slide  v-for="project in projects">
                <ProjectsCard :project="project"/>
            </swiper-slide>

        </swiper>
    </div>
</template>

<style lang="scss" scoped>
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
