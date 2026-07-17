enum GitRepo {
  committed,
  notCommitted,
}

function isRepoCommitted(repo: GitRepo): boolean {
  return repo === null || repo == GitRepo.committed;
}

let gitCommit = isRepoCommitted(GitRepo.committed);
console.log(gitCommit);
