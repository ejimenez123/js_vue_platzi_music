<template lang="pug">
  #app
    img(src="./assets/logo.png")
    h1 {{ msg }}
    p {{ 1 + 1 }}
    p {{ 'Hola' + 'Mundo' }}
    p {{ person.name }}
    p {{ person.name.toUpperCase() }}
    p {{ JSON.stringify(person) }}
    p {{ true ? 'true' : 'false' }}
    p(v-show="showValue") {{ value }}
    p(v-if="showValue") {{ value }}
    p(v-else-if="false") {{ 'algo mas' }}
    p(v-else) {{ 'lo ultimo' }}
    ul
      li(v-for="i in items") {{ i }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hola Vue!',
      person: {
          name: 'Juan'
      },
      showValue: false,
      value: 'Algo',
      items: [1, 2, 3, 4, 5]      
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
