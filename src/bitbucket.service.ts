import { RepositoryDataFetcher } from './repository-data-fetcher';
import { BitBucketPullRequest } from './repository-statistics.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BitbucketService implements RepositoryDataFetcher {
  getPrs(): BitBucketPullRequest[] {
    return [{ id: 'bitBucketId' }];
  }
}
