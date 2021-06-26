const isRequestAjaxOrAPI = req => !req.accepts('html') || req.xhr

export default isRequestAjaxOrAPI
