export default function handler(req, res) {
  const headers = req.headers;

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({
    // ===== VISITOR INTELLIGENCE =====
    visitor: {
      ip: headers['x-forwarded-for'] || headers['x-real-ip'] || null,
      country: headers['x-vercel-ip-country'] || null,
      region: headers['x-vercel-ip-country-region'] || null,
      city: headers['x-vercel-ip-city'] || null,
      latitude: headers['x-vercel-ip-latitude'] || null,
      longitude: headers['x-vercel-ip-longitude'] || null,
      timezone: headers['x-vercel-ip-timezone'] || null,
      userAgent: headers['user-agent'] || null,
      language: headers['accept-language'] || null,
      referer: headers['referer'] || null,
      encoding: headers['accept-encoding'] || null,
    },

    // ===== DEPLOYMENT =====
    deployment: {
      environment: process.env.VERCEL_ENV || null,
      url: process.env.VERCEL_URL || null,
      region: process.env.VERCEL_REGION || null,
      deployTime: process.env.VERCEL_DEPLOY_TIME || null,
    },

    // ===== GIT =====
    git: {
      commitSha: process.env.VERCEL_GIT_COMMIT_SHA || null,
      commitRef: process.env.VERCEL_GIT_COMMIT_REF || null,
      commitMessage: process.env.VERCEL_GIT_COMMIT_MESSAGE || null,
      commitAuthor: process.env.VERCEL_GIT_COMMIT_AUTHOR_LOGIN || null,
      repoOwner: process.env.VERCEL_GIT_REPO_OWNER || null,
      repoSlug: process.env.VERCEL_GIT_REPO_SLUG || null,
      previousSha: process.env.VERCEL_GIT_PREVIOUS_COMMIT_SHA || null,
    },

    // ===== RUNTIME =====
    runtime: {
      node: process.version,
      platform: process.platform,
      arch: process.arch,
      memoryUsage: process.memoryUsage(),
      uptime: process.uptime(),
    },

    // ===== SERVED BY =====
    servedBy: 'Vercel Edge Network',

    // ===== TIMESTAMP =====
    timestamp: new Date().toISOString(),
  });
}
