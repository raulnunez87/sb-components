"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBacgroundColor = exports.CustomFontColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
const MyLabel_1 = require("../../components/MyLabel");
const meta = {
    title: 'UI/MyLabel',
    component: MyLabel_1.MyLabel,
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'select', options: ['normal', 'h1', 'h2', 'h3'] },
        color: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
        fontColor: { control: 'color' },
    },
};
exports.default = meta;
exports.Basic = {
    args: {
        label: 'My Label',
        size: 'normal',
        allCaps: false,
    },
};
exports.AllCaps = {
    args: {
        label: 'My Label',
        size: 'h1',
        allCaps: true,
    },
};
exports.Secondary = {
    args: {
        label: 'My Label',
        size: 'normal',
        color: 'secondary',
    },
};
exports.Tertiary = {
    args: {
        label: 'My Label',
        size: 'normal',
        color: 'tertiary',
    },
};
exports.CustomFontColor = {
    args: {
        label: 'My Label',
        size: 'h1',
        fontColor: '#5517ac',
    },
};
exports.CustomBacgroundColor = {
    args: {
        label: 'My Label',
        size: 'h1',
        fontColor: '#eee',
        backgroundColor: '#000',
    },
};
// Custom font color
// fontColor: #5517ac
// size: h1
