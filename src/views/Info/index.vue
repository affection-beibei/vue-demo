<template>
  <div class="box">
    <el-row :gutter="16">
      <el-col :span="4">
        <div class="warp-lable category">
          <label for>类型:</label>
          <div class="content-warp">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </el-col>
      <el-col :span="7">
        <div class="warp-lable date">
          <label for>日期 :&nbsp;&nbsp; &nbsp;</label>
          <div class="content-warp">
            <el-date-picker
              style="width:100%"
              v-model="value2"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['08:00:00','08:00:00']"
            ></el-date-picker>
          </div>
        </div>
      </el-col>
      <el-col :span="3">
        <div class="warp-lable key-work">
          <label for>关键字:</label>
          <div class="content-warp">
            <el-select class="subtract" v-model="search_key" placeholder="ID" style="width:100%;">
              <el-option
                v-for="item in searchOption"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
      </el-col>
      <el-col :span="3">
        <el-input v-model="serach_keywork" placeholder="请输入内容" style="width:100%"></el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="danger" style="width:100%">搜索</el-button>
      </el-col>
      <el-col :span="5">
        <el-button class="pull-right" type="danger" style="width:40%" @click="dialog_info = true">新增</el-button>
      </el-col>
    </el-row>
    <!-- 表格数据 -->
    <el-table class="tabel-el" :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="title" label="标题" width="800"></el-table-column>
      <el-table-column prop="category" label="类别" width="130"></el-table-column>
      <el-table-column prop="date" label="日期" width="235"></el-table-column>
      <el-table-column prop="user" label="管理人" width="100"></el-table-column>
      <el-table-column label="操作">
        <el-button type="danger" size="mini" @click="btn_dele">删除</el-button>
        <el-button type="success" size="mini" @click="dialog_info = true">编辑</el-button>
      </el-table-column>
    </el-table>
    <el-col class="btn-page">
      <el-col :span="12">
        <el-button plain type="small" @click="deleAll">批量删除</el-button>
      </el-col>
      <el-col :span="12">
        <el-pagination
          class="pull-right"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          layout="total,sizes,prev, pager, next,jumper"
          :total="60"
          :page-sizes="[10, 20, 30, 40]"
        ></el-pagination>
      </el-col>
    </el-col>
    <!-- 新增弹窗功能实现-->
    <Infopopu :flag.sync="dialog_info"></Infopopu>
  </div>
</template>
<script>
import Infopopu from "./informage/infopo";
import { ref, reactive } from "@vue/composition-api";
export default {
  name: "infoIndex",
  components: { Infopopu },
  setup(props, { root }) {
    const dialog_info = ref(false);
    const options = reactive([
      {
        value: "1",
        label: "国际信息"
      },
      {
        value: "2",
        label: "国内信息"
      },
      {
        value: "3",
        label: "行业信息"
      }
    ]);
    //搜索关键字
    const searchOption = reactive([
      { value: "id", label: "ID" },
      { value: "title", label: "标题" }
    ]);
    const search_key = ref("id");
    const value = ref("");
    const value2 = ref("");
    const serach_keywork = ref("");

    //tabel 表格
    const tableData = reactive([
      {
        title: "纽约市长白思豪宣布退出总统竞选 特朗普发推回应",
        category: "国内信息",
        date: "2019-09-10 19:31:31",
        user: "管理员"
      },
      {
        title:
          "习近平在中央政协工作会议暨庆祝中国人民政治协商会议成立70周年大会上发表重要讲话",
        category: "国内信息",
        date: "2019-09-10 19:31:31",
        user: "管理员"
      },
      {
        title: "基里巴斯与台当局'断交' 系蔡当局上台后断交第7国",
        category: "国外信息",
        date: "2019-09-10 19:31:31",
        user: "管理员"
      },
      {
        title: "不选了！纽约市长白思豪宣布退出2020美国大选",
        category: "国外信息",
        date: "2019-09-10 19:31:31",
        user: "管理员"
      }
    ]);
    // 写入方法
    const handleSizeChange = val => {};
    const handleCurrentChange = val => {};
    const btn_dele = () => {
      root.confirm({
        content:"是否删除当前信息"
      });
    };
    const deleAll = () => {
      root.confirm({
        content:"是否删除所有信息"
      });
    };
    const confirmDell =()=>{
      
    }
    return {
      deleAll,
      btn_dele,
      dialog_info,
      handleSizeChange,
      handleCurrentChange,
      tableData,
      options,
      searchOption,
      value,
      value2,
      search_key,
      serach_keywork
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/config.scss";
// @import "../../styles/elementui.scss";
.warp-lable {
  &.category {
    @include labelDom(left, 60, 40);
  }
  &.date {
    @include labelDom(right, 94, 40);
  }
  &.key-work {
    @include labelDom(right, 100, 40);
  }
}
.tabel-el {
  margin-top: 8px;
}
.btn-page {
  margin-top: 36px;
}
</style>