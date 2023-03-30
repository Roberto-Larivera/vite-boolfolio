<script>
import axios from 'axios';
import ProjectsCard from './ProjectsCard.vue';



export default {
  name: 'AppMain',
  components: {
    ProjectsCard,
  },
  data() {
    return {
      projects: null,
      currentPage: 1,
      lastPage: 1,
      itemsPage: 12,
    }
  }
  ,
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
      axios.get('http://127.0.0.1:8000/api/projects', {
        params: {
          page: this.currentPage,
          items_per_page: this.itemsPage,
        }
      })
        .then(response => {
          console.log(response.data);
          this.projects = response.data.projects.data;
          this.lastPage = response.data.projects.last_page;

        });
    }
  },

}
</script>

<template>
  <main>
    <div class="container">
      <div class="row mb-5">
        <div class="col-auto align-self-center">
          <nav>
            <ul class="pagination m-0">
              <li class="page-item" v-for="nPage in lastPage">
                <button class="page-link p-3" :class="currentPage == nPage ? 'active' : ''" @click="changePage(nPage)">
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
      <div class="row row-cols-4 g-4">

        <div class="col" v-for="project in projects">
          <ProjectsCard :project="project" />
        </div>

      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
