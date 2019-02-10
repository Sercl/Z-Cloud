<template>
  <div>
    <el-menu style="float: right; " :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">集群</el-menu-item>
      <!--<el-submenu index="2">-->
        <!--<template slot="title">帮助</template>-->
        <!--<el-menu-item index="2-1">选项1</el-menu-item>-->
        <!--<el-menu-item index="2-2">选项2</el-menu-item>-->
        <!--<el-menu-item index="2-3">选项3</el-menu-item>-->
        <!--<el-submenu index="2-4">-->
          <!--<template slot="title">选项4</template>-->
          <!--<el-menu-item index="2-4-1">选项1</el-menu-item>-->
          <!--<el-menu-item index="2-4-2">选项2</el-menu-item>-->
          <!--<el-menu-item index="2-4-3">选项3</el-menu-item>-->
        <!--</el-submenu>-->
      <!--</el-submenu>-->
      <el-menu-item index="2">帮助</el-menu-item>
      <el-menu-item index="3">个人中心</el-menu-item>
    </el-menu>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "top-nav",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    components: {},
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped lang="stylus">

</style>
