/*********************************************************************************************************************
 *  Copyright 2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.                                           *
 *                                                                                                                    *
 *  Licensed under the Amazon Software License (the "License"). You may not use this file except in compliance        *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://aws.amazon.com/asl/                                                                                    *
 *                                                                                                                    *
 *  or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 *********************************************************************************************************************/

/**
 * @author Solution Builders
 */

'use strict';

console.log('Loading function');


exports.handler = function(event, context, callback) {
    // Load the message passed into the Lambda function into a JSON object
    let lib = require('./lib');
    var eventText = JSON.stringify(event, null, 2);

    // Log a message to the console, you can view this text in the Monitoring tab in the Lambda console
    // or in the CloudWatch Logs console
    console.log('Received event:', eventText);

    lib.respond(event, function(error, response) {
        if (error) {
            console.error(error);
            return callback(null, error);
        } else {
            return callback(null, response);
        }
    });

};
