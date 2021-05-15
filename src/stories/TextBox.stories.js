import React from "react";
import TextBox from "./TextBox";

export default {
  title: "Example/TextBox",
  component: TextBox,
};

export const Text = () => <TextBox>random@email.com</TextBox>;
