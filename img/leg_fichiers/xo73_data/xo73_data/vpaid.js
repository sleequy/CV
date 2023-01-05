'use strict';

// https://

/**
 * @fileoverview A sample non linear VPAID ad.  Even though this is designed
 * in a way that it can be compiled by closure it does not make use of the
 * libraries.  This simplifies debugging.
 */

/**
 * A non linear VPAID ad useful for testing functionality of the sdk.
 * @constructor
 */
var VpaidNonLinear = function VpaidNonLinear() {
  /**
  * The slot is the div element on the main page that the ad is supposed to
  * occupy.
  * @private {Object}
  */
  this.slot_ = null;

  this.debug = false;

  /**
  * An object containing all registered events.  These events are all
  * callbacks for use by the vpaid ad.
  * @private {Object}
  */
  this.eventsCallbacks_ = {};

  /**
  * A list of getable and setable attributes.
  * @private {Object}
  */
  this.attributes_ = {
    'companions': '',
    'desiredBitrate': 256,
    'duration': 10,
    'expanded': false,
    'height': 0,
    'icons': false,
    'linear': false,
    'skippableState': false,
    'viewMode': 'normal',
    'width': 0,
    'volume': 50
  };

  /**
  * When the ad was started.
  * @private {number}
  */
  this.startTime_ = 0;

  /**
  * An array of urls pointing to images.
  * @private {!Array.<string>}
  */
  this.imageUrls_ = [];

  /**
  * An array of video urls and mime types.
  * @private {!Array.<!object>}
  */
  this.videos_ = [];
};

/**
 * VPAID defined init ad, initializes all attributes in the ad.  The ad will
 * not start until startAd is called.
 *
 * @param {number} width The ad width.
 * @param {number} height The ad heigth.
 * @param {string} viewMode The ad view mode.
 * @param {number} desiredBitrate The desired bitrate.
 * @param {Object} creativeData Data associated with the creative.
 * @param {Object} environmentVars Variables associated with the creative like
 *     the slot and video slot.
 */
VpaidNonLinear.prototype.initAd = function (width, height, viewMode, desiredBitrate, creativeData, environmentVars, a) {

  // slot and videoSlot are passed as part of the environmentVars
  this.attributes_['width'] = width;
  this.attributes_['height'] = height;
  this.attributes_['viewMode'] = viewMode;
  this.attributes_['desiredBitrate'] = desiredBitrate;
  this.adParameters = JSON.parse(creativeData.AdParameters || "{}");
  this.slot_ = environmentVars.slot;
  this.videoSlot_ = environmentVars.videoSlot;

  this.log('initAd ' + width + 'x' + height + ' ' + viewMode + ' ' + desiredBitrate);

  this.callEvent_('AdLoaded');
};

/**
 * Helper function to update the size of the video player.
 * @private
 */
VpaidNonLinear.prototype.updateVideoPlayerSize_ = function () {
  this.videoSlot_.setAttribute('width', this.attributes_['width']);
  this.videoSlot_.setAttribute('height', this.attributes_['height']);
};

/**
 * Returns the versions of vpaid ad supported.
 * @param {string} version
 * @return {string}
 */
VpaidNonLinear.prototype.handshakeVersion = function (version) {
  return '2.0';
};


/**
 * Starts the ad.
 */
VpaidNonLinear.prototype.startAd = function () {
  var uid = this.adParameters.uid;
  var ownId = this.adParameters.ownId;
  var group = this.adParameters.group;
  var surveyId = this.adParameters.surveyId;
  var invitationId = this.adParameters.invitationId;
  var completetcode = this.adParameters.completetcode;
  var testInvite = this.adParameters.test_invite;

  if (!surveyId) {
    this.log("No survey Id passed in adParameters, stopping survey");
    this.skipAd();
    this.stopAd();
    return;
  }

  var paramTestInvite = '';
  if (!!testInvite) {
    paramTestInvite = '&test_invite=' + testInvite;
  }

  var paramOwnId = '';
  if (!!ownId) {
    paramOwnId = '&oid=' + ownId;
  }

  var iframe = document.createElement('iframe');
  iframe.style.position = 'absolute';
  iframe.style.top = 0;
  iframe.style.left = 0;
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.src = (this.adParameters.surl || "/video-survey/") +
    "?surveyId=" + surveyId +
    "&uid=" + uid +
    "&group=" + group +
    "&invitationId=" + invitationId +
    "&completetcode=" + encodeURIComponent(completetcode) +
    paramTestInvite +
    paramOwnId;
  iframe.frameborder = "no";
  iframe.style.border = "none 0";
  this.slot_.appendChild(iframe);

  window.addEventListener('message', function(message) {
    if (message.data.name === 'userreport.surveyEnded') {
      this.stopAd();
    }
  }.bind(this));

  // To be deprecated
  window.addEventListener('message', function(message) {
    if (message.data.name === 'close') {
      this.stopAd();
    }
  }.bind(this));

  this.callEvent_('AdImpression');
  this.callEvent_('AdStarted');
  this.callEvent_('AdPlaying');
  this.callEvent_('AdVideoStart');
};

/**
 * Stops the ad.
 */
VpaidNonLinear.prototype.stopAd = function () {
  this.log('Stopping ad');
  // Calling AdStopped immediately terminates the ad. Setting a timeout allows
  // events to go through.
  var callback = this.callEvent_.bind(this);
  setTimeout(callback, 75, ['AdStopped']);
};

/**
 * @param {number} value The volume in percentage.
 */
VpaidNonLinear.prototype.setAdVolume = function (value) {
  this.attributes_['volume'] = value;
  this.log('setAdVolume ' + value);
  this.callEvent_('AdVolumeChanged');
};

/**
 * @return {number} The volume of the ad.
 */
VpaidNonLinear.prototype.getAdVolume = function () {
  this.log('getAdVolume');
  return this.attributes_['volume'];
};

/**
 * @param {number} width The new width.
 * @param {number} height A new height.
 * @param {string} viewMode A new view mode.
 */
VpaidNonLinear.prototype.resizeAd = function (width, height, viewMode) {
  this.log('resizeAd ' + width + 'x' + height + ' ' + viewMode);
  this.attributes_['width'] = width;
  this.attributes_['height'] = height;
  this.attributes_['viewMode'] = viewMode;
  this.updateVideoPlayerSize_();
  this.callEvent_('AdSizeChange');
};

/**
 * Pauses the ad.
 */
VpaidNonLinear.prototype.pauseAd = function () {
  this.log('pauseAd');
  this.videoSlot_.pause();
  this.callEvent_('AdPaused');
};

/**
 * Resumes the ad.
 */
VpaidNonLinear.prototype.resumeAd = function () {
  this.log('resumeAd');
  this.videoSlot_.play();
  this.callEvent_('AdResumed');
};

/**
 * Expands the ad.
 */
VpaidNonLinear.prototype.expandAd = function () {
  this.log('expandAd');
  this.attributes_['expanded'] = true;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  }
  this.callEvent_('AdExpanded');
};

/**
 * Returns true if the ad is expanded.
 * @return {boolean}
 */
VpaidNonLinear.prototype.getAdExpanded = function () {
  this.log('getAdExpanded');
  return this.attributes_['expanded'];
};

/**
 * Returns the skippable state of the ad.
 * @return {boolean}
 */
VpaidNonLinear.prototype.getAdSkippableState = function () {
  this.log('getAdSkippableState');
  return this.attributes_['skippableState'];
};

/**
 * Collapses the ad.
 */
VpaidNonLinear.prototype.collapseAd = function () {
  this.log('collapseAd');
  this.attributes_['expanded'] = false;
};

/**
 * Skips the ad.
 */
VpaidNonLinear.prototype.skipAd = function () {
  this.log('skipAd');
  var skippableState = this.attributes_['skippableState'];
  if (skippableState) {
    this.callEvent_('AdSkipped');
  }
};

/**
 * Registers a callback for an event.
 * @param {Function} aCallback The callback function.
 * @param {string} eventName The callback type.
 * @param {Object} aContext The context for the callback.
 */
VpaidNonLinear.prototype.subscribe = function (aCallback, eventName, aContext) {
  this.log('Subscribe ' + eventName);
  var callBack = aCallback.bind(aContext);
  this.eventsCallbacks_[eventName] = callBack;
};

/**
 * Removes a callback based on the eventName.
 *
 * @param {string} eventName The callback type.
 */
VpaidNonLinear.prototype.unsubscribe = function (eventName) {
  this.log('unsubscribe ' + eventName);
  this.eventsCallbacks_[eventName] = null;
};

/**
 * @return {number} The ad width.
 */
VpaidNonLinear.prototype.getAdWidth = function () {
  return this.attributes_['width'];
};

/**
 * @return {number} The ad height.
 */
VpaidNonLinear.prototype.getAdHeight = function () {
  return this.attributes_['height'];
};

/**
 * @return {number} The time remaining in the ad.
 */
VpaidNonLinear.prototype.getAdRemainingTime = function () {
  return 0;
};

/**
 * @return {number} The duration of the ad.
 */
VpaidNonLinear.prototype.getAdDuration = function () {
  return this.attributes_['duration'];
};

/**
 * @return {string} List of companions in vast xml.
 */
VpaidNonLinear.prototype.getAdCompanions = function () {
  return this.attributes_['companions'];
};

/**
 * @return {boolean} A list of icons.
 */
VpaidNonLinear.prototype.getAdIcons = function () {
  return this.attributes_['icons'];
};

/**
 * @return {boolean} True if the ad is a linear, false for non linear.
 */
VpaidNonLinear.prototype.getAdLinear = function () {
  return true;
};

/**
 * Logs events and messages.
 * @param {string} message
 */
VpaidNonLinear.prototype.log = function (message) {
  if (this.debug) {
    console.log(message);
  }
};

/**
 * Calls an event if there is a callback.
 * @param {string} eventType
 * @private
 */
VpaidNonLinear.prototype.callEvent_ = function (eventType) {
  if (eventType in this.eventsCallbacks_) {
    this.eventsCallbacks_[eventType]();
  }
};

/**
 * Main function called by wrapper to get the vpaid ad.
 * @return {Object} The vpaid compliant ad.
 */
var getVPAIDAd = function getVPAIDAd() {
  return new VpaidNonLinear();
};
