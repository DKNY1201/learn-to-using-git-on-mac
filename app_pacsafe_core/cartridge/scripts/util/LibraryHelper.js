'use strict';
var Site = require('dw/system/Site');
var ContentMgr = require('dw/content/ContentMgr');

var GetLibraryFolderName = function(value) {
	var headerExploreFolderName = "";
	if(!empty(value)){
		var headerExploreFolder = ContentMgr.getFolder(value);
		if(!empty(headerExploreFolder)){
			headerExploreFolderName = headerExploreFolder.getDisplayName();
		}
	}
	return headerExploreFolderName;
}

module.exports.GetLibraryFolderName = GetLibraryFolderName;