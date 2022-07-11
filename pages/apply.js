import React from 'react';
import styles from '../styles/Home.module.css';

const Apply = () => {
  return (
    <div>
      <form>
        <div className={styles.formElement}>
          <label>Your presentation video</label>
          <input type='text' placeholder='Presentation Video Url' />
        </div>
        <div className={styles.formElement}>
          <label>Your email</label>
          <input type='text' placeholder='email' />
        </div>
      </form>
    </div>
  );
};

export default Apply;
