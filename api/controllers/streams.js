const Stream = require('../models/streams');

/* =============================================
                GET REQUESTS
================================================ */

exports.getStream = async (req, res, next) => {
  try{
    const streamId = req.params.streamId;

    const stream = await Stream.findById(streamId);
    return res
      .status(200)
      .send({ stream });
  } catch(error){
    console.log(error);
  }
}

exports.getStreamsList = async (req, res, next) => { 
  try {
    const streamsList = await Stream.find();
    return res
      .status(200)
      .send({ streamsList });
  } catch (error) {
    console.log(error);
  }  
}

/*===============================================
                  PATCH REQUESTS
================================================= */
exports.patchEditStream = async (req, res, next) => {
  try {
    const streamId = req.params.streamId;

    const stream = await Stream.findById(streamId);
    if(req.body.createdBy === stream.createdBy){
      stream.streamTitle = req.body.streamTitle;
      stream.streamDescription = req.body.streamDescription;

      await stream.save();
      return res
        .status(200)
        .send({ message : 'Stream Edited Successfully' });
    } else{
      return res
        .status(403)
        .send({ error : 'Something went wrong' })
    }
  } catch (error) {
    console.log(error);
  }
}

exports.deleteStream = async (req, res, next) => {
  try {
    const streamId = req.params.streamId;

    await Stream.findByIdAndDelete(streamId);
    return res
      .status(200)
      .send({ message : 'Stream Deleted successfully' });
    
  } catch (error) {
    console.log(error);
  }
}

/* =============================================
                POST REQUESTS
================================================ */

exports.postCreateStream = async (req, res, next) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
}