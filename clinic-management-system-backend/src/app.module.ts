import { PostgresDatabaseProviderModule } from '@/providers/database/postgres/provider.module';
import { PostgresDatabaseConfigModule } from '@/config/database/postgres/config.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PostgresDatabaseConfigModule, PostgresDatabaseProviderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
