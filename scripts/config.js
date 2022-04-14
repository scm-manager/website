module.exports = {
  organization: "scm-manager",
  core: "scm-manager",
  cli: "cli",
  logging: {
    level: process.env.LOG_LEVEL || "info",
    prettyPrint: true
  }
}
