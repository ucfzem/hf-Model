export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({
    deployTime: process.env.VERCEL_GIT_COMMIT_AT || null,
    environment: process.env.VERCEL_ENV || null,
    url: process.env.VERCEL_URL || null,
    commitSha: process.env.VERCEL_GIT_COMMIT_SHA || null,
    commitRef: process.env.VERCEL_GIT_COMMIT_REF || null,
    commitMessage: process.env.VERCEL_GIT_COMMIT_MESSAGE || null,
    commitAuthor: process.env.VERCEL_GIT_COMMIT_AUTHOR_LOGIN || null,
    repoOwner: process.env.VERCEL_GIT_REPO_OWNER || null,
    repoSlug: process.env.VERCEL_GIT_REPO_SLUG || null,
    region: process.env.VERCEL_REGION || null,
    nodeVersion: process.version,
    platform: 'Vercel'
  });
}
