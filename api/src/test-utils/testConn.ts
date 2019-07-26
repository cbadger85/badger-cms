import {
  createConnection,
  getConnectionOptions,
  ConnectionOptions,
} from 'typeorm';
import path from 'path';
import { User } from '../user/User.entity';

export const testConn = async (drop: boolean = false) => {
  // const connectionOptions = await getConnectionOptions();

  const dbPath = path.resolve(__dirname + '/../../data/db.test.sqlite');

  const testConnectionOptions: ConnectionOptions = {
    type: 'sqlite',
    database: ':memory:',
    logging: false,
    synchronize: false,
    dropSchema: drop,
    entities: [User],
  };

  return createConnection(testConnectionOptions);
};
