-- Result.applescript
-- Shared result-contract reference for MacControl modules.
-- Modules remain standalone for now, so they return this shape directly.

on successResult(moduleName, actionName, isActive)
	return {success:true, |module|:moduleName, action:actionName, active:isActive}
end successResult

on errorResult(moduleName, actionName, errorMessage, errorCode)
	return {success:false, |module|:moduleName, action:actionName, |error|:errorMessage, code:errorCode}
end errorResult
