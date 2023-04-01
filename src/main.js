import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'

/* add fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* add some free styles */
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faGithub);

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
