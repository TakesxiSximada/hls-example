/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"url-loader!./node_modules/video.js/dist/video-js/font/*\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	__webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(2)();
	// imports


	// module
	exports.push([module.id, "/*!\nVideo.js Default Styles (http://videojs.com)\nVersion 4.12.15\nCreate your own skin at http://designer.videojs.com\n*/\n/* SKIN\n================================================================================\nThe main class name for all skin-specific styles. To make your own skin,\nreplace all occurrences of 'vjs-default-skin' with a new name. Then add your new\nskin name to your video tag instead of the default skin.\ne.g. <video class=\"video-js my-skin-name\">\n*/\n.vjs-default-skin {\n  color: #cccccc;\n}\n/* Custom Icon Font\n--------------------------------------------------------------------------------\nThe control icons are from a custom font. Each icon corresponds to a character\n(e.g. \"\\e001\"). Font icons allow for easy scaling and coloring of icons.\n*/\n@font-face {\n  font-family: 'VideoJS';\n  src: url(" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./font/vjs.eot\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + ");\n  src: url(" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./font/vjs.eot\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./font/vjs.woff\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + ") format('woff'), url(" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./font/vjs.ttf\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + ") format('truetype'), url(" + __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./font/vjs.svg\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())) + "#icomoon) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n/* Base UI Component Classes\n--------------------------------------------------------------------------------\n*/\n/* Slider - used for Volume bar and Seek bar */\n.vjs-default-skin .vjs-slider {\n  /* Replace browser focus highlight with handle highlight */\n  outline: 0;\n  position: relative;\n  cursor: pointer;\n  padding: 0;\n  /* background-color-with-alpha */\n  background-color: #333333;\n  background-color: rgba(51, 51, 51, 0.9);\n}\n.vjs-default-skin .vjs-slider:focus {\n  /* box-shadow */\n  -webkit-box-shadow: 0 0 2em #ffffff;\n  -moz-box-shadow: 0 0 2em #ffffff;\n  box-shadow: 0 0 2em #ffffff;\n}\n.vjs-default-skin .vjs-slider-handle {\n  position: absolute;\n  /* Needed for IE6 */\n  left: 0;\n  top: 0;\n}\n.vjs-default-skin .vjs-slider-handle:before {\n  content: \"\\E009\";\n  font-family: VideoJS;\n  font-size: 1em;\n  line-height: 1;\n  text-align: center;\n  text-shadow: 0em 0em 1em #fff;\n  position: absolute;\n  top: 0;\n  left: 0;\n  /* Rotate the square icon to make a diamond */\n  /* transform */\n  -webkit-transform: rotate(-45deg);\n  -moz-transform: rotate(-45deg);\n  -ms-transform: rotate(-45deg);\n  -o-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n/* Control Bar\n--------------------------------------------------------------------------------\nThe default control bar that is a container for most of the controls.\n*/\n.vjs-default-skin .vjs-control-bar {\n  /* Start hidden */\n  display: none;\n  position: absolute;\n  /* Place control bar at the bottom of the player box/video.\n     If you want more margin below the control bar, add more height. */\n  bottom: 0;\n  /* Use left/right to stretch to 100% width of player div */\n  left: 0;\n  right: 0;\n  /* Height includes any margin you want above or below control items */\n  height: 3.0em;\n  /* background-color-with-alpha */\n  background-color: #07141e;\n  background-color: rgba(7, 20, 30, 0.7);\n}\n/* Show the control bar only once the video has started playing */\n.vjs-default-skin.vjs-has-started .vjs-control-bar {\n  display: block;\n  /* Visibility needed to make sure things hide in older browsers too. */\n\n  visibility: visible;\n  opacity: 1;\n  /* transition */\n  -webkit-transition: visibility 0.1s, opacity 0.1s;\n  -moz-transition: visibility 0.1s, opacity 0.1s;\n  -o-transition: visibility 0.1s, opacity 0.1s;\n  transition: visibility 0.1s, opacity 0.1s;\n}\n/* Hide the control bar when the video is playing and the user is inactive  */\n.vjs-default-skin.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {\n  display: block;\n  visibility: hidden;\n  opacity: 0;\n  /* transition */\n  -webkit-transition: visibility 1s, opacity 1s;\n  -moz-transition: visibility 1s, opacity 1s;\n  -o-transition: visibility 1s, opacity 1s;\n  transition: visibility 1s, opacity 1s;\n}\n.vjs-default-skin.vjs-controls-disabled .vjs-control-bar {\n  display: none;\n}\n.vjs-default-skin.vjs-using-native-controls .vjs-control-bar {\n  display: none;\n}\n/* The control bar shouldn't show after an error */\n.vjs-default-skin.vjs-error .vjs-control-bar {\n  display: none;\n}\n/* Don't hide the control bar if it's audio */\n.vjs-audio.vjs-default-skin.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar {\n  opacity: 1;\n  visibility: visible;\n}\n/* IE8 is flakey with fonts, and you have to change the actual content to force\nfonts to show/hide properly.\n  - \"\\9\" IE8 hack didn't work for this\n  - Found in XP IE8 from http://modern.ie. Does not show up in \"IE8 mode\" in IE9\n*/\n@media \\0screen {\n  .vjs-default-skin.vjs-user-inactive.vjs-playing .vjs-control-bar :before {\n    content: \"\";\n  }\n}\n/* General styles for individual controls. */\n.vjs-default-skin .vjs-control {\n  outline: none;\n  position: relative;\n  float: left;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: 3.0em;\n  width: 4em;\n}\n/* Font button icons */\n.vjs-default-skin .vjs-control:before {\n  font-family: VideoJS;\n  font-size: 1.5em;\n  line-height: 2;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);\n}\n/* Replacement for focus outline */\n.vjs-default-skin .vjs-control:focus:before,\n.vjs-default-skin .vjs-control:hover:before {\n  text-shadow: 0em 0em 1em #ffffff;\n}\n.vjs-default-skin .vjs-control:focus {\n  /*  outline: 0; */\n  /* keyboard-only users cannot see the focus on several of the UI elements when\n  this is set to 0 */\n\n}\n/* Hide control text visually, but have it available for screenreaders */\n.vjs-default-skin .vjs-control-text {\n  /* hide-visually */\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n/* Play/Pause\n--------------------------------------------------------------------------------\n*/\n.vjs-default-skin .vjs-play-control {\n  width: 5em;\n  cursor: pointer;\n}\n.vjs-default-skin .vjs-play-control:before {\n  content: \"\\E001\";\n}\n.vjs-default-skin.vjs-playing .vjs-play-control:before {\n  content: \"\\E002\";\n}\n/* Playback toggle\n--------------------------------------------------------------------------------\n*/\n.vjs-default-skin .vjs-playback-rate .vjs-playback-rate-value {\n  font-size: 1.5em;\n  line-height: 2;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);\n}\n.vjs-default-skin .vjs-playback-rate.vjs-menu-button .vjs-menu .vjs-menu-content {\n  width: 4em;\n  left: -2em;\n  list-style: none;\n}\n/* Volume/Mute\n-------------------------------------------------------------------------------- */\n.vjs-default-skin .vjs-mute-control,\n.vjs-default-skin .vjs-volume-menu-button {\n  cursor: pointer;\n  float: right;\n}\n.vjs-default-skin .vjs-mute-control:before,\n.vjs-default-skin .vjs-volume-menu-button:before {\n  content: \"\\E006\";\n}\n.vjs-default-skin .vjs-mute-control.vjs-vol-0:before,\n.vjs-default-skin .vjs-volume-menu-button.vjs-vol-0:before {\n  content: \"\\E003\";\n}\n.vjs-default-skin .vjs-mute-control.vjs-vol-1:before,\n.vjs-default-skin .vjs-volume-menu-button.vjs-vol-1:before {\n  content: \"\\E004\";\n}\n.vjs-default-skin .vjs-mute-control.vjs-vol-2:before,\n.vjs-default-skin .vjs-volume-menu-button.vjs-vol-2:before {\n  content: \"\\E005\";\n}\n.vjs-default-skin .vjs-volume-control {\n  width: 5em;\n  float: right;\n}\n.vjs-default-skin .vjs-volume-bar {\n  width: 5em;\n  height: 0.6em;\n  margin: 1.1em auto 0;\n}\n.vjs-default-skin .vjs-volume-level {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 0.5em;\n  /* assuming volume starts at 1.0 */\n\n  width: 100%;\n  background: #66a8cc url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAP0lEQVQIHWWMAQoAIAgDR/QJ/Ub//04+w7ZICBwcOg5FZi5iBB82AGzixEglJrd4TVK5XUJpskSTEvpdFzX9AB2pGziSQcvAAAAAAElFTkSuQmCC) -50% 0 repeat;\n}\n.vjs-default-skin .vjs-volume-bar .vjs-volume-handle {\n  width: 0.5em;\n  height: 0.5em;\n  /* Assumes volume starts at 1.0. If you change the size of the\n     handle relative to the volume bar, you'll need to update this value\n     too. */\n\n  left: 4.5em;\n}\n.vjs-default-skin .vjs-volume-handle:before {\n  font-size: 0.9em;\n  top: -0.2em;\n  left: -0.2em;\n  width: 1em;\n  height: 1em;\n}\n/* The volume menu button is like menu buttons (captions/subtitles) but works\n    a little differently. It needs to be possible to tab to the volume slider\n    without hitting space bar on the menu button. To do this we're not using\n    display:none to hide the slider menu by default, and instead setting the\n    width and height to zero. */\n.vjs-default-skin .vjs-volume-menu-button .vjs-menu {\n  display: block;\n  width: 0;\n  height: 0;\n  border-top-color: transparent;\n}\n.vjs-default-skin .vjs-volume-menu-button .vjs-menu .vjs-menu-content {\n  height: 0;\n  width: 0;\n}\n.vjs-default-skin .vjs-volume-menu-button:hover .vjs-menu,\n.vjs-default-skin .vjs-volume-menu-button .vjs-menu.vjs-lock-showing {\n  border-top-color: rgba(7, 40, 50, 0.5);\n  /* Same as ul background */\n\n}\n.vjs-default-skin .vjs-volume-menu-button:hover .vjs-menu .vjs-menu-content,\n.vjs-default-skin .vjs-volume-menu-button .vjs-menu.vjs-lock-showing .vjs-menu-content {\n  height: 2.9em;\n  width: 10em;\n}\n/* Progress\n--------------------------------------------------------------------------------\n*/\n.vjs-default-skin .vjs-progress-control {\n  position: absolute;\n  left: 0;\n  right: 0;\n  width: auto;\n  font-size: 0.3em;\n  height: 1em;\n  /* Set above the rest of the controls. */\n  top: -1em;\n  /* Shrink the bar slower than it grows. */\n  /* transition */\n  -webkit-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  transition: all 0.4s;\n}\n/* On hover, make the progress bar grow to something that's more clickable.\n    This simply changes the overall font for the progress bar, and this\n    updates both the em-based widths and heights, as wells as the icon font */\n.vjs-default-skin:hover .vjs-progress-control {\n  font-size: .9em;\n  /* Even though we're not changing the top/height, we need to include them in\n      the transition so they're handled correctly. */\n\n  /* transition */\n  -webkit-transition: all 0.2s;\n  -moz-transition: all 0.2s;\n  -o-transition: all 0.2s;\n  transition: all 0.2s;\n}\n/* Box containing play and load progresses. Also acts as seek scrubber. */\n.vjs-default-skin .vjs-progress-holder {\n  height: 100%;\n}\n/* Progress Bars */\n.vjs-default-skin .vjs-progress-holder .vjs-play-progress,\n.vjs-default-skin .vjs-progress-holder .vjs-load-progress,\n.vjs-default-skin .vjs-progress-holder .vjs-load-progress div {\n  position: absolute;\n  display: block;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  /* updated by javascript during playback */\n\n  width: 0;\n  /* Needed for IE6 */\n  left: 0;\n  top: 0;\n}\n.vjs-default-skin .vjs-play-progress {\n  /*\n    Using a data URI to create the white diagonal lines with a transparent\n      background. Surprisingly works in IE8.\n      Created using http://www.patternify.com\n    Changing the first color value will change the bar color.\n    Also using a paralax effect to make the lines move backwards.\n      The -50% left position makes that happen.\n  */\n\n  background: #66a8cc url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAP0lEQVQIHWWMAQoAIAgDR/QJ/Ub//04+w7ZICBwcOg5FZi5iBB82AGzixEglJrd4TVK5XUJpskSTEvpdFzX9AB2pGziSQcvAAAAAAElFTkSuQmCC) -50% 0 repeat;\n}\n.vjs-default-skin .vjs-load-progress {\n  background: #646464 /* IE8- Fallback */;\n  background: rgba(255, 255, 255, 0.2);\n}\n/* there are child elements of the load progress bar that represent the\n   specific time ranges that have been buffered */\n.vjs-default-skin .vjs-load-progress div {\n  background: #787878 /* IE8- Fallback */;\n  background: rgba(255, 255, 255, 0.1);\n}\n.vjs-default-skin .vjs-seek-handle {\n  width: 1.5em;\n  height: 100%;\n}\n.vjs-default-skin .vjs-seek-handle:before {\n  padding-top: 0.1em /* Minor adjustment */;\n}\n/* Live Mode\n--------------------------------------------------------------------------------\n*/\n.vjs-default-skin.vjs-live .vjs-time-controls,\n.vjs-default-skin.vjs-live .vjs-time-divider,\n.vjs-default-skin.vjs-live .vjs-progress-control {\n  display: none;\n}\n.vjs-default-skin.vjs-live .vjs-live-display {\n  display: block;\n}\n/* Live Display\n--------------------------------------------------------------------------------\n*/\n.vjs-default-skin .vjs-live-display {\n  display: none;\n  font-size: 1em;\n  line-height: 3em;\n}\n/* Time Display\n--------------------------------------------------------------------------------\n*/\n.vjs-default-skin .vjs-time-controls {\n  font-size: 1em;\n  /* Align vertically by making the line height the same as the control bar */\n  line-height: 3em;\n}\n.vjs-default-skin .vjs-current-time {\n  float: left;\n}\n.vjs-default-skin .vjs-duration {\n  float: left;\n}\n/* Remaining time is in the HTML, but not included in default design */\n.vjs-default-skin .vjs-remaining-time {\n  display: none;\n  float: left;\n}\n.vjs-time-divider {\n  float: left;\n  line-height: 3em;\n}\n/* Fullscreen\n--------------------------------------------------------------------------------\n*/\n.vjs-default-skin .vjs-fullscreen-control {\n  width: 3.8em;\n  cursor: pointer;\n  float: right;\n}\n.vjs-default-skin .vjs-fullscreen-control:before {\n  content: \"\\E000\";\n}\n/* Switch to the exit icon when the player is in fullscreen */\n.vjs-default-skin.vjs-fullscreen .vjs-fullscreen-control:before {\n  content: \"\\E00B\";\n}\n/* Big Play Button (play button at start)\n--------------------------------------------------------------------------------\nPositioning of the play button in the center or other corners can be done more\neasily in the skin designer. http://designer.videojs.com/\n*/\n.vjs-default-skin .vjs-big-play-button {\n  left: 0.5em;\n  top: 0.5em;\n  font-size: 3em;\n  display: block;\n  z-index: 2;\n  position: absolute;\n  width: 4em;\n  height: 2.6em;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  opacity: 1;\n  /* Need a slightly gray bg so it can be seen on black backgrounds */\n  /* background-color-with-alpha */\n  background-color: #07141e;\n  background-color: rgba(7, 20, 30, 0.7);\n  border: 0.1em solid #3b4249;\n  /* border-radius */\n  -webkit-border-radius: 0.8em;\n  -moz-border-radius: 0.8em;\n  border-radius: 0.8em;\n  /* box-shadow */\n  -webkit-box-shadow: 0px 0px 1em rgba(255, 255, 255, 0.25);\n  -moz-box-shadow: 0px 0px 1em rgba(255, 255, 255, 0.25);\n  box-shadow: 0px 0px 1em rgba(255, 255, 255, 0.25);\n  /* transition */\n  -webkit-transition: all 0.4s;\n  -moz-transition: all 0.4s;\n  -o-transition: all 0.4s;\n  transition: all 0.4s;\n}\n/* Optionally center */\n.vjs-default-skin.vjs-big-play-centered .vjs-big-play-button {\n  /* Center it horizontally */\n  left: 50%;\n  margin-left: -2.1em;\n  /* Center it vertically */\n  top: 50%;\n  margin-top: -1.4000000000000001em;\n}\n/* Hide if controls are disabled */\n.vjs-default-skin.vjs-controls-disabled .vjs-big-play-button {\n  display: none;\n}\n/* Hide when video starts playing */\n.vjs-default-skin.vjs-has-started .vjs-big-play-button {\n  display: none;\n}\n/* Hide on mobile devices. Remove when we stop using native controls\n    by default on mobile  */\n.vjs-default-skin.vjs-using-native-controls .vjs-big-play-button {\n  display: none;\n}\n.vjs-default-skin:hover .vjs-big-play-button,\n.vjs-default-skin .vjs-big-play-button:focus {\n  outline: 0;\n  border-color: #fff;\n  /* IE8 needs a non-glow hover state */\n  background-color: #505050;\n  background-color: rgba(50, 50, 50, 0.75);\n  /* box-shadow */\n  -webkit-box-shadow: 0 0 3em #ffffff;\n  -moz-box-shadow: 0 0 3em #ffffff;\n  box-shadow: 0 0 3em #ffffff;\n  /* transition */\n  -webkit-transition: all 0s;\n  -moz-transition: all 0s;\n  -o-transition: all 0s;\n  transition: all 0s;\n}\n.vjs-default-skin .vjs-big-play-button:before {\n  content: \"\\E001\";\n  font-family: VideoJS;\n  /* In order to center the play icon vertically we need to set the line height\n     to the same as the button height */\n\n  line-height: 2.6em;\n  text-shadow: 0.05em 0.05em 0.1em #000;\n  text-align: center /* Needed for IE8 */;\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.vjs-error .vjs-big-play-button {\n  display: none;\n}\n/* Error Display\n--------------------------------------------------------------------------------\n*/\n.vjs-error-display {\n  display: none;\n}\n.vjs-error .vjs-error-display {\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n.vjs-error .vjs-error-display:before {\n  content: 'X';\n  font-family: Arial;\n  font-size: 4em;\n  color: #666666;\n  /* In order to center the play icon vertically we need to set the line height\n     to the same as the button height */\n\n  line-height: 1;\n  text-shadow: 0.05em 0.05em 0.1em #000;\n  text-align: center /* Needed for IE8 */;\n  vertical-align: middle;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  margin-top: -0.5em;\n  width: 100%;\n}\n.vjs-error-display div {\n  position: absolute;\n  bottom: 1em;\n  right: 0;\n  left: 0;\n  font-size: 1.4em;\n  text-align: center;\n  padding: 3px;\n  background: #000000;\n  background: rgba(0, 0, 0, 0.5);\n}\n.vjs-error-display a,\n.vjs-error-display a:visited {\n  color: #F4A460;\n}\n/* Loading Spinner\n--------------------------------------------------------------------------------\n*/\n.vjs-loading-spinner {\n  /* Should be hidden by default */\n  display: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  font-size: 4em;\n  line-height: 1;\n  width: 1em;\n  height: 1em;\n  margin-left: -0.5em;\n  margin-top: -0.5em;\n  opacity: 0.75;\n}\n/* Show the spinner when waiting for data and seeking to a new time */\n.vjs-waiting .vjs-loading-spinner,\n.vjs-seeking .vjs-loading-spinner {\n  display: block;\n  /* only animate when showing because it can be processor heavy */\n  /* animation */\n  -webkit-animation: spin 1.5s infinite linear;\n  -moz-animation: spin 1.5s infinite linear;\n  -o-animation: spin 1.5s infinite linear;\n  animation: spin 1.5s infinite linear;\n}\n/* Errors are unrecoverable without user interaction so hide the spinner */\n.vjs-error .vjs-loading-spinner {\n  display: none;\n  /* ensure animation doesn't continue while hidden */\n  /* animation */\n  -webkit-animation: none;\n  -moz-animation: none;\n  -o-animation: none;\n  animation: none;\n}\n.vjs-default-skin .vjs-loading-spinner:before {\n  content: \"\\E01E\";\n  font-family: VideoJS;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1em;\n  height: 1em;\n  text-align: center;\n  text-shadow: 0em 0em 0.1em #000;\n}\n@-moz-keyframes spin {\n  0% {\n    -moz-transform: rotate(0deg);\n  }\n  100% {\n    -moz-transform: rotate(359deg);\n  }\n}\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n  }\n}\n@-o-keyframes spin {\n  0% {\n    -o-transform: rotate(0deg);\n  }\n  100% {\n    -o-transform: rotate(359deg);\n  }\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(359deg);\n  }\n}\n/* Menu Buttons (Captions/Subtitles/etc.)\n--------------------------------------------------------------------------------\n*/\n.vjs-default-skin .vjs-menu-button {\n  float: right;\n  cursor: pointer;\n}\n.vjs-default-skin .vjs-menu {\n  display: none;\n  position: absolute;\n  bottom: 0;\n  left: 0em;\n  /* (Width of vjs-menu - width of button) / 2 */\n\n  width: 0em;\n  height: 0em;\n  margin-bottom: 3em;\n  border-left: 2em solid transparent;\n  border-right: 2em solid transparent;\n  border-top: 1.55em solid #000000;\n  /* Same width top as ul bottom */\n\n  border-top-color: rgba(7, 40, 50, 0.5);\n  /* Same as ul background */\n\n}\n/* Button Pop-up Menu */\n.vjs-default-skin .vjs-menu-button .vjs-menu .vjs-menu-content {\n  display: block;\n  padding: 0;\n  margin: 0;\n  position: absolute;\n  width: 10em;\n  bottom: 1.5em;\n  /* Same bottom as vjs-menu border-top */\n\n  max-height: 15em;\n  overflow: auto;\n  left: -5em;\n  /* Width of menu - width of button / 2 */\n\n  /* background-color-with-alpha */\n  background-color: #07141e;\n  background-color: rgba(7, 20, 30, 0.7);\n  /* box-shadow */\n  -webkit-box-shadow: -0.2em -0.2em 0.3em rgba(255, 255, 255, 0.2);\n  -moz-box-shadow: -0.2em -0.2em 0.3em rgba(255, 255, 255, 0.2);\n  box-shadow: -0.2em -0.2em 0.3em rgba(255, 255, 255, 0.2);\n}\n.vjs-default-skin .vjs-menu-button:hover .vjs-control-content .vjs-menu,\n.vjs-default-skin .vjs-control-content .vjs-menu.vjs-lock-showing {\n  display: block;\n}\n/* prevent menus from opening while scrubbing (FF, IE) */\n.vjs-default-skin.vjs-scrubbing .vjs-menu-button:hover .vjs-control-content .vjs-menu {\n  display: none;\n}\n.vjs-default-skin .vjs-menu-button ul li {\n  list-style: none;\n  margin: 0;\n  padding: 0.3em 0 0.3em 0;\n  line-height: 1.4em;\n  font-size: 1.2em;\n  text-align: center;\n  text-transform: lowercase;\n}\n.vjs-default-skin .vjs-menu-button ul li.vjs-selected {\n  background-color: #000;\n}\n.vjs-default-skin .vjs-menu-button ul li:focus,\n.vjs-default-skin .vjs-menu-button ul li:hover,\n.vjs-default-skin .vjs-menu-button ul li.vjs-selected:focus,\n.vjs-default-skin .vjs-menu-button ul li.vjs-selected:hover {\n  outline: 0;\n  color: #111;\n  /* background-color-with-alpha */\n  background-color: #ffffff;\n  background-color: rgba(255, 255, 255, 0.75);\n  /* box-shadow */\n  -webkit-box-shadow: 0 0 1em #ffffff;\n  -moz-box-shadow: 0 0 1em #ffffff;\n  box-shadow: 0 0 1em #ffffff;\n}\n.vjs-default-skin .vjs-menu-button ul li.vjs-menu-title {\n  text-align: center;\n  text-transform: uppercase;\n  font-size: 1em;\n  line-height: 2em;\n  padding: 0;\n  margin: 0 0 0.3em 0;\n  font-weight: bold;\n  cursor: default;\n}\n/* Subtitles Button */\n.vjs-default-skin .vjs-subtitles-button:before {\n  content: \"\\E00C\";\n}\n/* Captions Button */\n.vjs-default-skin .vjs-captions-button:before {\n  content: \"\\E008\";\n}\n/* Chapters Button */\n.vjs-default-skin .vjs-chapters-button:before {\n  content: \"\\E00C\";\n}\n.vjs-default-skin .vjs-chapters-button.vjs-menu-button .vjs-menu .vjs-menu-content {\n  width: 24em;\n  left: -12em;\n}\n/* Replacement for focus outline */\n.vjs-default-skin .vjs-captions-button:focus .vjs-control-content:before,\n.vjs-default-skin .vjs-captions-button:hover .vjs-control-content:before {\n  /* box-shadow */\n  -webkit-box-shadow: 0 0 1em #ffffff;\n  -moz-box-shadow: 0 0 1em #ffffff;\n  box-shadow: 0 0 1em #ffffff;\n}\n/*\nREQUIRED STYLES (be careful overriding)\n================================================================================\nWhen loading the player, the video tag is replaced with a DIV,\nthat will hold the video tag or object tag for other playback methods.\nThe div contains the video playback element (Flash or HTML5) and controls,\nand sets the width and height of the video.\n\n** If you want to add some kind of border/padding (e.g. a frame), or special\npositioning, use another containing element. Otherwise you risk messing up\ncontrol positioning and full window mode. **\n*/\n.video-js {\n  background-color: #000;\n  position: relative;\n  padding: 0;\n  /* Start with 10px for base font size so other dimensions can be em based and\n     easily calculable. */\n\n  font-size: 10px;\n  /* Allow poster to be vertically aligned. */\n\n  vertical-align: middle;\n  /*  display: table-cell; */\n  /*This works in Safari but not Firefox.*/\n\n  /* Provide some basic defaults for fonts */\n\n  font-weight: normal;\n  font-style: normal;\n  /* Avoiding helvetica: issue #376 */\n\n  font-family: Arial, sans-serif;\n  /* Turn off user selection (text highlighting) by default.\n     The majority of player components will not be text blocks.\n     Text areas will need to turn user selection back on. */\n\n  /* user-select */\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n/* Playback technology elements expand to the width/height of the containing div\n    <video> or <object> */\n.video-js .vjs-tech {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n/* Fix for Firefox 9 fullscreen (only if it is enabled). Not needed when\n   checking fullScreenEnabled. */\n.video-js:-moz-full-screen {\n  position: absolute;\n}\n/* Fullscreen Styles */\nbody.vjs-full-window {\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  /* Fix for IE6 full-window. http://www.cssplay.co.uk/layouts/fixed.html */\n  overflow-y: auto;\n}\n.video-js.vjs-fullscreen {\n  position: fixed;\n  overflow: hidden;\n  z-index: 1000;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 100% !important;\n  height: 100% !important;\n  /* IE6 full-window (underscore hack) */\n  _position: absolute;\n}\n.video-js:-webkit-full-screen {\n  width: 100% !important;\n  height: 100% !important;\n}\n.video-js.vjs-fullscreen.vjs-user-inactive {\n  cursor: none;\n}\n/* Poster Styles */\n.vjs-poster {\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  background-size: contain;\n  background-color: #000000;\n  cursor: pointer;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.vjs-poster img {\n  display: block;\n  margin: 0 auto;\n  max-height: 100%;\n  padding: 0;\n  width: 100%;\n}\n/* Hide the poster after the video has started playing */\n.video-js.vjs-has-started .vjs-poster {\n  display: none;\n}\n/* Don't hide the poster if we're playing audio */\n.video-js.vjs-audio.vjs-has-started .vjs-poster {\n  display: block;\n}\n/* Hide the poster when controls are disabled because it's clickable\n    and the native poster can take over */\n.video-js.vjs-controls-disabled .vjs-poster {\n  display: none;\n}\n/* Hide the poster when native controls are used otherwise it covers them */\n.video-js.vjs-using-native-controls .vjs-poster {\n  display: none;\n}\n/* Text Track Styles */\n/* Overall track holder for both captions and subtitles */\n.video-js .vjs-text-track-display {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 3em;\n  right: 0;\n  pointer-events: none;\n}\n/* Captions Settings Dialog */\n.vjs-caption-settings {\n  position: relative;\n  top: 1em;\n  background-color: #000;\n  opacity: 0.75;\n  color: #FFF;\n  margin: 0 auto;\n  padding: 0.5em;\n  height: 15em;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 12px;\n  width: 40em;\n}\n.vjs-caption-settings .vjs-tracksettings {\n  top: 0;\n  bottom: 2em;\n  left: 0;\n  right: 0;\n  position: absolute;\n  overflow: auto;\n}\n.vjs-caption-settings .vjs-tracksettings-colors,\n.vjs-caption-settings .vjs-tracksettings-font {\n  float: left;\n}\n.vjs-caption-settings .vjs-tracksettings-colors:after,\n.vjs-caption-settings .vjs-tracksettings-font:after,\n.vjs-caption-settings .vjs-tracksettings-controls:after {\n  clear: both;\n}\n.vjs-caption-settings .vjs-tracksettings-controls {\n  position: absolute;\n  bottom: 1em;\n  right: 1em;\n}\n.vjs-caption-settings .vjs-tracksetting {\n  margin: 5px;\n  padding: 3px;\n  min-height: 40px;\n}\n.vjs-caption-settings .vjs-tracksetting label {\n  display: block;\n  width: 100px;\n  margin-bottom: 5px;\n}\n.vjs-caption-settings .vjs-tracksetting span {\n  display: inline;\n  margin-left: 5px;\n}\n.vjs-caption-settings .vjs-tracksetting > div {\n  margin-bottom: 5px;\n  min-height: 20px;\n}\n.vjs-caption-settings .vjs-tracksetting > div:last-child {\n  margin-bottom: 0;\n  padding-bottom: 0;\n  min-height: 0;\n}\n.vjs-caption-settings label > input {\n  margin-right: 10px;\n}\n.vjs-caption-settings input[type=\"button\"] {\n  width: 40px;\n  height: 40px;\n}\n/* Hide disabled or unsupported controls */\n.vjs-hidden {\n  display: none !important;\n}\n.vjs-lock-showing {\n  display: block !important;\n  opacity: 1;\n  visibility: visible;\n}\n/*  In IE8 w/ no JavaScript (no HTML5 shim), the video tag doesn't register.\n    The .video-js classname on the video tag also isn't considered.\n    This optional paragraph inside the video tag can provide a message to users\n    about what's required to play video. */\n.vjs-no-js {\n  padding: 2em;\n  color: #ccc;\n  background-color: #333;\n  font-size: 1.8em;\n  font-family: Arial, sans-serif;\n  text-align: center;\n  width: 30em;\n  height: 15em;\n  margin: 0 auto;\n}\n.vjs-no-js a,\n.vjs-no-js a:visited {\n  color: #F4A460;\n}\n/* -----------------------------------------------------------------------------\nThe original source of this file lives at\nhttps://github.com/videojs/video.js/blob/master/src/css/video-js.less */\n", ""]);

	// exports


/***/ },
/* 2 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }
/******/ ]);