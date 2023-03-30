<script>
// Axios
import axios from 'axios';

// Components
import ProjectsCard from '../components/Main/ProjectsCard.vue';

export default {
  name: 'ProjectsShow',
  components: {
    ProjectsCard,
  },
  data(){
    return{
      apiUrl: 'http://127.0.0.1:8000/api',
      project: null,
    }
  },
  created() {
    this. getApiProjects()
  },
  methods: {
    getApiProjects() {
      axios.get(`${this.apiUrl}/projects/${this.$route.params.slug}`, {
        params: {
        }
      })
        .then(response => {
          console.log(response.data);
          if(response.data.success)
            this.project = response.data.projects;
          console.log(this.project);

        });
    }
  },
  
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        {{ $route.params.slug }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
