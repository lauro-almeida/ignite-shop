import { styled } from ".."

export const Container = styled('header', {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    button: {
        background: '$gray800',
        padding: 12,
        border: 0,
        color:'#8D8D99',

        cursor: 'pointer',

        
        "&:hover": {
            color:'$gray300',
        }
    }, 
 
})

export const CartButton = styled('button', {
    background: '$gray800',
        padding: 12,
        border: 0,
        color:'#8D8D99',

        cursor: 'pointer',

        
        "&:hover": {
            color:'$gray300',
        }
})