import React from "react";
import { Button } from "antd";
const MyButton = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

export default MyButton