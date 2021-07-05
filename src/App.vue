<template>
  <div id='app'>
    <h1>拉钩教育</h1>
    <p>{{ a }}</p>
    <router-view />
  </div>
</template>

<script>
function testable (target) {
  target.isTestable = true
}

@testable
class MyTestableClass {
  // ...
}

console.log(MyTestableClass.isTestable)
</script>

<!--<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class App extends Vue {
  a = 1
  b = '2'
  c = {
    a: 1,
    b: '2'
  }

  test (): void {
    console.log(this.a)
  }
}
</script>-->

<!--<script lang='ts'>
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      a: 1,
      b: '2',
      c: [],
      d: {
        a: 1,
        b: '2'
      }
    }
  },
  methods: {
    test() {
      this.a.abc()
    }
  }
})
</script>-->

<!--<script>
// 1. 编译器给的类型提示
// 2. Typescript 编译期间的类型验证
export default {
  data() {
    return {
      a: 1,
      b: '2',
      c: [],
      d: {
        a: 1,
        b: '2'
      }
    }
  },
  methods: {
    test() {
      this.a.abc()
    }
  }
}
</script>
-->

<style lang='scss'></style>
