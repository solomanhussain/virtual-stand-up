//standup.server.model.js file
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var memberNameValidator = [
    function (val) {
		return (val.length > 0 && val.toLocaleLowerCase() != 'none')
    },
    //Custom error text ...
    'Select a valid member name.'];
var requiredStringValidator = [
    function (val) {
		var testVal = val.trim();
		return (testVal.length > 0)
    },
    //Custom error text ...
    '{PATH} cannont be empty.'];
//Stand-up Meeting Notes Schema Definition ...
var standupSchema = new Schema({
	memberName: {
		type: String,
		required: true,
		validate: memberNameValidator
	},
	project: {
		type: String,
		required: true,
		validate: requiredStringValidator
	},
	workYesterday: {
		type: String,
		requied: true,
		validate: requiredStringValidator
	},
	workToday: {
		type: String, 
		required: true,
		validate: requiredStringValidator
	},
	impediment: {
		type: String,
		required: true,
		default: 'none'
	},
	createdOn: {
		type: Date,
		default: Date.now
	}
});

//Expose (export) the model now ...
module.exports = mongoose.model('Standup', standupSchema);

/*
// disabled_id
//var noIdSchema = new Schema({name: String}, {_id:false});

//Conditional Schema adding.
var includeMiddleName = true;

var exampleSchema = new Schema;

if (includeMiddleName){
    exampleSchema.add({
        memberName: {
        first:String,
        middle:String,
        last:String}
    });
}else{
    exampleSchema.add({
    memberName:{ first:String, last:String}
    });
}

exampleSchema.add({
    project : String, 
    workYesterday : String, 
    workToday : String, 
    impediment : String,
    createdOn : {type: Date, default: Date.now}
});

*/

/*
//Required Validator Example
var customerSchema = new Schema({
    name: {type: String, required: true},
    address: String,
    city:   String,
    state:  String,
    country:    String,
    zipCode:    Number,
    createdOn:  Date,
    isActive:   Boolean
});

//After the schema is defined - via the path API
customerSchema.path('city').required(true, 'Oops! Supply a city.');

//Signature = required(required, [errorMessage])
*/


/*
//String - Match validator Example
var reMatch = /[a-zA-Z]/;
var customerSchema = new Schema({
    name:   {type: String, required: true, match: reMatch},
    //abbreviated ....
});

//String - Enum Validator Example
var impediments = ['none', 'minor', 'blocking', 'severe'];
var standupSchema = new Schema({
    //abbreviated ...
    impediments: {type: String, requied:true, enum: impediments}
});

*/
/*
// Customers must receive at least 5% discount
var customerSchema = new Schema({
    name: String,
    // ...
    discount: {type: Number, min:5}
});

// Customers not allowed more than 60% discount
var customerSchema = new Schema({
    name: String,
    //...
    discount: {type: Number, max: 60}
});

//Customers allowed a discount between 5% and 60% only
var customerSchema = new Schema({
    name: String,
    //...
    discount: {type: Number, min:5, max:60}
});

*/

/*
//Custom validation - method signature = validate(obj, [errorMsg])
var sizeValidator = [
    function(val) {
        return (val.length > 0 && val.length<=50)
    },
    //Custom error text ....
    'String must be between 1 and 50 characters long'
];

var personSchema = new Schema({
    firstName: {type: String, required: true, validate: sizeValidator},
    lastName: {type: String, required: true, validate: sizeValidator},
    status: {type: String, required: true, default:'Alive'}
});
//Build a model from the person schema
var Person = new mongoose.model('Person', personSchema);

//New document instance of a Person model
var newPerson = new Person({ firstName: 'John', lastName: 'Doe'});

//Save the document ... and validate
newPerson.save(function(err){
    if (err) return handleError(err);
    //saved the person document!
});
*/