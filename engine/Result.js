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

/**
 * Create a successful result.
 *
 * @param {Object} data Additional properties to merge into the result.
 * @returns {Object}
 */
function ok(data = {}) {
    return Object.assign({
        success: true
    }, data);
}

/**
 * Create a failed result.
 *
 * @param {String} component
 * @param {String} action
 * @param {Error|String} error
 * @returns {Object}
 */
function fail(component, action, error) {
    return {
        success: false,
        component,
        action,
        error: error.toString()
    };
}



/******************************************************************************
 * END OF FILE
 *
 * If you're looking for where state is actually read or written,
 * see StateStore.js.
 ******************************************************************************/