import React from "react";
import { hydrate, render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App/App";
import { loadableReady } from "@loadable/component";

const renderApp = () => {
  const rootContent = document.getElementById("root");
  const renderMethod =  hydrate;

   setTimeout(()=>{
     renderMethod(
         <BrowserRouter>
           <App />
         </BrowserRouter>,
         rootContent
     );
   }, 1000)
};

loadableReady(() => {
  renderApp();
});

// if (module.hot) {
//   module.hot.accept();
// }
