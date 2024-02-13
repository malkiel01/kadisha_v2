import React, { createContext, useEffect, useState } from 'react'
import './App.css';

// lyouts
import RouterApp from './routing'

const GlobalContext = createContext()

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [permission, setPermission] = useState(localStorage.getItem('permission')) 
 

  const varibleGlobal = { 
    token, setToken,
    // loading, setLoading,
    permission, setPermission,
    // counterForms, setCounterForms,
    // formComponents, setFormComponents,
    // routerName, setRouterName,
    
    // dataCemeteries, setDataCemeteries,
    // nameCemeteries, setNameCemeteries,

    // dataBlocks, setDataBlocks,
    // nameBlocks, setNameBlocks,

    // dataPlots, setDataPlots,
    // namePlots, setNamePlots,

    // dataAreaGraves, setDataAreaGraves,
    // nameAreaGraves, setNameAreaGraves,
  }
  return (
    <GlobalContext.Provider value={varibleGlobal}>
      {/* <ThemeProvider theme={theme}> */}
          <RouterApp/>
      {/* </ThemeProvider> */}
    </GlobalContext.Provider>
  );
}

export default App;
export {
  GlobalContext
}