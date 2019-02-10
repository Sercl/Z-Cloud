<template>
  <div style="margin: 10px">
    <breadcrumb></breadcrumb>
    <div>
      <template>
        <el-table
                :span-method="arraySpanMethod"
                :data="tableData"
                border
                style="width: 100%">
          <el-table-column
                  prop="a"
                  label=""
                  width="50%">
            <template slot-scope="scope">
              <div v-if="status[scope.$index]">
                <el-tabs style="margin: 0 -11px;" type="border-card">
                  <el-tab-pane label="Pod详情">
                    Pod详情
                    {{tableData[scope.$index-1].pod.a}}
                  </el-tab-pane>
                  <el-tab-pane label="日志">日志</el-tab-pane>
                </el-tabs>
              </div>
              <div style="text-align: center" v-show="!status[scope.$index]">
                <i @click="open(scope.$index)" class="iconfont icon-zhankai"
                   :class="[status[scope.$index+1]?'switch-open':'switch']"></i>
              </div>
            </template>
          </el-table-column>

          <el-table-column
                  prop="status"
                  label="状态"
                  width="60">
          </el-table-column>
          <el-table-column
                  prop="deployName"
                  label="部署名称"
                  >
          </el-table-column>
          <el-table-column
                  prop="version"
                  label="版本">
          </el-table-column>
          <el-table-column
                  prop="label"
                  label="标签">
          </el-table-column>
          <el-table-column
                  prop="dockerStatus"
                  label="容器状态">
          </el-table-column>
          <el-table-column
                  prop="node"
                  label="节点">
            <template slot-scope="scope">
              <el-button v-if="true"
                         @click.native.prevent="deleteRow(scope, tableData)"
                         type="text"
                         size="small">
                移除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Breadcrumb from "../../components/breadcrumb"

  export default {
    name: "overview",
    data() {
      return {
        s: 3,
        tableData: [
          {
            status: '运行',
            deployName: 'deploy0',
            version: 'v1.0',
            label: '1',
            dockerStatus: 'asd',
            node: 's',
            pod:{
              a:'asdasd0'
            }
          },
          {
            status: '运行',
            deployName: 'deploy1',
            version: 'v1.1',
            label: '1',
            dockerStatus: 'asd',
            node: 's',
            pod:{
              a:'asdasd1'
            }
          },
          {
            status: '运行',
            deployName: 'deploy2',
            version: 'v1.2',
            label: '2',
            dockerStatus: 'asd',
            node: 's',
            pod:{
              a:'asdasd2'
            }
          },
          {},
          {
            status: '运行',
            deployName: 'deploy3',
            version: 'v1.3',
            label: '2',
            dockerStatus: 'asd',
            node: 's',
            pod:{
              a:'asdasd3'
            }
          }
        ],
        pod:[
          {
            a:'pod0'
          },
          {
            a:'pod1'
          },
          {
            a:'pod2'
          },
          {
            a:'pod3'
          }
        ]
      }

    },
    components: {Breadcrumb},
    computed: {
      status() {
        let status = []
        let self = this
        this.tableData.forEach((value, index) => {
          if (value.status === undefined) {
            status.push(1)
            self.s = index
          } else {
            status.push(0)
          }
        })
        return status
      }
    },
    methods: {
      deleteRow(index, rows) {
        console.log(index)
        //rows.splice(index, 1)
      },
      open(index) {
        if (index < this.tableData.length-1) {
          if (this.tableData[index + 1].status === undefined) {
            //关闭
            this.tableData.splice(this.s, 1)
            this.s = -1
          } else {
            //打开
            if (this.s === -1) {
              this.tableData.splice(index+1, 0, {})
            } else {
              //删除当前空元素
              this.tableData.splice(this.s, 1)
              //添加空元素
              this.tableData.splice(index+1, 0, {})
            }
          }
        } else {
          console.log(this.tableData[index+1])
          if (this.tableData[index + 1] !== undefined) {
            //关闭
            this.tableData.splice(this.s, 1)
            this.s = -1
          } else {
            //打开
            if (this.s === -1) {
              this.tableData.splice(index+1, 0, {})
            } else {
              //删除当前空元素
              this.tableData.splice(this.s, 1)
              //添加空元素
              this.tableData.splice(index+1, 0, {})
            }
          }
        }

      },
      arraySpanMethod({row, column, rowIndex, columnIndex}) {
        if (rowIndex === this.s) {
          return [1, 7]
        }
      },
    }
  }
</script>

<style scoped lang="stylus">
  .switch-open:before
    display inline-block
    transform rotate(270deg)

  .switch:before
    display inline-block
    transform rotate(90deg)
</style>
