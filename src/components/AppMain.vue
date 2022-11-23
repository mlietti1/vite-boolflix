<script>
import { store } from '../data/store';
export default {
  name: 'AppMain',
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <div>
    <ul v-for="movie in store.moviesData" :key="movie.id">
      <li>{{movie.original_title}}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>


</style>