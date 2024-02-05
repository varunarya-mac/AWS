
module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v3.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};

//Deploy whole project command:
// sls deploy

//deploy only function changes
// sls deploy function 

//invoke function from aws
// sls invoke -f function-name --logs 

// delete function from aws
// sls remove
