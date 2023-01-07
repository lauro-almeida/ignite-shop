import { useState } from 'react'
import { ShoppingCartContextProvider } from '../contexts/ShoppingCartContext'

import type { AppProps } from 'next/app'


import { Sidebar } from '../components/Sidebar'
import Header from '../components/Header'

import { globalStyles } from '../styles/global'
import { Container } from '../styles/pages/app'

globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  const [sidebar, setSidebar] = useState(false)

  function handleShoppingCartOpening() {
    setSidebar(!sidebar)
  }

  function handleShoppingCartClosing() {
    if (sidebar) {
      setSidebar(false)
    }
  }

  return (
      <>
        <ShoppingCartContextProvider>
          <Container onClick={handleShoppingCartClosing}>
            <Header shoppingCartOpening={handleShoppingCartOpening}/>
            <Component {...pageProps} />
          </Container>
        {sidebar && <Sidebar active={setSidebar}/>}
        </ShoppingCartContextProvider>
      </>
  )
}
