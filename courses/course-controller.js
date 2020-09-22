const db = require('../models');
const Course = db.Course;
const University = db.University;

exports.find = async(params) => {
  let query = {};
  if (params.kind){
    query.kind = params.kind
  }  
  if(params.level){
    query.level = params.level;
  }
  if(params.shift){
    query.shift = params.shift;
  }     

  let join = [];
  let joinUniversity = {
    model: University,
    as: 'Universities'
  };
  if (params.university){
    joinUniversity.where = { name: params.university};
  }

  join.push(joinUniversity);
  
  return await Course.findAll({
    where: query,
    include: join
  });
};