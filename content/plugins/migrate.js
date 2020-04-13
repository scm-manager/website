const fs = require("fs");
const path = require("path");

const migrate = plugin => {
  console.log(
    path.join(plugin, "index.md"),
    "=>",
    path.join(plugin, "README.md")
  );
  fs.renameSync(path.join(plugin, "index.md"), path.join(plugin, "README.md"));
};

fs.readdirSync(".")
  .filter(plugin => fs.statSync(plugin).isDirectory())
  .forEach(migrate);
