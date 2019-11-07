import React from "react";
import { Form, Select, Input, Button } from "antd";

const { Option } = Select;

class Detail extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleSelectChange = value => {
    console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === "male" ? "man" : "lady"}!`
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    let { ModalText, currentData, type } = this.props;

    type == "add" ? (currentData = {}) : "";
    // console.log("currentData name:" + currentData.name);
    return (
      <Form
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 12 }}
        onSubmit={this.handleSubmit}
      >
        <Form.Item label="姓名">
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "Please input your name!"
              }
            ],
            initialValue: currentData.name
          })(<Input />)}
        </Form.Item>
        <Form.Item label="性别">
          {getFieldDecorator("gender", {
            rules: [{ required: true, message: "Please select your gender!" }],
            initialValue: currentData.gender
          })(
            <Select placeholder="请选择姓名" onChange={this.handleSelectChange}>
              <Option value="男">male</Option>
              <Option value="女">female</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="年龄">
          {getFieldDecorator("age", {
            rules: [{ required: true, message: "Please input your age!" }],
            initialValue: currentData.age
          })(<Input />)}
        </Form.Item>
        <Form.Item label="地址">
          {getFieldDecorator("location", {
            rules: [{ message: "Please input your location!" }],
            initialValue: currentData.location
          })(<Input />)}
        </Form.Item>
        <Form.Item label="描述">
          {getFieldDecorator("desc", {
            rules: [{ message: "Please input your desc!" }],
            initialValue: currentData.desc
          })(<Input />)}
        </Form.Item>
      </Form>
    );
    // return <p>{ModalText}</p>;
  }
}

export default Form.create()(Detail);
