"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    console.log(req.query);
    // const svg = BoxService.generateBox(req.query);
    res.setHeader('Content-Type', 'image/svg+xml');
    // res.send(svg);
    res.send('<svg></svg>');
});
exports.default = router;
