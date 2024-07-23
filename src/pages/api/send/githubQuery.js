import { graphql } from "@octokit/graphql";

export default async function handler(req, res) {
  const { username } = req.query;

  if (!username) {
    return res.status(400).json({ error: "Username is required" });
  }

  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
          }
        }
      }
    }
  `;

  const githubToken = process.env.GITHUB_TOKEN;

  if (!githubToken) {
    return res.status(500).json({ error: "GitHub token is not configured" });
  }

  try {
    const graphqlWithAuth = graphql.defaults({
      headers: {
        authorization: `token ${githubToken}`,
      },
    });

    const data = await graphqlWithAuth(query, { username });

    const totalContributions =
      data.user.contributionsCollection.contributionCalendar.totalContributions;

    res.status(200).json({ totalContributions });
  } catch (error) {
    console.error("Error executing GraphQL query:", error.message);
    res.status(500).json({ error: "Error fetching contributions" });
  }
}
