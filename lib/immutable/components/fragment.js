'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _compose2 = require('recompose/compose');

var _compose3 = _interopRequireDefault(_compose2);

var _reactRedux = require('react-redux');

var _fragment = require('../../components/fragment');

var _propsToJs = require('./props-to-js');

var _propsToJs2 = _interopRequireDefault(_propsToJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _compose3.default)((0, _reactRedux.connect)(function (state) {
  return {
    location: state.get('router')
  };
}), _fragment.withIdAndContext)((0, _propsToJs2.default)(_fragment.FragmentComponent));