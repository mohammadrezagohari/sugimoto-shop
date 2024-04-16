import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import type { Preview } from "@storybook/react";
import { title } from "process";

const preview = {
    decorators: [
        (Story: any, context: any) => {
            return (
                <ThemeProvider theme={{ theme: context.globals.theme }}>
                    <Story />
                </ThemeProvider>
            );
        },
    ],
    globalTypes: {
        theme: {
            description: "Global theme for all components",
            defaultValue: "light",
            toolbar: {
                title: "Theme",
                icon: "circlehollow",
                items: ["light", "dark"],
                dynamicTitle: true,
            }
        }
    },
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
            backgrounds: {
                default: "light",
                values: [
                    { name: "light", value: "#ffffff" },
                    { name: "dark", value: "#000000" },
                ]
            }
        },
    },
};

export default preview;
