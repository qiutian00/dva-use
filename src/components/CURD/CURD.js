import React from "react";
import { connect } from "dva";

import $ from "jquery";
import "popper.js";
// bootstrap need porper.js and jquery
import "bootstrap";

import { Modal, Button, message } from "antd";
import Detail from "./Detail";

// 使用className
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";

// passes in two props，currentProfile and dispatch
// let CURD = ({ currentProfile, dispatch }) => {

// };

class CURD extends React.Component {
  state = {
    ModalText: "Content of the modal",
    // view update add
    type: "",
    visible: false,
    confirmLoading: false
  };

  showModal = type => {
    this.setState({
      type: type,
      visible: true
    });
  };

  handleOk = () => {
    // this.setState({
    //   ModalText: "The modal will be closed after two seconds",
    //   confirmLoading: true
    // });

    // setTimeout(() => {
    //   this.setState({
    //     visible: false,
    //     confirmLoading: false
    //   });
    // }, 2000);

    // 进行处理
    // console.log(this.Detail);
    const { dispatch } = this.props;
    let detailForm = this.Detail.props.form;
    detailForm.validateFields((errors, values) => {
      if (!errors) {
        let formData = detailForm.getFieldsValue();
        if (!formData.name) {
          formData.name = "test";
        }
        if (!formData.image) {
          formData.image = "https://randomuser.me/api/portraits/men/78.jpg";
        }
        dispatch({
          type: `currentProfile/${this.state.type}`,
          payload: formData,
          callback: response => {
            if (response.status === "200") {
              message.success("成功");
              this.setState({
                visible: false,
                confirmLoading: false
              });
            } else {
              message.error(response.error || "操作失败");
            }
          }
        });
      } else {
        // 表单校验不通过
      }
    });
  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false
    });
  };

  onRef = ref => {
    this.Detail = ref;
  };

  render() {
    const { visible, confirmLoading, ModalText, type } = this.state;
    const { currentProfile, dispatch } = this.props;
    console.log("currentProfile:" + currentProfile);
    return (
      <div class="container">
        <div class="row">
          <div class="col-md-6 mx-auto text-center">
            <h1 class="mb-3">CURD</h1>
            <div id="imageDisplay">
              <img src={currentProfile.image} />
            </div>
            <br />
            <div id="profileDisplay">
              <ul class="list-group">
                <li class="list-group-item">姓名: {currentProfile.name}</li>
                <li class="list-group-item">性别: {currentProfile.gender}</li>
                <li class="list-group-item">年龄: {currentProfile.age}</li>
                <li class="list-group-item">位置: {currentProfile.location}</li>
                <li class="list-group-item">描述: {currentProfile.desc}</li>
                <li class="list-group-item">
                  总共 {currentProfile.total}个,当前第{currentProfile.index}个
                </li>
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
            <button
              id="next"
              class="btn btn-info btn-block"
              onClick={this.showModal.bind(this, "add")}
            >
              新增
            </button>
            <button
              id="next"
              class="btn btn-success btn-block"
              onClick={this.showModal.bind(this, "edit")}
            >
              修改
            </button>
            <Modal
              title={type === "add" ? "添加信息" : "修改信息"}
              visible={visible}
              onOk={this.handleOk}
              okText="确定"
              confirmLoading={confirmLoading}
              onCancel={this.handleCancel}
              cancelText="取消"
            >
              <Detail
                type={type}
                currentData={currentProfile}
                ModalText={ModalText}
                onRef={this.onRef}
              />
            </Modal>
          </div>
        </div>
      </div>
    );
  }
}

// 纯组件思想
function mapStateToProps(state) {
  console.log("mapStateToProps");
  // console.log("state value:" + JSON.stringify(state.currentProfile[0]));
  return {
    currentProfile: {
      ...state.currentProfile.data[state.currentProfile.index],
      index: state.currentProfile.index + 1,
      total: state.currentProfile.data.length
    }
  };
}

CURD = connect(mapStateToProps)(CURD);

export default CURD;
