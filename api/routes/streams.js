const express = require('express');

const streamControllers = require('../controllers/streams');

const router = express.Router();

/*======================================
              GET ROUTES
======================================= */

router.get('/streams/:streamId', streamControllers.getStream);

router.get('/streams', streamControllers.getStreamsList);

/*======================================
              POST ROUTES
======================================= */

router.post('/streams/create', streamControllers.postCreateStream);

module.exports = router;