import { keyframes, styled } from ".."
import * as ScrollArea from '@radix-ui/react-scroll-area';

const showSidebar = keyframes({
    '0%': {opacity: 0},
    '100%': {opacity: 1}
})

export const SideBar = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    position: 'fixed',
    height: '100%',
    width: 480,
    top: 0,
    left: 'calc(100% - 480px)',
    padding: 24,
    background: '$gray800',
    
    animation: `${showSidebar} 0.4s`,

    "& > div:first-child": {

        button: {
            border: 0, 
            background: 'transparent',
            color: '#8D8D99',
            cursor: 'pointer',

            transform: 'translateX(408px)',

            "&:hover": {
                color: '$gray700',
            }

        },
    },
    

})

export const ShoppingCartContainer = styled('main', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: '0rem',
    padding: '0 24px', 

})


export const ProductOnCartContainer = styled('div', {
})


export const ShoppingCartFooterContainer = styled('footer', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '0rem',
    
    div: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        fontWeight: 'bold',

        p: {
            fontSize: '$md',
        },
        span: {
            fontSize: '$lg',
        },
        
        
        "&:first-child": {
            color: '$gray300',
            marginBottom: 8,

            p: {
                fontWeight: 'normal',
                fontSize: '1rem',
            },
        },
    },

    button: {
        width: '100%',
        border: 0,
        padding: 20,
        marginTop: 35,
        borderRadius: 8,
        textAlign: 'center',
        fontSize: '$md',
        color: '$white',
        background: '$green500',
        cursor: 'pointer',
        
        
        "&:disabled": {
            opacity: 0.6,
            cursor: 'not-allowed'
        },
        
        '&:not(:disabled):hover': {
            backgroundColor: '$green300',
        }
    }
})

/**
 * Elemento de scroll
 */

const SCROLLBAR_SIZE = 10

export const ScrollAreaRoot = styled(ScrollArea.Root, {
    width: 'calc(480px - 24px - 24px)',
    height: '510px',
    overflow: 'hidden',
    backgroundColor: '$gray800',
})

export const ScrollAreaViewport = styled(ScrollArea.Viewport, {
    width: '100%',
    height: '100%',
    borderRadius: 'inherit',
})

export const ScrollAreaScrollbar = styled(ScrollArea.Scrollbar, {
        display: 'flex',
        /* ensures no selection */
        userSelect: 'none',
        /* disable browser handling of all panning and zooming gestures on touch devices */
        touchAction: 'none',
        padding: 3,
        background: '$gray300',
        transition: 'background 160ms ease-out',

        "&:hover": {
          background: '$gray100',
        },

        '&[data-orientation="vertical"]': { width: SCROLLBAR_SIZE },
        '&[data-orientation="horizontal"]': {
            flexDirection: 'column',
            height: SCROLLBAR_SIZE,
        },

})


export const ScrollAreaThumb = styled(ScrollArea.Thumb, {
    flex: 1,
    background: '$gray800',
    borderRadius: SCROLLBAR_SIZE,
    position: 'relative',

    "&::before": {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        minWidth: 44,
        minHeight: 44,
        }
  })

export const ScrollAreaCorner = styled(ScrollArea.Corner, {
    background: '$gray900'
})

export const Box = styled('div', {})

export const Text = styled('div' ,{
    color: '$green500',
    fontSize: 15,
    lineHeight: '18px',
    fontWeight: 500,
  })

export const Tag = styled('div', {
    color: '$white',
    fontSize: 13,
    lineHeight: '18px',
    marginTop: 10,
    borderTop: '1px solid $gray900',
    paddingTop: 10,
  })