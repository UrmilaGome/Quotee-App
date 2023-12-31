import React from 'react'
import QuoteCard from './components/QuoteCard'
import { QuoteProvider } from './context/QuoteContext'

const App = () => {
  return (
    <QuoteProvider>
    <div className="container p-5">
   <h1 className="display-3 text-center">Daily Quote</h1>
    </div>
    <QuoteCard/>  
    </QuoteProvider>
  )
}

export default App
