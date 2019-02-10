<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    methods: {
      startHacking() {
        this.$notify({
          title: 'It works!',
          type: 'success',
          message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
          duration: 5000
        })
      },
      a() {
        console.log()
        this.$api.test.a()
      }
    }
  }
</script>

<style>
  #app {
    font-family: Helvetica, sans-serif;
    text-align: center;
  }
</style>
