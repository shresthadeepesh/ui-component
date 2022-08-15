import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../components/button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    disabled: { control: "boolean", defaultValue: false },
    type: { control: "radio", options: ["primary", "danger", "ghost"] },
    size: { control: "radio", options: ["small", "medium", "large"] },
    label: { control: "text" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Click Me",
  type: "primary",
  size: "small",
};
