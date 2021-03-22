// CRUD operations: Create, Read, Update, Delete

// KEPT AS REFERENCE, NOT USED.

// const { MongoClient, ObjectID } = require("mongodb");

// // const mongodb = require("mongodb");
// // const MongoClient = mongodb.MongoClient;
// // const ObjectID = mongodb.ObjectID;

// const connectionURL = "mongodb://127.0.0.1:27017";
// const databaseName = "task-manager";

// // const id = new ObjectID();
// // console.log(id);

// MongoClient.connect(
//   connectionURL,
//   {
//     useNewUrlParser: true,
//   },
//   (error, client) => {
//     if (error) {
//       return console.log("unable to connect to database");
//     }

//     const db = client.db(databaseName);

//     // can insert TAG1 here to Create data

//     // can insert TAG2 here to Read data:

//     // can insert TAG3 here to Update data:

//     // Delete
//     // db.collection("users")
//     //   .deleteMany({
//     //     age: 31,
//     //   })
//     //   .then((result) => {
//     //     console.log(result);
//     //   })
//     //   .catch((error) => {
//     //     console.log(error);
//     //   });

//     db.collection("tasks")
//       .deleteOne({
//         description: "Node Tutorial",
//       })
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// );

/// TAG 1:
// db.collection("users").insertOne(
//   {
//     name: "Per",
//     age: 31,
//   },
//   (error, result) => {
//     if (error) {
//       return console.log("Unable to insert user");
//     }
//     console.log(result.ops);
//   }
// );

// db.collection("users").insertMany(
//   [
//     {
//       user: "Jen",
//       age: 28,
//     },
//     {
//       name: "Petr",
//       age: 31,
//     },
//   ],
//   (error, result) => {
//     if (error) {
//       return console.log("Unable to insert documents");
//     }
//     console.log(result.ops);
//   }
// );

// db.collection("tasks").insertMany(
//   [
//     {
//       description: "Node Tutorial",
//       completed: true,
//     },
//     {
//       description: "Here and Vow",
//       completed: false,
//     },
//     {
//       description: "JS Course",
//       completed: false,
//     },
//   ],
//   (error, result) => {
//     if (error) {
//       return console.log("Unable to insert tasks");
//     }
//     console.log(result.ops);
//   }
// );

// TAG 2: Reading data
// db.collection("users").findOne(
//   { _id: new ObjectID("6047bc1ff21a2c287518daf1") },
//   (error, user) => {
//     if (error) {
//       return console.log("Unable to fetch");
//     }
//     console.log(user);
//   }
// );

// db.collection("users")
//   .find({ age: 31 })
//   .toArray((error, users) => {
//     console.log(users);
//   });

// db.collection("users")
//   .find({ age: 31 })
//   .count((error, count) => {
//     console.log(count);
//   });

// db.collection("tasks").findOne(
//   { _id: new ObjectID("6047c05b240cf02b0c750062") },
//   (error, user) => {
//     if (error) {
//       return console.log("Unable to fetch");
//     }
//     console.log(user);
//   }
// );

// db.collection("tasks")
//   .find({ completed: false })
//   .toArray((error, tasks) => {
//     if (error) {
//       return console.log("Unable to fetch tasks");
//     }
//     console.log(tasks);
//   });

//TAG 3: update
// db.collection("users")
//   .updateOne(
//     {
//       _id: new ObjectID("6047bc1ff21a2c287518daf1"),
//     },
//     {
//       $inc: {
//         age: 1,
//       },
//     }
//   )
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// db.collection("tasks")
//   .updateMany(
//     {
//       completed: false,
//     },
//     {
//       $set: {
//         completed: true,
//       },
//     }
//   )
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
