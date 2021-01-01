const mongoose = require('mongoose');

function setUpMongoDB(app){

  async function connect() {
    try {
      await mongoose
        .connect(
          process.env.PROD_MONGO_URI,
          { useUnifiedTopology: true, useNewUrlParser: true }
        );
        app.listen(process.env.PORT, function(){
          console.log("App listening on PORT "+process.env.PORT)
        })
    } catch (error) {
      console.log(error);
    }
  }

  return {connect};
};

module.exports = setUpMongoDB;