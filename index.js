"use strict";

if (process.env.NODE_ENV === "production") {
    module.exports = require("./dist/notification.min.js");
} else {
    module.exports = require("./dist/notification.js");
}