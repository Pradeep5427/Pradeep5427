import { useContext } from 'react';
import { Button,Container,Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import LocaleContext from './localContext';

export default function Header({addHandle}){

  const {t,i18n}= useTranslation();
  const {locale} = useContext(LocaleContext)

     const Logout = () =>{
         localStorage.removeItem('isAuthenticated');
         window.location.pathname = '/login';
     }

     function changeLocale (l) {
      if (locale !== l) {
        i18n.changeLanguage(l);
      }
    }

    
 
    return(
      <Container>
        <div className="my-3 two-button">
            <Button onClick={()=>addHandle()}>{t('Add')}</Button>
            
            <Dropdown>
  <Dropdown.Toggle title={t('language')} variant="primary" id="dropdown-basic">
  {t('Language')}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={()=>changeLocale('en')} >English</Dropdown.Item>
    <Dropdown.Item onClick={()=>changeLocale('hi')} > Hindi</Dropdown.Item>
    <Dropdown.Item onClick={()=>changeLocale('my')} > Malayalam</Dropdown.Item>
    <Dropdown.Item onClick={()=>Logout()} >Log out</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
         </div>
        </Container>
    )
}