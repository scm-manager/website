const { Octokit } = require("@octokit/rest");
const { collectCoreContent } = require("./collect-core-content");
const { collectPluginContent } = require("./collect-plugin-conent");
const { findPlugins } = require("./find-plugins");
const { core } = require("./config");

async function collectContent() {
  const now = Date.now();
  const api = new Octokit();
  const plugins = await findPlugins();
  console.debug(`Found ${plugins.length} plugin(s): `, plugins);
  console.info(`Collecting content...`);
  const benchmarks = await Promise.all([
    collectCoreContent(api),
    ...plugins.map(plugin => collectPluginContent(api, plugin)),
  ]);
  const average = benchmarks.reduce((a, b) => a + b) / benchmarks.length;
  console.info(`Collected the content of ${core} and ${plugins.length} plugin(s) in ${(Date.now() - now) / 1000} seconds, averaging ${average / 1000} seconds.`);
  return "Success";
}

collectContent()
  .then(console.info)
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
