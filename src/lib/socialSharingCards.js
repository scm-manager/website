const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const puppeteer = require("puppeteer");

const cardSize = {
  width: 800,
  height: 400,
  deviceScaleFactor: 2
};

const directoryName = "social-sharing-cards";
const directory = path.join("public", directoryName);
if (!fs.existsSync(directory)) {
  fs.mkdirSync(directory, { recursive: true });
}

const template = fs.readFileSync(
  path.join(__dirname, "social-sharing-card.html"),
  "utf8"
);

const createContent = data => {
  let content = template;
  Object.keys(data).forEach(k => {
    content = content.replace(`{${k}}`, data[k]);
  });
  return content;
};

const createChecksum = content => {
  return crypto
    .createHash("SHA1")
    .update(content, "utf8")
    .digest("hex");
};

const createFilePath = (card) => {
  return path.join(directory, card.fileName);
};

const createSharingCard = async (browser, card) => {
  const file = createFilePath(card);
  if (fs.existsSync(file)) {
    return;
  }

  const page = await browser.newPage();
  page.setContent(card.content);

  await page.evaluate(async () => {
    const selectors = Array.from(document.querySelectorAll("image"));
    await Promise.all(
      selectors.map(img => {
        if (img.complete) return;
        return new Promise((resolve, reject) => {
          img.addEventListener("load", resolve);
          img.addEventListener("error", reject);
        });
      })
    );
  });

  const node = await page.$("svg");

  await node.screenshot({
    path: file,
  });

  await page.close();
};

const filterExisting = (card) => {
  const file = createFilePath(card);
  return !fs.existsSync(file);
};

const renderSocialSharingCards = async (cards) => {
  const cardsToCreate = cards.filter(filterExisting);

  if (cardsToCreate.length === 0) {
    return;
  }

  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: cardSize,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (let i=0; i<cardsToCreate.length; i++) {
    console.log(`create social sharing card ${i + 1}/${cardsToCreate.length}`)
    await createSharingCard(browser, cardsToCreate[i]);
  }

  await browser.close();
};

const createAvatar = author => {
  if (author.avatar) {
    return author.avatar;
  }
  return `https://robohash.org/${createChecksum(author.id)}?set=set4&bgset=&size=400x400`; 
}

const createModel = post => {
  return {
    title: post.frontmatter.title,
    categories: (post.frontmatter.categories || []).join(", "),
    date: post.frontmatter.date,
    wordCount: post.wordCount.words,
    timeToRead: post.timeToRead,
    author: post.frontmatter.author.id,
    avatar: createAvatar(post.frontmatter.author)
  };
}

const createSocialSharingCard = (data) => {
  const model = createModel(data)
  const content = createContent(model);
  const checksum = createChecksum(content);
  const fileName = `${checksum}.png`;
  return {
    content,
    checksum,
    fileName,
    path: `${directoryName}/${fileName}`,
    width: cardSize.width * cardSize.deviceScaleFactor,
    height: cardSize.height * cardSize.deviceScaleFactor
  };
};

module.exports = {
  createSocialSharingCard,
  renderSocialSharingCards
}
