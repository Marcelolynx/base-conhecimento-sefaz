<template lang='pug'>
    svg.graph(id='svg')
        path(v-for="line in lines" :d="line.d" style="stroke:#164193;stroke-width:3" fill="transparent")
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'DrawLines',
  computed: {
    ...mapState(['lines'])
  }
}
</script>
<style scoped>
.graph {
  width: 100vh;
  height: 800px;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -2;
}
</style>
