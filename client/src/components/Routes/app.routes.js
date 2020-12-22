import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import StreamList from '../../components/Streams/StreamList/StreamList.component';
import StreamShow from '../../components/Streams/StreamShow/StreamShow.component';
import StreamCreate from '../../components/Streams/StreamCreate/StreamCreate.component';
import StreamEdit from '../../components/Streams/StreamEdit/StreamEdit.component';
import StreamDelete from '../../components/Streams/StreamDelete/StreamDelete.component';

const AppRoutes = function () {

  return (
    <BrowserRouter>
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/show" exact component={StreamShow} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/edit" exact component={StreamEdit} />
        <Route path="/streams/delete" exact component={StreamDelete} />
    </BrowserRouter>
  );
}

export default AppRoutes;