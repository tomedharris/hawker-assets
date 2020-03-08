import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faSearch, faArrowSquareRight, faEnvelope } from '@fortawesome/pro-solid-svg-icons';
import { faBars, faTimes, faSpinner } from '@fortawesome/pro-regular-svg-icons';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
Vue.component('font-awesome-icon', FontAwesomeIcon);

library.add(faSearch);
library.add(faArrowSquareRight);
library.add(faEnvelope);

library.add(faBars);
library.add(faTimes);
library.add(faSpinner);

library.add(faTwitter);
library.add(faInstagram);
library.add(faFacebook);