const fs = require('fs');
const path = require('path');

const dashboardController = {};

dashboardController.getIFrames = async (req, res, next) => {
  console.log('made it to getIFrames');
  const authToken = JSON.parse(
    fs.readFileSync(
      path.resolve(__dirname, '../grafana/service_account_token.json')
    )
  );
  console.log(authToken);

  const response = await fetch(authToken.url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken.key}`,
    },
  });
  console.log('you got back this response:', response);
  //const stuff = JSON.parse(response.body);
  //console.log(stuff);

  return next();
};

dashboardController.setUrlCookie = (req, res, next) => {
  return next();
};
// middleware for initial instantiation of connection
// middleware for fetching of individual i-Frames
// set cookie

module.exports = dashboardController;
