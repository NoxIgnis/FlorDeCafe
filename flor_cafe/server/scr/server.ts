import { SetupApplication } from './index';
import {config} from "./configs/config";


class Server {
    static start(): void {
        const application = new SetupApplication(config?.port);
        application.init();
        application.start();
    }
}

Server.start();