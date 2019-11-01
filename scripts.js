function registration() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmation = document.getElementById('confirmation').value;
    // var password = document.forms["RegForm"]["Password"];
    // var confirmation = document.forms[ "RegForm"]["Confirmation"];

    // value = "ahahahaahh";
    if (username == "") {
        window.alert("Please enter your username.");
        name.focus();
        return false;
    }
    if (password == "") {
        window.alert("Please enter your password");
        password.focus();
        return false;
    }
    if (confirmation == "") {
        window.alert("Please confirm your password");
        password.focus();
        return false;
    }
    return true;
}

function signin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username == "") {
        window.alert("Please enter your username.");
        name.focus();
        return false;
    }
    if (password == "") {
        window.alert("Please enter your password");
        password.focus();
        return false;
    }
    return true;
}


// var map, currentlocationWindow, locations, marker;

function initMap() {

    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 43.258551,
            lng: -79.918679
        },
        zoom: 14
    });

    // This is HTML5 geolocation.
    currentlocationWindow = new google.maps.InfoWindow;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            currentlocationWindow.setPosition(pos);
            currentlocationWindow.setContent('You are here.');
            currentlocationWindow.open(map);
            map.setCenter(pos);
        }, function () {
            handleLocationError(true, currentlocationWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, currentlocationWindow, map.getCenter());
    };

    var locations = [
        ['Steel City Billiards', 43.252641, -79.938498, 4],
    ];
    var marker, i;
    var contentString = 'haha';
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 200
    });
    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            animation: google.maps.Animation.DROP,
            // label: labels[i % labels.length]

        });

        // marker.addListener('click', function() {
        //     infowindow.open(map, marker);
        // });



        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));


    };

}

// var map, currentlocationWindow, locations, marker;

function initMapView() {

    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 43.258551,
            lng: -79.918679
        },
        zoom: 11
    });

    // This is HTML5 geolocation.
    currentlocationWindow = new google.maps.InfoWindow;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            currentlocationWindow.setPosition(pos);
            currentlocationWindow.setContent('You are here.');
            currentlocationWindow.open(map);
            map.setCenter(pos);
        }, function () {
            handleLocationError(true, currentlocationWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, currentlocationWindow, map.getCenter());
    };


    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Steel City Billiards</h1>' +
        '<div id="bodyContent">' +
        '<p>This is the best billiards pool hall in the city, you will not regret to play pool here, but please notice: they do not provide pool cue, you have to bring your own one! <a href="sample_1object_page.html">' +
        '/sample_1object_page.html/' +
        '</div>' +
        '</div>';

    var locations = [
        ['Steel City Billiards', 43.252641, -79.938498, 4],
        ['Boulevard Billiards', 43.262850, -79.877766, 5],
        ['Mighty Mikes Pub & Billiards', 43.254065, -79.866031, 3],
        ['End Pocket The', 43.223680, -79.884430, 2],
        ['Krooked Q Billiards', 43.254523, -79.827387, 1]
    ];
    var marker, i;


    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            animation: google.maps.Animation.DROP,
            // label: labels[i % labels.length]

        });

        // marker.addListener('click', function() {
        //     infowindow.open(map, marker);
        // });



        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                if (i == 0) {
                    var infowindowForMark = new google.maps.InfoWindow();
                    infowindowForMark.setContent(contentString);
                    // infowindow.setContent.contentString(locations = ['Steel City Billiards', 43.252641, -79.938498, 4]);
                    infowindowForMark.open(map, marker);
                    // ? ? inforwindow.setContent.contentString(locations[4]);
                    // infowindow.setContent(location[0]);
                }

                else {
                    var infowindowForMark = new google.maps.InfoWindow();
                    infowindowForMark.setContent(locations[i][0]);
                    // infowindow.setContent.contentString(locations = ['Steel City Billiards', 43.252641, -79.938498, 4]);
                    infowindowForMark.open(map, marker);
                }
            }
        })(marker, i));
        // google.maps.event.addListener(marker, 'click', (function(marker) {
        //     return function() {
        //         infowindow.setContent.contentString(locations = ['Steel City Billiards', 43.252641, -79.938498, 4]);
        //         infowindow.open(map, marker);
        //         // infowindow.setContent(location[0]);
        //     }
        // })(marker));




    };
    var infowindow = new google.maps.InfoWindow();
}

function handleLocationError(browserHasGeolocation, currentlocationWindow, pos) {
    currentlocationWindow.setPosition(pos);
    currentlocationWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    currentlocationWindow.open(map);
}

function getLocation(x, y) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.value = position.coords.latitude;
    y.value = position.coords.longitude;
}
