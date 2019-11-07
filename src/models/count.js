// namespace state subscriptions effects  reducers

// app.model({
//   namespace: "count",
//   state: {
//     record: 0,
//     current: 0
//   },

//   // reducer is the only one which can update state, this make our app stable, all data modification is traceable. reducer is pure function, accept arguments state and action, return new state.
//   reducers: {
//     // add(state) {} is equal to add: function(state) {}
//     add(state) {
//       const newCurrent = state.current + 1;
//       return {
//         ...state,
//         record: newCurrent > state.record ? newCurrent : state.record,
//         current: newCurrent
//       };
//     },
//     minus(state) {
//       return { ...state, current: state.current - 1 };
//     }
//   }
// });

// this is only used for test
import { delay } from "../utils/tools";
import key from "keymaster";

export default {
  namespace: "count",
  state: {
    record: 0,
    current: 0,
    author: "liwen"
  },

  subscriptions: {
    keyboardWatcher({ dispatch }) {
      key("⌘+up, ctrl+up", () => {
        dispatch({ type: "add" });
      });
    }
  },

  // aync login start
  // 1. *add() {} is equal to add: function*(){}
  // 2. call and put are effect commands from redux-saga. call is for async logic, and put is for dispatching actions. Besides, there are commands like select, take, fork, cancel, and so on. View more on redux-saga documatation
  effects: {
    *add(action, { call, put }) {
      yield call(delay, 1000);
      yield put({ type: "minus" });
    }
  },
  // aync login end

  // reducer is the only one which can update state, this make our app stable, all data modification is traceable. reducer is pure function, accept arguments state and action, return new state.
  reducers: {
    // add(state) {} is equal to add: function(state) {}
    add(state) {
      const newCurrent = state.current + 1;
      return {
        ...state,
        record: newCurrent > state.record ? newCurrent : state.record,
        current: newCurrent
      };
    },
    minus(state) {
      return { ...state, current: state.current - 1 };
    }
  }
};
