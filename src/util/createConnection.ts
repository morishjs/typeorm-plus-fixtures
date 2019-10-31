import { Connection, ConnectionOptionsReader, getConnectionManager } from 'typeorm-plus';
import { ConnectionOptions } from 'typeorm-plus/connection/ConnectionOptions';

export async function createConnection(config: object, connectionName: string): Promise<Connection> {
    const options: ConnectionOptions | any = await new ConnectionOptionsReader(config).get(connectionName);

    return getConnectionManager()
        .create(options.default ? options.default : options)
        .connect();
}
