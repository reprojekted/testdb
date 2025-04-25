module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
};