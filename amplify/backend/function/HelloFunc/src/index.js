exports.handler = async (event) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 20000);
    });
  
    const response = {
      statusCode: 200,
      body: JSON.stringify("Hello from Step Functions with API Gateway!"),
    };
    return response;
  };