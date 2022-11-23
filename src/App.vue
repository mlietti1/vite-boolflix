<script>
import axios from 'axios';

import {store} from './data/store'

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getMovie(){
      axios.get(store.apiUrlMovie, {
        params: {
          api_key: store.paramsApi.key,
          query: store.paramsApi.query
        }})
      .then (result => {
        store.moviesData = [];
        store.moviesData = result.data.results;
        console.log(result.data.results);
      })
      .catch(error => {
        console.log(error);
      })
    },
  },
  mounted(){
    this.getMovie();
  }
}
</script>

<template>
  <AppHeader @search="getMovie()" />
  <AppMain />
</template>

<style lang="scss">
@use './styles/general';

</style>