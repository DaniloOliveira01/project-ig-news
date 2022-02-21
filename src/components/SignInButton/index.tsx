import styles from './styles.module.scss'

import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export function SignInButton() {
  const isUserLoggedIn = true;


  return isUserLoggedIn ? (
    <button 
    className={styles.signIButton}
    type="button">
      <FaGithub color='#04d361'/> 
      Danilo Oliveira

      <FiX color='#737380' className={styles.closeIcon}/>
    </button>
  ) : (
    <button 
    className={styles.signIButton}
    type="button">
      <FaGithub color='#eba417'/> 
      Sign In with Github
    </button>
  );
}