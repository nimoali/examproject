import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Middle from './component/middle'
import Footer from './component/footer'
import Heeder from './component/header'
import Section2 from './component/section2'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // </React.StrictMode>,

  <div>
    <Heeder />
    <Section2 />
    <Middle />
    <Footer />
  </div>
)
