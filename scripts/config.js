module.exports = {
  organization: "scm-manager",
  core: "scm-manager",
  logging: {
    level: process.env.LOG_LEVEL || "info",
    prettyPrint: true
  }
}
