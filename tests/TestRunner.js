/**
 * ============================================================================
 * MacControl
 * Tests / TestRunner.js
 * ============================================================================
 *
 * PURPOSE
 * -------
 * The Test Runner executes assertions and prints readable output to the
 * terminal.
 *
 * DESIGN GOALS
 * ------------
 * • Zero dependencies
 * • Easy to understand
 * • Easy to extend
 * • Consistent output
 *
 * RESPONSIBILITIES
 * ----------------
 * • Execute assertions.
 * • Track passed and failed tests.
 * • Print a summary.
 *
 * THIS MODULE DOES NOT
 * --------------------
 * ✗ Know anything about Engine code.
 * ✗ Know anything about Amphetamine.
 * ✗ Read or write files.
 *
 * WHY?
 * ----
 * Keeping the runner independent means it can execute tests for every future
 * MacControl module.
 * ============================================================================
 */

/******************************************************************************
 * Internal counters.
 *
 * Every completed assertion increments one of these values.
 ******************************************************************************/

let passed = 0;
let failed = 0;

/******************************************************************************
 * Run a single assertion result.
 *
 * Parameters
 * ----------
 * result
 *      The object returned from Assertions.js.
 ******************************************************************************/

function run(result) {

    if (result.success) {

        console.log("✓ " + result.message);
        passed++;

    } else {

        console.log("✗ " + result.message);

        console.log("    Expected: " + result.expected);
        console.log("    Actual:   " + result.actual);

        failed++;

    }

}

/******************************************************************************
 * Print the test summary.
 ******************************************************************************/

function summary() {

    console.log("");
    console.log("────────────────────────────────────────");
    console.log("MacControl Test Summary");
    console.log("────────────────────────────────────────");

    console.log("Passed : " + passed);
    console.log("Failed : " + failed);

    console.log("");

    if (failed === 0) {

        console.log("🎉 SUCCESS");

    } else {

        console.log("❌ FAILURE");

    }

}

/******************************************************************************
 * Reset counters.
 *
 * Useful when multiple suites are executed.
 ******************************************************************************/

function reset() {

    passed = 0;
    failed = 0;

}

/******************************************************************************
 * END OF FILE
 ******************************************************************************/