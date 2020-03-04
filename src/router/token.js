// import router from "./index";
// import{getToken} from "@/utils/app"
// //路由守衛
// const whiteRouter = ['/login']  //判斷是否存在，不存在返回-1

// router.beforeEach((to,from,next)=>{
//     if(getToken()){
//         next()
//     }else{
//         // next('/login')
//         if(whiteRouter.indexOf(to.path)!== -1){
//             next();        
//      //白名單判斷token是否存在，存在執行next() 沒有則不會執行beforeEach
//         }else{
//             next('/login')  //路由指向
//         }
//     }        
//   })
  