import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { TodoPage } from './todoApp/pages/TodoPage.jsx'
import { TodosProvider } from './context/TodosProvider.jsx'
import { TodoLayout } from './todoApp/layout/TodoLayout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoLayout>
      <TodosProvider>
        <TodoPage/>
      </TodosProvider>
    </TodoLayout>
  </React.StrictMode>
)
