"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
// import boxRouter from './routes/box';
const app = (0, express_1.default)();
const PORT = 3001;
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, 'views'));
// app.use('/box', boxRouter);
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log("여기는 오는데...왜");
});
