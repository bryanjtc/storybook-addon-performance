"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var server_1 = tslib_1.__importDefault(require("react-dom/server"));
var gzip_js_1 = tslib_1.__importDefault(require("gzip-js"));
var convert_bytes_to_1 = require("../../util/convert-bytes-to");
var renderToString = {
    type: 'timed',
    name: 'Render to string',
    description: "This task records how long a ReactDOM.renderToString() call takes",
    run: function (_a) {
        var getElement = _a.getElement;
        return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_b) {
                server_1.default.renderToString(getElement());
                return [2];
            });
        });
    },
};
var renderToStaticMarkup = {
    type: 'timed',
    name: 'Render to static markup (cannot be hydrated)',
    description: "\n    This task records how long a ReactDOM.renderToStaticMarkup() call takes.\n    This output cannot be hydrated on the client\n  ",
    run: function (_a) {
        var getElement = _a.getElement;
        return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_b) {
                server_1.default.renderToStaticMarkup(getElement());
                return [2];
            });
        });
    },
};
var getRawStringSizeInKB = {
    type: 'static',
    name: 'String output size',
    description: "\n    The size of the string generated by ReactDOM.renderToString().\n  ",
    scale: 'kb',
    run: function (_a) {
        var getElement = _a.getElement;
        return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            var output, blob;
            return tslib_1.__generator(this, function (_b) {
                output = server_1.default.renderToString(getElement());
                blob = new Blob([output]);
                return [2, convert_bytes_to_1.bytesToKiloBytes(blob.size)];
            });
        });
    },
};
var getGzipStringSizeInKB = {
    type: 'static',
    name: 'String output size (gzip)',
    description: "\n    The gzipped size of the string generated by ReactDOM.renderToString().\n  ",
    scale: 'kb',
    run: function (_a) {
        var getElement = _a.getElement;
        return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            var output, bytes;
            return tslib_1.__generator(this, function (_b) {
                output = server_1.default.renderToString(getElement());
                bytes = gzip_js_1.default.zip(output, { level: 9 }).length;
                return [2, convert_bytes_to_1.bytesToKiloBytes(bytes)];
            });
        });
    },
};
var getRawStaticMarkupSizeInKB = {
    type: 'static',
    name: 'Static markup output size',
    description: "\n    The size of the string generated by ReactDOM.renderToStaticMarkup().\n  ",
    scale: 'kb',
    run: function (_a) {
        var getElement = _a.getElement;
        return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            var output, blob;
            return tslib_1.__generator(this, function (_b) {
                output = server_1.default.renderToStaticMarkup(getElement());
                blob = new Blob([output]);
                return [2, convert_bytes_to_1.bytesToKiloBytes(blob.size)];
            });
        });
    },
};
var getGzipStaticMarkupSizeInKB = {
    type: 'static',
    name: 'Static markup output size (gzip)',
    description: "\n    The gzipped size of the string generated by ReactDOM.renderToStaticMarkup().\n  ",
    scale: 'kb',
    run: function (_a) {
        var getElement = _a.getElement;
        return tslib_1.__awaiter(void 0, void 0, void 0, function () {
            var output, bytes;
            return tslib_1.__generator(this, function (_b) {
                output = server_1.default.renderToStaticMarkup(getElement());
                bytes = gzip_js_1.default.zip(output, { level: 9 }).length;
                return [2, convert_bytes_to_1.bytesToKiloBytes(bytes)];
            });
        });
    },
};
var group = {
    groupId: 'Server',
    name: 'Server ☁️',
    tasks: [
        renderToString,
        renderToStaticMarkup,
        getRawStringSizeInKB,
        getGzipStringSizeInKB,
        getRawStaticMarkupSizeInKB,
        getGzipStaticMarkupSizeInKB,
    ],
};
exports.default = group;