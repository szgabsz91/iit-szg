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
      alert('TODO: Process JSON');
    };
    
    this.processXml = function() {
      alert('TODO: Process XML');
    };
  };
  
  ko.applyBindings(new ViewModel());
})();