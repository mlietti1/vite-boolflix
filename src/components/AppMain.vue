<script>
import { store } from '../data/store';
import AppCard from './AppCard.vue';
export default {
  name: 'AppMain',
  components: {
    AppCard
  },
  props:{
    title: String,
    type: String
  },
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <main>

    <div class="container">
      <h3>{{title}}</h3>
      <div class="justify-content-center row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-xl-6">
        <AppCard v-for="card in store[type]" :key="card.id" :card="card"/>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
main{
  background-color: $primary-color;
  padding: 2rem 0;
  h3 {
    margin-bottom: 2rem;
  }
}

</style>