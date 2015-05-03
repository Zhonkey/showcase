define( [ "backbone" ], function( Backbone ) {
    
    var model = Backbone.Model.extend({        

        // Значения по-умолчанию
        defaults : {
            "title" : "",
            "text"  : ""
        },

        initialize : function( options ) {
            
        }

    });

    return model;
});