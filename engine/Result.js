/**
 * MacControl
 * Result.js
 *
 * Standard result contract used by the Engine.
 * Every Engine function should return one of these objects.
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