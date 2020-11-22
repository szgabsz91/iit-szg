(function() {
  function getAccessToken(hash) {
    var result = {};
    
    $.each(hash.substr(1).split('&'), function(index, parameter) {
      var parts = parameter.split('=');
      result[parts[0]] = parts[1];
    });
    
    return result['access_token'];
  };
  
  var facebookVersion = 2.1;
  var clientId = '719908684724824';
  var scope = 'email';
  var responseType = 'token';
  var redirectUri = window.location.href;
  var authenticationUrl = _.string.sprintf('https://www.facebook.com/v%f/dialog/oauth?client_id=%s&scope=%s&response_type=%s&redirect_uri=%s', facebookVersion, clientId, scope, responseType, redirectUri);
  var fields = ['picture', 'first_name', 'last_name', 'email', 'link'].join(',');
  var accessToken = getAccessToken(window.location.hash);
  var profileUrl = _.string.sprintf('https://graph.facebook.com/v%f/me?fields=%s&access_token=%s', facebookVersion, fields, accessToken);
  
  if (!accessToken) {
    window.location.href = authenticationUrl;
    return;
  }
  
  function FacebookViewModel(profileInfo) {
    this.picture = ko.observable(profileInfo.picture.data.url);
    this.firstName = ko.observable(profileInfo.first_name);
    this.lastName = ko.observable(profileInfo.last_name);
    this.fullName = ko.computed(function() {
      return _.string.sprintf('%s %s', this.firstName(), this.lastName());
    }, this);
    this.email = ko.observable(profileInfo.email);
    this.link = ko.observable(profileInfo.link);
  };
  
  $.ajax({
    url: profileUrl,
    success: function(profileInfo) { 
      ko.applyBindings(new FacebookViewModel(profileInfo));
    },
    error: function() {
      window.location.href = authenticationUrl;
    }
  });
})();