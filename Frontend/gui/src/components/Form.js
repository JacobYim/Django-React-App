import React from 'react';
import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;

class CustomForm extends React.Component {
    
  render() {
    return (
      <Form label = "Form Layout">
        <FormItem label="Title">
          <Input placeholder = "put a title here"/>
        </FormItem>
        <FormItem label="Content">
          <Input placeholder = "Enter some content"/>
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default CustomForm;