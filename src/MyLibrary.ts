import Octokit = require('@octokit/rest');
import pluginThrottling = require('@octokit/plugin-throttling');

const Octokit2 = Octokit.plugin(pluginThrottling);

export class MyLibrary {
  getRepos() {
    const octokit = new Octokit2({
      throttle: {
        onAbuseLimit: () => {/* ... */ },
        onRateLimit: () => {/* ... */ }
      }
    });

    // Compare: https://developer.github.com/v3/repos/#list-organization-repositories
    octokit.repos.listForOrg({
      org: 'octokit',
      type: 'public'
    }).then(({ data }) => {
      console.log('All repos: ', data);

      data.forEach(async repo => {
        const readmeResponse = await octokit.repos.getReadme({
          owner: 'octokit',
          repo: repo.name
        });

        console.log(readmeResponse.data.html_url);
      });

    })
  }
}

export default MyLibrary;
