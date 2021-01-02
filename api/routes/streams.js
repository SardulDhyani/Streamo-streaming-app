const express = require('express');

const streamControllers = require('../controllers/streams');

const router = express.Router();

router.get('/streams/:streamId', streamControllers.getStream);

router.get('/streams', streamControllers.getStreamsList);

router.patch('/streams/:streamId', streamControllers.patchEditStream);

router.delete('/streams/:streamId', streamControllers.deleteStream);

router.post('/streams/create', streamControllers.postCreateStream);

module.exports = router;