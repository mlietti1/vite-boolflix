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
  <div class="container"><h3>{{title}}</h3></div>
  <div class="container d-flex flex-wrap">
    <AppCard v-for="card in store[type]" :key="card.id" :card="card"/>
  </div>
</template>

<style lang="scss" scoped>


</style>