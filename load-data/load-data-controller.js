const db = require('../models');
const University = db.University;
const Campus = db.Campus;
const Course = db.Course;
const Offer = db.Offer;

const dataJson = require('../db.json');

function mapData(list, property){
  let tmpList = list.map(x => (x[property]));
  return isUniqueList(tmpList, 'name')  
}

function isUniqueList(list, key) {
  var listUnique = [], keys = [];
  for(var obj in list) {
    let keyToCompare = list[obj][key];
    if(keys.indexOf(keyToCompare) < 0){
      keys.push(keyToCompare);
      listUnique.push(list[obj]);
    }
  }
  return listUnique;
}

async function save(list, model){
  await model.truncate({cascade: true});
  return await model.bulkCreate(list);
}

function filterCourses(list){
  let courses = [];
  let keys = [];
  for(let index in list){
    const item = list[index];
    let key = `${item.course.name}#${item.university.name}`;
    if(keys.indexOf(key) < 0){
      keys.push(key);
      let course = item.course;
      course.university = item.university.name;
      course.campus = item.campus.name;
      courses.push(course);
    }
  }
  return courses;
}

function getCourses(list, universities, campus){
  let courses = [];
  let coursesFiltered = filterCourses(list);
  for (let index = 0; index < universities.length; index++) {
    const university = universities[index];
    let coursesUnivesity = coursesFiltered.filter(u => u.university = university.name).map(mapU => ({ 
      name: mapU.name,
      kind: mapU.kind,
      level: mapU.level,
      shift: mapU.shift,
      universityId: university.id,
      campusId: campus.filter(c => c.name === mapU.campus).map(mapC => mapC.id).pop()
    }));  
    courses = courses.concat(coursesUnivesity);
  }
  return courses;
}

function getOffers(list, universities, campus, courses){
  return list.map(x => ({ 
    full_price: x.full_price,
    price_with_discount: x.price_with_discount,
    discount_percentage: x.discount_percentage,
    start_date: x.start_date,
    enrollment_semester: x.enrollment_semester,
    enabled: x.enabled,
    courseId: courses.filter(c => c.name === x.course.name).map(m => m.id).pop(),
    universityId: universities.filter(u => u.name === x.university.name).map(m => m.id).pop(),
    campusId: campus.filter(cs => cs.name === x.campus.name).map(m => m.id).pop()
  }));
}

exports.loadData = async() => {

  let universities = mapData(dataJson, 'university');
  let campus = mapData(dataJson, 'campus');

  let universitiesSaved = await save(universities, University);
  let campusSaved = await save(campus, Campus);

  let courses = getCourses(dataJson, universitiesSaved, campusSaved);
  let coursesSaved = await save(courses, Course);

  let offers = getOffers(dataJson, universitiesSaved, campusSaved, coursesSaved);
  await save(offers, Offer);  

  return true;
};
