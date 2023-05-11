import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext()


const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastProvider({ children }) {

  const [ message, setMessage ] = React.useState('')
  const [ variant, setVariant ] = React.useState(VARIANT_OPTIONS[0])
  const [ toasts, setToasts ] = React.useState([
    {
      message: 'Oh no!',
      variant: 'error',
      id: '12'
    },
    {
      message: 'Logged in!',
      variant: 'success',
      id: '21'
    }
  ]) 

  useEscapeKey({ setToasts })

  function handlePop(event) {
    event.preventDefault()
    const newToast = {message: message, variant: variant, id: crypto.randomUUID()}
    const nextToasts = [...toasts, newToast]
    setToasts(nextToasts)
    setMessage('')
    setVariant(VARIANT_OPTIONS[0])
  }

  function handleDismiss(id) {
    const nextToasts = toasts.filter(toast => {
      return toast.id !== id
    })

    setToasts(nextToasts)
  }

  return (
    <ToastContext.Provider value={{ toasts, handleDismiss, handlePop, message, setMessage, VARIANT_OPTIONS, variant, setVariant }}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
