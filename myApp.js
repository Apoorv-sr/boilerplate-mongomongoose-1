const mySecret = process.env['MONGO_URI']
//using above line we have encoded the url in mySecret variable,we have given the entire url of the remote server where our database is hosted with the password of db in url itself that is why we have to put this url in environment variable so that it is not visible in code to public,we have created a MONGO_URI variable in .env file and assigned the complete url to this variable and then we have to use this variable in our code as process.env.

require('dotenv').config();

//we are requiring mongoose package here in our app that will help the nodejs apllication or server to compile or process the mongo db queries.
let mongoose=require("mongoose")

mongoose.connect(mySecret, { useNewUrlParser: true, useUnifiedTopology: true });

//the below code will create a schema which we can map to any collection,see collections are similar to tables in sql dbs like oracle,mysql, and documents in mongodb is similar to row records in sql dbs,now the difference in sql and no sql dbs is sql dbs like oracle,mysql,potgres are based on relational databse model i.e they have a particular schema in which data has to be stored like a table has some columns in which data can be stored but the no sql dbs are not required to follow any schema i.e a collection can have documents of different schemas i.e there is no particular format that the nosql database has to follow but schema is the basis of sql,but if we want we can enforce schema on nosql dbs like mongodb also,like see in the below code we are creating a schema personSchema that we can enforce on collections,now the personSchema will have 3 values name and its type is string and required is true means this is a constraint i.e everydocument that will be created using this schema must have name,simalarly age and favoritefoods are also the values but they can be null.
let personSchema=new mongoose.Schema({
  name:{type:String,required:true},
  age:{type:Number},
  favoriteFoods:{type:[String]}
})

//now see using the below code we are creating a model i.e model in mongoose means collection in mongodb and the name of the model/collection we have given is Person but when this model/collection will created in the database the it will automatically get converted into plural form this is a feature of mongodb,and we are creating this model of type personSchema so the documents that we will create in this model/collection will be of type personScehma.
let Person=new mongoose.model("Person",personSchema);



const createAndSavePerson = (done) => {
  done(null /*, data*/);
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
