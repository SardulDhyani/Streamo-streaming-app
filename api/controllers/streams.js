const Stream = require('../models/streams');

/* =============================================
                GET REQUESTS
================================================ */

exports.getStream = async (req, res, next) => {
  const streamId = req.params.streamId;

  const stream = await Stream.findById(streamId);
  return res
    .status(200)
    .send({ stream });
}

exports.getStreamsList = async (req, res, next) => { 
  const streamsList = await Stream.find();
  return res
    .status(200)
    .send({ streamsList }); 
}


/* =============================================
                POST REQUESTS
================================================ */

exports.postCreateStream = async (req, res, next) => {
  const streamTitle = req.body.streamTitle;
  const streamDescription = req.body.streamDescription;
  const streamCreatedBy = req.body.createdBy;

  const newStream = new Stream({
    streamTitle,
    streamDescription,
    createdBy : streamCreatedBy
  });
  await newStream.save();
  // console.log("Stream Created");

  return res
    .status(200)
    .send({
      message : 'Stream Created'
    });
}