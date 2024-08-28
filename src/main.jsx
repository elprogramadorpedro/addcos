import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { CounterApp } from './01-useState/CounterApp'

import './index.css'
//import { SimpleForm } from './02-useEffet/SimpleForm'
//import { FormWithCustonHook } from './02-useEffet/FormWithCustonHook.jsx'
import { MultipleCustomHook } from './01-useState/MultipleCustomHook.jsx'
//import { CounterWhithCustomHooh } from './01-useState/CounterWhithCustomHooh'

createRoot(document.getElementById('root')).render(
  <>
 <MultipleCustomHook></MultipleCustomHook>
  </>
)
