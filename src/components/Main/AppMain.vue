<script>
import axios from 'axios';

import SwiperBox from './SwiperBox.vue';

export default {
  name: 'AppMain',
  components:{
    SwiperBox,
  },
  data() {
    return {
      projects: null,
      currentPage: 1,
      lastPage: 1,
    }
  }
  ,
  created() {
    axios.get('http://127.0.0.1:8000/api/projects', {
      params: {
        page: this.currentPage
      }
    })
      .then(response => {
        console.log(response.data);
        this.projects = response.data.projects.data;
      });
  },

}
</script>

<template>
  <div>
    <main>
      <div class="container">
        <div class="row">
          <div class="col">
            <h1 class="text-danger">
              Progetti
            </h1>
          </div>
        </div>
        <div class="row row-cols-4 gy-4">

          <div class="col">
            <SwiperBox :projects="projects"/>

           

            <!-- <div class="card h-100">
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
            </div> -->

 
          </div>
        </div>
      </div>
  </main>
</div>
</template>

<style lang="scss" scoped>
main{
  .card{
    .card-body{
      .text-date{
        font-size: 0.8rem;
      }
    }
  }
}

</style>
