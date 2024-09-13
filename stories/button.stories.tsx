import { Button } from "@/components/ui/button";
import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

type StoryProps = ComponentProps<typeof Button> & {
  buttonText: string;
};

const meta: Meta<StoryProps> = {
  tags: ["autodocs"],
  component: Button,
  argTypes: {
    variant: {
      options: ["default", "secondary"],
      control: {
        type: "select",
      },
    },
    size: {
      options: ["default", "sm", "lg", "fullWidth"],
      control: {
        type: "select",
      },
    },
  },
  args: {
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    variant: "default",
    size: "default",
    buttonText: "Submit",
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    size: "default",
    buttonText: "Submit",
  },
  render: ({ buttonText, ...args }) => {
    return <Button {...args}>{buttonText}</Button>;
  },
};
