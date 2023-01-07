import Image from "next/image"
import Link from "next/link"

import { CartButton, Container } from "../styles/components/Header"

import logoImg from '../assets/logo.svg'
import { Handbag } from "phosphor-react"
import { useContext } from "react"
import { ShoppingCartContext } from "../contexts/ShoppingCartContext"

interface HeaderProps {
    shoppingCartOpening: () => void
}

export default function Header({ shoppingCartOpening }: HeaderProps) {
    const { isCartEmpty } = useContext(ShoppingCartContext)

    const cartIconColor = isCartEmpty ? '#c4c4cc' : '#00875f'
    
    return (
        <Container>
            <Link href={"/"}>
              <Image src={logoImg} alt="" />
            </Link>
            <CartButton onClick={shoppingCartOpening}>
              <Handbag size={24} color={cartIconColor}/>
            </CartButton>
        </Container>
    )
}