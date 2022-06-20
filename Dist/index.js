"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const postRout_1 = __importDefault(require("./router/postRout"));
const PORT = Number(process.env.PORT) || 3001;
const app = (0, express_1.default)();
app.use("/post", postRout_1.default);
app.use(express_1.default.json());
app.listen(PORT, () => console.log("port is running On port :" + PORT));
