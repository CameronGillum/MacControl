-- Status.applescript
-- Reads the current Amphetamine session state without changing any settings.
-- secondsRemaining uses Amphetamine's sentinel values for non-timed sessions:
-- 0 = infinite, -1 = Trigger-based, -2 = app/date-based, -3 = no active session.

try
	tell application "Amphetamine"
		set isActive to session is active
		set secondsRemaining to session time remaining
		set isDisplaySleepAllowed to display sleep allowed
		set isTriggerSession to session is Trigger
	end tell

	return {success:true, |module|:"Amphetamine", action:"status", active:isActive, secondsRemaining:secondsRemaining, displaySleepAllowed:isDisplaySleepAllowed, triggerBased:isTriggerSession}
on error errMsg number errNum
	-- Return failure details so callers can handle missing apps or denied automation access.
	return {success:false, |module|:"Amphetamine", action:"status", |error|:errMsg, code:errNum}
end try
