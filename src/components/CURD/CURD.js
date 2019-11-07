import React from "react";
import { connect } from "dva";

import $ from "jquery";
import "popper.js";
import "bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

// passes in two props，currentProfile and dispatch
let CURD = ({ currentProfile, dispatch }) => {
  console.log("currentProfile:" + currentProfile);
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6 mx-auto text-center">
          <h1 class="mb-3">CURD used</h1>
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
            onClick={nextProfile}
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

let data = [];

function* profileIterator() {
  yield data[0];
  yield data[1];
  yield data[2];
}

function nextProfile() {
  console.log("data value:" + data);
  const currentProfile = profiles.next().value;

  // 重新渲染的，操作
  // if (currentProfile !== undefined) {
  //   document.getElementById("profileDisplay").innerHTML = `
  //     <ul class="list-group">
  //       <li class="list-group-item">姓名: ${currentProfile.name}</li>
  //       <li class="list-group-item">年龄: ${currentProfile.age}</li>
  //       <li class="list-group-item">位置: ${currentProfile.location}</li>
  //       <li class="list-group-item">描述: ${currentProfile.gender} 特点: ${currentProfile.lookingfor}性朋友</li>
  //     </ul>
  //   `;
  //   document.getElementById("imageDisplay").innerHTML = `
  //   <img src="${currentProfile.image}"/>
  // `;
  // } else {
  //   // 回到第一个
  //   window.location.reload();
  // }
}

let profiles;

function mapStateToProps(state) {
  data = state.currentProfile;
  profiles = profileIterator(data);
  console.log("mapStateToProps");
  // console.log("state value:" + JSON.stringify(state.currentProfile[0]));
  return { currentProfile: state.currentProfile[0] };
}

CURD = connect(mapStateToProps)(CURD);

export default CURD;
