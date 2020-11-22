(function() {
  var feedUrl = 'http://gdata.youtube.com/feeds/api/users/GoogleDevelopers/uploads';
  
  function FeedViewModel() {
    this.title = ko.observable();
    this.link = ko.observable();
    this.entries = ko.observableArray();
    
    this.refresh = function() {
      var self = this;
      
      $.get(feedUrl, function(feed) {
        feed = $(feed).find('feed');
        
        self.title(feed.children('title').text());
        self.link(feed.children('link[rel="alternate"]').attr('href'));
        self.entries.removeAll();
        
        feed.find('entry').each(function() {
          self.entries.push({
            title: $(this).find('title').text(),
            content: $(this).find('content').text(),
            link: $(this).find('link[rel="alternate"]').attr('href'),
            thumbnail: $(this).find('thumbnail').attr('url')
          });
        });
      });
    };
  };
  
  ko.applyBindings(new FeedViewModel());
})();