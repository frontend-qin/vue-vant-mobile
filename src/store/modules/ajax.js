const state = {
  ajaxList: [] // 保存所有正在请求的服务请求
};

const mutations = {
  push(state, cancel) {
    state.ajaxList.push(cancel);
  },
  clear({ ajaxList }) {
    ajaxList.forEach(cancel => cancel());
    ajaxList = []; // 清空数组
  }
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
