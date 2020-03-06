<template>
  <div>
    <!-- 添加一级分类 -->
      <el-button class="btn_insert" type="danger">添加一级分类</el-button>
    <hr class="hr-warp" />
    <!-- 添加列表 -->
    <el-row>
      <el-col class="bacg" :span="8">
        <div class="category-warp">
          <div class="category">
            <h3>
              <svg-icon iconClass="plus" class="plus"></svg-icon>新闻
              <div class="btn-warp">
                <el-button size="small" type="danger" round>编辑</el-button>
                <el-button size="small" type="success" round>添加子级</el-button>
                <el-button size="small" round>删除</el-button>
              </div>
            </h3>
            <ul>
              <li>
                国内
                <div class="btn-warp">
                  <el-button size="small" type="danger" round>编辑</el-button>
                  <el-button size="small" round>删除</el-button>
                </div>
              </li>
              <li>
                国际
                <div class="btn-warp">
                  <el-button size="small" type="danger" round>编辑</el-button>
                  <el-button size="small" round>删除</el-button>
                </div>
              </li>
              <li>
                数读
                <div class="btn-warp">
                  <el-button size="small" type="danger" round>编辑</el-button>
                  <el-button size="small" round>删除</el-button>
                </div>
              </li>
              <li>
                军事
                <div class="btn-warp">
                  <el-button size="small" type="danger" round>编辑</el-button>
                  <el-button size="small" round>删除</el-button>
                </div>
              </li>
              <li>
                航空
                <div class="btn-warp">
                  <el-button size="small" type="danger" round>编辑</el-button>
                  <el-button size="small" round>删除</el-button>
                </div>
              </li>
              <li>
                无人机
                <div class="btn-warp">
                  <el-button size="small" type="danger" round>编辑</el-button>
                  <el-button size="small" round>删除</el-button>
                </div>
              </li>
            </ul>
          </div>
          <div class="category">
            <h3>
              <svg-icon iconClass="plus" class="plus"></svg-icon>新闻
            </h3>
            <ul>
              <li>国内</li>
              <li>国际</li>
              <li>数读</li>
              <li>军事</li>
              <li>航空</li>
              <li>无人机</li>
            </ul>
          </div>
        </div>
      </el-col>
      <el-col class="bacg" :span="15">
        <h3 class="bacgroud-warp">一级分类编辑</h3>
        <el-form status-icon label-width="142px" class="w410">
          <el-form-item label="一级分类名称:" class="h30">
            <el-input v-model="form.LabelAlignName" ></el-input>
          </el-form-item>
          <el-form-item label="二级分类名称:" class="h30">
            <el-input v-model="form.LabelAlignRegion" ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="danger" class="h30" @click="submit">确定</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {AddFirstCategory} from "@/api/news"
import { ref, reactive } from '@vue/composition-api';
export default {
  name: "infoSoft",
  setup(props) {
       const form = reactive({
         LabelAlignName:'',
         LabelAlignRegion:''
        })
        const submit =()=>{
            AddFirstCategory({LabelAlignName:form.LabelAlignName}).then(response =>{
                console.log(response);
            }).catch(error =>{

            })
        }
    return{
      form,
      submit
    }
  }
};
</script>
<style lang="scss" scoped>
.btn_insert {
  margin-left: 30px;
  height: 40px;
  width: 155px;
}

.category-warp {
  div:first-child {
    &::before {
      top: 23px;
    }
  }
  div:last-child {
    &::before {
      bottom: 23px;
    }
  }
}
.category {
  position: relative;
  line-height: 44px;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    left: 22px;
    top: 0;
    bottom: 0;
    width: 32px;
    border-left: 1px solid #000;
  }
  h3 {
    position: relative;
    padding-left: 40px;
  }
  svg {
    position: absolute;
    font-size: 17px;
    left: 10px;
    top: 11px;
  }
  li {
    position: relative;
    margin-left: 23px;
    padding-left: 40px;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 20px;
      width: 32px;
      border-bottom: 1px dotted #000;
    }
  }
  li,
  h3 {
    &:hover {
      background-color: #f3f3f3;
      transition: all 0.5 ease 0s;
      .btn-warp {
        display: block;
      }
    }
  }
  .btn-warp {
    position: absolute;
    display: none;
    top: -1px;
    right: 11px;
    z-index: 2;
    font-size: 10px;
  }
}
.bacgroud-warp {
  background-color: #f3f3f3;
  line-height: 44px;
  padding-left: 22px;
}
.w410{
    width: 410px;
    margin-top: 30px;
}
.h30{
    margin-top: 30px;
}
.hr-warp{
    width: calc(100%+60px);
    background-color: #e9e9e9;
    border-bottom: 1px solid #e9e9e9;
    margin-top: 30px;
    margin-bottom: 30px;
}
</style>