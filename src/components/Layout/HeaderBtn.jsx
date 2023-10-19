import { useEffect, useState } from 'react'
import { useTechItemsContext } from '../../store/context'
import classes from './headerBtn.module.css'
import IconOfCart from './IconOfCart'

const HeaderBtn = ({onClick}) => {
  // counting items in cart process
  const {items} = useTechItemsContext()
  const [bumb,setBumb] = useState(false)

  const cartBtn = `${classes.button}  ${bumb ? classes.bump:""}`

  const itemsCount = items.reduce((a,c)=> a + c.amount ,0)

  useEffect(()=>{
    if(items.length === 0){
      return;
    }

    setBumb(true)
    const stopBump = setTimeout(()=>{
      setBumb(false)
    
    
    },500)

    return () => { clearTimeout(stopBump) }
  },[items])

  return (
    <button className={cartBtn} onClick={onClick}>
      <span className={classes.icon}><IconOfCart /></span>
      <span>Your Cart</span>
      <span className={classes.badge}>{itemsCount}</span>
    </button>
  )
}

export default HeaderBtn
