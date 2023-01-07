import { useContext } from 'react'
import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'

import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Head from 'next/head'



import Stripe from 'stripe'
import { stripe } from '../../lib/stripe'

import { ImageContainer, ProductContainer, ProductDetails } from '../../styles/pages/product'

interface ProductProps {
    product: {
        id: string
        name: string
        imageUrl: string
        price: string
        priceUnformatted: number
        description: string
        defaultPriceId: string
      }
}

export default function Product({ product }: ProductProps) {
    const { cart, addProductToCart } = useContext(ShoppingCartContext)

    const isProductAlreadyOnCart = cart.some(item => {
            return item.id === product.id
        })
    
    function handleProductOnCart() {
        addProductToCart(product)
    }

    console.log(product.name);
    

    return (
        <>
            <Head>
                <title>{product.name} | Ignite Shop</title>
            </Head>
            <ProductContainer>
                <ImageContainer>
                    <Image src={product.imageUrl} width={520} height={480} alt="" />
                </ImageContainer>

                <ProductDetails>
                    
                    <h1>{product.name}</h1>
                    <span>{product.price}</span>
                    <p>
                        {product.description}
                    </p>
                    <button disabled={isProductAlreadyOnCart} onClick={handleProductOnCart}>
                        {!isProductAlreadyOnCart ? "Colocar na sacola": "Produto já está na sacola!"}
                    </button>
                </ProductDetails>
            </ProductContainer>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            {params: {id: 'prod_MrpcEy6IDdHViP'}}
        ],
        fallback: 'blocking' 
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const productId = params!.id

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    })

    const price = product.default_price as Stripe.Price 


    return {
        props:{
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(price.unit_amount! / 100),
                priceUnformatted: price.unit_amount!/100,
                description: product.description,
                defaultPriceId: price.id
            }
        },
        revalidate: 60 * 60 * 1, // 1 hour
    }
}