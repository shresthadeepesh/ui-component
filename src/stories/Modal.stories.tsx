import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Modal from "../components/modal";

export default {
  title: "Example/Modal",
  component: Modal,
  argTypes: {
    isVisible: { control: "boolean", defaultValue: false },
    onClose: { action: "closed" },
    header: { control: "text", expanded: true },
    body: { control: "text", expanded: true },
    footer: { control: "text", expanded: true },
    closeable: { control: "boolean", defaultValue: true },
    closeOnEscape: { control: "boolean", defaultValue: true },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isVisible: true,
  onClose: () => {},
  header: <h1>Header</h1>,
  body: <p>Body</p>,
  footer: <p>Footer</p>,
  closeable: true,
  closeOnEscape: true,
};
