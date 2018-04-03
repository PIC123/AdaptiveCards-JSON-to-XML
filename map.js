var Jsonix = require('jsonix').Jsonix;
var AC = require('./AC').AC;
//var PO = require('./PO').PO;

// First we construct a Jsonix context - a factory for unmarshaller (parser)
// and marshaller (serializer)
var context = new Jsonix.Context([AC]);
//var context = new Jsonix.Context([PO]);

// Then we create a unmarshaller
var unmarshaller = context.createUnmarshaller();

// Unmarshal an object from the XML retrieved from the URL
unmarshaller.unmarshalFile('Card.xml',
    // This callback function will be provided
    // with the result of the unmarshalling
    function (unmarshalled) {
        // Alice Smith
        console.log(unmarshalled.value);//.shipTo.name);
        // Baby Monitor
        //console.log(unmarshalled.value.items.item[1].productName);
    }
);