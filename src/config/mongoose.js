import mongoose from "mongoose";

export const connectToDatabase = async (connectionString) => {
  const { connection } = mongoose;

  // Will cause errors to be produced instead of dropping the bad data.
  mongoose.set("strict", "throw");

  // Turn on strict mode for query filters.
  mongoose.set("strictQuery", true);

  connection.on("connected", () =>
    console.log("Mongoose connected to MongoDB.")
  );
  connection.on("error", (err) =>
    console.error(`Mongoose connection error: ${err}`)
  );
  connection.on("disconnected", () =>
    console.log("Mongoose disconnected from MongoDB.")
  );

  for (const signalEvent of ["SIGINT", "SIGTERM"]) {
    process.on(signalEvent, () => {
      (async () => {
        await connection.close();
        console.log(
          `Mongoose disconnected from MongoDB through ${signalEvent}.`
        );
        process.exit(0);
      })();
    });
  }

  console.log("Mongoose connecting to MongoDB.");
  return mongoose.connect(connectionString);
};
