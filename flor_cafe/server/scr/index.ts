// import express from 'express';
// import bodyParser from 'body-parser';
// import { Server } from 'http';
// import router from './routes';
// import cors from 'cors';
// import helmet from 'helmet';

// export class SetupApplication {
//   private server?: Server;

//   constructor(private port?: string | '5000', public app = express()) {}

//   public init(): void {
//     this.setupExpress();
//     this.setupRoutes();
//   }

//   private setupRoutes(): void {
//     this.app.use(
//       cors({
//         origin: '*',
//         // methods: "POST",
//       })
//     );
//     this.app.use(helmet());
//     this.app.use(router);
//   }

//   private setupExpress(): void {
//     this.app.use(bodyParser.json());
//     this.app.use(bodyParser.urlencoded({ extended: true }));
//   }

//   public start(): void {
//     this.server = this.app.listen(this.port, () => {
//       console.log(`Server running on port ${this.port}`);
//     });
//   }
// }
