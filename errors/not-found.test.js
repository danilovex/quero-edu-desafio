var expect  = require("chai").expect;
var request = require("request");

describe("Not Found API", function() {

  var url = "http://localhost:3000/api/this-path-not-found";

  it("returns status 404", function(done) {
    request(url, function(error, response, body) {
      expect(response.statusCode).to.equal(404);
      done();
    });


  });

});