"use strict";

if (process.env.NODE_ENV === "production") {
    module.exports = require("./dist/Notification.js");
} else {
    module.exports = require("./dist/Notification.js");
}