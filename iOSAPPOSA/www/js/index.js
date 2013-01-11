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


//createGrid();