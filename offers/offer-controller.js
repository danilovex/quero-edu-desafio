const db = require('../models');
const Course = db.Course;
const University = db.University;
const Campus = db.Campus;
const Offer = db.Offer;

exports.find = async(params) => {

  let join = [];

  let joinUniversity = {
    model: University,
    as: 'Universities'
  };
  if (params.university){
    joinUniversity.where = { name: params.university};
  }  
  join.push(joinUniversity);

  let joinCampuses = {
    model: Campus,
    as: 'Campus'
  };
  if (params.city){
    joinCampuses.where = { city: params.city};
  }  
  join.push(joinCampuses);  

  let joinCourse = {
    model: Course,
    as: 'Course'
  };
  if (params.course){
    joinCourse.where = { name: params.course};
  }
  if (params.kind){
    joinCourse.where = { kind: params.kind};
  }
  if (params.level){
    joinCourse.where = { level: params.level};
  }
  if (params.shift){
    joinCourse.where = { level: params.shift};
  }  
  join.push(joinCourse);

  let order = [];
  if(params.order_price_with_discount === 'DESC'){
    order.push(['price_with_discount', params.order_price_with_discount]);
  }else{
    order.push(['price_with_discount', 'ASC'])
  }
  
  return await Offer.findAll({
    order: order,
    include: join
  });
};