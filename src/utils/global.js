//封装删除方法
import { MessageBox } from 'element-ui';
export default{
    install (Vue,options){
        Vue.prototype.confirm = (param)=>{
            MessageBox.confirm(param.content, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
                center: true
              }).then(() => {
                root.$message({
                  type: 'success',
                  message: '删除成功!'
                });
              }).catch(() => {
                // root.$message({
                //   type: 'info',
                //   message: '已取消删除'
                // });
              })    
        }
    }
}

//vue 插件