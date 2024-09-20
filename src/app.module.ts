import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactsModule } from './contacts/contacts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'senac',
      database: 'contactdb',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ContactsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
