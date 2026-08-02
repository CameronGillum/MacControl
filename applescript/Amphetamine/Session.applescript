-- Session.applescript
-- Starts a new Amphetamine session using the user's configured Amphetamine defaults.
-- Starting a session replaces any existing session, as defined by Amphetamine.

try
	tell application "Amphetamine"
		-- Keep this on Amphetamine's native default path; option records are not used.
		start new session
		set isActive to session is active
	end tell

	return {success:true, |module|:"Amphetamine", action:"started", active:isActive}
on error errMsg number errNum
	-- Return failure details so callers can handle missing apps or denied automation access.
	return {success:false, |module|:"Amphetamine", action:"start", |error|:errMsg, code:errNum}
end try
