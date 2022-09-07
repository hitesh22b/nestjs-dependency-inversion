import { Controller, Get } from '@nestjs/common';
import { GithubPullRequest } from './repository-statistics.interface';
import { RepositoryDataFetcher } from './repository-data-fetcher';

@Controller()
export class RepositoryStatisticsController {
  constructor(private repositoryDataFetcher: RepositoryDataFetcher) {
    console.log(process.env.MY_PROVIDER);
  }

  @Get('repos')
  getPrs(): GithubPullRequest[] {
    return this.repositoryDataFetcher.getPrs();
  }
}
