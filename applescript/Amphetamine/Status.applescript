-- Status.applescript
-- Reads the current Amphetamine session state without changing any settings.
-- secondsRemaining uses Amphetamine's sentinel values for non-timed sessions:
-- 0 = infinite, -1 = Trigger-based, -2 = app/date-based, -3 = no active session.

tell application "Amphetamine"
	set isActive to session is active
	set secondsRemaining to session time remaining
	set isDisplaySleepAllowed to display sleep allowed
	set isTriggerSession to session is Trigger
end tell

return {active:isActive, secondsRemaining:secondsRemaining, displaySleepAllowed:isDisplaySleepAllowed, triggerBased:isTriggerSession}
