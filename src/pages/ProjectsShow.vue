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
  data() {
    return {
      apiUrl: 'http://127.0.0.1:8000/api',
      project: null,
      statuscCallProject: false,
    }
  },
  created() {
    this.getApiProjects()
  },
  methods: {
    getApiProjects() {
      axios.get(`${this.apiUrl}/projects/${this.$route.params.slug}`, {
        params: {
        }
      })
        .then(response => {
          console.log(response.data);
          if (response.data.success){
            this.project = response.data.project;
            this.statuscCallProject = true;
            console.log(this.statuscCallProject );
          }
          else
            this.$router.push({ name: 'not-found' })

          console.log(this.project);
        });
    }
  },

}
</script>

<template>
  <div class="container mt-5 mb-5" :class="statuscCallProject == false ? 'statusCallProjectH':''">
    <div class="row h-100" v-if="statuscCallProject == false">
      <div class="col d-flex justify-content-center align-items-center h-100">
        <div class="spinner-border text-info">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>

    <div class="row row-cols-1" v-if="statuscCallProject">
      <div class="col text-center mb-5">
        <h1 class="mb-3">
          {{ project.title }}
        </h1>
        <h4 class="mb-3">
          {{ project.type.name }}
        </h4>
        <ul class="tag-technologies pb-4" v-if="project.technologies">
          <li v-for="technology in project.technologies">
            {{ technology.name }}
          </li>
        </ul>

        <p>
          {{ project.description }}
        </p>
      </div>
      <div class="col d-flex justify-content-center mb-5">
        <img class="w-75" :src="project.full_path_featured_image">
      </div>
      <div class="col d-flex justify-content-center">
        <a class="btn btn-dark d-flex align-items-center" :href="project.link_repo"><font-awesome-icon class="p-1 me-3"
            icon="fa-brands fa-github" size="2x" /> <span>Guarda su Github</span> </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.statusCallProjectH{
  height: calc(100vh - 170px);
  .spinner-border{
    width: 3rem;
    height: 3rem;
    font-size: 2rem;
  }
}
h4 {
  color: lightslategray;
}

.tag-technologies {
  display: flex;
  justify-content: space-evenly;

  >li {
    list-style: none;
    color: lightgray;
  }
}
</style>
