const apiURLs: { [key: string]: string } = {
  repoSearchURL: `https://api.github.com/search/users?q=`, //${searchParameter}
  repoURL: `https://api.github.com/repos/`, //${repoTitle}
  userURL: `https://api.github.com/users/`, //${userName}
  userReposURL: `https://api.github.com/users/`, //`${userName} /repos`
};

const responseMessage: { [key: string]: string } = {
  unknown: `Something went wrong`,
  empty: `There are no repositories`,
};

export { apiURLs, responseMessage };
