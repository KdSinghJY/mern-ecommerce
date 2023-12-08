const AWS = require("aws-sdk");

const keys = require("../config/keys");
const multer = require("multer");
const fs = require("fs");

// exports.s3Upload = async (image) => {
//   let imageUrl = "";
//   let imageKey = "";

//   if (image) {
//     const s3bucket = new AWS.S3({
//       accessKeyId: keys.aws.accessKeyId,
//       secretAccessKey: keys.aws.secretAccessKey,
//       region: keys.aws.region,
//     });

//     const params = {
//       Bucket: keys.aws.bucketName,
//       Key: image.originalname,
//       Body: image.buffer,
//       ContentType: image.mimetype,
//       ACL: "public-read",
//     };

//     const s3Upload = await s3bucket.upload(params).promise();

//     imageUrl = s3Upload.Location;
//     imageKey = s3Upload.key;
//   }

//   return { imageUrl, imageKey };
// };

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "../public/uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

exports.upload = multer({ storage: storage });
// exports.upload = multer({
//   storage: multer.diskStorage({
//     destination: (req, file, cb) => {
//       const directory = `../public/uploads`;

//       if (!fs.existsSync(directory)) {
//         fs.mkdirSync(directory, { recursive: true });
//       }

//       cb(null, directory);
//     },
//     filename: (req, file, cb) => {
//       cb(null, `${Date.now()}-${file.originalname}`);
//     },
//   }),
// });
