const app ={
    state: {
    isCollapse: JSON.parse(Cookie.get('isCollapse')) || false,
    to_ken: '',
    username: ''
  },
  getters: { //計算屬性值
    count: state => state.isCollapse,
  },
  mutations: {//
    SET_COLLAPSE(state) {
      state.isCollapse = !state.isCollapse;
      Cookie.set('isCollapse', JSON.stringify(state.isCollapse));
    },
    SET_TOKEN(state, value) {
      state.to_ken = value
    },
    SET_USERNAME(state, value) {
      state.username = value
    },
  },
  actions: {
    login(content, requestData) {
      return new Promise((resolve, reject) => {
        //接口
        Login(requestData).then((response) => {
          resolve(response)
        }).catch(error =>{
          reject(error)
        })
      })
    }
  }
}