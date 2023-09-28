const Data = require('../models/dataModel');

const DBController = {};


const parseName = (string) => {
  const result = {};
  let sliceStart = 0;
  let sliceEnd = 0;
  for (let i = 0; i < string.length; i++){
    if(string[i] === '{'){
      result.metric = string.slice(sliceStart, i);
      sliceStart = i + 1;
    }
    if(i === string.length - 1){
      if(!result.metric) result.metric = string;
    }
    if(string[i] === '='){
      sliceEnd = i;
    }
    if(string[i] === ','){
      result[string.slice(sliceStart, sliceEnd)] = string.slice(sliceEnd + 2, i - 1);
      sliceStart = i + 1;
    }
    if(string[i] === '}'){
      result[string.slice(sliceStart, sliceEnd)] = string.slice(sliceEnd + 2, i - 1);
    }
  }
  return result;
}


const parseData = (data) => {
  let i = 0;
  const result = [];
  for(string of data){
    //console.log(i++, string);
    const strings = string.split('\n');
    const strs = [];
    for(let str of strings){
      const arr = str.split(' ');
      strs.push(arr);
    }
    for(let i = 0; i < strs.length; i++){
      if(strs[i].length > 3 || strs[i][0] === '#') continue;
      result.push({name: strs[i][0], val: strs[i][1], otherVal: strs[i][2]});
    }
    // for(let res of result){
    //   console.log(res);
    // }
  }
  result.pop();
  result.pop();
  const final = [];
  for(item of result){
    //console.log(item);
    const formatted = parseName(item.name);
    //console.log(formatted);
    formatted.val = item.val;
    formatted.altVal = item.otherVal;
    final.push(formatted);
  }
  //console.log(final);
  return final;
}

const parseTSData = (array, time) => {
  const finalData = {};
  for(const measure of array){
    if(!finalData[measure.metric]) finalData[measure.metric] = [{...measure, time}];
    else finalData[measure.metric].push({...measure, time});
  }
  return finalData;
};

//console.log(parseName("container_cpu_usage_seconds_total{container=\"kube-apiserver\",namespace=\"kube-system\",pod=\"kube-apiserver-kind-control-plane\"}"));

DBController.storeData = async (req, res, next) => {
  console.log('made it to storeData');
  //const userID = req.cookies.userID;
  try{
    const parsed = parseData(res.locals.metrics_data);
    const time = Date.now()
    const sorted = parseTSData(parsed, time);
    console.log(sorted);
    //console.log(array);
    const userId = req.cookies.session;
    console.log('userid: ', userId);
    const newData = await Data.create({
      userId: userId,
      data: sorted, 
      time,   
    })
    res.locals.metrics_data = {data: sorted, time, userId: userId};
    return next();
  }
  catch (err){
    return next(err);
  }
}

DBController.getData = async (req, res, next) => {
  try{
    const userId = req.cookies.session;
    console.log('userId', userId);
    let results;
    if(userId){
      results = await Data.find({userId: userId});
    }
    else results = await Data.find({});
    res.locals.results = results;
    return next();
  }
  catch (err) {
    return next(err);
  }
}

module.exports = DBController;