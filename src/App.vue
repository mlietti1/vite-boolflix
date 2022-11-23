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
    getMovie(type){
      axios.get(store.apiUrl + type, {
        params: {
          api_key: store.paramsApi.key,
          query: store.paramsApi.query
        }})
      .then (result => {
        store.moviesData = [];
        store[type] = result.data.results;
        console.log(result.data.results);
      })
      .catch(error => {
        console.log(error);
      })
    },
  },
  mounted(){
    this.getMovie('movie');
    this.getMovie('tv');
  }
}
</script>

<template>
  <AppHeader @search="getMovie('movie')" />
  <AppMain title="Movies" type="movie"/>
  <AppMain title="TV Series" type="tv"/>
</template>

<style lang="scss">
@use './styles/general';

</style>