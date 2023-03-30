<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      menuItems:[
        {
          routeName: 'home',
          label: 'Home'
        },
        {
          routeName: 'about-me',
          label: 'Chi Sono'
        },
        {
          routeName: 'projects-index',
          label: 'Progetti'
        }
      ]
    }
  }

}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container-fluid">

            <!-- Titolo + button burger  -->
            <router-link :to="{ name: 'home' }" class="navbar-brand">
              Laravel Boolfolio
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Link pagina  -->
            <div class="collapse navbar-collapse" id="navbarSupportedContent">

              <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                <li class="nav-item" v-for="item in menuItems">
                  <router-link :to="{ name: item.routeName }" class="nav-link">
                    {{ item.label }}
                  </router-link>
                </li>

              </ul>

            </div>

          </div>
        </nav>

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
