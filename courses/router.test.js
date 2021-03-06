var expect  = require("chai").expect;
var request = require("request");

describe("Courses API", function() {

  var url = "http://localhost:3000/api/courses";

  it("returns status 200 - no filter", function(done) {
    this.timeout(5000);
    request(url, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      
      let result = JSON.parse(body)[0];
      expect('course' in result).to.equal(true);
      expect('name' in result.course).to.equal(true);
      expect('kind' in result.course).to.equal(true);
      expect('level' in result.course).to.equal(true);
      expect('shift' in result.course).to.equal(true);
      expect('university' in result.course).to.equal(true);
      expect('name' in result.course.university).to.equal(true);
      expect('score' in result.course.university).to.equal(true);
      expect('logo_url' in result.course.university).to.equal(true);

      done();
    });
  });

  it("returns status 200 - filter by university", function(done) {

    let value = 'UNIP';
    let urlParams = url + `?university=${value}`;

    this.timeout(5000);
    request(urlParams, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      
      let results = JSON.parse(body);
      let allValuesAreEqual = results.filter(x => x.course.university.name !== value).length === 0;

      expect(allValuesAreEqual).to.equal(true);

      done();
    });
  });
  
  it("returns status 200 - filter by kind", function(done) {

    let value = 'Presencial';
    let urlParams = url + `?kind=${value}`;

    this.timeout(5000);
    request(urlParams, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      
      let results = JSON.parse(body);
      let allValuesAreEqual = results.filter(x => x.course.kind !== value).length === 0;

      expect(allValuesAreEqual).to.equal(true);

      done();
    });
  });  

  it("returns status 200 - filter by level", function(done) {

    let value = 'Bacharelado';
    let urlParams = url + `?level=${value}`;

    this.timeout(5000);
    request(urlParams, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      
      let results = JSON.parse(body);
      let allValuesAreEqual = results.filter(x => x.course.level !== value).length === 0;

      expect(allValuesAreEqual).to.equal(true);

      done();
    });
  }); 

  it("returns status 200 - filter by shift", function(done) {

    let value = 'Noite';
    let urlParams = url + `?shift=${value}`;

    this.timeout(5000);
    request(urlParams, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      
      let results = JSON.parse(body);
      let allValuesAreEqual = results.filter(x => x.course.shift !== value).length === 0;

      expect(allValuesAreEqual).to.equal(true);

      done();
    });
  }); 

});