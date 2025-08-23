module.exports = {
  i18n: {
    defaultLocale: "it",
    locales: ["it", "en"],
  },
  localePath: path.resolve("./public/locales"),
  reloadOnPrerender: process.env.NODE_ENV === "development",
}
