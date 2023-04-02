import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { initFirestoreApp } from './firestore/config'
import './index.css'
import './components/NavBar/NavBar.css'
import './containers/CartContainer/CartContainer.css'
import './components/Item/Item.css'
import './components/ItemDetail/ItemDetail.css'
import './components/ItemCount/ItemCount.css'
import '../src/containers/ItemListContainer/ItemListContainer.css'
import 'bootstrap/dist/css/bootstrap.min.css'

initFirestoreApp()

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
