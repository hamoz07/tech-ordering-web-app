import classes from './Header.module.css'
import HeaderBtn from './HeaderBtn'
  const Header = ({onShowCart}) => {
    return (
      <>
      <header className={classes.header}>
        <h1>Tech Geeks</h1>
        <HeaderBtn 
        onClick={onShowCart}
         />
      </header>
      <div 
      className={classes["main-img-preview"]}
      >
        
      </div>
      </>
    )

}

export default Header