<template>
  <div>
    {{name}}
    {{#router}}
    <hello-world></hello-world>
    {{/router}}
  </div>
</template>

<script>
{{#router}}
import HelloWorld from '../components/HelloWorld'

{{/router}}

export default {
  data() {
    return {
      name: "home..."
    }
  },
  components: {
    HelloWorld
  }
}

</script>

<style>

</style>
