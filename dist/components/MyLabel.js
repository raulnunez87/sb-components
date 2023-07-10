"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLabel = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./mylabel.css");
const MyLabel = ({ label = 'No Label', size = 'normal', color = 'primary', allCaps = false, fontColor = '', backgroundColor = 'transparent', ...props }) => {
    return ((0, jsx_runtime_1.jsx)("span", { className: ['label', `${size}`, `text-${color}`].join(' '), style: {
            color: fontColor,
            backgroundColor: backgroundColor,
        }, ...props, children: allCaps ? label.toUpperCase() : label }));
};
exports.MyLabel = MyLabel;
