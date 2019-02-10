<template>
  <div>
    <img style="margin: 5px" src="../assets/logo.jpg" :width="imgWidth" alt="">
    <el-menu :collapse-transition="false" default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen"
             @close="handleClose" @select="select" :unique-opened="true" :collapse="isCollapse">
      <!--<el-submenu index="1">-->
        <!--<template slot="title">-->
          <!--<i class="el-icon-location"></i>-->
          <!--<span slot="title">导航一</span>-->
        <!--</template>-->
        <!--<el-menu-item-group>-->
          <!--<span slot="title">分组一</span>-->
          <!--<el-menu-item index="1-1">选项1</el-menu-item>-->
          <!--<el-menu-item index="1-2">选项2</el-menu-item>-->
        <!--</el-menu-item-group>-->
        <!--<el-menu-item-group title="分组2">-->
          <!--<el-menu-item index="1-3">选项3</el-menu-item>-->
        <!--</el-menu-item-group>-->
        <!--<el-submenu index="1-4">-->
          <!--<span slot="title">选项4</span>-->
          <!--<el-menu-item index="1-4-1">选项1</el-menu-item>-->
        <!--</el-submenu>-->
      <!--</el-submenu>-->
      <el-menu-item index="2">
        <i class="iconfont icon-gailan"></i>
        <span class="menu-item" slot="title">概览</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="iconfont icon-rongqigoujian"></i>
        <span slot="title">构建</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="iconfont icon-xitongbushu"></i>
        <span slot="title">部署</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="iconfont icon-network"></i>
        <span slot="title">网络</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="iconfont icon-jiankong"></i>
        <span slot="title">监控</span>
      </el-menu-item>
      <el-menu-item index="7">
        <i class="iconfont icon-renwu"></i>
        <span slot="title">任务</span>
      </el-menu-item>
      <el-menu-item index="8">
        <i class="iconfont icon-shezhi"></i>
        <span slot="title">设置</span>
      </el-menu-item>
      <el-menu-item index="9">
        <i class="iconfont icon-zhankai" :class="{'switch-open':isCollapse}"></i>
        <span slot="title">{{switchStatus}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "left-nav",
    data() {
      return {
        isCollapse: true
      }
    },
    computed: {
      imgWidth() {
        return this.isCollapse ? '59px' : '145px'
      },
      switchStatus() {
        return this.isCollapse ? '展开' : '收起'
      }
    },
    components: {},
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      },
      select(key) {
        if (key === '9') {
          this.isCollapse = !this.isCollapse
        }
        if (key === '2') {
          this.$router.push('/overview')
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  /*@import "~common/css/index.styl"*/
  .el-menu-vertical-demo:not(.el-menu--collapse)
    width: 150px;
    //height 100%
    min-height: 400px;
  .el-menu-vertical-demo
    border-right none
    span
      margin-left 5px
  .switch-open:before
    display inline-block
    transform rotate(180deg)
</style>
