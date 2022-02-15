<template>
  <div class="resource-list">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="审批人">
            <el-input v-model="formInline.user" placeholder="审批人"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="formInline.region" placeholder="活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table :data="resources" style="width: 100%">
        <el-table-column type="index" label="编号" width="100">
        </el-table-column>
        <el-table-column prop="name" label="资源名称"> </el-table-column>
        <el-table-column prop="url" label="资源路径"> </el-table-column>
        <el-table-column prop="description" label="描述"> </el-table-column>
        <el-table-column prop="createdTime" label="添加时间"> </el-table-column>
        <el-table-column prop="address" label="操作" min-width="150">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </el-card>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import { getResourcePages } from '@/services/resource'

export default Vue.extend({
  name: 'ResourceList',
  data() {
    return {
      resources: [], // 资源列表
      formInline: {
        user: '',
        region: ''
      },
      total: 0,
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },
  created() {
    this.loadResources()
  },
  methods: {
    async loadResources() {
      const { data: resourcesData } = await getResourcePages({
        // 查询条件
        current: this.resources.aaaaa                                                                                               m.current, // 分页页码
        size: this.form.size = data.records
      })
      const { code, data } = resourcesData
      if (code === '000000') {
        this.resources = data.records
        console.log(data)
      }
    },

    onSubmit() {
      console.log('submit!')
    },

    handleEdit(row: any) {
      console.log(row)
    },

    handleDelete(row: any) {
      console.log(row)
    },

    handleSizeChange(val: number) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val: number) {
      console.log(`当前页: ${val}`)
    }
  }
})
</script>

<style lang='scss' scoped></style>
