import { useEffect } from "react"

export const AlertNotification = ({changeVisibility, message, hasError}) => {
    useEffect(() => {
      setTimeout(() => changeVisibility(false), 1500);
    }, [])
    
  return (
    <div className={"alert alert-"+ ((hasError) ? "danger" : "success")} 
        style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <h4 class="alert-heading">{message.title}</h4>
        <hr/>
        <p class="mb-0">{message.text}</p>
    </div>
  )
}
