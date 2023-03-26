import * as fs from "fs";

export default function handler(req, res) {
  let files = fs.readdirSync("data", "utf-8"); // read the 'data' directory
  const updated_files = files.filter((file) => file !== "services.json"); // removing the services.json file cause we don't need this in corses section
  let data = []; //* make an empty array to append all the data after reading 'updated_files'

  updated_files.forEach((file) => {
    let file_data = fs.readFileSync(`data/${file}`, "utf-8"); // read the files form 'data' directory
    JSON.parse(file_data).forEach((item) => {
      data.push(item); // add all the data to the 'data' array
    });
  });
  res.status(200).json(data);
}
