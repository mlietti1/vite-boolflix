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
  <div class="d-flex justify-content-between align-items-center">

    <img class="m-3" src="logo-boolflix.png" alt="Boolflix">
    
    <nav class="d-flex m-3">
      <input class="me-3 form-control" @keyup.enter="$emit('search')" v-model.trim="store.paramsApi.query" type="text" placeholder="Search Movie or TV Show">

      <select 
      v-model="store.type" 
      @change="$emit('search')"
      class="form-select" aria-label="Default select example">
        <option selected value="">All</option>
        <option value="movie">Movies</option>
        <option value="tv">TV Series</option>
      </select>
    </nav>

  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
@use '../styles/partials/mixin' as *;

img{
  width: 200px;
}

</style>