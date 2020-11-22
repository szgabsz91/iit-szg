(function() {
  // URLs
  var urlFormat = 'http://users.iit.uni-miskolc.hu/~szabo84/xml/api/cars.php?format=%s';
  var jsonUrl = _.string.sprintf(urlFormat, 'json');
  var xmlUrl = _.string.sprintf(urlFormat, 'xml');
  
  function ViewModel() {
    this.jsonResponse = {
      cars: ko.observableArray()
    };
    this.xmlResponse = {
      cars: ko.observableArray()
    };
    
    this.processJson = function() {
      var self = this;
      
      $.get(jsonUrl, function(cars) {
        self.jsonResponse.cars.removeAll();
        self.jsonResponse.cars.push.apply(self.jsonResponse.cars, cars);
      });
    };
    
    this.processXml = function() {
      this.xmlResponse.cars.removeAll();
      var self = this;
      
      $.get(xmlUrl, function(cars) {
        $(cars).find('car').each(function() {
          self.xmlResponse.cars.push({
            manufacturer: $(this).find('manufacturer').text(),
            color: $(this).find('color').text(),
            price: $(this).find('price').text()
          });
        });
      });
    };
  };
  
  ko.applyBindings(new ViewModel());
})();