const Data = require('../models/dataModel');

const DBController = {};

const parseData = (data) => {
  let i = 0;
  const result = [];
  for (string of data) {
    //console.log(i++, string);
    const strings = string.split(' ');
    const strs = [];
    for (let str of strings) {
      const arr = str.split('\n');
      for (item of arr) {
        strs.push(item);
      }
    }
    let inComment = false;
    for (let i = 0; i < strs.length; i++) {
      if (strs[i] === '#') {
        if (inComment) {
          inComment = false;
          i += 3;
        } else inComment = true;
        continue;
      }
      if (inComment) continue;
      result.push({ name: strs[i], val: strs[++i], otherVal: strs[++i] });
    }
    // for(let res of result){
    //   console.log(res);
    // }
    result.pop();
  }
  return result;
};

const parseName = (string) => {
  const result = {};
  let sliceStart = 0;
  let sliceEnd = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === '{') {
      result.metric = string.slice(sliceStart, i);
      sliceStart = i + 1;
    }
    if (string[i] === '=') {
      sliceEnd = i;
    }
    if (string[i] === ',') {
      result[string.slice(sliceStart, sliceEnd)] = string.slice(
        sliceEnd + 2,
        i - 2
      );
      sliceStart = i + 1;
    }
    if (string[i] === '}') {
      result[string.slice(sliceStart, sliceEnd)] = string.slice(
        sliceEnd + 2,
        i - 2
      );
    }
  }
  return result;
};

//console.log(parseName("container_cpu_usage_seconds_total{container=\"kube-apiserver\",namespace=\"kube-system\",pod=\"kube-apiserver-kind-control-plane\"}"));

DBController.storeData = async (req, res, next) => {
  console.log('made it to storeData');
  //const userID = req.cookies.userID;
  try {
    const array = parseData(res.locals.metrics_data);
    const userId = req.cookies.session;
    //console.log(data);
    const final = [];
    for (item of array) {
      const formatted = parseName(item.name);
      formatted.val = item.val;
      formatted.altVal = item.otherVal;
      final.push(formatted);
    }
    const newData = await Data.create({
      data: { dataArray: final },
      time: Date.now(),
      UserId: userId,
    });
    res.locals.metrics_data = { data: final, time: Date.now() };
    return next();
  } catch (err) {
    return next(err);
  }
};

DBController.getData = async (req, res, next) => {
  try {
    const userId = req.cookies.session;
    let results;
    if (userId) {
      results = await Data.find({ userId: userId });
    } else results = await Data.find({});
    res.locals.results = results;
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = DBController;
