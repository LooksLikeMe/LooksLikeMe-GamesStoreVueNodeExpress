<template>
  <div>
    <h2>test</h2>
    <p>123123123132</p>
  <MevnHeader />
  
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    MevnHeader : () => import('@/components/layouts/Header'),
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
