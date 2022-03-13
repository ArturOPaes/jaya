import { AddEvent } from '@/domain/usecases'
import { EventModel } from '@/domain/models/event'

import faker from 'faker'

export const mockAddEventParams = (): AddEvent.Params => ({
  action: faker.name.findName(),
  issue: {
    id: faker.datatype.number(10),
    number: faker.datatype.number(10),
    user: {
      id: faker.datatype.number(10)
    },
    created_at: faker.date.recent().toISOString(),
    updated_at: faker.date.recent().toISOString()
  },
  repository: {
    id: faker.datatype.number(10)
  },
  sender: {
    id: faker.datatype.number(10)
  }
})

export const mockEvent = (): EventModel => ({
  id: faker.datatype.uuid(),
  action: faker.name.findName(),
  issue: {
    id: faker.datatype.number(10),
    number: faker.datatype.number(10),
    user: {
      id: faker.datatype.number(10)
    },
    created_at: faker.date.recent().toISOString(),
    updated_at: faker.date.recent().toISOString()
  },
  repository: {
    id: faker.datatype.number(10)
  },
  sender: {
    id: faker.datatype.number(10)
  }
})

export const mockedEvent = (): Omit<EventModel, 'id'> => ({
  action: 'opened',
  issue: {
    url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/issues/1',
    repository_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch',
    labels_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/issues/1/labels{/name}',
    comments_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/issues/1/comments',
    events_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/issues/1/events',
    html_url: 'https://github.com/ArturOPaes/teste-clean-arch/issues/1',
    id: 1167282635,
    node_id: 'I_kwDOG833zs5Fk1HL',
    number: 1,
    title: 'teste',
    user: {
      login: 'ArturOPaes',
      id: 5059595,
      node_id: 'MDQ6VXNlcjUwNTk1OTU=',
      avatar_url: 'https://avatars.githubusercontent.com/u/5059595?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/ArturOPaes',
      html_url: 'https://github.com/ArturOPaes',
      followers_url: 'https://api.github.com/users/ArturOPaes/followers',
      following_url: 'https://api.github.com/users/ArturOPaes/following{/other_user}',
      gists_url: 'https://api.github.com/users/ArturOPaes/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/ArturOPaes/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/ArturOPaes/subscriptions',
      organizations_url: 'https://api.github.com/users/ArturOPaes/orgs',
      repos_url: 'https://api.github.com/users/ArturOPaes/repos',
      events_url: 'https://api.github.com/users/ArturOPaes/events{/privacy}',
      received_events_url: 'https://api.github.com/users/ArturOPaes/received_events',
      type: 'User',
      site_admin: false
    },
    labels: [],
    state: 'open',
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 0,
    created_at: '2022-03-12T13:01:04Z',
    updated_at: '2022-03-12T13:01:04Z',
    closed_at: null,
    author_association: 'OWNER',
    active_lock_reason: null,
    body: 'teste',
    reactions: {
      url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/issues/1/reactions',
      total_count: 0,
      '+1': 0,
      '-1': 0,
      laugh: 0,
      hooray: 0,
      confused: 0,
      heart: 0,
      rocket: 0,
      eyes: 0
    },
    timeline_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/issues/1/timeline',
    performed_via_github_app: null
  },
  repository: {
    id: 466483150,
    node_id: 'R_kgDOG833zg',
    name: 'teste-clean-arch',
    full_name: 'ArturOPaes/teste-clean-arch',
    private: false,
    owner: {
      login: 'ArturOPaes',
      id: 5059595,
      node_id: 'MDQ6VXNlcjUwNTk1OTU=',
      avatar_url: 'https://avatars.githubusercontent.com/u/5059595?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/ArturOPaes',
      html_url: 'https://github.com/ArturOPaes',
      followers_url: 'https://api.github.com/users/ArturOPaes/followers',
      following_url: 'https://api.github.com/users/ArturOPaes/following{/other_user}',
      gists_url: 'https://api.github.com/users/ArturOPaes/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/ArturOPaes/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/ArturOPaes/subscriptions',
      organizations_url: 'https://api.github.com/users/ArturOPaes/orgs',
      repos_url: 'https://api.github.com/users/ArturOPaes/repos',
      events_url: 'https://api.github.com/users/ArturOPaes/events{/privacy}',
      received_events_url: 'https://api.github.com/users/ArturOPaes/received_events',
      type: 'User',
      site_admin: false
    },
    html_url: 'https://github.com/ArturOPaes/teste-clean-arch',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch',
    forks_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/forks',
    keys_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/keys{/key_id}',
    collaborators_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/teams',
    hooks_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/hooks',
    issue_events_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/issues/events{/number}',
    events_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/events',
    assignees_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/assignees{/user}',
    branches_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/branches{/branch}',
    tags_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/tags',
    blobs_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/languages',
    stargazers_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/stargazers',
    contributors_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/contributors',
    subscribers_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/subscribers',
    subscription_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/subscription',
    commits_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/commits{/sha}',
    git_commits_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/git/commits{/sha}',
    comments_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/comments{/number}',
    issue_comment_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/issues/comments{/number}',
    contents_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/contents/{+path}',
    compare_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/merges',
    archive_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/downloads',
    issues_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/issues{/number}',
    pulls_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/pulls{/number}',
    milestones_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/milestones{/number}',
    notifications_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/labels{/name}',
    releases_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/releases{/id}',
    deployments_url: 'https://api.github.com/repos/ArturOPaes/teste-clean-arch/deployments',
    created_at: '2022-03-05T14:55:53Z',
    updated_at: '2022-03-05T17:44:29Z',
    pushed_at: '2022-03-05T14:56:41Z',
    git_url: 'git://github.com/ArturOPaes/teste-clean-arch.git',
    ssh_url: 'git@github.com:ArturOPaes/teste-clean-arch.git',
    clone_url: 'https://github.com/ArturOPaes/teste-clean-arch.git',
    svn_url: 'https://github.com/ArturOPaes/teste-clean-arch',
    homepage: null,
    size: 8777,
    stargazers_count: 1,
    watchers_count: 1,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1,
    license: null,
    allow_forking: true,
    is_template: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 1,
    watchers: 1,
    default_branch: 'main'
  },
  sender: {
    login: 'ArturOPaes',
    id: 5059595,
    node_id: 'MDQ6VXNlcjUwNTk1OTU=',
    avatar_url: 'https://avatars.githubusercontent.com/u/5059595?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/ArturOPaes',
    html_url: 'https://github.com/ArturOPaes',
    followers_url: 'https://api.github.com/users/ArturOPaes/followers',
    following_url: 'https://api.github.com/users/ArturOPaes/following{/other_user}',
    gists_url: 'https://api.github.com/users/ArturOPaes/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/ArturOPaes/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/ArturOPaes/subscriptions',
    organizations_url: 'https://api.github.com/users/ArturOPaes/orgs',
    repos_url: 'https://api.github.com/users/ArturOPaes/repos',
    events_url: 'https://api.github.com/users/ArturOPaes/events{/privacy}',
    received_events_url: 'https://api.github.com/users/ArturOPaes/received_events',
    type: 'User',
    site_admin: false
  }
})
