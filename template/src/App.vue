<template>
  <section class="app-wrapper">
    {{#router}}
    <router-view></router-view>
    {{else}}
    <Home/>
    {{/router}}
  </section>
</template>

<script>
{{#unless router}}
import Home from './pages/home'

{{/unless}}

export default {
  name: 'App'{{#router}}{{else}},
  components: {
    Home
  }{{/router}}
}
</script>

<style rel="stylesheet/scss" lang="scss">

{{#isMobile}}
@import './assets/css/_rem.scss';
@import './assets/css/_reset.scss';
{{/isMobile}}

.app-wrapper {

}
</style>
