import React from 'react';
import { Router, Route } from 'react-router-dom';

import history from '../../history';


import NavBar from '../Navbar/Navbar.component';
import StreamList from '../Streams/Pages/StreamList/StreamList.component';
import StreamShow from '../Streams/Pages/StreamShow/StreamShow.component';
import StreamCreate from '../Streams/Pages/StreamCreate/StreamCreate.component';
import StreamEdit from '../Streams/Pages/StreamEdit/StreamEdit.component';
import StreamDelete from '../Streams/Pages/StreamDelete/StreamDelete.component';
import SpacingGrid from '../Streams/Pages/RowPoster/RowPoster';

const AppRoutes = function () {

  return (
    <Router history={history}>
      <NavBar />
      <Route path="/" exact component={StreamList} />
      <Route path="/streams/show" exact component={StreamShow} />
      <Route path="/streams/new" exact component={StreamCreate} />
      <Route path="/streams/edit/:streamId" exact component={StreamEdit} />
      <Route path="/streams/delete" exact component={StreamDelete} />
      <Route path="/test" exact component={SpacingGrid} />
    </Router>
  );
}

export default AppRoutes;