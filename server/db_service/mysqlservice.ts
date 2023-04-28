import { createPool, Pool, PoolConnection, RowDataPacket } from "mysql2/promise";
import * as dotenv from "dotenv";


class MysqlService {
  private readonly pool: Pool;

  constructor() {
    dotenv.config();
    this.pool = createPool({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }

  private async getConnection(): Promise<PoolConnection> {
    return await this.pool.getConnection();
  }

  public async query<T extends RowDataPacket>(query: string, params?: any[]): Promise<T[]> {
    const connection = await this.getConnection();
    try {
      const [rows] = await connection.query<T[]>(query, params);
      return rows;
    } finally {
      connection.release();
    }
  }
}

export default new MysqlService();