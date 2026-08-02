-- Toggle.applescript
-- Starts an Amphetamine session when none is active; otherwise ends the active session.
-- This script intentionally leaves duration and display-sleep settings to Amphetamine.

try
	tell application "Amphetamine"
		if session is active then
			end session
			set actionTaken to "stopped"
			set isActive to false
		else
			start new session
			set actionTaken to "started"
			set isActive to true
		end if
	end tell

	return {success:true, |module|:"Amphetamine", action:actionTaken, active:isActive}
on error errMsg number errNum
	-- Return failure details so callers can handle missing apps or denied automation access.
	return {success:false, |module|:"Amphetamine", action:"toggle", |error|:errMsg, code:errNum}
end try
