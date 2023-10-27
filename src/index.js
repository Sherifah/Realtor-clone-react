import React from "react";
import {createRoot} from "react-dom/client";
import './index.css'

import App from './App';

import { ThemeProvider } from "@material-tailwind/react";

createRoot(document.getElementById('root')).render(<App />)
// ReactDOM.render(<App />, document.getElementById('root') )
