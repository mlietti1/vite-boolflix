<script>
import { store } from '../data/store';
export default {
  name: 'AppMain',
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
  <div class="container">
    <h3>{{title}}</h3>
    <ul>
      <li v-for="card in store[type]" :key="card.id">card</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>


</style>