/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
/*
var makeBG = function(){
    for (var i = 640; i>=0;i-= 80){
        for (var t = 640; t>=0;t-=80){
            var newDiv = document.createElement('<div id="' + i + '' + t + '"style="width:100px;height:100px;border:1px solid red;position:absolute;left:' + i + 'px;top:' + t + 'px;');
            document.append(newDiv);
        }
    }
}
*/
var createGrid = function(){
    for (var x = 0; x<=900;x+=100){
        for (var y = 0; y<=900;y+=100){
            var id = ('x='+x+'-y='+y)
            var origin = document.getElementById('bg');
            var spot = document.createElement('div');
            origin.appendChild(spot);
            spot.setAttribute('id', id);
            var placement = ("width:100px;height:100px;border:1px solid red;display:inline-block;position:fixed;left:"+x+"px;top:"+y+"px");
            spot.setAttribute('style', placement);
            console.log(id, spot);
        } 
    }
}
var deviceNameButton = $('#deviceNameButton');
var tweetBox = $('#tweetBox');
var viewTweet = $('#tweetButton');
var playAudio = $('#playButton');
var youTubeButton = $('#flickrButton');


var displayFeed = function(){
    tweetBox.empty();
    window.alert("loading last few posts to Flickr tagged with 'Star Wars'");
    var tweetBoxContent = '';
    $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
              {
              tags: "Star Wars",
              tagmode: "any",
              format: "json"
              },
              function(data) {
              $.each(data.items, function(i,item){
                     //var pic = $('<img/>');
                     //pic.attr('src', item.media.m);
                     //pic.appendTo('#tweetBox');
                     drawPicBalloon(item.media.m);
                     });
              });
        }


var displayTweet = function(){
    $('#Max').empty();
    //window.alert("loading last three tweets from the Commentary Track Stars feed");
    var tweetBoxContent = '';
        $.ajax({
        url: "http://search.twitter.com/search.json?q=comtrackstars&rpp=1",
        datatype: 'json',
        success: function(data){
               window.alert('success');
                    for (var i = 0; i <= data.results.length; i++) {
                    //var tweetHTML = '<li class="twit">';
                    var tweetHTML = data.results[i].text;
                    //tweetHTML += '</li>';
                    //tweetBox.append(tweetHTML);
                    //tweetHTML = '';
                    //window.alert('still working?');
               drawSpeechBalloon(tweetHTML, 'speaker');
                    }
               }
           });
    
    //tweetBoxContent += tweetHTML;
    //tweetBox.append(tweetBoxContent);
    
    }
var playSound = function() {
    window.alert('playing background audio, an episode of Commentary Track Stars.');
    // Play the audio file at url
    var audio_media = new Media('http://maxhegel.podbean.com/mf/web/6qvui5/swc3.mp3');
    
    // Play audio
    audio_media.play();
    window.alert('Oh, you waited! You win a "Patiencey" (made up award for patience)');
}

var compassTool = $('#compassButton');
var compassDisplay = function(){
    $('#fg').empty();
    drawSpeechBalloon('displaying compass', 'speaker');
        navigator.compass.getCurrentHeading(Success, Error);
    }
    function Success(heading) {
        var outputForBubble = heading.magneticHeading;
        $('#fg').empty();
        drawSpeechBalloon(outputForBubble, 'speaker');
    }
    function Error(compassError) {
        navigator.notification.alert('' + compassError.code);
    }
var announceDevice = function(){
    drawSpeechBalloon(device.name, 'speaker');
}
deviceNameButton.bind('click', announceDevice);
youTubeButton.bind('click', displayFeed);
compassTool.bind('click', compassDisplay);
playAudio.bind('click', playSound);
viewTweet.bind('click', displayTweet);
var mgSBalloons = $('#mgSBalloons');
var runButton = $('#runButton');
var pauseButton = $('#pause');
$('#pause').css('display', 'none');
var figureOutWindowStuff = function(){
	var width = $(document).width();
	var midPointH = $(document).width();
	var height = $(document).height();
	var midPointV = $(document).height();
	midPointH /= 3;
	midPointV /= 3;
	var ceilingHeight = height;
	ceilingHeight /=10;
	$('#ceiling').css('height', ceilingHeight).css('width', width).css('top', '0px');
	var floorHeight = ceilingHeight;
    var wallHeight = height /= 10;
    wallHeight *= 8;
    floorHeight += 24;
	$('#floor').css('height', floorHeight).css('width', width).css('top', ceilingHeight += wallHeight);
    floorHeight -= 24;
    ceilingHeight -= wallHeight;
	$('#wall').css('height', wallHeight).css('width', width).css('top', ceilingHeight);
	$('#gif').css('top', midPointV).css('left', midPointH+=10);
    var width = $(document).width();
    width /=3;
    var height = $(document).height();
    height /=4;
    $('#Max').css('position', 'fixed').css('top', height).css('left', width);
}

var currentState = {
    playing:'paused',
    iterator:0,
    bubble:1,
    windowAge:1
}

var deleteOffScreenObjects = function(){
    if ((currentState.windowAge >= 200) && (currentState.bubble === 1)) {
        $('#Max').empty();
        displayTweet();
        currentState.windowAge = 0;
        currentState.bubble++;
        return;
    }
    else if ((currentState.windowAge >= 200) && (currentState.bubble === 2)){
        $('#Max').empty();
        compassDisplay();
        currentState.windowAge = 0;
        currentState.bubble++;
        return;
    }
    else if ((currentState.windowAge >= 200) && (currentState.bubble === 3)) {
        $('#Max').empty();
        displayFeed();
        currentState.windowAge = 0;
        currentState.bubble++;
        return;
    }
    else if ((currentState.windowAge >= 200) && (currentState.bubble === 4)) {
        $('#Max').empty();
        announceDevice();
        currentState.windowAge = 0;
        currentState.bubble++;
        return;
    }
}


var makeNewObjects = function(){
    
}


var frameShift = function(){
    deleteOffScreenObjects();
    makeNewObjects();
    //compassDisplay();
    currentState.iterator++;
    console.log(currentState.iterator);
    console.log(currentState.windowAge);
    console.log(currentState.bubble);
    console.log('frameshift running');
    var age = currentState.windowAge;
    if ((age >= 200) && (currentState.bubble >= 5)) {
        console.log('if statement matched');
        currentState.bubble = 0;
        currentState.windowAge = 0;
    }
    currentState.windowAge++;
}
var goDoStuffLoop = function() {
    //setInterval(function(){frameShift()},41.6);
    setInterval(function(){if (currentState.playing === 'playing'){frameShift()}},100)}

//goFunction();

var drawPipes = function(){
	for (var i = 1000; i >=0; i-=10){
		var newXCoords = i;
		newXCoords *= 10;
		var pipe = ('<div></div>');
		pipe = $(pipe);
		pipe.attr('style', 'top:-'+newXCoords + 'px');
		pipe.attr('id', 'pipe');
		bgDetails = $('.bgDetails');
		bgDetails.append(pipe);
    }
}
var drawSpeechBalloon = function(text, speaker){
    $('#Max').empty();
	var balloon = ('<div id="speechBalloon" class="balloon-blue-medium-lower-left">' + text + '</div>');
    $('#Max').append(balloon);
}
var drawPicBalloon = function(url){
    $('#Max').empty();
	var balloon = ('<img id="picBalloon" class="balloon-blue-medium-lower-left" src="' + url + '"></div>');
    $('#Max').append(balloon);
}
//drawSpeechBalloon('I am a speech balloon', 'head');
//drawPipes();
//torso, head, legs1, legs2, legs3
//alert('changing text of speech balloon to width of window');
var textOfBalloon = $(window).width();
//drawSpeechBalloon(textOfBalloon, 'head');
//alert('now the height');
var textOfBalloon = $(window).height();
//drawSpeechBalloon(textOfBalloon, 'head');

var playPause = function(){
	if (currentState.playing === 'playing'){ currentState.playing = 'paused';
        $('#pause').css('display', 'none');} else if (currentState.playing === 'paused') {
            currentState.playing = 'playing';
            $('#pause').css('display', 'block');}
	console.log('loopon');
    playSound();
	goDoStuffLoop();
}

figureOutWindowStuff();
runButton.bind('click', playPause);
pauseButton.bind('click', playPause);


//createGrid();