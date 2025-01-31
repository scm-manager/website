const { collectCoreContent } = require("./collect-core-content");
const { collectPluginContent } = require("./collect-plugin-conent");
const { collectCliContent } = require("./collect-cli-content");
const { findPlugins } = require("./find-plugins");
const { core } = require("./config");
const logger = require("./logger");

async function collectContent() {
  const now = Date.now();
  const plugins = await findPlugins();
  logger.debug(`Found ${plugins.length} plugin(s): `, plugins);
  logger.info(`Collecting content...`);
  const benchmarks = await Promise.all([
    collectCoreContent(),
    ...plugins.map(plugin => collectPluginContent(plugin)),
    collectCliContent()
  ]);
  const average = benchmarks.reduce((a, b) => a + b) / benchmarks.length;
  logger.info(`Collected the content of ${core} and ${plugins.length} plugin(s) in ${((Date.now() - now) / 1000).toPrecision(3)} seconds, averaging ${(average / 1000).toPrecision(3)} seconds.`);
  return "Success";
}

collectContent()
  .then(logger.info.bind(logger))
  .catch(e => {
    logger.error(e);
    process.exit(1);
  });
