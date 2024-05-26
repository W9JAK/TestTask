import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
    theme: {
        colors: {
            background: 'linear-gradient(to bottom, rgba(242, 202, 174, 1), rgba(250, 220, 199, 1))',
            background_not_completed_quest: 'rgba(156, 76, 48, 0.15)',
            background_completed_quest: 'rgba(0, 255, 71, 0.2)',
            background_xp_completed_quest: 'rgba(83, 86, 62, 0.5)',
            background_xp_not_completed_quest: 'rgba(156, 76, 48, 0.5)',
            background_button_group: 'rgb(127, 80, 67)',
            border_button_group: 'rgba(87, 42, 36, 1)',
            border_background_completed_quest: 'rgba(83, 86, 62, 1)',
            border_background_not_completed_quest: 'rgba(156, 76, 48, 1)',
            border_background_xp_not_completed_quest: 'rgba(0, 0, 0, 0.5)',
            border_background_xp_completed_quest: 'rgba(0, 0, 0, 0.5)',
            border_background_all_xp: 'rgba(0, 0, 0, 0.5)',
            background_xp_all: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.25))',
            background_toggle_button_active: 'linear-gradient(to bottom, rgba(250, 225, 194, 1), rgba(252, 223, 193, 1))',
            text_completed_quest: 'rgba(64, 67, 41, 1)',
            text_not_completed_quest: 'rgba(87, 42, 36, 1)',
            text_toggle_button: 'rgba(202, 128, 95, 1)',
            text_border_xp_completed_quest: 'rgba(83, 86, 62, 1)',
            text_border_button_go: 'rgba(11, 53, 35, 1)',
            text_border_brown: 'rgba(87, 42, 36, 1)',
            text_color_brown: 'rgba(87, 42, 36, 1)',
            background_time_quest: 'rgba(120, 44, 4, 1)',
            text: 'rgba(255, 255, 255, 1)',
            gradient: 'linear-gradient(180deg, #E26D3A 50%, #FFCAB4 50%)',
            drop_shadow_button_go: '0 2px 0 rgba(0, 0, 0, 0.5)',
            confirm_button_inactive: '#ccc',
            confirm_button_active: '#ff0000',
            background_blur: 'rgba(0, 0, 0, 0.9)',
            background_polygon: 'rgba(255, 255, 255, 0.2)',
            gradient_green: 'linear-gradient(to bottom, rgba(93, 219, 34, 1), rgba(41, 235, 130, 1))',
            gradient_gold: 'linear-gradient(to bottom, rgba(253, 129, 15, 1), rgba(245, 237, 33, 1))',
            gradient_gray: 'linear-gradient(to bottom, rgba(227, 227, 227, 1), rgba(176, 176, 176, 1))',

        },
        fonts: {
            body: 'Rubik, sans-serif',
        },
    },
    media: {
        bp1: '(min-width: 480px)',
        bp2: '(min-width: 768px)',
        bp3: '(min-width: 1024px)',
    },
});

export const globalStyles = globalCss({
    '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
    body: {
        fontFamily: '$body',
        backgroundColor: '$background',
        color: '$text',
    },
});
