import { PostgresDatabaseConfigModule } from '@/config/database/postgres/config.module';
import { PostgresDatabaseProviderModule } from '@/providers/database/postgres/provider.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    PostgresDatabaseConfigModule,
    PostgresDatabaseProviderModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
