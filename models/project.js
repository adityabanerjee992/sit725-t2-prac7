let client = require("../dbConnect");
let projectCollection;
setTimeout(() => {
    projectCollection = client.mongoClient.db().collection("pets");

}, 2000)

//Insert Project
const insertProjects = (project, callback) => {
    projectCollection.insert(project, callback);
}

//Get Project
const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
}

module.exports = {
    insertProjects, getProjects
}