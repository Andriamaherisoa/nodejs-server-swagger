'use strict';


/**
 * Add a new answer to a question
 * 
 *
 * body Answer Answer object that needs to be added to the question answers's attribute
 * advertisementId Long Advertisement's Id
 * questionId Long Advertisement question's Id
 * no response value expected for this operation
 **/
exports.addAdvertisementQuestionAnswer = function(body,advertisementId,questionId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete advertisement's question by Id
 * Returns a Question
 *
 * advertisementId Long ID of advertisement
 * questionId Long ID of question
 * answerId Long ID of answerId
 * returns Question
 **/
exports.deleteAdvertisementQuestionAnswerById = function(advertisementId,questionId,answerId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "answers" : [ {
    "id" : 5,
    "text" : "text"
  }, {
    "id" : 5,
    "text" : "text"
  } ],
  "id" : 1,
  "text" : "text"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete advertisement's question by Id
 * Returns a Question
 *
 * advertisementId Long ID of advertisement
 * questionId Long ID of question
 * returns Question
 **/
exports.deleteAdvertisementQuestionById = function(advertisementId,questionId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "answers" : [ {
    "id" : 5,
    "text" : "text"
  }, {
    "id" : 5,
    "text" : "text"
  } ],
  "id" : 1,
  "text" : "text"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find advertisement's question by Id
 * Returns a Question
 *
 * advertisementId Long ID of advertisement
 * questionId Long ID of question
 * answerId Long ID of answerId
 * returns Question
 **/
exports.getAdvertisementQuestionAnswerById = function(advertisementId,questionId,answerId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "answers" : [ {
    "id" : 5,
    "text" : "text"
  }, {
    "id" : 5,
    "text" : "text"
  } ],
  "id" : 1,
  "text" : "text"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find advertisement's question by Id
 * Returns a Question
 *
 * advertisementId Long ID of advertisement
 * questionId Long ID of question
 * returns Question
 **/
exports.getAdvertisementQuestionById = function(advertisementId,questionId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "answers" : [ {
    "id" : 5,
    "text" : "text"
  }, {
    "id" : 5,
    "text" : "text"
  } ],
  "id" : 1,
  "text" : "text"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find all advertisement questions
 * Returns an array of Question
 *
 * advertisementId Long ID of advertisement
 * returns Advertisement
 **/
exports.getAdvertisementQuestions = function(advertisementId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "photoUrls" : [ "photoUrls", "photoUrls" ],
  "price" : 6.02745618307040320615897144307382404804229736328125,
  "questions" : [ {
    "answers" : [ {
      "id" : 5,
      "text" : "text"
    }, {
      "id" : 5,
      "text" : "text"
    } ],
    "id" : 1,
    "text" : "text"
  }, {
    "answers" : [ {
      "id" : 5,
      "text" : "text"
    }, {
      "id" : 5,
      "text" : "text"
    } ],
    "id" : 1,
    "text" : "text"
  } ],
  "availabilityDate" : "2000-01-23T04:56:07.000+00:00",
  "targetType" : "",
  "id" : 0,
  "title" : "title",
  "status" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing question's answer
 * 
 *
 * body Answer Answer object that needs to be added to the question answers's attribute
 * advertisementId Long Advertisement's Id
 * questionId Long Advertisement question's Id
 * no response value expected for this operation
 **/
exports.updateAdvertisementQuestionAnswer = function(body,advertisementId,questionId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update advertisement's question
 * Returns a Question
 *
 * advertisementId Long ID of advertisement
 * returns Question
 **/
exports.updateAdvertisementQuestionById = function(advertisementId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "answers" : [ {
    "id" : 5,
    "text" : "text"
  }, {
    "id" : 5,
    "text" : "text"
  } ],
  "id" : 1,
  "text" : "text"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

