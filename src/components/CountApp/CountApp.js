import React from "react";
import styles from "./index.less";
import { connect } from "dva";

// passes in two props，count and dispatch
let CountApp = ({ count, dispatch }) => {
  console.log("count:" + count);
  return (
    <div className={styles.normal}>
      <div className={styles.record}>
        Highest Record: {count.record}, write by {count.author}{" "}
      </div>
      <div className={styles.current}>{count.current}</div>
      <div className={styles.button}>
        <button
          onClick={() => {
            dispatch({ type: "count/add" });
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { count: state.count };
}

CountApp = connect(mapStateToProps)(CountApp);

export default CountApp;
