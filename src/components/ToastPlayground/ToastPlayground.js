import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

import ToastShelf from '../ToastShelf/ToastShelf'

import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastPlayground() {
  const { toasts, handleDismiss, handlePop, message, setMessage, VARIANT_OPTIONS, variant, setVariant } = React.useContext(ToastContext)

  return (
      <div className={styles.wrapper}>
        <header>
          <img alt="Cute toast mascot" src="/toast.png" />
          <h1>Toast Playground</h1>
        </header>

        <ToastShelf toasts={toasts} handleDismiss={handleDismiss}/>

        <form className={styles.controlsWrapper} onSubmit={handlePop}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea id="message" className={styles.messageInput} value={message} onChange={event => {setMessage(event.target.value)}} />
            </div>
          </div>

            <div className={styles.row}>
              <div className={styles.label}>Variant</div>
              <div
                className={`${styles.inputWrapper} ${styles.radioWrapper}`}
              >
                  {VARIANT_OPTIONS.map((option) => (
                <label htmlFor={`variant-${option}`}>
                  
                  <input
                    key={crypto.randomUUID()}
                    id={`variant-${option}`}
                    type="radio"
                    name="variant"
                    value={option}
                    checked = {option === variant}
                    onChange={event => {setVariant(event.target.value)}}
                  />
                  {option}
                </label>
          ))}
              </div>
            </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div
              className={`${styles.inputWrapper} ${styles.radioWrapper}`}
            >
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
  );
}

export default ToastPlayground;
