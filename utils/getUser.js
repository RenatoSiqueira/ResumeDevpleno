const getUser = async (username) => {
  const resUser = await fetch("https://api.github.com/users/" + username);
  const user = await resUser.json();
  const resRepos = await fetch(
    "https://api.github.com/users/" + username + "/repos?sort=updated"
  );
  const originalRepos = await resRepos.json();
  const dontShowRepos = ["React_PrimeReact-Test", "RenatoSiqueira"];
  const isNotFork = (repo) => !repo.fork;
  const dontShowFilter = (repo) => dontShowRepos.indexOf(repo.name) < 0;
  const extractData = (repo) => ({
    id: repo.id,
    name: repo.name,
    language: repo.language,
    stars: repo.stargazers_count,
  });
  const repos = originalRepos
    .filter(isNotFork)
    .filter(dontShowFilter)
    .map(extractData);

  return {
    repos,
    user,
  };
};
export default getUser;
