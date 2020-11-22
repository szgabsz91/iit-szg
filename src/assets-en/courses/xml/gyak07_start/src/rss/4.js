(function() {
  var feedUrl = 'http://gdata.youtube.com/feeds/api/users/GoogleDevelopers/uploads';
  
  function FeedViewModel() {
    this.title = ko.observable();
    this.link = ko.observable();
    this.entries = ko.observableArray();
    
    this.refresh = function() {
      alert('TODO: Refresh feed');
    };
  };
  
  ko.applyBindings(new FeedViewModel());
})();