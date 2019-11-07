import React from "react";
import { connect } from "dva";

import $ from "jquery";
import "popper.js";
import "bootstrap";

// 使用className
import "bootstrap/dist/css/bootstrap.min.css";

// passes in two props，currentProfile and dispatch
let CURD = ({ currentProfile, dispatch }) => {
  console.log("currentProfile:" + currentProfile);
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto text-center">
          <h1 class="mb-3">
            CURD,总共 {currentProfile.total},当前第{++currentProfile.index}个
          </h1>
          <div id="imageDisplay">
            <img src={currentProfile.image} />
          </div>
          <br />
          <div id="profileDisplay">
            <ul class="list-group">
              <li class="list-group-item">姓名: {currentProfile.name}</li>
              <li class="list-group-item">年龄: {currentProfile.age}</li>
              <li class="list-group-item">位置: {currentProfile.location}</li>
              <li class="list-group-item">描述: {currentProfile.desc}</li>
            </ul>
          </div>
          <br />
          <button
            id="next"
            class="btn btn-secondary btn-block"
            onClick={() => {
              dispatch({ type: "currentProfile/next" });
            }}
          >
            下一个
          </button>
          <button id="next" class="btn btn-info btn-block">
            新增
          </button>
          <button id="next" class="btn btn-success btn-block">
            修改
          </button>
        </div>
      </div>
    </div>
  );
};

// 纯组件思想

function mapStateToProps(state) {
  console.log("mapStateToProps");
  // console.log("state value:" + JSON.stringify(state.currentProfile[0]));
  return {
    currentProfile: {
      ...state.currentProfile.data[state.currentProfile.index],
      index: state.currentProfile.index,
      total: state.currentProfile.data.length
    }
  };
}

CURD = connect(mapStateToProps)(CURD);

export default CURD;
