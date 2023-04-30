const telegram = window.Telegram.WebApp;

export function useTelegram(){
  
  const onClose = () => {
    telegram.close();
  }
  const onToggleButton = () => {
    if (telegram.MainButton.isVisible){
      telegram.MainButton.hide();
    } else {
      telegram.MainButton.show();
    }
  }
  
  return {
    telegram,
    onClose,
    onToggleButton,
    user: telegram.initDataUnsafe?.user?.username,
  }
}