app.controller('PlayerCtrl', function($scope, $rootScope, PlayerFactory){
  // initialize audio player
  var audio = document.createElement('audio');
  audio.addEventListener('ended', function () {
    $scope.next();
  });

  $scope.progress = PlayerFactory.getProgress();

  audio.addEventListener('playing', function () {
    $scope.progress = 100 * audio.currentTime / audio.duration;
    $scope.$digest();
  });

  
  // state variables
  $scope.currentSong = PlayerFactory.getCurrentSong;
  $scope.playing = PlayerFactory.isPlaying;

  
  // main toggle
  // $scope.toggle = function (song) {
    
  //   if ($scope.playing) $rootScope.$broadcast('pause');
  //   else $rootScope.$broadcast('play', song);
  // }

  // incoming events (from Album or toggle)
  $scope.$on('pause', PlayerFactory.pause);
  $scope.$on('play', PlayerFactory.start);

  // PlayerFactory.pause();

  // PlayerFactory.start();

  // functionality
  // function pause () {
  //   audio.pause();
  //   $scope.playing = false;
  // // }

  // function play (event, song){
  //   // stop existing audio (e.g. other song) in any case
  //   pause();
  //   $scope.playing = true;
  //   // resume current song
  //   if (song === $scope.currentSong) return audio.play();
  //   // enable loading new song
  //   $scope.currentSong = song;
  //   audio.src = song.audioUrl;
  //   audio.load();
  //   audio.play();
  // }

  // outgoing events (to Album)
  // $scope.next = function(){ $rootScope.$broadcast('next'); };
  // $scope.prev = function(){ $rootScope.$broadcast('prev'); };
});