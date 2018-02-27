document.addEventListener('DOMContentLoaded', function() {

  const rsvpButton = document.getElementById('rsvp');

  rsvp.addEventListener('click', function() {

    let re = /\d+[^\/]/;
    let counter = 0;

    const groupName = document.getElementById('group_name').value;
    const amount = parseInt(document.getElementById('amount').value);
    const key = 'key=77564923301b687169247f3028545';
    const endpoint = `https://api.meetup.com/${groupName}/events`;
    const eventsEndpoint = `${endpoint}?${key}`;

    fetch(eventsEndpoint)
      .then(response => response.json())
      .then(events => console.log(events));

    while(counter < amount) {
      let event = events[counter].link;
      let eventId = event.match(re)[0];
      let eventEndpoint = `${endpoint}/${eventId}/rsvps?${key}&response=yes`;

      var xhr = new XMLHttpRequest();
      xhr.open('POST', eventEndpoint);
      xhr.send(null);
      counter++;
    }

    events.forEach((event) => { 
      let eventId = event.link;
      eventId = event_id.match(re)[0];
      let eventEndpoint = `${endpoint}/${eventId}/rsvps?${key}&response=yes`;

    });  
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