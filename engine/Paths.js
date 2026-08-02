/**
 * MacControl
 * Paths.js
 *
 * Canonical filesystem locations.
 */

ObjC.import("Foundation");

const fileManager = $.NSFileManager.defaultManager;

const HOME = ObjC.unwrap(
    fileManager.homeDirectoryForCurrentUser.path
);

const APPLICATION_SUPPORT =
    `${HOME}/Library/Application Support/MacControl`;

const STATE_FILE =
    `${APPLICATION_SUPPORT}/State.json`;

const LOG_DIRECTORY =
    `${APPLICATION_SUPPORT}/Logs`;

const CACHE_DIRECTORY =
    `${APPLICATION_SUPPORT}/Cache`;