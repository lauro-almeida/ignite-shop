import { createStitches } from '@stitches/react'

export const {
    config,
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme
} = createStitches({
    theme: {
        colors: {
            white: '#FFF',

            gray900: '#121214',
            gray800: '#202024',
            gray300: '#c4c4cc',
            gray100: '#e1e1e6',

            green500: '#00875f',
            green300: '#00b37e',

            red700: '#AB222E',
        },

        fontSizes: {
            md: '1.125rem',
            lg: '1.25rem',
            xl: '1.5rem',
            '2xl': '2rem',
        },
    },
    
    utils: {
        indexPosition: (value: number) => ({
            zIndex: value
        }),

        bgc: (value: string) => ({
            backgroundColor: value
        }),

        transformTranslateX: (value: number) => ({
            transform: `translateX(${value * 60}px)`
        }),


    }
})