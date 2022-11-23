<script>

import {store} from '../data/store'

export default {
  name: 'AppCard',
  props:{
    card: Object
  },
  data(){
    return{
      store
    }
  }
}
</script>

<template>
  <div>
    <h4></h4>
  </div>
</template>

<style lang="scss" scoped>

</style>