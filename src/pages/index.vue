<template>
  <div>
    <div class="warp">
      <left-nav></left-nav>
      <div class="main-right">
        <top-nav style="border-bottom: solid 1px #e6e6e6;"></top-nav>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import LeftNav from "../components/left-nav"
  import TopNav from "../components/top-nav"
  export default {
    name: "index",
    data() {
      return {}
    },
    components: {TopNav, LeftNav},
  }
</script>

<style scoped lang="stylus">
  @import "~common/css/index.styl"
  .warp
    flex()
    flex-direction row
  .main-right
    flex()
    flex-direction column
    width 100%
    border-left solid 1px #e6e6e6;
</style>
