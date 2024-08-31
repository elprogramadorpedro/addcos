import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { CounterApp } from './01-useState/CounterApp'

import './index.css'
//import { SimpleForm } from './02-useEffet/SimpleForm'
//import { FormWithCustonHook } from './02-useEffet/FormWithCustonHook.jsx'
//import { MultipleCustomHook } from './01-useState/MultipleCustomHook.jsx'
//import { FocusScreen } from './04-useRef/FocusScreen.jsx'
//import { Layout } from './05 - useLayoutEffect/Layout.jsx'
//import { Memorize } from './Memorize/Memorize.jsx'
//import { MemoHook } from './Memorize/MemoHook.jsx'
//import { CallbackHook } from './Memorize/CallbackHook.jsx'
//import { Padre } from './07-TAREA-MEMO/Padre.jsx'
//import { CounterWhithCustomHooh } from './01-useState/CounterWhithCustomHooh'
//import './08-USE-REDUCER/intro-reducer.js'
import { TodoApp } from './08-USE-REDUCER/TodoApp.jsx'

createRoot(document.getElementById('root')).render(
  <>
 <TodoApp/>
  </>
)
