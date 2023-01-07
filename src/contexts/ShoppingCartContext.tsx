import { createContext, ReactNode, useState } from "react";
interface Product {
    id: string
    name: string
    price: string
    priceUnformatted: number
    imageUrl: string
    description: string
    defaultPriceId: string
}

interface ShoppingCartContextType {
    cart: Product[]
    productsOnCart: number
    totalAmount: number
    isCartEmpty: boolean
    addProductToCart: (product: Product) => void
    removeProductFromCart: (id: string) => void
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType )

interface ShoppingCartContextProviderProps {
    children: ReactNode
}

export function ShoppingCartContextProvider({ children }: ShoppingCartContextProviderProps) {
    const [cart, setCart] = useState<Product[]>([])
    const [productsOnCart, setProductsOnCart] = useState(0)
    const[totalAmount, setTotalAmount] = useState(0)

    const isCartEmpty = cart.length === 0 ? true : false

    function addProductToCart(productToAdd: Product) {
        const isProductAlreadyOnCart = cart.some(product => {
            return product.id === productToAdd.id
        })

        if (!isProductAlreadyOnCart) {
            setCart((state) => [...state, productToAdd])

            setProductsOnCart((state) => (state + 1))

            setTotalAmount((state) => (state + productToAdd.priceUnformatted))
        }
    }

    function removeProductFromCart(id: string) {
        const productToRemove = cart.filter(product => product.id === id)[0]
        

        setCart((state) => (
            state.filter(product => product.id !== id) 
        ))

        setProductsOnCart((state) => (state - 1))

        setTotalAmount((state) => (state - productToRemove.priceUnformatted))
    }

    return (
        <ShoppingCartContext.Provider value={{ cart, productsOnCart, totalAmount, isCartEmpty, addProductToCart, removeProductFromCart }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}