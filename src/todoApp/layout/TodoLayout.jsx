export const TodoLayout = ({children}) => {
  return (
    <div className="d-flex align-items-center justify-content-center" 
            style={{height: '100vh', backgroundImage: "url(Background-color.jpeg)"}}>
        <div className="bg-white border border-4 rounded-3 col-6">
            {children}
        </div> 
    </div>
  )
}
