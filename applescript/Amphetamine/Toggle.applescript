-- Toggle.applescript
-- Starts an Amphetamine session when none is active; otherwise ends the active session.
-- This script intentionally leaves duration and display-sleep settings to Amphetamine.

tell application "Amphetamine"
	if session is active then
		end session
		return "stopped"
	else
		start new session
		return "started"
	end if
end tell
