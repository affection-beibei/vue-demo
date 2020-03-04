import Vue from "vue";
import Vuex from "vuex";
import { Login } from "@/api/login";
// import { setToken } from "@/utils/app";

// import Cookie from "cookie_js"
// import { setUserName } from "../utils/app";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isCollapse : false
    // isCollapse: JSON.parse(Cookie.get('isCollapse')) || false,
    // to_ken: '',
    // username: ''
  },
  getters: { //計算屬性值
    count: state => state.isCollapse,
  },
  mutations: {//
    SET_COLLAPSE(state) {
      state.isCollapse = !state.isCollapse;
      //     Cookie.set('isCollapse', JSON.stringify(state.isCollapse));
    
  }},
    //   SET_TOKEN(state, value) {
    //     state.to_ken = value
    //   },
    //   SET_USERNAME(state, value) {
    //     state.username = value
    //   },
    // },
    actions: {
      login(content, requestData) {
        return new Promise((resolve, reject) => {
          //接口
          Login(requestData).then((response) => {
            console.log(response);
            // let data = response.data.data
            // content.commit('SET_TOKEN',data.token)
            // content.commit('SET_USERNAME',data.username)
            // setToken(data.token)
            // setUserName(data.username)
            resolve(response)
          }).catch(error => {
            reject(error)
          })
        })
      
    }
  }
  })

