export const TodoLayout = ({children}) => {
  return (
    <div className="d-flex align-items-center justify-content-center" 
            style={{height: '100vh', 
                backgroundImage: "url(todoBackgroundGradient.jpg)", 
                backgroundSize: "cover"}}>
        <div className="bg-opacity-50 border border-4 rounded-3 col-6" 
            style={{backgroundColor: "rgba(255,255,255,0.5)"}}>
            {children}
        </div> 
    </div>
  )
}
