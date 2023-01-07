import Image from "next/image";
import { ImageContainer, ProductDetails, Container, RemoveButton } from "../styles/components/ProductOnCart";
import { useContext } from "react";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";

interface ProductOnCartProps {
    id: string
    name: string
    price: string
    imageUrl: string
}

export function ProductOnCart({id, name, price, imageUrl}: ProductOnCartProps) {
    const { removeProductFromCart } = useContext(ShoppingCartContext)
    return (
        <Container>
            <ImageContainer>
                <Image src={imageUrl} width={94} height={94} alt="" />
            </ImageContainer>

            <div>
                <ProductDetails>
                    <span>{ name }</span>
                    <strong>{ price }</strong>
                </ProductDetails>
                <RemoveButton onClick={() => removeProductFromCart(id)}>
                    Remover
                </RemoveButton>
            </div>
        </Container>
    )
}