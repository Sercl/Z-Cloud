<template>
  <div>
    <div style="margin: 10px 0 10px 10px">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/overview' }">集群</el-breadcrumb-item>
        <el-breadcrumb-item>概览</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: "breadcrumb",
    data() {
      return {}
    },
    components: {},
  }
</script>

<style scoped lang="stylus">

</style>
