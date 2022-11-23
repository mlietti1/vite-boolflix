<script>

export default {
  name: 'AppCard',
  props:{
    card: Object
  }
}
</script>

<template>
  <div class="col mc-card d-flex flex-column m-3 p-3">
    <h4>{{card.title || card.name}}</h4>
    <p>{{card.original_title || card.original_name}}</p>
    <p>Language: {{card.original_language}}</p>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/vars' as *;
</style>