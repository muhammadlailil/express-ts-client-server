import express from "express";
import cors from 'cors';
import Constanta from '@config/constanta'
import { Route } from "src/route";


function main() {
    const app = express();
    const port = Constanta.APP_PORT;
    
    app.use(cors())
    app.use("/", Route);
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port} ⚡`);
    });
}

main();