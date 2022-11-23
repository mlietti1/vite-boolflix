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
    this.startSearch();
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