import TabProfile from './components/profile/profile';
import { createTheme, ThemeProvider } from '@mui/material';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ProductsPage from './components/cardList/card/product';
import './App.css'


const theme = createTheme();
const App = () => {
  return (
    <div className="App">

      <div className='app-title'>
        <h1> Alma Mater </h1>
      </div>

      <Routes>
        <Route path='/*' element={<ProductsPage />} />
        <Route path=":enrollmentNumber" element={
          <ThemeProvider theme={theme}>
            <TabProfile />
          </ThemeProvider>
        } />
      </Routes>


    </div >
  )
}
export default App;
