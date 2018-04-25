/*$('#kitten').onclick(function(e){
    $('#kitten').fadeOut('slow', function(){
        $('post1').fadeIn('slow');
    });
});*/

function initMap() {
  var Birmingham = {lat: 52.28534, lng: -1.51459};
  var Hednesford = {lat: 52.709210, lng: -1.975498};
  var Skegness = {lat: 53.186445, lng: 0.282941};
  var Northampton = {lat: 52.197893, lng: -0.802966};
  var Buxton = {lat: 53.220790, lng: -1.916351};
  var Sheffield = {lat: 53.406138, lng: -1.492449};
  var KingsLynn = {lat: 52.730154, lng: 0.389113};
  var BelleVue = {lat: 53.461584, lng: -2.184686};
  var Venray = {lat: 51.521916, lng: 5.876433};
  var Cowdenbeath = {lat: 56.109369, lng: -3.347174};
  var Lochgelly = {lat:56.126877, lng: -3.281659};
  var Ipswich = {lat: 52.055460, lng: 1.224604};
  var Stoke = {lat: 53.031607, lng: -2.258181};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: Birmingham
  });
  var contentString1 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Birmingham</h1>'+
    '<div id="bodyContent">' +
      '<p><b>Birmingham Wheels</b>, With its wide turns and long, fast straights the track is widely ' +
      'regarded as one of the finest for Banger and Stock Car action around today, ' +
      'and every meeting features a buzzing and friendly atmosphere no matter what ' +
      'the formulas.</p>' +

     '<p>Birmingham Wheels Raceway is located just off Landor Street in the Bordesley Green ' +
      'area close to Birmingham City FC, and is easily accessible from the M6 and A38. ' +
      'Duddeston and Adderley Park railway stations are also close by. The track features ' +
      'terracing with great viewing on the home straight and both turns, plus catering ' +
      'facilities and various other trade stands.</p>'+
      '<p><a href="http://www.spedeworth.co.uk/incarace/venue.php?name=Birmingham">Attribution: Birmingham Wheels Raceway</a> '+
      '(last visited April 18, 2018).</p>'+
    '</div>'+
  '</div>';

  var infowindow1 = new google.maps.InfoWindow({
      content: contentString1,
  });
  var marker1 = new google.maps.Marker({
    position: Birmingham,
    map: map,
    title: 'Birmingham Wheels Raceway'
  });
  marker1.addListener('click', function() {
    infowindow1.open(map, marker1);
  });

  var contentString2 = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Hednesford</h1>'+
    '<div id="bodyContent">' +
      '<p><b>Hednesford Hills Raceway</b>, has over 50 years of motorsport history and is the '+
      'fastest quarter-mile oval in Europe, with the speeds many cars achieve around its '+
      ' fearsome steeply banked turns really having to be seen to be believed!'+

      'The track is situated high on Cannock Chase just one mile from the town of Hednesford '+
      ' in Staffordshire, and is easily accessible from the M6, M6 Toll and A5.' +

      '<p><a href="http://www.spedeworth.co.uk/incarace/venue.php?name=Hednesford">Attribution: Hednesford Hills Raceway</a> '+
      '(last visited April 18, 2018).</p>'+
    '</div>'+
  '</div>';

  var infowindow2 = new google.maps.InfoWindow({
    content: contentString2
  });

  var marker2 = new google.maps.Marker({
    position: Hednesford,
    map: map,
    title: 'Hednesford Hills Raceway'
  });
  marker2.addListener('click', function() {
    infowindow2.open(map, marker2);
  });

  var marker3 = new google.maps.Marker({
    position: Skegness,
    map: map
  });
  var marker4 = new google.maps.Marker({
    position: Northampton,
    map: map
  });
  var marker5 = new google.maps.Marker({
    position: Buxton,
    map: map
  });
  var marker6 = new google.maps.Marker({
    position: Sheffield,
    map: map
  });
  var marker7 = new google.maps.Marker({
    position: KingsLynn,
    map: map
  });
  var marker8 = new google.maps.Marker({
    position: BelleVue,
    map: map
  });
  var marker9 = new google.maps.Marker({
    position: Venray,
    map: map
  });
  var marker10 = new google.maps.Marker({
    position: Cowdenbeath,
    map: map
  });
  var marker11 = new google.maps.Marker({
    position: Lochgelly,
    map: map
  });
  var marker12 = new google.maps.Marker({
    position: Ipswich,
    map: map
  });
  var marker13 = new google.maps.Marker({
    position: Stoke,
    map: map
  });
};
