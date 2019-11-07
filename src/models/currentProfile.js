export default {
  namespace: "currentProfile",
  state: {
    index: 0,
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
    }
  },

  reducers: {
    nextProfile(state) {
      let index = ++state.index;
      console.log(index < state.data.length - 1);
      index < state.data.length ? "" : (index = 0);
      console.log(state, index);
      return { ...state, index: index };
    }
  }
};
