import { useEffect, useState } from 'react';
import styles from '../css/Alert.module.css';

export default function Alert({ message, showAlert,success }) {
  const [visible, setVisible] = useState(showAlert);

  useEffect(() => {
    setVisible(showAlert);

    if (showAlert) {

      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showAlert]);
  
  return (
    
    <div className={`${styles.alert} ${visible ? '' : styles.hide} ${success?styles.success:styles.failure}`}>
      {message}
    </div>
  );
}
Alert.defaultProps = {
  success:false
};
