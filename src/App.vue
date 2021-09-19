<template>
  <div id="app">
    <div>拉勾教育</div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class App extends Vue {
  a = 1
  b = 2
  c = 3
  test (): void {
    this.a = 4
  }
}
</script>

<!-- <script lang="ts">
import Vue from "vue"

export default Vue.extend({
  data () {
    return {
      a: 1,
      b: 2,
      c: 3

    }
  },
  methods: {
    test() {
      this.a.abc()
    }
  }
})
</script> -->

<!-- <script>
// 1. 编辑器给的类型提示
// 2. Typescript 编译期间的类型提示
export default {
  data () {
    return {
      a: 1,
      b: 2,
      c: 3

    }
  },
  methods: {
    test() {
      this.a.abc()
    }
  }
}
</script> -->

<style lang="scss" scoped></style>
