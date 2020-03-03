import Vue from "vue";
import Vuex from "vuex";
import Cookie from "cookie_js"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isCollapse:JSON.parse( Cookie.get('isCollapse')) || false
  },
  getters:{ //計算屬性值
    count:state => state.isCollapse,
  },
  mutations: {//
    SET_COLLAPSE(state){
      state.isCollapse =!state.isCollapse;
      Cookie.set('isCollapse', JSON.stringify(state.isCollapse));
    }
  },
  actions: {

  },
});
