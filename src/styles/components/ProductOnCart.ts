import { styled } from "..";

export const Container = styled('div', {
    display: 'flex',
    gap: 20,

    marginTop: '2rem',

    'div:last-child': {
        display: 'flex',
        flexDirection: 'column',

        span: {
            fontSize: '$md',
            color: '$gray300',
            lineHeight: 1.6,

            marginBottom: 2,
        },

        strong: {
            lineHeight: 1.6,

            marginBottom: 8,

        },
    }
})


export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 100,
    height: 94,
    background: 'linear-gradient(100deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    img: {
        objectFit: 'cover',
    }
})

export const ProductDetails = styled('div', {
    display: 'flex',
    flexDirection: 'column',
})

export const RemoveButton = styled('button', {
    width: 'fit-content',
    background: 'transparent',
    color: '$red700',
    fontSize: '1rem',
    fontWeight: 'bold',
    border: 0,
    cursor: 'pointer',
})