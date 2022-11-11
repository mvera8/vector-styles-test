import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import { VectorStylesTest } from './VectorStylesTest'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
			<VectorStylesTest />
		</BrowserRouter>
  </React.StrictMode>
)