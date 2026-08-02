-- Session.applescript
-- Starts a new infinite Amphetamine session that prevents display sleep.
-- Starting a session replaces any existing session, as defined by Amphetamine.

tell application "Amphetamine"
	start new session with options {duration:0, interval:minutes, displaySleepAllowed:false}
end tell

return "started"
