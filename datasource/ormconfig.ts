import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

import { TypeOrmNamingStrategy } from './config/naming-strategy.ts';

dotenv.config();

export default new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306', 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: false,
  logging: false,
  entities: ['./datasource/entity/**/*.entity.ts'],
  migrations: ['./datasource/migration/**/*.ts'],
  namingStrategy: new TypeOrmNamingStrategy(),
});
