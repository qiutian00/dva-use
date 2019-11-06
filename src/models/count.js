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

export default {
  namespace: "count",
  state: {
    record: 0,
    current: 0,
    author: "liwen"
  },

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
