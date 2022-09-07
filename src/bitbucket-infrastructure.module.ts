import { Module } from '@nestjs/common';
import { BitbucketService } from './bitbucket.service';
import { RepositoryDataFetcher } from './repository-data-fetcher';

@Module({
  providers: [
    BitbucketService,
    { provide: RepositoryDataFetcher, useExisting: BitbucketService },
  ],
  exports: [RepositoryDataFetcher],
})
export class BitbucketInfrastructureModule {}
