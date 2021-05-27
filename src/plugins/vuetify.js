import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
      },
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
    icons: {
        iconfont: 'mdiSvg',
    },
    icons: {
        iconfont: 'md',
    },
});
