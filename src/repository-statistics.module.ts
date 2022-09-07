import { DynamicModule, Module, ModuleMetadata } from '@nestjs/common';
import { RepositoryStatisticsController } from './repository-statistics.controller';

@Module({
  controllers: [RepositoryStatisticsController],
  providers: [],
})
export class RepositoryStatisticsModule {
  static withInfra(infra: ModuleMetadata['imports']): DynamicModule {
    infra = infra ?? [];
    return {
      module: RepositoryStatisticsModule,
      imports: [...infra],
    };
  }
}
