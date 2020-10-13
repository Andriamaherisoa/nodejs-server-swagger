'use strict';

var utils = require('../utils/writer.js');
var Questionanswer = require('../service/QuestionanswerService');

module.exports.addAdvertisementQuestionAnswer = function addAdvertisementQuestionAnswer (req, res, next) {
  var body = req.swagger.params['body'].value;
  var advertisementId = req.swagger.params['advertisementId'].value;
  var questionId = req.swagger.params['questionId'].value;
  Questionanswer.addAdvertisementQuestionAnswer(body,advertisementId,questionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAdvertisementQuestionAnswerById = function deleteAdvertisementQuestionAnswerById (req, res, next) {
  var advertisementId = req.swagger.params['advertisementId'].value;
  var questionId = req.swagger.params['questionId'].value;
  var answerId = req.swagger.params['answerId'].value;
  Questionanswer.deleteAdvertisementQuestionAnswerById(advertisementId,questionId,answerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAdvertisementQuestionById = function deleteAdvertisementQuestionById (req, res, next) {
  var advertisementId = req.swagger.params['advertisementId'].value;
  var questionId = req.swagger.params['questionId'].value;
  Questionanswer.deleteAdvertisementQuestionById(advertisementId,questionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAdvertisementQuestionAnswerById = function getAdvertisementQuestionAnswerById (req, res, next) {
  var advertisementId = req.swagger.params['advertisementId'].value;
  var questionId = req.swagger.params['questionId'].value;
  var answerId = req.swagger.params['answerId'].value;
  Questionanswer.getAdvertisementQuestionAnswerById(advertisementId,questionId,answerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAdvertisementQuestionById = function getAdvertisementQuestionById (req, res, next) {
  var advertisementId = req.swagger.params['advertisementId'].value;
  var questionId = req.swagger.params['questionId'].value;
  Questionanswer.getAdvertisementQuestionById(advertisementId,questionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAdvertisementQuestions = function getAdvertisementQuestions (req, res, next) {
  var advertisementId = req.swagger.params['advertisementId'].value;
  Questionanswer.getAdvertisementQuestions(advertisementId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAdvertisementQuestionAnswer = function updateAdvertisementQuestionAnswer (req, res, next) {
  var body = req.swagger.params['body'].value;
  var advertisementId = req.swagger.params['advertisementId'].value;
  var questionId = req.swagger.params['questionId'].value;
  Questionanswer.updateAdvertisementQuestionAnswer(body,advertisementId,questionId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAdvertisementQuestionById = function updateAdvertisementQuestionById (req, res, next) {
  var advertisementId = req.swagger.params['advertisementId'].value;
  Questionanswer.updateAdvertisementQuestionById(advertisementId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
