import styled from './header.module.scss';
import Button from '../Button';
const telegram = window.Telegram.WebApp;

const Header = () => {  

  const onClose = () => {
    telegram.close();
  }



  return(
    <>
      <header className={styled.header}>
        <Button onClick={onClose}>Close</Button>
        <span className={styled.username}>
          {telegram.initDataUnsafe?.user?.username}
        </span>
      </header>
    </>
  )
}

export default Header;