document.addEventListener('DOMContentLoaded', function() {
  var rsvpButton = document.getElementById('rsvp');
  
  //var checkPageButton = document.getElementById('checkPage');

  rsvp.addEventListener('click', function() {
    var groupName = document.getElementById('group_name').value;
    const key = '77564923301b687169247f3028545';
    const endpoint = `https://api.meetup.com/2/events?key=${key}&group_urlname=${groupName}`;
    console.log(endpoint);
    fetch(endpoint)
      .then(data => console.log(data));

    events.forEach(event => 
      let event_url = event.event_url;
      let event_id = event_url;
      const endpoint = `https://api.meetup.com/2/rsvp?key=${key}&event_url=${event_id}&rsvp=yes`;
    )  
  });  

  /*
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      d = document;

      var f = d.createElement('form');
      f.action = 'http://gtmetrix.com/analyze.html?bm';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      f.submit();
    });
  }, false);
  */
  
}, false);