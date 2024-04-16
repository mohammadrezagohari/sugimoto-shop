import type { Meta, StoryObj } from "@storybook/react";
import Tab from "./idnex";
const meta: Meta<typeof Tab> = {
    title: "Components/button/tab",
    component: Tab,
};


export default meta;
type Story = StoryObj<typeof Tab>;

export const TabStory: Story = {
    args: {
        children: "سامسونگ",
        selectedId: 1,
        id: 1
    }
}
