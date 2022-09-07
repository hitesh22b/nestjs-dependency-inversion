import { PullRequest } from './repository-statistics.interface';

export abstract class RepositoryDataFetcher {
  abstract getPrs(): PullRequest[];
}
