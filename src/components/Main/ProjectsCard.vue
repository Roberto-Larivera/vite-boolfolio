<script>
export default {
  name: 'ProjectsCard',
  data() {
    return {

    }
  },
  props: {
    project: {
      type: Object,
      default: null
    }
  },

}
</script>

<template>
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

      <a :href="project.link_repo" class="text-decoration-none">
        {{ project.name_repo }}
      </a>


      <p class="card-text text-truncate">
        {{ project.description ?? '' }}
      </p>


      <div v-if="project.type" class="text-center p-2">
        {{ project.type.name }}
      </div>

      <ul class="m-0 p-0 d-flex justify-content-center" v-if="project.technologies.length > 0">
        <li class="badge bg-primary m-1" v-for="(technology, index) in project.technologies">
          {{ technology.name }}
        </li>
      </ul>

      <template v-if="project.link_repo">
        <a :href="project.link_repo" class="btn btn-primary">Vedi</a>
      </template>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.card {
  .card-body {
    .text-date {
      font-size: 0.8rem;
    }
  }
}
</style>
