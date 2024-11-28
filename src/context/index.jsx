import { data } from 'autoprefixer';
import { createContext, useReducer } from 'react'


const ContextTodo = createContext({})
function Context() {

   
  

  return <ContextTodo.Provider value={{data,dispatch}}>
        {children}
  </ContextTodo.Provider>
}


export default Context