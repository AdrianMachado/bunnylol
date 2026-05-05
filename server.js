require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();
const router = express.Router();
const browserConfigKeys = [
  "LINEAR_WORKSPACE_ID",
  "INCIDENT_ORG_ID",
  "ARGOCD_URL",
  "GITHUB_FORK_PROJECT",
  "GITHUB_FORK_REPO",
];

const getBrowserConfig = function () {
  return browserConfigKeys.reduce((config, key) => {
    if (process.env[key]) {
      config[key] = process.env[key];
    }
    return config;
  }, {});
};

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

router.get("/bunnylol", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

router.get("/config.js", function (req, res) {
  res.set("Cache-Control", "no-store");
  res.type("application/javascript");
  res.send(`window.BUNNYLOL_CONFIG = ${JSON.stringify(getBrowserConfig())};`);
});

app.use("/", router);
app.use("/static", express.static(path.join(__dirname, "static")));
app.use("/lib", express.static(path.join(__dirname, "lib")));
app.use("/scripts", express.static(path.join(__dirname, "scripts")));
app.listen(process.env.port || 6969);

console.log("Running at Port 6969");
