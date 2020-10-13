'use strict';

var utils = require('../utils/writer.js');
var Advertisement = require('../service/AdvertisementService');

module.exports.addAdvertisement = function addAdvertisement (req, res, next) {
  var body = req.swagger.params['body'].value;
  Advertisement.addAdvertisement(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAdvertisement = function deleteAdvertisement (req, res, next) {
  var advertisementId = req.swagger.params['advertisementId'].value;
  var api_key = req.swagger.params['api_key'].value;
  Advertisement.deleteAdvertisement(advertisementId,api_key)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findAdvertisementsByStatus = function findAdvertisementsByStatus (req, res, next) {
  var status = req.swagger.params['status'].value;
  Advertisement.findAdvertisementsByStatus(status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAdvertisementById = function getAdvertisementById (req, res, next) {
  var advertisementId = req.swagger.params['advertisementId'].value;
  Advertisement.getAdvertisementById(advertisementId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAdvertisement = function updateAdvertisement (req, res, next) {
  var body = req.swagger.params['body'].value;
  Advertisement.updateAdvertisement(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAdvertisementWithForm = function updateAdvertisementWithForm (req, res, next) {
  var advertisementId = req.swagger.params['advertisementId'].value;
  var name = req.swagger.params['name'].value;
  var status = req.swagger.params['status'].value;
  Advertisement.updateAdvertisementWithForm(advertisementId,name,status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.uploadFile = function uploadFile (req, res, next) {
  var advertisementId = req.swagger.params['advertisementId'].value;
  var additionalMetadata = req.swagger.params['additionalMetadata'].value;
  var file = req.swagger.params['file'].value;
  Advertisement.uploadFile(advertisementId,additionalMetadata,file)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
