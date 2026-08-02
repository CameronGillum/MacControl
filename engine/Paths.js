// Paths.js

ObjC.import('Foundation');

const fm = $.NSFileManager.defaultManager;

const home = ObjC.unwrap(
    fm.homeDirectoryForCurrentUser.path
);

const applicationSupport =
    `${home}/Library/Application Support/MacControl`;

const stateFile =
    `${applicationSupport}/State.json`;

module.exports = {
    applicationSupport,
    stateFile
};