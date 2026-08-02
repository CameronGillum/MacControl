/**
 * ============================================================================
 * MacControl
 * Engine / StateStore.js
 * ============================================================================
 *
 * PURPOSE
 * -------
 * The State Store is responsible for all filesystem interaction related to
 * the MacControl state document.
 *
 * This module is intentionally "dumb."
 *
 * It does not know:
 *
 * • What the JSON means.
 * • What Amphetamine is.
 * • What Shortcuts are.
 * • How state is validated.
 *
 * It only knows how to:
 *
 * • Check whether files exist.
 * • Create directories.
 * • Read files.
 * • Write files.
 *
 * WHY?
 * ----
 * Separating filesystem logic from business logic makes both easier to test
 * and easier to replace in the future.
 *
 * If MacControl eventually stores state in SQLite or CloudKit instead of a
 * JSON file, only this module should need to change.
 * ============================================================================
 */

ObjC.import("Foundation");

/******************************************************************************
 * Obtain Apple's shared file manager.
 *
 * NSFileManager is the native macOS API for interacting with the filesystem.
 ******************************************************************************/

const fileManager = $.NSFileManager.defaultManager;

/******************************************************************************
 * Returns true if a filesystem item exists.
 ******************************************************************************/

function exists(path) {

    return fileManager.fileExistsAtPath($(path));

}

/******************************************************************************
 * Creates a directory if it doesn't already exist.
 *
 * Intermediate directories are also created automatically.
 ******************************************************************************/

function createDirectory(path) {

    if (exists(path)) {
        return true;
    }

    return fileManager.createDirectoryAtPathWithIntermediateDirectoriesAttributesError(
        $(path),
        true,
        $(),
        null
    );

}

/******************************************************************************
 * Reads a UTF-8 text file.
 *
 * Returns:
 *     String
 *
 * Throws:
 *     Error if the file cannot be opened.
 ******************************************************************************/

function read(path) {

    const data = $.NSString.stringWithContentsOfFileEncodingError(
        $(path),
        $.NSUTF8StringEncoding,
        null
    );

    return ObjC.unwrap(data);

}

/******************************************************************************
 * Writes UTF-8 text to disk.
 *
 * Existing files are replaced.
 ******************************************************************************/

function write(path, text) {

    return $(text).writeToFileAtomicallyEncodingError(
        $(path),
        true,
        $.NSUTF8StringEncoding,
        null
    );

}

/******************************************************************************
 * END OF FILE
 ******************************************************************************/