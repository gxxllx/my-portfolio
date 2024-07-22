import { graphql } from "@octokit/graphql";

const username = "gxxllx";
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

const githubToken = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

if (!githubToken) {
  throw new Error(
    "GITHUB_TOKEN is not defined. Please check your .env.local file."
  );
}

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${githubToken}`,
  },
});

const getGraphQL = async (username) => {
  try {
    const data = await graphqlWithAuth(query, { username });
    return data;
  } catch (error) {
    console.error("Error executing GraphQL query:", error.message);
    throw error;
  }
};

export const getTotalContributions = async () => {
  try {
    const data = await getGraphQL(username);
    const totalContributions =
      data.user.contributionsCollection.contributionCalendar.totalContributions;

    return totalContributions;
  } catch (error) {
    console.error("Error fetching contributions:", error.message);
  }
};
