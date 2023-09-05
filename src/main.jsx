import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './component/header.jsx'
import Main from './component/main.jsx'
import Footer from './component/footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
      <Header />
      <Main />
      <Footer />
    </>
)
