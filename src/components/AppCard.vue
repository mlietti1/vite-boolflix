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

  <div class="col mc-card mb-3">

    <div class="card-content">

      <div class="card-preview">
        <img v-if="card.poster_path != null" :src="store.imgPath + card.poster_path" alt="">
        <div class="no-img" v-else></div>
      </div>
    
      <div class="mc-card-info d-flex flex-column">
        <h4>{{card.title || card.name}}</h4>
        <p>Original title: {{card.original_title || card.original_name}}</p>
        <p class="lang">Language: 
          <span v-if="getFlag()" :class="getFlag()"></span>
          <span v-else>{{card.original_language}}</span>
        </p>
      </div>
    </div>


  </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;

.card-content{
  max-width: 300px;
  max-height: 450px;
  overflow: hidden;
  position: relative;
  &:hover .card-preview{
    filter: brightness(0.4);
    opacity: 0.4;
  }
  &:hover .mc-card-info{
    top: 0;
  }
  .card-preview {
    width: 100%;
    transition: all 0.5s;
    img{
      width: 100%;
      object-fit: cover;
    }
  }
  .mc-card-info {
    padding: 15px;
    width: 100%;
    position: absolute;
    top: 100%;
    height: 100%;
    overflow: auto;
    transition: all 0.5s;
  }
}
</style>