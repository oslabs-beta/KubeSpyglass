
const axios = require('axios');
const MonitorController = {};

MonitorController.getMetrics = async (req, res, next) => {
  try{
    console.log('made it to get metrics');
    const url = req.params.url;
    res.locals.metrics_data = [];
    console.log('url to request is : ', url);
    const result = await axios.get('http://' + url + '/api/v1/nodes/');
    //console.log(result.data.items[0]);
    const nodeNames = result.data.items.map((el) => el.metadata.name);
    //console.log(nodeNames);
    for(let name of nodeNames){
      const result = await axios.get('http://' + url + '/api/v1/nodes/' + name + '/proxy/metrics/resource')
      res.locals.metrics_data.push(result.data);
    }
    //console.log(res.locals.metrics_data);
    return next();
  }
  catch (err){
    return next(err);
  }
}

MonitorController.getStructure = async (req, res, next) => {
  try{
    const url = req.body.server;
    const result = await axios.get(url + 'something');
    res.locals.structure_data = await result.body.json();
  }
  catch (err){
    return next(err);
  }
}

module.exports = MonitorController;