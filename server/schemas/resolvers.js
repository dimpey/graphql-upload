const fs = require("fs");
const path = require("path");
const {v4: uuid} = require('uuid');

const processUpload = async (file) => {
  let { createReadStream, filename } = await file;
  const stream = createReadStream();
  filename = uuid() + filename;
  const out = fs.createWriteStream(path.join(__dirname, "../uploads/" + filename));

  return new Promise(resolve => {
    stream.pipe(out);
    out.on("finish", function() {
      resolve(filename);
    });
  });
};

const resolvers = {
  Mutation: {
    upload: async (_, { file }) => {
      const filename = await processUpload(file);
      return { filename };
    },
  },
};

module.exports = resolvers;
