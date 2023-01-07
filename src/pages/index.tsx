import { useContext } from "react";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";

import { GetStaticProps } from "next";
import Image from "next/image";
import Head from "next/head";


import { stripe } from "../lib/stripe";
import Stripe from "stripe";

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { Handbag } from 'phosphor-react'

import { HomeContainer, Product, ProductContainer } from "../styles/pages/home";


interface Product {
  id: string
  name: string
  imageUrl: string
  price: string
  priceUnformatted: number
  description: string
  defaultPriceId: string
}

interface HomeProps {
  products: Product[]
}

export default function Home({ products }: HomeProps) {
  const { addProductToCart } = useContext(ShoppingCartContext)


  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  function handleBuyProduct(productToAdd: Product) {   
    addProductToCart(productToAdd)
  }

  return (
    <>
      <Head>
          <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">

        {products.map(product => {
          return (
            <ProductContainer key={product.id}  className="keen-slider__slide">
              <Product 
                href={`/product/${product.id}`} 
                prefetch={false}
              >
                <Image src={product.imageUrl} width={520} height={480} alt="" />
            </Product>
                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>
                  <button onClick={() => handleBuyProduct(product)} title="Adicionar item ao carrinho">
                    <Handbag color="#FFF" size={32}/>
                  </button>
                </footer>
            </ProductContainer>
          )
        })}

      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })
  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price 

    return {
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
  })
  
  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}