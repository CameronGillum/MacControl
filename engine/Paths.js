/**
 * ============================================================================
 * MacControl
 * Engine / Paths.js
 * ============================================================================
 *
 * PURPOSE
 * -------
 * This module defines every filesystem path used by the MacControl Engine.
 *
 * RESPONSIBILITIES
 * ----------------
 * • Locate the user's home directory.
 * • Build the Application Support path.
 * • Expose canonical paths for state, logs, and cache.
 *
 * THIS MODULE DOES NOT
 * --------------------
 * ✗ Create folders.
 * ✗ Read files.
 * ✗ Write files.
 *
 * WHY?
 * ----
 * Keeping path construction separate from file operations makes the project
 * easier to maintain and test. If the storage location ever changes, only this
 * file needs to be updated.
 * ============================================================================
 */


/******************************************************************************
 * Import macOS Foundation
 *
 * JXA can access Apple's Objective-C frameworks.
 * We import Foundation because it contains NSFileManager,
 * Apple's preferred API for interacting with the filesystem.
 ******************************************************************************/

ObjC.import("Foundation");

const fileManager = $.NSFileManager.defaultManager;


/******************************************************************************
 * Determine the current user's home directory.
 *
 * We intentionally avoid using "~" because it is expanded by the shell,
 * not by JavaScript.
 *
 * NSFileManager always returns the correct path regardless of the user's name.
 ******************************************************************************/

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


/******************************************************************************
 * END OF FILE
 *
 * If you're looking for where state is actually read or written,
 * see StateStore.js.
 ******************************************************************************/