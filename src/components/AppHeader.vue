<script>

import { store } from '../data/store';
export default {
  name: 'AppHeader',
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <div class="d-flex justify-content-between m-3">
    <img src="logo-boolflix.png" alt="Boolflix">
    
    <input @keyup="$emit('search')" v-model.trim="store.paramsApi.query" type="text" placeholder="Search Movie or TV Show">

  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
@use '../styles/partials/mixin' as *;

img{
  width: 200px;
}

</style>