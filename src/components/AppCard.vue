<script>
import {store} from '../data/store';
export default {
  name: 'AppCard',
  props:{
    card: Object
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getFlag(){
      if (this.card.original_language === 'it'){
        return "fi fi-it";
      }else if (this.card.original_language === 'en' || this.card.original_language === 'uk'){
        return "fi fi-gb";
      }else if (this.card.original_language === 'de'){
        return "fi fi-de";
      }else if (this.card.original_language === 'fr'){
        return "fi fi-fr";
      }else{
        return '';
      }
    }
  }
}
</script>

<template>

  <div class="col mc-card">
    <img v-if="card.poster_path != null" :src="store.imgPath + card.poster_path" alt="">
    <div class="no-img" v-else></div>
  </div>

  <div class="col mc-card d-flex flex-column p-3">
    <h4>{{card.title || card.name}}</h4>
    <p>Original title: {{card.original_title || card.original_name}}</p>
    <p class="lang">Language: 
      <span v-if="getFlag()" :class="getFlag()"></span>
      <span v-else>{{card.original_language}}</span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
.lang{
  text-transform: capitalize;
}
</style>