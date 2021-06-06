import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },

    dark: true,
    
    themes: {
      light: {
        primary: '#007BFF',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
      dark: {
        primary: '#5b6b87',
        secondary: '#035d77',
        accent: '#5b6b87',
        error: '#af4d24',
        success: '#03833a',
        warning: '#a1a800',
        text: '#acaca7'
      },
    },
  },
});
