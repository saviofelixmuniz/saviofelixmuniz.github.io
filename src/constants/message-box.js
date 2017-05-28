var defaultBox = function(title, message, size, headerClass, buttons) {
	var config = {};

    if (size) {
        config.size = size;
    }
    if (title) {
        config.title = title;
    }
    if (message) {
        config.message = message;
    }
    if (buttons) {
        config.buttons = buttons;
    }

    bootbox.hideAll();

    var box = bootbox.dialog(config);
    if (headerClass) {
        box.find(".modal-header").addClass('modal-header-' + headerClass);
    }
    return box;
}

//Constant whose purpose is to generate simple message boxes for specific situations in which you want to inform user. 
angular.module('upplify')
.constant('MESSAGEBOX', 
{
	default : defaultBox,

	successBox : function (title, message, callback) {
		var box = defaultBox(title, message, "small", 'success',
					  {
					  	ok: {
					  		label : 'OK',
					  		className : 'btn-success',
					  		callback : callback || function () {}
					  	}
					  });
		return box;
	}
});