import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { CounterApp } from './01-useState/CounterApp'

import './index.css'
import { SimpleForm } from './02-useEffet/SimpleForm'
//import { CounterWhithCustomHooh } from './01-useState/CounterWhithCustomHooh'

createRoot(document.getElementById('root')).render(
  <>
 <SimpleForm></SimpleForm>
  </>
)
