<script>

export default {
  name: 'AppCard',
  props:{
    card: Object
  }
}
</script>

<template>
  <div>
    <h4>{{card.title || card.name}}</h4>
  </div>
</template>

<style lang="scss" scoped>

</style>