import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './app/pages/App'
import reportWebVitals from './reportWebVitals'
import {queryClient} from './app/configs/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {QueryClientProvider} from '@tanstack/react-query'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
