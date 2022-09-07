import { Module } from "@nestjs/common";
import { GithubService } from "./github.service";
import { RepositoryDataFetcher } from "./repository-data-fetcher";

@Module({
  imports: [],
  providers: [
    GithubService,
    { provide: RepositoryDataFetcher, useExisting: GithubService}
  ],
  exports: [RepositoryDataFetcher]
})
export class GithubIntrastructureModule {

}
