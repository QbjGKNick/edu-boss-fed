<template>
  <div class="resource">
    <resoucre-list />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ResoucreList from './components/List.vue'

export default Vue.extend({
  name: 'ResourceIndex',
  components: {
    ResoucreList
  }
})
</script>

<style lang="scss" scoped>

</style>
