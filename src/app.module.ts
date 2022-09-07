import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepositoryStatisticsModule } from './repository-statistics.module';
import { BitbucketInfrastructureModule } from './bitbucket-infrastructure.module';
import { GithubIntrastructureModule } from './github-intrastructure.module';

const infra =
  process.env.MY_PROVIDER === 'BITBUCKET'
    ? [BitbucketInfrastructureModule]
    : [GithubIntrastructureModule];

@Module({
  imports: [RepositoryStatisticsModule.withInfra(infra)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
