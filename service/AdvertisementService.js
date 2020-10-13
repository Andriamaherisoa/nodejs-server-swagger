'use strict';


/**
 * Add a new advertisement
 * 
 *
 * body Advertisement Pet object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.addAdvertisement = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes an advertisement
 * 
 *
 * advertisementId Long Advertisement id to delete
 * api_key String  (optional)
 * no response value expected for this operation
 **/
exports.deleteAdvertisement = function(advertisementId,api_key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Finds Pets by status
 * Multiple status values can be provided with comma separated strings
 *
 * status List Status values that need to be considered for filter
 * returns List
 **/
exports.findAdvertisementsByStatus = function(status) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
}, {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find advertisement by ID
 * Returns a single advertisement
 *
 * advertisementId Long ID of advertisement to return
 * returns Advertisement
 **/
exports.getAdvertisementById = function(advertisementId) {
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
 * Update an existing advertisement
 * 
 *
 * body Advertisement Pet object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.updateAdvertisement = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Updates a advertisement in the store with form data
 * 
 *
 * advertisementId Long ID of advertisement that needs to be updated
 * name String Updated name of the advertisement (optional)
 * status String Updated status of the advertisement (optional)
 * no response value expected for this operation
 **/
exports.updateAdvertisementWithForm = function(advertisementId,name,status) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * uploads an image
 * 
 *
 * advertisementId Long ID of pet to update
 * additionalMetadata String Additional data to pass to server (optional)
 * file File file to upload (optional)
 * returns ApiResponse
 **/
exports.uploadFile = function(advertisementId,additionalMetadata,file) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "code" : 0,
  "type" : "type",
  "message" : "message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

