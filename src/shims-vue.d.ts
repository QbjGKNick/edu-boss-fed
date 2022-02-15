declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'element-ui'

declare module 'vue' {
  export interface GlobalComponents {
    Form: typeof import('element-ui')['Form']
  }
}