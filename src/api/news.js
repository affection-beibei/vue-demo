import service from "@/utils/request"
/**
 * 信息分类添加一级
 */
export function AddFirstCategory(data){
    return service.request({
        method:'post',
        url:'/news/addFirstCategory/',
        data
    })
}
 /**
  * 新增
  */

  /**
   * 编辑
   */

   /**
    * 删除
    */