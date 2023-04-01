<script>
// Axios
import axios from 'axios';

// Components
import ProjectsCard from '../components/Main/ProjectsCard.vue';

export default {
  name: 'ProjectsIndex',
  components: {
    ProjectsCard,
  },
  data() {
    return {
      apiUrl: 'http://127.0.0.1:8000/api',
      statuscCallProjects: false,
      projects: null,
      currentPage: 1,
      lastPage: 1,
      itemsPage: 12,
    }
  },
  created() {
    this.getApiProjects();
  },
  methods: {
    itemsPerPage(itemsPage) {
      this.itemsPage = itemsPage;
      this.getApiProjects();
    },
    changePage(page) {
      this.currentPage = page;
      this.getApiProjects();
    },
    getApiProjects() {
      axios.get(`${this.apiUrl}/projects`, {
        params: {
          page: this.currentPage,
          items_per_page: this.itemsPage,
        }
      })
        .then(response => {
          // console.log(response.data);
          this.projects = response.data.projects.data;
          this.lastPage = response.data.projects.last_page;
          this.statuscCallProjects = true;

        });
    }
  },

}
</script>

<template>
  <div class="container" :class="(projects == 0) || statuscCallProjects == false ? 'statusCallProjectH' : 'mb-5 mt-5'">
    <div class="row h-100" v-if="statuscCallProjects == false">
      <div class="col d-flex justify-content-center align-items-center h-100">
        <div class="spinner-border text-info">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>

    <div class="row mb-5 h-100" v-if="statuscCallProjects && projects.length == 0">
      <div class="col d-flex justify-content-center align-items-center h-100">
        <h1>
          Ci dispiace non ci sono progetti da visualizzare
        </h1>
      </div>
    </div>

    <template v-if="statuscCallProjects && projects.length > 0">
      <div class="row mb-5">
        <div class="col">
          <h1>
            Tutti i progetti
          </h1>
        </div>
      </div>
      <div class="row row-cols-4 g-4">

        <div class="col" v-for="project in projects">
          <ProjectsCard :project="project" />
        </div>

      </div>


      <div class="row mt-5">
        <div class="col-auto align-self-center">
          <nav>
            <ul class="pagination m-0">
              <li class="page-item" v-for="nPage in lastPage">
                <button class="page-link p-2" :class="currentPage == nPage ? 'active' : ''" @click="changePage(nPage)">
                  {{ nPage }}
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Select per selezionare i progetti per pagina  -->
        <div class="col-auto align-self-center">
          <select class="form-select" v-model="itemsPage" @change="itemsPerPage(itemsPage)">
            <option selected value="12">12</option>
            <option value="24">24</option>
            <option value="36">36</option>
            <option value="48">48</option>
          </select>
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.statusCallProjectH {
  height: calc(100vh - 170px);

  .spinner-border {
    width: 3rem;
    height: 3rem;
    font-size: 2rem;
  }
}
</style>
