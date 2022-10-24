module.exports = {
  branch: "main",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/git",
  ],
  repositoryUrl: "https://github.com/bullhorn/bullhorn-icons",
};
