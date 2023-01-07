import { 
        ScrollAreaCorner, 
        ScrollAreaRoot, 
        ScrollAreaScrollbar, 
        ScrollAreaThumb, 
        ScrollAreaViewport, 
        ShoppingCartContainer, 
        ShoppingCartFooterContainer, 
        SideBar
        } from "../styles/components/Sidebar";
import { X } from 'phosphor-react'
import { ProductOnCart } from "./ProductOnCart";

import { useContext, useState } from "react";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";
import axios from "axios";

interface SidebarProps {
    active: any
}

export function Sidebar({active}: SidebarProps) {
    const { cart, productsOnCart, totalAmount } = useContext(ShoppingCartContext)
    const isCartEmpty = productsOnCart === 0 ? false : true
    const totalAmountFormatted = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(totalAmount)

    const priceIdsOfProductsOnCart = cart.map(product => {return {price: product.defaultPriceId, quantity: 1}})

    function handleSidebarClosing() {
        active(false)
    }

    async function handleCheckout() {
        try {
            const response = await axios.post('/api/checkout', {
                priceIds: priceIdsOfProductsOnCart,
            })

            const { checkoutUrl } = response.data

            window.location.href = checkoutUrl
        } catch (err) {
            alert('Falha ao redirecionar ao checkout!')
        }
    }
    return (
        <SideBar>
            <div>
                <button onClick={handleSidebarClosing}>
                <X fill='bold' size={24}/>
                </button>
            </div>
            <ShoppingCartContainer>
                <div>
                <h3>Sacola de compras</h3>
                <ScrollAreaRoot>
                    <ScrollAreaViewport>
                        {cart.map((product) => {
                            return <ProductOnCart 
                                        key={product.id}
                                        id={product.id} 
                                        name={product.name} 
                                        price={product.price} 
                                        imageUrl={product.imageUrl} 
                                    />
                        })}
                    </ScrollAreaViewport>
                    <ScrollAreaScrollbar orientation="horizontal">
                        <ScrollAreaThumb />
                    </ScrollAreaScrollbar>
                    <ScrollAreaScrollbar orientation="vertical">
                        <ScrollAreaThumb />
                    </ScrollAreaScrollbar>
                    <ScrollAreaCorner />
                </ScrollAreaRoot>      
                </div>

                <ShoppingCartFooterContainer>
                    
                    <div>
                        <p>Quantidade</p>
                        <p>{productsOnCart} itens</p>
                    </div>
                    <div>
                        <p>Valor total</p>
                        <span>{totalAmountFormatted}</span>
                    </div>
                    <button disabled={!isCartEmpty} onClick={handleCheckout}>
                    Finalizar compra
                    </button>
                </ShoppingCartFooterContainer>
            </ShoppingCartContainer>
      </SideBar>
    )
}