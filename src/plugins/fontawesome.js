import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFacebook)
library.add(faGoogle)
library.add(faGithub)

Vue.component('font-awesome-icon', FontAwesomeIcon)
