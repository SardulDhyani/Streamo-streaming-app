import React from 'react';

import NavBar from './Navbar/Navbar.component';
import AppRoutes from './Routes/app.routes';

const App = () => {
  return(
    <div>
      <NavBar />
      <AppRoutes />
    </div>
  );
};

export default App;