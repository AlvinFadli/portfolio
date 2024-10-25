import { Card } from "@/components/ui/card";
import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
// import { fn } from "@storybook/test";

type StoryProps = ComponentProps<typeof Card>;

const meta: Meta<StoryProps> = {
  tags: ["autodocs"],
  component: Card,
  argTypes: {},
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    banner: "/images/portfolio/tekinfo-bot.png",
    title: "Dummy Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et fermentum metus. Ut eu libero interdum quam ultrices rhoncus a sit amet augue.",
    alt: "Test Card Image",
    withCardDetail: true,
    companyName: "Personal",
    details: "React.js, Next.js",
    buttonLink: "https://google.com",
  },
  render: ({ ...args }) => {
    return <Card {...args}></Card>;
  },
};
