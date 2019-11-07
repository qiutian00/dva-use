import { queryTableData } from "../services/userInfo";

export default {
  namespace: "currentProfile",
  state: {
    index: 0,
    visible: false,
    formVals: {},
    data: [
      {
        name: "米斯特吴",
        age: 30,
        gender: "男",
        lookingfor: "女",
        location: "北京",
        image: "https://randomuser.me/api/portraits/men/82.jpg",
        desc: "开发者，thinking all time"
      },
      {
        name: "吴先生",
        age: 32,
        gender: "男",
        lookingfor: "女",
        location: "上海",
        image: "https://randomuser.me/api/portraits/men/83.jpg",
        desc:
          "医生，Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, qui!"
      },
      {
        name: "李女士",
        age: 24,
        gender: "女",
        lookingfor: "男",
        location: "北京",
        image: "https://randomuser.me/api/portraits/women/83.jpg",
        desc: "院长，领导，呵护，陪伴"
      }
    ]
  },

  effects: {
    *next(action, { call, put }) {
      // yield call(delay, 1000);
      yield put({ type: "nextProfile" });
    },
    *add(action, { call, put }) {
      const { payload, callback } = action;
      // console.log("payload:" + JSON.stringify(payload));
      yield put({ type: "addSaveProfile", response: payload });
      // yield call(delay, 1000);
      let response = { status: "200" };
      callback ? callback(response) : "";
    },
    *edit(action, { call, put }) {
      const { payload, callback } = action;
      yield put({ type: "editSaveProfile", response: payload });
      // yield call(delay, 1000);
      let response = { status: "200" };
      callback ? callback(response) : "";
    },
    *testMock(action, { call, put }) {
      const { payload, callback } = action;
      let res = yield call(queryTableData, 0);
      console.log("get mock res:" + JSON.stringify(res));
      // yield put({ type: "editSaveProfile", response: payload });
      // callback ? callback(response) : "";
    }
  },

  reducers: {
    nextProfile(state, action) {
      let index = ++state.index;
      console.log(index < state.data.length - 1);
      index < state.data.length ? "" : (index = 0);
      console.log(state, index);
      return { ...state, index: index };
    },
    addSaveProfile(state, action) {
      const { response } = action;
      // console.log("response:" + JSON.stringify(response));
      state.data.push(response);
      return { ...state };
    },
    editSaveProfile(state, action) {
      const { response } = action;
      state.data[state.index] = response;
      return { ...state };
    }
  }
};
