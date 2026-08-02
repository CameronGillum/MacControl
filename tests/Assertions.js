/**
 * ============================================================================
 * MacControl
 * Tests / Assertions.js
 * ============================================================================
 *
 * PURPOSE
 * -------
 * This file contains the assertion helpers used by every MacControl test.
 *
 * WHY?
 * ----
 * Rather than depending on Jest or another testing framework, MacControl
 * ships with a tiny assertion library that works anywhere JXA runs.
 *
 * DESIGN GOALS
 * ------------
 * • Zero dependencies
 * • Easy to read
 * • Easy to extend
 * • Educational
 * ============================================================================
 */

/******************************************************************************
 * Assert that two values are equal.
 *
 * Parameters
 * ----------
 * actual
 *      The value produced by the code.
 *
 * expected
 *      The value we expected.
 *
 * message
 *      Human-readable description shown in the test output.
 ******************************************************************************/

function assertEqual(actual, expected, message) {

    if (actual === expected) {

        return {
            success: true,
            message: message
        };

    }

    return {
        success: false,
        message: message,
        expected: expected,
        actual: actual
    };

}

/******************************************************************************
 * Assert that a condition evaluates to true.
 ******************************************************************************/

function assertTrue(condition, message) {

    return assertEqual(condition, true, message);

}

/******************************************************************************
 * Assert that a condition evaluates to false.
 ******************************************************************************/

function assertFalse(condition, message) {

    return assertEqual(condition, false, message);

}

/******************************************************************************
 * END OF FILE
 ******************************************************************************/