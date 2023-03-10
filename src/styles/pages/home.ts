import { styled } from "..";
import Link from "next/link";

export const HomeContainer = styled('main', {
    display: 'flex',
    // gap: '3rem',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px)/2))',
    marginLeft: 'auto',
    minHeight: 556,
})

export const ProductContainer = styled('div', {
    background: 'linear-gradient(100deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    cursor: 'pointer',
    position: 'relative',

    overflow: 'hidden',

    footer: {
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        padding: '2rem',
        cursor: 'default',

        borderRadius: 6,

        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'space-between',

        background: 'rgba(0, 0, 0, 0.6)',

        transform: 'translateY(110%)',
        opacity: 0,
        transition: 'all 0.2s ease-in-out',

        "& > div:first-child": {
            display: 'flex',
            flexDirection: 'column',

            'strong': {
                fontSize: '$lg',
                color: '$gray100',
            },
    
            span: {
                fontSize: '$xl',
                fontWeight: 'bold',
                color: '$green300'
            }
        },

        "& button": {
            background: '$green500',
            padding: 12,
            borderRadius: 6,
            border: 0,
            zIndex: 1000,

            cursor: 'pointer',

            "&:hover": {
                background: '$green300'
            }
        },

    },

    '&:hover': {
        footer: {
            transform: 'translateY(0%)',
            opacity: 1,
        }
    }
})

export const Product = styled(Link, {
    // background: 'linear-gradient(100deg, #1ea483 0%, #7465d4 100%)',
    // borderRadius: 8,
    // padding: '0.25rem',
    // cursor: 'pointer',
    // position: 'relative' /**Estamos colocando isso pois depois, o span ai precisar disso pois vai ser absolute */,
    // overflow: 'hidden',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover'
    },

    
    // footer: {
    //     position: 'absolute',
    //     bottom: '0.25rem',
    //     left: '0.25rem',
    //     right: '0.25rem',
    //     padding: '2rem',
    //     cursor: 'default',
    //     // zIndex: 99,

    //     borderRadius: 6,

    //     display: 'flex',
    //     alignItems: 'center', 
    //     justifyContent: 'space-between',

    //     background: 'rgba(0, 0, 0, 0.6)',

    //     transform: 'translateY(110%)',
    //     opacity: 0,
    //     transition: 'all 0.2s ease-in-out',

    //     "& > div:first-child": {
    //         display: 'flex',
    //         flexDirection: 'column',

    //         'strong': {
    //             fontSize: '$lg',
    //             color: '$gray100',
    //         },
    
    //         span: {
    //             fontSize: '$xl',
    //             fontWeight: 'bold',
    //             color: '$green300'
    //         }
    //     },

    //     "& button": {
    //         background: '$green500',
    //         padding: 12,
    //         borderRadius: 6,
    //         border: 0,
    //         zIndex: 1000,

    //         cursor: 'pointer',

    //         "&:hover": {
    //             background: '$green300'
    //         }
    //     },

    // },

    // '&:hover': {
    //     footer: {
    //         transform: 'translateY(0%)',
    //         opacity: 1,
    //     }
    // }
})


