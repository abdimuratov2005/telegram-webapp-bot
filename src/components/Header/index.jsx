import styled from './header.module.scss';
import Button from '../Button';
import { useTelegram } from '../../hooks/useTelegram';

const Header = () => {  

  const {user, onClose} = useTelegram()

  return(
    <>
      <header className={styled.header}>
        <Button onClick={onClose}>Close</Button>
        <span className={styled.username}>
          {user}
        </span>
      </header>
    </>
  )
}

export default Header;