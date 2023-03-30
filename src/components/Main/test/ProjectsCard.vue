<script>
export default {
  name: 'ProjectsCard',
  data() {
    return {

    }
  },
  props: {
    project: {
      default: null
    }
  },

}
</script>

<template>
  <div>
    <div class="top_card">
      <h2 class="card-title">{{ project.title }}</h2>
    </div>
    <div class="bottom_card d-flex">

      <!-- featured_image -->
      <div class="left_bottom w-50">
        <div v-if="project.full_path_featured_image" class="">
          <img :src="project.full_path_featured_image" class="card-img-top" alt="...">
        </div>
        <div v-else class="">
          <img src="https://picsum.photos/200" class="card-img-top" alt="...">
        </div>
      </div>

      <!-- ... -->
      <div class="right_bottom w-50">

      </div>
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
