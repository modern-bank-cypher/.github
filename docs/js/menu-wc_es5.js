'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);
  var _super = _createSuper(_class);
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">stitch-api documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"changelog.html\"  data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>CHANGELOG\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AccountModule.html\" data-type=\"entity-link\" >AccountModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-AccountModule-9c0def3cfe032b556b7b857292613059db9013650d55a18712aaa04598928479e7d753e5b19f7a65e2cc79b350163d7ff8cb2d458293e9ac9a04bc77b9a5fb30"' : 'data-target="#xs-controllers-links-module-AccountModule-9c0def3cfe032b556b7b857292613059db9013650d55a18712aaa04598928479e7d753e5b19f7a65e2cc79b350163d7ff8cb2d458293e9ac9a04bc77b9a5fb30"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-AccountModule-9c0def3cfe032b556b7b857292613059db9013650d55a18712aaa04598928479e7d753e5b19f7a65e2cc79b350163d7ff8cb2d458293e9ac9a04bc77b9a5fb30"' : 'id="xs-controllers-links-module-AccountModule-9c0def3cfe032b556b7b857292613059db9013650d55a18712aaa04598928479e7d753e5b19f7a65e2cc79b350163d7ff8cb2d458293e9ac9a04bc77b9a5fb30"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/AccountController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AccountController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-AccountModule-9c0def3cfe032b556b7b857292613059db9013650d55a18712aaa04598928479e7d753e5b19f7a65e2cc79b350163d7ff8cb2d458293e9ac9a04bc77b9a5fb30"' : 'data-target="#xs-injectables-links-module-AccountModule-9c0def3cfe032b556b7b857292613059db9013650d55a18712aaa04598928479e7d753e5b19f7a65e2cc79b350163d7ff8cb2d458293e9ac9a04bc77b9a5fb30"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-AccountModule-9c0def3cfe032b556b7b857292613059db9013650d55a18712aaa04598928479e7d753e5b19f7a65e2cc79b350163d7ff8cb2d458293e9ac9a04bc77b9a5fb30"' : 'id="xs-injectables-links-module-AccountModule-9c0def3cfe032b556b7b857292613059db9013650d55a18712aaa04598928479e7d753e5b19f7a65e2cc79b350163d7ff8cb2d458293e9ac9a04bc77b9a5fb30"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AccountRepository.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AccountRepository</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/AccountService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AccountService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/DatabaseModule.html\" data-type=\"entity-link\" >DatabaseModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/EncryptionModule.html\" data-type=\"entity-link\" >EncryptionModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-EncryptionModule-9ae052172497fdf7808f378b032ee7a63c1f19daefa1a3f0b59b0dd1524c3a31de32cc1c478e335e3d1a4a4cdc9cadb3c8401d5c2a763ecf633b5f891c850280"' : 'data-target="#xs-controllers-links-module-EncryptionModule-9ae052172497fdf7808f378b032ee7a63c1f19daefa1a3f0b59b0dd1524c3a31de32cc1c478e335e3d1a4a4cdc9cadb3c8401d5c2a763ecf633b5f891c850280"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-EncryptionModule-9ae052172497fdf7808f378b032ee7a63c1f19daefa1a3f0b59b0dd1524c3a31de32cc1c478e335e3d1a4a4cdc9cadb3c8401d5c2a763ecf633b5f891c850280"' : 'id="xs-controllers-links-module-EncryptionModule-9ae052172497fdf7808f378b032ee7a63c1f19daefa1a3f0b59b0dd1524c3a31de32cc1c478e335e3d1a4a4cdc9cadb3c8401d5c2a763ecf633b5f891c850280"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/EncryptionController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >EncryptionController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-EncryptionModule-9ae052172497fdf7808f378b032ee7a63c1f19daefa1a3f0b59b0dd1524c3a31de32cc1c478e335e3d1a4a4cdc9cadb3c8401d5c2a763ecf633b5f891c850280"' : 'data-target="#xs-injectables-links-module-EncryptionModule-9ae052172497fdf7808f378b032ee7a63c1f19daefa1a3f0b59b0dd1524c3a31de32cc1c478e335e3d1a4a4cdc9cadb3c8401d5c2a763ecf633b5f891c850280"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-EncryptionModule-9ae052172497fdf7808f378b032ee7a63c1f19daefa1a3f0b59b0dd1524c3a31de32cc1c478e335e3d1a4a4cdc9cadb3c8401d5c2a763ecf633b5f891c850280"' : 'id="xs-injectables-links-module-EncryptionModule-9ae052172497fdf7808f378b032ee7a63c1f19daefa1a3f0b59b0dd1524c3a31de32cc1c478e335e3d1a4a4cdc9cadb3c8401d5c2a763ecf633b5f891c850280"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/EncryptionService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >EncryptionService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/HeimdallModule.html\" data-type=\"entity-link\" >HeimdallModule</a>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-HeimdallModule-b8d3ab1f62f634bf561fbca35a4fad370c6b815d5dfd6efc280d87ffb1c82091dc524dd383083d31381e99d0150d4a3e77b6f1d2f2686446a1cc1c092aff4483"' : 'data-target="#xs-injectables-links-module-HeimdallModule-b8d3ab1f62f634bf561fbca35a4fad370c6b815d5dfd6efc280d87ffb1c82091dc524dd383083d31381e99d0150d4a3e77b6f1d2f2686446a1cc1c092aff4483"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-HeimdallModule-b8d3ab1f62f634bf561fbca35a4fad370c6b815d5dfd6efc280d87ffb1c82091dc524dd383083d31381e99d0150d4a3e77b6f1d2f2686446a1cc1c092aff4483"' : 'id="xs-injectables-links-module-HeimdallModule-b8d3ab1f62f634bf561fbca35a4fad370c6b815d5dfd6efc280d87ffb1c82091dc524dd383083d31381e99d0150d4a3e77b6f1d2f2686446a1cc1c092aff4483"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/HeimdallService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HeimdallService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/StitchModule.html\" data-type=\"entity-link\" >StitchModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/TestModule.html\" data-type=\"entity-link\" >TestModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/TokenModule.html\" data-type=\"entity-link\" >TokenModule</a>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-TokenModule-7e06fce34db4cd85da6e754a703a7643f201aaaaec63295089e33df39603cdf8f1276148641d8f577dc92f4f9471d627f8b4c206ca3f9badbe99a912d1edab94"' : 'data-target="#xs-injectables-links-module-TokenModule-7e06fce34db4cd85da6e754a703a7643f201aaaaec63295089e33df39603cdf8f1276148641d8f577dc92f4f9471d627f8b4c206ca3f9badbe99a912d1edab94"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-TokenModule-7e06fce34db4cd85da6e754a703a7643f201aaaaec63295089e33df39603cdf8f1276148641d8f577dc92f4f9471d627f8b4c206ca3f9badbe99a912d1edab94"' : 'id="xs-injectables-links-module-TokenModule-7e06fce34db4cd85da6e754a703a7643f201aaaaec63295089e33df39603cdf8f1276148641d8f577dc92f4f9471d627f8b4c206ca3f9badbe99a912d1edab94"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/JwtStrategy.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >JwtStrategy</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/RefreshTokensRepository.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >RefreshTokensRepository</a>\n                                        </li>\n                                        <li class=\"link\">\n                                            <a href=\"injectables/TokensService.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >TokensService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/UptimeModule.html\" data-type=\"entity-link\" >UptimeModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#controllers-links-module-UptimeModule-e79674532a340d7fc986ee7a3feb1ad98b67d4c9734adb524e9c4d2ca08896fabc3579b47a36dc3feeebdfbea99b9569314c5502618a9a0bd93b0e42bc3dae89"' : 'data-target="#xs-controllers-links-module-UptimeModule-e79674532a340d7fc986ee7a3feb1ad98b67d4c9734adb524e9c4d2ca08896fabc3579b47a36dc3feeebdfbea99b9569314c5502618a9a0bd93b0e42bc3dae89"', ">\n                                            <span class=\"icon ion-md-swap\"></span>\n                                            <span>Controllers</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="controllers-links-module-UptimeModule-e79674532a340d7fc986ee7a3feb1ad98b67d4c9734adb524e9c4d2ca08896fabc3579b47a36dc3feeebdfbea99b9569314c5502618a9a0bd93b0e42bc3dae89"' : 'id="xs-controllers-links-module-UptimeModule-e79674532a340d7fc986ee7a3feb1ad98b67d4c9734adb524e9c4d2ca08896fabc3579b47a36dc3feeebdfbea99b9569314c5502618a9a0bd93b0e42bc3dae89"', ">\n                                            <li class=\"link\">\n                                                <a href=\"controllers/UptimeController.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >UptimeController</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/ValidationModule.html\" data-type=\"entity-link\" >ValidationModule</a>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links-module-ValidationModule-6a4f10841da2345eefbc9ab263cc57d78796465abf848b820098918a4d22cefb9c0cb6e11f3bd994b7468fb4ada40c849a1f26659063e5644c2247fa398d4db7"' : 'data-target="#xs-injectables-links-module-ValidationModule-6a4f10841da2345eefbc9ab263cc57d78796465abf848b820098918a4d22cefb9c0cb6e11f3bd994b7468fb4ada40c849a1f26659063e5644c2247fa398d4db7"', ">\n                                        <span class=\"icon ion-md-arrow-round-down\"></span>\n                                        <span>Injectables</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="injectables-links-module-ValidationModule-6a4f10841da2345eefbc9ab263cc57d78796465abf848b820098918a4d22cefb9c0cb6e11f3bd994b7468fb4ada40c849a1f26659063e5644c2247fa398d4db7"' : 'id="xs-injectables-links-module-ValidationModule-6a4f10841da2345eefbc9ab263cc57d78796465abf848b820098918a4d22cefb9c0cb6e11f3bd994b7468fb4ada40c849a1f26659063e5644c2247fa398d4db7"', ">\n                                        <li class=\"link\">\n                                            <a href=\"injectables/ValidationPipe.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ValidationPipe</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/AccountResponseDto.html\" data-type=\"entity-link\" >AccountResponseDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/AccountTokenResponseDto.html\" data-type=\"entity-link\" >AccountTokenResponseDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/AuthenticationResponseDto.html\" data-type=\"entity-link\" >AuthenticationResponseDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateAccountDto.html\" data-type=\"entity-link\" >CreateAccountDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateDecryptionDto.html\" data-type=\"entity-link\" >CreateDecryptionDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/CreateEncryptionDto.html\" data-type=\"entity-link\" >CreateEncryptionDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/HttpExceptionFilter.html\" data-type=\"entity-link\" >HttpExceptionFilter</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/LoginDto.html\" data-type=\"entity-link\" >LoginDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/RefreshTokenDto.html\" data-type=\"entity-link\" >RefreshTokenDto</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/ResponseEncryptionDto.html\" data-type=\"entity-link\" >ResponseEncryptionDto</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/AccountRepository.html\" data-type=\"entity-link\" >AccountRepository</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/JWTGuard.html\" data-type=\"entity-link\" >JWTGuard</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/LoggerMiddleware.html\" data-type=\"entity-link\" >LoggerMiddleware</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/RefreshTokensRepository.html\" data-type=\"entity-link\" >RefreshTokensRepository</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/SecurityMiddleware.html\" data-type=\"entity-link\" >SecurityMiddleware</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/TimeoutInterceptor.html\" data-type=\"entity-link\" >TimeoutInterceptor</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/AccessTokenPayload.html\" data-type=\"entity-link\" >AccessTokenPayload</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Account.html\" data-type=\"entity-link\" >Account</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/AccountToken.html\" data-type=\"entity-link\" >AccountToken</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/DecryptedResponse.html\" data-type=\"entity-link\" >DecryptedResponse</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/EncryptedResponse.html\" data-type=\"entity-link\" >EncryptedResponse</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/HandshakeResponse.html\" data-type=\"entity-link\" >HandshakeResponse</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IRepository.html\" data-type=\"entity-link\" >IRepository</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IService.html\" data-type=\"entity-link\" >IService</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/RefreshToken.html\" data-type=\"entity-link\" >RefreshToken</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/RefreshTokenPayload.html\" data-type=\"entity-link\" >RefreshTokenPayload</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/ResponseInterface.html\" data-type=\"entity-link\" >ResponseInterface</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/typealiases.html\" data-type=\"entity-link\">Type aliases</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));