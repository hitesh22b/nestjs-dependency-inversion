import { Injectable } from '@nestjs/common';
import { GithubPullRequest } from './repository-statistics.interface';
import { RepositoryDataFetcher } from './repository-data-fetcher';

@Injectable()
export class GithubService implements RepositoryDataFetcher {
  getPrs(): GithubPullRequest[] {
    return [{ id: 'githubId' }];
  }
}
