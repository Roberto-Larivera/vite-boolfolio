<script>
import axios from 'axios';
import ProjectsCard from './ProjectsCard.vue';



export default {
  name: 'AppMain',
  components:{
    ProjectsCard,
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
    <main>
      <div class="container">
        <div class="row row-cols-4 g-4">

          <div class="col" v-for="project in projects">
            <ProjectsCard :project="project"/>
          </div>

        </div>
      </div>
  </main>
</template>

<style lang="scss" scoped>


</style>
