import { useState } from 'react'
import Header from './components/Layout/Header'
import Cart from './components/cart/cart'
import TechItems from './components/items/TechItems'
import CartItemsProvider from './store/ContextProvider'

function App() {  
  const [cartState,setCartState] = useState(false)

  const openModal = () => {
    setCartState(true)
  }

  const  closeModal = () => {
    setCartState(false)
  }

  return (
    <CartItemsProvider>
      {cartState && <Cart onClose={closeModal}  />}
      <Header onShowCart={openModal} />
      <main>
        <TechItems />
      </main>
    </CartItemsProvider>
  )
}

export default App
