var expect  = require("chai").expect;
var request = require("request");

describe("Load Data API", function() {

  var url = "http://localhost:3000/api/load-data";

  it("returns status 200", function(done) {
    this.timeout(5000);
    request(url, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });


  });

});