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
    getMovie(type, isPopular = false){
      let apiUrl;
      if(isPopular) apiUrl = 'https://api.themoviedb.org/3/' + type + '/popular';
      else apiUrl = store.apiUrl;
      axios.get(apiUrl, {
        params: {
          api_key: store.paramsApi.key,
          query: store.paramsApi.query
        }})
      .then (result => {
        store[type] = result.data.results;
        console.log(result.data.results);
      })
      .catch(error => {
        console.log(error);
      })
    },
    startSearch(){
      store.movie = [];
      store.tv = [];
      if(store.type === ''){
        this.getMovie('movie');
        this.getMovie('tv');
      }else{
        this.getMovie(store.type)
      }

    }
  },
  mounted(){
    this.getMovie('movie', true);
    this.getMovie('tv', true);
  }
}
</script>

<template>
  <AppHeader @search="startSearch()" />
  <AppMain v-if="store.movie.length > 0" title="Movies" type="movie"/>
  <AppMain v-if="store.tv.length > 0" title="TV Series" type="tv"/>
</template>

<style lang="scss">
@use './styles/general';

</style>