/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://studentiunimi.it",
  generateRobotsTxt: false,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  generateIndexSitemap: false,
  transform: async (config, path) => {
    const cleanPath = path.replace(/^\/it/, "")
    return {
      loc: cleanPath === "" ? "/" : cleanPath,
      changefreq: "daily",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }
  },
}
