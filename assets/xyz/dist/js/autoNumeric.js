! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AutoNumeric = t() : e.AutoNumeric = t()
}(this, function() {
    return function(e) {
        function t(n) {
            if (i[n]) return i[n].exports;
            var a = i[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return e[n].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
        }
        var i = {};
        return t.m = e, t.c = i, t.p = "", t(0)
    }([function(e, t, i) {
        i(8), e.exports = i(1)
    }, function(e, t, i) {
        (function() {
            "use strict";

            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function n(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
                    return i
                }
                return Array.from(e)
            }

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            var s = function() {
                    function e(e, t) {
                        var i = [],
                            n = !0,
                            a = !1,
                            s = void 0;
                        try {
                            for (var r, o = e[Symbol.iterator](); !(n = (r = o.next()).done) && (i.push(r.value), !t || i.length !== t); n = !0);
                        } catch (e) {
                            a = !0, s = e
                        } finally {
                            try {
                                !n && o.return && o.return()
                            } finally {
                                if (a) throw s
                            }
                        }
                        return i
                    }
                    return function(t, i) {
                        if (Array.isArray(t)) return t;
                        if (Symbol.iterator in Object(t)) return e(t, i);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(),
                r = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                    }
                    return e
                },
                o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                l = function() {
                    function e(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, i, n) {
                        return i && e(t.prototype, i), n && e(t, n), t
                    }
                }(),
                u = i(3),
                c = t(u),
                d = i(2),
                h = t(d),
                m = function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            i = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                        a(this, e);
                        var r = e._setArgumentsValues(t, n, s),
                            o = r.domElement,
                            l = r.initialValue,
                            u = r.userOptions;
                        this.domElement = o, this.defaultRawValue = "", this._setSettings(u, !1), this._checkElement(), this.savedCancellableValue = null, this.historyTable = [], this.historyTableIndex = -1, this.onGoingRedo = !1, this.parentForm = this._getParentForm(), !this.runOnce && this.settings.formatOnPageLoad && this._formatDefaultValueOnPageLoad(l), this.runOnce = !0, (this.isInputElement || this.isContentEditable) && (this.settings.noEventListeners || this._createEventListeners(), this._setReadOnly()), this._saveInitialValues(l), this.sessionStorageAvailable = this.constructor._storageTest(), this.storageNamePrefix = "AUTO_", this._setPersistentStorageName(), this.isFocused = !1, this.isWheelEvent = !1, this.isDropEvent = !1, this.isEditing = !1, this.settings.createLocalList && this._createLocalList(), this.constructor._addToGlobalList(this), this.global = {
                            set: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                i.autoNumericLocalList.forEach(function(i) {
                                    i.set(e, t)
                                })
                            },
                            setUnformatted: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                                i.autoNumericLocalList.forEach(function(i) {
                                    i.setUnformatted(e, t)
                                })
                            },
                            get: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                    t = [];
                                return i.autoNumericLocalList.forEach(function(e) {
                                    t.push(e.get())
                                }), i._executeCallback(t, e), t
                            },
                            getNumericString: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                    t = [];
                                return i.autoNumericLocalList.forEach(function(e) {
                                    t.push(e.getNumericString())
                                }), i._executeCallback(t, e), t
                            },
                            getFormatted: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                    t = [];
                                return i.autoNumericLocalList.forEach(function(e) {
                                    t.push(e.getFormatted())
                                }), i._executeCallback(t, e), t
                            },
                            getNumber: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                    t = [];
                                return i.autoNumericLocalList.forEach(function(e) {
                                    t.push(e.getNumber())
                                }), i._executeCallback(t, e), t
                            },
                            getLocalized: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                    t = [];
                                return i.autoNumericLocalList.forEach(function(e) {
                                    t.push(e.getLocalized())
                                }), i._executeCallback(t, e), t
                            },
                            reformat: function() {
                                i.autoNumericLocalList.forEach(function(e) {
                                    e.reformat()
                                })
                            },
                            unformat: function() {
                                i.autoNumericLocalList.forEach(function(e) {
                                    e.unformat()
                                })
                            },
                            unformatLocalized: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                                i.autoNumericLocalList.forEach(function(t) {
                                    t.unformatLocalized(e)
                                })
                            },
                            update: function() {
                                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                i.autoNumericLocalList.forEach(function(e) {
                                    e.update.apply(e, t)
                                })
                            },
                            isPristine: function e() {
                                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                                    e = !0;
                                return i.autoNumericLocalList.forEach(function(i) {
                                    e && !i.isPristine(t) && (e = !1)
                                }), e
                            },
                            clear: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                i.autoNumericLocalList.forEach(function(t) {
                                    t.clear(e)
                                })
                            },
                            remove: function() {
                                i.autoNumericLocalList.forEach(function(e) {
                                    e.remove()
                                })
                            },
                            wipe: function() {
                                i.autoNumericLocalList.forEach(function(e) {
                                    e.wipe()
                                })
                            },
                            nuke: function() {
                                i.autoNumericLocalList.forEach(function(e) {
                                    e.nuke()
                                })
                            },
                            has: function(t) {
                                var n = void 0;
                                return n = t instanceof e ? i.autoNumericLocalList.has(t.node()) : i.autoNumericLocalList.has(t)
                            },
                            addObject: function(t) {
                                var n = void 0,
                                    a = void 0;
                                t instanceof e ? (n = t.node(), a = t) : (n = t, a = e.getAutoNumericElement(t)), i._hasLocalList() || i._createLocalList();
                                var s = a._getLocalList();
                                0 === s.size && (a._createLocalList(), s = a._getLocalList());
                                var r = void 0;
                                s instanceof Map ? r = c.default.mergeMaps(i._getLocalList(), s) : (i._addToLocalList(n, a), r = i._getLocalList()), r.forEach(function(e) {
                                    e._setLocalList(r)
                                })
                            },
                            removeObject: function(t) {
                                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    a = void 0,
                                    s = void 0;
                                t instanceof e ? (a = t.node(), s = t) : (a = t, s = e.getAutoNumericElement(t));
                                var r = i.autoNumericLocalList;
                                i.autoNumericLocalList.delete(a), r.forEach(function(e) {
                                    e._setLocalList(i.autoNumericLocalList)
                                }), n || a !== i.node() ? s._createLocalList() : s._setLocalList(new Map)
                            },
                            empty: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    t = i.autoNumericLocalList;
                                t.forEach(function(t) {
                                    e ? t._createLocalList() : t._setLocalList(new Map)
                                })
                            },
                            elements: function() {
                                var e = [];
                                return i.autoNumericLocalList.forEach(function(t) {
                                    e.push(t.node())
                                }), e
                            },
                            getList: function() {
                                return i.autoNumericLocalList
                            },
                            size: function() {
                                return i.autoNumericLocalList.size
                            }
                        }, this.options = {
                            reset: function() {
                                return i.settings = {
                                    rawValue: i.defaultRawValue
                                }, i.update(e.defaultSettings), i
                            },
                            allowDecimalPadding: function(e) {
                                return i.update({
                                    allowDecimalPadding: e
                                }), i
                            },
                            caretPositionOnFocus: function(e) {
                                return i.settings.caretPositionOnFocus = e, i
                            },
                            createLocalList: function(e) {
                                return i.settings.createLocalList = e, i.settings.createLocalList ? i._hasLocalList() || i._createLocalList() : i._deleteLocalList(), i
                            },
                            currencySymbol: function(e) {
                                return i.update({
                                    currencySymbol: e
                                }), i
                            },
                            currencySymbolPlacement: function(e) {
                                return i.update({
                                    currencySymbolPlacement: e
                                }), i
                            },
                            decimalCharacter: function(e) {
                                return i.update({
                                    decimalCharacter: e
                                }), i
                            },
                            decimalCharacterAlternative: function(e) {
                                return i.settings.decimalCharacterAlternative = e, i
                            },
                            decimalPlaces: function(e) {
                                return c.default.warning("Using `options.decimalPlaces()` instead of calling the specific `options.decimalPlacesRawValue()`, `options.decimalPlacesShownOnFocus()` and `options.decimalPlacesShownOnBlur()` methods will reset those options.\nPlease call the specific methods if you do not want to reset those.", i.settings.showWarnings), i.update({
                                    decimalPlaces: e
                                }), i
                            },
                            decimalPlacesRawValue: function(e) {
                                return i.update({
                                    decimalPlacesRawValue: e
                                }), i
                            },
                            decimalPlacesShownOnBlur: function(e) {
                                return i.update({
                                    decimalPlacesShownOnBlur: e
                                }), i
                            },
                            decimalPlacesShownOnFocus: function(e) {
                                return i.update({
                                    decimalPlacesShownOnFocus: e
                                }), i
                            },
                            defaultValueOverride: function(e) {
                                return i.update({
                                    defaultValueOverride: e
                                }), i
                            },
                            digitalGroupSpacing: function(e) {
                                return i.update({
                                    digitalGroupSpacing: e
                                }), i
                            },
                            digitGroupSeparator: function(e) {
                                return i.update({
                                    digitGroupSeparator: e
                                }), i
                            },
                            divisorWhenUnfocused: function(e) {
                                return i.update({
                                    divisorWhenUnfocused: e
                                }), i
                            },
                            emptyInputBehavior: function(t) {
                                return null === i.rawValue && t !== e.options.emptyInputBehavior.null && (c.default.warning("You are trying to modify the `emptyInputBehavior` option to something different than `'null'` (" + t + "), but the element raw value is currently set to `null`. This would result in an invalid `rawValue`. In order to fix that, the element value has been changed to the empty string `''`.", i.settings.showWarnings), i.rawValue = ""), i.update({
                                    emptyInputBehavior: t
                                }), i
                            },
                            failOnUnknownOption: function(e) {
                                return i.settings.failOnUnknownOption = e, i
                            },
                            formatOnPageLoad: function(e) {
                                return i.settings.formatOnPageLoad = e, i
                            },
                            historySize: function(e) {
                                return i.settings.historySize = e, i
                            },
                            isCancellable: function(e) {
                                return i.settings.isCancellable = e, i
                            },
                            leadingZero: function(e) {
                                return i.update({
                                    leadingZero: e
                                }), i
                            },
                            maximumValue: function(e) {
                                return i.update({
                                    maximumValue: e
                                }), i
                            },
                            minimumValue: function(e) {
                                return i.update({
                                    minimumValue: e
                                }), i
                            },
                            modifyValueOnWheel: function(e) {
                                return i.settings.modifyValueOnWheel = e, i
                            },
                            negativeBracketsTypeOnBlur: function(e) {
                                return i.update({
                                    negativeBracketsTypeOnBlur: e
                                }), i
                            },
                            negativePositiveSignPlacement: function(e) {
                                return i.update({
                                    negativePositiveSignPlacement: e
                                }), i
                            },
                            noEventListeners: function(t) {
                                return t === e.options.noEventListeners.noEvents && i.settings.noEventListeners === e.options.noEventListeners.addEvents && i._removeEventListeners(), i.update({
                                    noEventListeners: t
                                }), i
                            },
                            onInvalidPaste: function(e) {
                                return i.settings.onInvalidPaste = e, i
                            },
                            outputFormat: function(e) {
                                return i.settings.outputFormat = e, i
                            },
                            overrideMinMaxLimits: function(e) {
                                return i.update({
                                    overrideMinMaxLimits: e
                                }), i
                            },
                            rawValueDivisor: function(e) {
                                return i.update({
                                    rawValueDivisor: e
                                }), i
                            },
                            readOnly: function(e) {
                                return i.settings.readOnly = e, i._setReadOnly(), i
                            },
                            roundingMethod: function(e) {
                                return i.update({
                                    roundingMethod: e
                                }), i
                            },
                            saveValueToSessionStorage: function(e) {
                                return i.update({
                                    saveValueToSessionStorage: e
                                }), i
                            },
                            symbolWhenUnfocused: function(e) {
                                return i.update({
                                    symbolWhenUnfocused: e
                                }), i
                            },
                            selectNumberOnly: function(e) {
                                return i.settings.selectNumberOnly = e, i
                            },
                            selectOnFocus: function(e) {
                                return i.settings.selectOnFocus = e, i
                            },
                            serializeSpaces: function(e) {
                                return i.settings.serializeSpaces = e, i
                            },
                            showOnlyNumbersOnFocus: function(e) {
                                return i.update({
                                    showOnlyNumbersOnFocus: e
                                }), i
                            },
                            showPositiveSign: function(e) {
                                return i.update({
                                    showPositiveSign: e
                                }), i
                            },
                            showWarnings: function(e) {
                                return i.settings.showWarnings = e, i
                            },
                            styleRules: function(e) {
                                return i.update({
                                    styleRules: e
                                }), i
                            },
                            suffixText: function(e) {
                                return i.update({
                                    suffixText: e
                                }), i
                            },
                            unformatOnHover: function(e) {
                                return i.settings.unformatOnHover = e, i
                            },
                            unformatOnSubmit: function(e) {
                                return i.settings.unformatOnSubmit = e, i
                            },
                            wheelStep: function(e) {
                                return i.settings.wheelStep = e, i
                            }
                        }
                    }
                    return l(e, [{
                        key: "_saveInitialValues",
                        value: function(e) {
                            this.initialValueHtmlAttribute = this.domElement.getAttribute("value"), c.default.isNull(this.initialValueHtmlAttribute) && (this.initialValueHtmlAttribute = ""), this.initialValue = e, c.default.isNull(this.initialValue) && (this.initialValue = "")
                        }
                    }, {
                        key: "_createEventListeners",
                        value: function() {
                            var t = this;
                            this._onFocusInFunc = function(e) {
                                t._onFocusIn(e)
                            }, this._onFocusInAndMouseEnterFunc = function(e) {
                                t._onFocusInAndMouseEnter(e)
                            }, this._onFocusFunc = function() {
                                t._onFocus()
                            }, this._onKeydownFunc = function(e) {
                                t._onKeydown(e)
                            }, this._onKeypressFunc = function(e) {
                                t._onKeypress(e)
                            }, this._onInputFunc = function(e) {
                                t._onInput(e)
                            }, this._onKeyupFunc = function(e) {
                                t._onKeyup(e)
                            }, this._onFocusOutAndMouseLeaveFunc = function(e) {
                                t._onFocusOutAndMouseLeave(e)
                            }, this._onPasteFunc = function(e) {
                                t._onPaste(e)
                            }, this._onWheelFunc = function(e) {
                                t._onWheel(e)
                            }, this._onFormSubmitFunc = function() {
                                t._onFormSubmit()
                            }, this._onKeydownGlobalFunc = function(e) {
                                t._onKeydownGlobal(e)
                            }, this._onKeyupGlobalFunc = function(e) {
                                t._onKeyupGlobal(e)
                            }, this._onDropFunc = function(e) {
                                t._onDrop(e)
                            }, this.domElement.addEventListener("focusin", this._onFocusInFunc, !1), this.domElement.addEventListener("focus", this._onFocusInAndMouseEnterFunc, !1), this.domElement.addEventListener("focus", this._onFocusFunc, !1), this.domElement.addEventListener("mouseenter", this._onFocusInAndMouseEnterFunc, !1), this.domElement.addEventListener("keydown", this._onKeydownFunc, !1), this.domElement.addEventListener("keypress", this._onKeypressFunc, !1), this.domElement.addEventListener("input", this._onInputFunc, !1), this.domElement.addEventListener("keyup", this._onKeyupFunc, !1), this.domElement.addEventListener("blur", this._onFocusOutAndMouseLeaveFunc, !1), this.domElement.addEventListener("mouseleave", this._onFocusOutAndMouseLeaveFunc, !1), this.domElement.addEventListener("paste", this._onPasteFunc, !1), this.domElement.addEventListener("wheel", this._onWheelFunc, !1), this.domElement.addEventListener("drop", this._onDropFunc, !1), c.default.isNull(this.parentForm) || this.parentForm.addEventListener("submit", this._onFormSubmitFunc, !1), e._doesGlobalListExists() || (document.addEventListener("keydown", this._onKeydownGlobalFunc, !1), document.addEventListener("keyup", this._onKeyupGlobalFunc, !1))
                        }
                    }, {
                        key: "_removeEventListeners",
                        value: function() {
                            this.domElement.removeEventListener("focusin", this._onFocusInFunc, !1), this.domElement.removeEventListener("focus", this._onFocusInAndMouseEnterFunc, !1), this.domElement.removeEventListener("focus", this._onFocusFunc, !1), this.domElement.removeEventListener("mouseenter", this._onFocusInAndMouseEnterFunc, !1), this.domElement.removeEventListener("blur", this._onFocusOutAndMouseLeaveFunc, !1), this.domElement.removeEventListener("mouseleave", this._onFocusOutAndMouseLeaveFunc, !1), this.domElement.removeEventListener("keydown", this._onKeydownFunc, !1), this.domElement.removeEventListener("keypress", this._onKeypressFunc, !1), this.domElement.removeEventListener("input", this._onInputFunc, !1), this.domElement.removeEventListener("keyup", this._onKeyupFunc, !1), this.domElement.removeEventListener("paste", this._onPasteFunc, !1), this.domElement.removeEventListener("wheel", this._onWheelFunc, !1), document.removeEventListener("keydown", this._onKeydownGlobalFunc, !1), document.removeEventListener("keyup", this._onKeyupGlobalFunc, !1), c.default.isNull(this.parentForm) || this.parentForm.removeEventListener("submit", this._onFormSubmitFunc, !1)
                        }
                    }, {
                        key: "_setReadOnly",
                        value: function() {
                            this.isInputElement && this.settings.readOnly && (this.domElement.readOnly = !0)
                        }
                    }, {
                        key: "_historyTableAdd",
                        value: function() {
                            var e = 0 === this.historyTable.length;
                            if (e || this.rawValue !== this._historyTableCurrentValueUsed()) {
                                var t = !0;
                                if (!e) {
                                    var i = this.historyTableIndex + 1;
                                    i < this.historyTable.length && this.rawValue === this.historyTable[i].value ? t = !1 : c.default.arrayTrim(this.historyTable, this.historyTableIndex + 1)
                                }
                                if (this.historyTableIndex++, t) {
                                    var n = c.default.getElementSelection(this.domElement);
                                    this.selectionStart = n.start, this.selectionEnd = n.end, this.historyTable.push({
                                        value: this.rawValue,
                                        start: this.selectionStart + 1,
                                        end: this.selectionEnd + 1
                                    }), this.historyTable.length > 1 && (this.historyTable[this.historyTableIndex - 1].start = this.selectionStart, this.historyTable[this.historyTableIndex - 1].end = this.selectionEnd)
                                }
                                this.historyTable.length > this.settings.historySize && this._historyTableForget()
                            }
                        }
                    }, {
                        key: "_historyTableUndoOrRedo",
                        value: function() {
                            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                                t = void 0;
                            if (e ? (t = this.historyTableIndex > 0, t && this.historyTableIndex--) : (t = this.historyTableIndex + 1 < this.historyTable.length, t && this.historyTableIndex++), t) {
                                var i = this.historyTable[this.historyTableIndex];
                                this.set(i.value, null, !1), c.default.setElementSelection(this.domElement, i.start, i.end)
                            }
                        }
                    }, {
                        key: "_historyTableUndo",
                        value: function() {
                            this._historyTableUndoOrRedo(!0)
                        }
                    }, {
                        key: "_historyTableRedo",
                        value: function() {
                            this._historyTableUndoOrRedo(!1)
                        }
                    }, {
                        key: "_historyTableForget",
                        value: function() {
                            for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, t = [], i = 0; i < e; i++) t.push(this.historyTable.shift()), this.historyTableIndex--, this.historyTableIndex < 0 && (this.historyTableIndex = 0);
                            return 1 === t.length ? t[0] : t
                        }
                    }, {
                        key: "_historyTableCurrentValueUsed",
                        value: function() {
                            var e = this.historyTableIndex;
                            e < 0 && (e = 0);
                            var t = void 0;
                            return t = c.default.isUndefinedOrNullOrEmpty(this.historyTable[e]) ? "" : this.historyTable[e].value
                        }
                    }, {
                        key: "_parseStyleRules",
                        value: function() {
                            var e = this;
                            c.default.isUndefinedOrNullOrEmpty(this.settings.styleRules) || "" === this.rawValue || (c.default.isUndefinedOrNullOrEmpty(this.settings.styleRules.positive) || (this.rawValue >= 0 ? this._addCSSClass(this.settings.styleRules.positive) : this._removeCSSClass(this.settings.styleRules.positive)), c.default.isUndefinedOrNullOrEmpty(this.settings.styleRules.negative) || (this.rawValue < 0 ? this._addCSSClass(this.settings.styleRules.negative) : this._removeCSSClass(this.settings.styleRules.negative)), c.default.isUndefinedOrNullOrEmpty(this.settings.styleRules.ranges) || 0 === this.settings.styleRules.ranges.length || this.settings.styleRules.ranges.forEach(function(t) {
                                e.rawValue >= t.min && e.rawValue < t.max ? e._addCSSClass(t.class) : e._removeCSSClass(t.class)
                            }), c.default.isUndefinedOrNullOrEmpty(this.settings.styleRules.userDefined) || 0 === this.settings.styleRules.userDefined.length || this.settings.styleRules.userDefined.forEach(function(t) {
                                if (c.default.isFunction(t.callback))
                                    if (c.default.isString(t.classes)) t.callback(e.rawValue) ? e._addCSSClass(t.classes) : e._removeCSSClass(t.classes);
                                    else if (c.default.isArray(t.classes))
                                    if (2 === t.classes.length) t.callback(e.rawValue) ? (e._addCSSClass(t.classes[0]), e._removeCSSClass(t.classes[1])) : (e._removeCSSClass(t.classes[0]), e._addCSSClass(t.classes[1]));
                                    else if (t.classes.length > 2) {
                                    var i = t.callback(e.rawValue);
                                    c.default.isArray(i) ? t.classes.forEach(function(t, n) {
                                        c.default.isInArray(n, i) ? e._addCSSClass(t) : e._removeCSSClass(t)
                                    }) : c.default.isInt(i) ? t.classes.forEach(function(t, n) {
                                        n === i ? e._addCSSClass(t) : e._removeCSSClass(t)
                                    }) : c.default.isNull(i) ? t.classes.forEach(function(t) {
                                        e._removeCSSClass(t)
                                    }) : c.default.throwError("The callback result is not an array nor a valid array index, " + ("undefined" == typeof i ? "undefined" : o(i)) + " given.")
                                } else c.default.throwError("The classes attribute is not valid for the `styleRules` option.");
                                else c.default.isUndefinedOrNullOrEmpty(t.classes) ? t.callback(e) : c.default.throwError("The callback/classes structure is not valid for the `styleRules` option.");
                                else c.default.warning("The given `styleRules` callback is not a function, " + ("undefined" == typeof callback ? "undefined" : o(callback)) + " given.", e.settings.showWarnings)
                            }))
                        }
                    }, {
                        key: "_addCSSClass",
                        value: function(e) {
                            this.domElement.classList.add(e)
                        }
                    }, {
                        key: "_removeCSSClass",
                        value: function(e) {
                            this.domElement.classList.remove(e)
                        }
                    }, {
                        key: "update",
                        value: function() {
                            for (var e = c.default.cloneObject(this.settings), t = this.rawValue, i = {}, n = arguments.length, a = Array(n), s = 0; s < n; s++) a[s] = arguments[s];
                            c.default.isUndefinedOrNullOrEmpty(a) || 0 === a.length ? i = null : a.length >= 1 && a.forEach(function(e) {
                                r(i, e)
                            });
                            try {
                                this._setSettings(i, !0), this.set(t)
                            } catch (t) {
                                return this._setSettings(e, !0), c.default.throwError("Unable to update the settings, those are invalid: [" + t + "]"), this
                            }
                            return this
                        }
                    }, {
                        key: "getSettings",
                        value: function() {
                            return this.settings
                        }
                    }, {
                        key: "set",
                        value: function(t) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                            if (c.default.isUndefined(t)) return c.default.warning("You are trying to set an 'undefined' value ; an error could have occurred.", this.settings.showWarnings), this;
                            if (c.default.isNull(i) || this._setSettings(i, !0), null === t && this.settings.emptyInputBehavior !== e.options.emptyInputBehavior.null) return c.default.warning("You are trying to set the `null` value while the `emptyInputBehavior` option is set to " + this.settings.emptyInputBehavior + ". If you want to be able to set the `null` value, you need to change the 'emptyInputBehavior' option to `'null'`.", this.settings.showWarnings), this;
                            var a = void 0;
                            if (null === t) return this._setElementAndRawValue(null, null, n), this._saveValueToPersistentStorage(), this;
                            if (a = this.constructor._toNumericValue(t, this.settings), isNaN(Number(a))) return c.default.warning("The value you are trying to set results in `NaN`. The element value is set to the empty string instead.", this.settings.showWarnings), this.setValue("", n), this;
                            if ("" === a && this.settings.emptyInputBehavior === e.options.emptyInputBehavior.zero && (a = 0), "" !== a) {
                                var r = this.constructor._checkIfInRangeWithOverrideOption(a, this.settings),
                                    o = s(r, 2),
                                    l = o[0],
                                    u = o[1],
                                    d = c.default.isZeroOrHasNoValue(a);
                                if (d && (a = "0"), l && u) {
                                    var h = this.constructor._roundRawValue(a, this.settings);
                                    return h = this._trimLeadingAndTrailingZeros(h.replace(this.settings.decimalCharacter, ".")), a = this._getRawValueToFormat(a), this.isFocused ? a = this.constructor._roundFormattedValueShownOnFocus(a, this.settings) : (this.settings.divisorWhenUnfocused && (a /= this.settings.divisorWhenUnfocused, a = a.toString()), a = this.constructor._roundFormattedValueShownOnBlur(a, this.settings)), a = this.constructor._modifyNegativeSignAndDecimalCharacterForFormattedValue(a, this.settings), a = this.constructor._addGroupSeparators(a, this.settings, this.isFocused, this.rawValue, h), !this.isFocused && this.settings.symbolWhenUnfocused && (a = "" + a + this.settings.symbolWhenUnfocused), (this.settings.decimalPlacesShownOnFocus || this.settings.divisorWhenUnfocused) && this._saveValueToPersistentStorage(), this._setElementAndRawValue(a, h, n), this
                                }
                                return l || c.default.triggerEvent(e.events.minRangeExceeded, this.domElement), u || c.default.triggerEvent(e.events.maxRangeExceeded, this.domElement), c.default.throwError("The value [" + a + "] being set falls outside of the minimumValue [" + this.settings.minimumValue + "] and maximumValue [" + this.settings.maximumValue + "] range set for this element"), this._removeValueFromPersistentStorage(), this.setValue("", n), this
                            }
                            var m = void 0;
                            return m = this.settings.emptyInputBehavior === e.options.emptyInputBehavior.always ? this.settings.currencySymbol : "", this._setElementAndRawValue(m, "", n), this
                        }
                    }, {
                        key: "setUnformatted",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            if (null === e || c.default.isUndefined(e)) return this;
                            c.default.isNull(t) || this._setSettings(t, !0);
                            var i = this.constructor._removeBrackets(e, this.settings),
                                n = this.constructor._stripAllNonNumberCharacters(i, this.settings, !0, this.isFocused);
                            n = n.replace(this.settings.decimalCharacter, "."), c.default.isNumber(n) || c.default.throwError("The value is not a valid one, it's not a numeric string nor a recognized currency.");
                            var a = this.constructor._checkIfInRangeWithOverrideOption(n, this.settings),
                                r = s(a, 2),
                                o = r[0],
                                l = r[1];
                            return o && l ? this.setValue(e) : c.default.throwError("The value is out of the range limits [" + this.settings.minimumValue + ", " + this.settings.maximumValue + "]."), this
                        }
                    }, {
                        key: "setValue",
                        value: function(e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            return this._setElementAndRawValue(e, t), this
                        }
                    }, {
                        key: "_setRawValue",
                        value: function(e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            this.rawValue !== e && (this.rawValue = e, !c.default.isNull(this.settings.rawValueDivisor) && 0 !== this.settings.rawValueDivisor && "" !== e && null !== e && this._isUserManuallyEditingTheValue() && (this.rawValue /= this.settings.rawValueDivisor), this._parseStyleRules(), t && this._historyTableAdd())
                        }
                    }, {
                        key: "_setElementValue",
                        value: function(t) {
                            var i = c.default.getElementValue(this.domElement);
                            return t !== i && (c.default.setElementValue(this.domElement, t), c.default.triggerEvent(e.events.formatted, this.domElement, {
                                oldValue: i,
                                newValue: t
                            })), this
                        }
                    }, {
                        key: "_setElementAndRawValue",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                            return c.default.isNull(t) ? t = e : c.default.isBoolean(t) && (i = t, t = e), this._setElementValue(e), this._setRawValue(t, i), this
                        }
                    }, {
                        key: "_getRawValueToFormat",
                        value: function(e) {
                            var t = void 0;
                            return t = c.default.isNull(this.settings.rawValueDivisor) || 0 === this.settings.rawValueDivisor || "" === e || null === e ? e : e * this.settings.rawValueDivisor
                        }
                    }, {
                        key: "_isUserManuallyEditingTheValue",
                        value: function() {
                            return this.isFocused && this.isEditing || this.isDropEvent
                        }
                    }, {
                        key: "_executeCallback",
                        value: function(e, t) {
                            !c.default.isNull(t) && c.default.isFunction(t) && t(e, this)
                        }
                    }, {
                        key: "get",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            return this.getNumericString(e)
                        }
                    }, {
                        key: "getNumericString",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                t = void 0;
                            return t = c.default.isNull(this.rawValue) ? null : c.default.trimPaddedZerosFromDecimalPlaces(this.rawValue), this._executeCallback(t, e), t
                        }
                    }, {
                        key: "getFormatted",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            "value" in this.domElement || "textContent" in this.domElement || c.default.throwError("Unable to get the formatted string from the element.");
                            var t = c.default.getElementValue(this.domElement);
                            return this._executeCallback(t, e), t
                        }
                    }, {
                        key: "getNumber",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                t = void 0;
                            return t = null === this.rawValue ? null : this.constructor._toLocale(this.getNumericString(), "number"), this._executeCallback(t, e), t
                        }
                    }, {
                        key: "getLocalized",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            c.default.isFunction(t) && c.default.isNull(i) && (i = t, t = null);
                            var n = void 0;
                            n = c.default.isEmptyString(this.rawValue) ? "" : "" + Number(this.rawValue), "" !== n && 0 === Number(n) && this.settings.leadingZero !== e.options.leadingZero.keep && (n = "0");
                            var a = void 0;
                            a = c.default.isNull(t) ? this.settings.outputFormat : t;
                            var s = this.constructor._toLocale(n, a);
                            return this._executeCallback(s, i), s
                        }
                    }, {
                        key: "reformat",
                        value: function() {
                            return this.set(this.rawValue), this
                        }
                    }, {
                        key: "unformat",
                        value: function() {
                            return this._setElementValue(this.getNumericString()), this
                        }
                    }, {
                        key: "unformatLocalized",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            return this._setElementValue(this.getLocalized(e)), this
                        }
                    }, {
                        key: "isPristine",
                        value: function() {
                            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                                t = void 0;
                            return t = e ? this.initialValue === this.getNumericString() : this.initialValueHtmlAttribute === this.getFormatted()
                        }
                    }, {
                        key: "select",
                        value: function() {
                            return this.settings.selectNumberOnly ? this.selectNumber() : this._defaultSelectAll(), this
                        }
                    }, {
                        key: "_defaultSelectAll",
                        value: function() {
                            c.default.setElementSelection(this.domElement, 0, c.default.getElementValue(this.domElement).length)
                        }
                    }, {
                        key: "selectNumber",
                        value: function() {
                            var t = c.default.getElementValue(this.domElement),
                                i = t.length,
                                n = this.settings.currencySymbol.length,
                                a = this.settings.currencySymbolPlacement,
                                s = c.default.isNegative(t) ? 1 : 0,
                                r = this.settings.suffixText.length,
                                o = void 0;
                            o = a === e.options.currencySymbolPlacement.suffix ? 0 : this.settings.negativePositiveSignPlacement === e.options.negativePositiveSignPlacement.left && 1 === s && n > 0 ? n + 1 : n;
                            var l = void 0;
                            if (a === e.options.currencySymbolPlacement.prefix) l = i - r;
                            else switch (this.settings.negativePositiveSignPlacement) {
                                case e.options.negativePositiveSignPlacement.left:
                                    l = i - (r + n);
                                    break;
                                case e.options.negativePositiveSignPlacement.right:
                                    l = n > 0 ? i - (n + s + r) : i - (n + r);
                                    break;
                                default:
                                    l = i - (n + r)
                            }
                            return c.default.setElementSelection(this.domElement, o, l), this
                        }
                    }, {
                        key: "selectInteger",
                        value: function() {
                            var t = 0,
                                i = this.rawValue >= 0;
                            this.settings.currencySymbolPlacement !== e.options.currencySymbolPlacement.prefix && (this.settings.currencySymbolPlacement !== e.options.currencySymbolPlacement.suffix || this.settings.negativePositiveSignPlacement !== e.options.negativePositiveSignPlacement.prefix && this.settings.negativePositiveSignPlacement !== e.options.negativePositiveSignPlacement.none) || (this.settings.showPositiveSign && i || !i && this.settings.currencySymbolPlacement === e.options.currencySymbolPlacement.prefix && this.settings.negativePositiveSignPlacement === e.options.negativePositiveSignPlacement.left) && (t += 1), this.settings.currencySymbolPlacement === e.options.currencySymbolPlacement.prefix && (t += this.settings.currencySymbol.length);
                            var n = c.default.getElementValue(this.domElement),
                                a = n.indexOf(this.settings.decimalCharacter);
                            return a === -1 && (a = this.settings.currencySymbolPlacement === e.options.currencySymbolPlacement.suffix ? n.length - this.settings.currencySymbol.length : n.length, i || this.settings.negativePositiveSignPlacement !== e.options.negativePositiveSignPlacement.suffix && this.settings.currencySymbolPlacement !== e.options.currencySymbolPlacement.suffix || (a -= 1), a -= this.settings.suffixText.length), c.default.setElementSelection(this.domElement, t, a), this
                        }
                    }, {
                        key: "selectDecimal",
                        value: function() {
                            var e = c.default.getElementValue(this.domElement).indexOf(this.settings.decimalCharacter),
                                t = void 0;
                            if (e === -1) e = 0, t = 0;
                            else {
                                e += 1;
                                var i = void 0;
                                i = this.isFocused ? this.settings.decimalPlacesShownOnFocus : this.settings.decimalPlacesShownOnBlur, t = e + Number(i)
                            }
                            return c.default.setElementSelection(this.domElement, e, t), this
                        }
                    }, {
                        key: "node",
                        value: function() {
                            return this.domElement
                        }
                    }, {
                        key: "parent",
                        value: function() {
                            return this.domElement.parentNode
                        }
                    }, {
                        key: "detach",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                t = void 0;
                            return t = c.default.isNull(e) ? this.domElement : e.node(), this._removeFromLocalList(t), this
                        }
                    }, {
                        key: "attach",
                        value: function(e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            return this._addToLocalList(e.node()), t && e.update(this.settings), this
                        }
                    }, {
                        key: "formatOther",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            return this._formatOrUnformatOther(!0, e, t)
                        }
                    }, {
                        key: "unformatOther",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            return this._formatOrUnformatOther(!1, e, t)
                        }
                    }, {
                        key: "_formatOrUnformatOther",
                        value: function(t, i) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                a = void 0;
                            a = c.default.isNull(n) ? this.settings : this._cloneAndMergeSettings(n);
                            var s = void 0;
                            if (c.default.isElement(i)) {
                                var r = c.default.getElementValue(i);
                                return s = t ? e.format(r, a) : e.unformat(r, a), c.default.setElementValue(i, s), null
                            }
                            return s = t ? e.format(i, a) : e.unformat(i, a)
                        }
                    }, {
                        key: "init",
                        value: function(t) {
                            var i = this,
                                a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                s = !1,
                                r = [];
                            if (c.default.isString(t) ? r = [].concat(n(document.querySelectorAll(t))) : c.default.isElement(t) ? (r.push(t), s = !0) : c.default.isArray(t) ? r = t : c.default.throwError("The given parameters to the 'init' function are invalid."), 0 === r.length) return c.default.warning("No valid DOM elements were given hence no AutoNumeric object were instantiated.", !0), [];
                            var o = this._getLocalList(),
                                l = [];
                            return r.forEach(function(t) {
                                var n = i.settings.createLocalList;
                                a && (i.settings.createLocalList = !1);
                                var s = new e(t, c.default.getElementValue(t), i.settings);
                                a && (s._setLocalList(o), i._addToLocalList(t, s), i.settings.createLocalList = n), l.push(s)
                            }), s ? l[0] : l
                        }
                    }, {
                        key: "clear",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            if (t) {
                                var i = {
                                    emptyInputBehavior: e.options.emptyInputBehavior.focus
                                };
                                this.set("", i)
                            } else this.set("");
                            return this
                        }
                    }, {
                        key: "remove",
                        value: function() {
                            this._removeValueFromPersistentStorage(), this._removeEventListeners(), this._removeFromLocalList(this.domElement), this.constructor._removeFromGlobalList(this)
                        }
                    }, {
                        key: "wipe",
                        value: function() {
                            this._setElementValue(""), this.remove()
                        }
                    }, {
                        key: "nuke",
                        value: function() {
                            this.remove(), this.domElement.parentNode.removeChild(this.domElement)
                        }
                    }, {
                        key: "form",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            return (e || c.default.isUndefinedOrNullOrEmpty(this.parentForm)) && (this.parentForm = this._getParentForm()), this.parentForm
                        }
                    }, {
                        key: "_getParentForm",
                        value: function() {
                            if ("body" === this.domElement.tagName.toLowerCase()) return null;
                            var e = this.domElement,
                                t = void 0;
                            do {
                                if (e = e.parentNode, c.default.isNull(e)) return null;
                                if (t = e.tagName ? e.tagName.toLowerCase() : "", "body" === t) break
                            } while ("form" !== t);
                            return "form" === t ? e : null
                        }
                    }, {
                        key: "formNumericString",
                        value: function() {
                            return this.constructor._serializeNumericString(this.form(), this.settings.serializeSpaces)
                        }
                    }, {
                        key: "formFormatted",
                        value: function() {
                            return this.constructor._serializeFormatted(this.form(), this.settings.serializeSpaces);
                        }
                    }, {
                        key: "formLocalized",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                t = void 0;
                            return t = c.default.isNull(e) ? this.settings.outputFormat : e, this.constructor._serializeLocalized(this.form(), this.settings.serializeSpaces, t)
                        }
                    }, {
                        key: "formArrayNumericString",
                        value: function() {
                            return this.constructor._serializeNumericStringArray(this.form(), this.settings.serializeSpaces)
                        }
                    }, {
                        key: "formArrayFormatted",
                        value: function() {
                            return this.constructor._serializeFormattedArray(this.form(), this.settings.serializeSpaces)
                        }
                    }, {
                        key: "formArrayLocalized",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                t = void 0;
                            return t = c.default.isNull(e) ? this.settings.outputFormat : e, this.constructor._serializeLocalizedArray(this.form(), this.settings.serializeSpaces, t)
                        }
                    }, {
                        key: "formJsonNumericString",
                        value: function() {
                            return JSON.stringify(this.formArrayNumericString())
                        }
                    }, {
                        key: "formJsonFormatted",
                        value: function() {
                            return JSON.stringify(this.formArrayFormatted())
                        }
                    }, {
                        key: "formJsonLocalized",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            return JSON.stringify(this.formArrayLocalized(e))
                        }
                    }, {
                        key: "formUnformat",
                        value: function() {
                            var t = this.constructor._getChildANInputElement(this.form());
                            return t.forEach(function(t) {
                                e.getAutoNumericElement(t).unformat()
                            }), this
                        }
                    }, {
                        key: "formUnformatLocalized",
                        value: function() {
                            var t = this.constructor._getChildANInputElement(this.form());
                            return t.forEach(function(t) {
                                e.getAutoNumericElement(t).unformatLocalized()
                            }), this
                        }
                    }, {
                        key: "formReformat",
                        value: function() {
                            var t = this.constructor._getChildANInputElement(this.form());
                            return t.forEach(function(t) {
                                e.getAutoNumericElement(t).reformat()
                            }), this
                        }
                    }, {
                        key: "formSubmitNumericString",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            return c.default.isNull(e) ? (this.formUnformat(), this.form().submit(), this.formReformat()) : c.default.isFunction(e) ? e(this.formNumericString()) : c.default.throwError("The given callback is not a function."), this
                        }
                    }, {
                        key: "formSubmitFormatted",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            return c.default.isNull(e) ? this.form().submit() : c.default.isFunction(e) ? e(this.formFormatted()) : c.default.throwError("The given callback is not a function."), this
                        }
                    }, {
                        key: "formSubmitLocalized",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            return c.default.isNull(t) ? (this.formUnformatLocalized(), this.form().submit(), this.formReformat()) : c.default.isFunction(t) ? t(this.formLocalized(e)) : c.default.throwError("The given callback is not a function."), this
                        }
                    }, {
                        key: "formSubmitArrayNumericString",
                        value: function(e) {
                            return c.default.isFunction(e) ? e(this.formArrayNumericString()) : c.default.throwError("The given callback is not a function."), this
                        }
                    }, {
                        key: "formSubmitArrayFormatted",
                        value: function(e) {
                            return c.default.isFunction(e) ? e(this.formArrayFormatted()) : c.default.throwError("The given callback is not a function."), this
                        }
                    }, {
                        key: "formSubmitArrayLocalized",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            return c.default.isFunction(e) ? e(this.formArrayLocalized(t)) : c.default.throwError("The given callback is not a function."), this
                        }
                    }, {
                        key: "formSubmitJsonNumericString",
                        value: function(e) {
                            return c.default.isFunction(e) ? e(this.formJsonNumericString()) : c.default.throwError("The given callback is not a function."), this
                        }
                    }, {
                        key: "formSubmitJsonFormatted",
                        value: function(e) {
                            return c.default.isFunction(e) ? e(this.formJsonFormatted()) : c.default.throwError("The given callback is not a function."), this
                        }
                    }, {
                        key: "formSubmitJsonLocalized",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            return c.default.isFunction(e) ? e(this.formJsonLocalized(t)) : c.default.throwError("The given callback is not a function."), this
                        }
                    }, {
                        key: "_createLocalList",
                        value: function() {
                            this.autoNumericLocalList = new Map, this._addToLocalList(this.domElement)
                        }
                    }, {
                        key: "_deleteLocalList",
                        value: function() {
                            delete this.autoNumericLocalList
                        }
                    }, {
                        key: "_setLocalList",
                        value: function(e) {
                            this.autoNumericLocalList = e
                        }
                    }, {
                        key: "_getLocalList",
                        value: function() {
                            return this.autoNumericLocalList
                        }
                    }, {
                        key: "_hasLocalList",
                        value: function() {
                            return this.autoNumericLocalList instanceof Map && 0 !== this.autoNumericLocalList.size
                        }
                    }, {
                        key: "_addToLocalList",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            c.default.isNull(t) && (t = this), c.default.isUndefined(this.autoNumericLocalList) ? c.default.throwError("The local list provided does not exists when trying to add an element. [" + this.autoNumericLocalList + "] given.") : this.autoNumericLocalList.set(e, t)
                        }
                    }, {
                        key: "_removeFromLocalList",
                        value: function(e) {
                            c.default.isUndefined(this.autoNumericLocalList) ? this.settings.createLocalList && c.default.throwError("The local list provided does not exists when trying to remove an element. [" + this.autoNumericLocalList + "] given.") : this.autoNumericLocalList.delete(e)
                        }
                    }, {
                        key: "_mergeSettings",
                        value: function() {
                            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                            r.apply(void 0, [this.settings].concat(t))
                        }
                    }, {
                        key: "_cloneAndMergeSettings",
                        value: function() {
                            for (var e = {}, t = arguments.length, i = Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                            return r.apply(void 0, [e, this.settings].concat(i)), e
                        }
                    }, {
                        key: "_updatePredefinedOptions",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            return c.default.isNull(t) ? this.update(e) : (this._mergeSettings(e, t), this.update(this.settings)), this
                        }
                    }, {
                        key: "french",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            return this._updatePredefinedOptions(e.getPredefinedOptions().French, t), this
                        }
                    }, {
                        key: "northAmerican",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            return this._updatePredefinedOptions(e.getPredefinedOptions().NorthAmerican, t), this
                        }
                    }, {
                        key: "british",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            return this._updatePredefinedOptions(e.getPredefinedOptions().British, t), this
                        }
                    }, {
                        key: "swiss",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            return this._updatePredefinedOptions(e.getPredefinedOptions().Swiss, t), this
                        }
                    }, {
                        key: "japanese",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            return this._updatePredefinedOptions(e.getPredefinedOptions().Japanese, t), this
                        }
                    }, {
                        key: "spanish",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            return this._updatePredefinedOptions(e.getPredefinedOptions().Spanish, t), this
                        }
                    }, {
                        key: "chinese",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            return this._updatePredefinedOptions(e.getPredefinedOptions().Chinese, t), this
                        }
                    }, {
                        key: "brazilian",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                            return this._updatePredefinedOptions(e.getPredefinedOptions().Brazilian, t), this
                        }
                    }, {
                        key: "_runCallbacksFoundInTheSettingsObject",
                        value: function() {
                            for (var e in this.settings)
                                if (this.settings.hasOwnProperty(e)) {
                                    var t = this.settings[e];
                                    if ("function" == typeof t) this.settings[e] = t(this, e);
                                    else {
                                        var i = this.domElement.getAttribute(e);
                                        i = c.default.camelize(i), "function" == typeof this.settings[i] && (this.settings[e] = i(this, e))
                                    }
                                }
                        }
                    }, {
                        key: "_setTrailingNegativeSignInfo",
                        value: function() {
                            this.isTrailingNegative = this.settings.currencySymbolPlacement === e.options.currencySymbolPlacement.prefix && this.settings.negativePositiveSignPlacement === e.options.negativePositiveSignPlacement.suffix || this.settings.currencySymbolPlacement === e.options.currencySymbolPlacement.suffix && (this.settings.negativePositiveSignPlacement === e.options.negativePositiveSignPlacement.left || this.settings.negativePositiveSignPlacement === e.options.negativePositiveSignPlacement.right)
                        }
                    }, {
                        key: "_setBrackets",
                        value: function() {
                            if (c.default.isNull(this.settings.negativeBracketsTypeOnBlur)) this.settings.firstBracket = "", this.settings.lastBracket = "";
                            else {
                                var e = this.settings.negativeBracketsTypeOnBlur.split(","),
                                    t = s(e, 2);
                                this.settings.firstBracket = t[0], this.settings.lastBracket = t[1]
                            }
                        }
                    }, {
                        key: "_modifyNegativeSignAndDecimalCharacterForRawValue",
                        value: function(e) {
                            return "." !== this.settings.decimalCharacter && (e = e.replace(this.settings.decimalCharacter, ".")), "-" !== this.settings.negativeSignCharacter && "" !== this.settings.negativeSignCharacter && (e = e.replace(this.settings.negativeSignCharacter, "-")), e.match(/\d/) || (e += "0"), e
                        }
                    }, {
                        key: "_initialCaretPosition",
                        value: function(t) {
                            c.default.isNull(this.settings.caretPositionOnFocus) && c.default.throwError("`_initialCaretPosition()` should never be called when the `caretPositionOnFocus` option is `null`.");
                            var i = this.rawValue < 0,
                                n = c.default.isZeroOrHasNoValue(t),
                                a = t.length,
                                s = 0,
                                r = 0,
                                o = !1,
                                l = 0;
                            this.settings.caretPositionOnFocus !== e.options.caretPositionOnFocus.start && (t = t.replace("-", ""), t = t.replace("+", ""), t = t.replace(this.settings.currencySymbol, ""), s = t.length, o = c.default.contains(t, this.settings.decimalCharacter), this.settings.caretPositionOnFocus !== e.options.caretPositionOnFocus.decimalLeft && this.settings.caretPositionOnFocus !== e.options.caretPositionOnFocus.decimalRight || (o ? (r = t.indexOf(this.settings.decimalCharacter), l = this.settings.decimalCharacter.length) : (r = s, l = 0)));
                            var u = "";
                            i ? u = this.settings.negativeSignCharacter : this.settings.showPositiveSign && !n && (u = this.settings.positiveSignCharacter);
                            var d = u.length,
                                h = this.settings.currencySymbol.length,
                                m = void 0;
                            if (this.settings.currencySymbolPlacement === e.options.currencySymbolPlacement.prefix) {
                                if (this.settings.caretPositionOnFocus === e.options.caretPositionOnFocus.start)
                                    if (this.settings.negativePositiveSignPlacement !== e.options.negativePositiveSignPlacement.none && (i || !i && this.settings.showPositiveSign && !n)) switch (this.settings.negativePositiveSignPlacement) {
                                        case e.options.negativePositiveSignPlacement.prefix:
                                        case e.options.negativePositiveSignPlacement.left:
                                        case e.options.negativePositiveSignPlacement.right:
                                            m = d + h;
                                            break;
                                        case e.options.negativePositiveSignPlacement.suffix:
                                            m = h
                                    } else m = h;
                                    else if (this.settings.caretPositionOnFocus === e.options.caretPositionOnFocus.end)
                                    if (this.settings.negativePositiveSignPlacement !== e.options.negativePositiveSignPlacement.none && (i || !i && this.settings.showPositiveSign && !n)) switch (this.settings.negativePositiveSignPlacement) {
                                        case e.options.negativePositiveSignPlacement.prefix:
                                        case e.options.negativePositiveSignPlacement.left:
                                        case e.options.negativePositiveSignPlacement.right:
                                            m = a;
                                            break;
                                        case e.options.negativePositiveSignPlacement.suffix:
                                            m = h + s
                                    } else m = a;
                                    else if (this.settings.caretPositionOnFocus === e.options.caretPositionOnFocus.decimalLeft)
                                    if (this.settings.negativePositiveSignPlacement !== e.options.negativePositiveSignPlacement.none && (i || !i && this.settings.showPositiveSign && !n)) switch (this.settings.negativePositiveSignPlacement) {
                                        case e.options.negativePositiveSignPlacement.prefix:
                                        case e.options.negativePositiveSignPlacement.left:
                                        case e.options.negativePositiveSignPlacement.right:
                                            m = d + h + r;
                                            break;
                                        case e.options.negativePositiveSignPlacement.suffix:
                                            m = h + r
                                    } else m = h + r;
                                    else if (this.settings.caretPositionOnFocus === e.options.caretPositionOnFocus.decimalRight)
                                    if (this.settings.negativePositiveSignPlacement !== e.options.negativePositiveSignPlacement.none && (i || !i && this.settings.showPositiveSign && !n)) switch (this.settings.negativePositiveSignPlacement) {
                                        case e.options.negativePositiveSignPlacement.prefix:
                                        case e.options.negativePositiveSignPlacement.left:
                                        case e.options.negativePositiveSignPlacement.right:
                                            m = d + h + r + l;
                                            break;
                                        case e.options.negativePositiveSignPlacement.suffix:
                                            m = h + r + l
                                    } else m = h + r + l
                            } else if (this.settings.currencySymbolPlacement === e.options.currencySymbolPlacement.suffix)
                                if (this.settings.caretPositionOnFocus === e.options.caretPositionOnFocus.start)
                                    if (this.settings.negativePositiveSignPlacement !== e.options.negativePositiveSignPlacement.none && (i || !i && this.settings.showPositiveSign && !n)) switch (this.settings.negativePositiveSignPlacement) {
                                        case e.options.negativePositiveSignPlacement.suffix:
                                        case e.options.negativePositiveSignPlacement.right:
                                        case e.options.negativePositiveSignPlacement.left:
                                            m = 0;
                                            break;
                                        case e.options.negativePositiveSignPlacement.prefix:
                                            m = d
                                    } else m = 0;
                                    else if (this.settings.caretPositionOnFocus === e.options.caretPositionOnFocus.end)
                                if (this.settings.negativePositiveSignPlacement !== e.options.negativePositiveSignPlacement.none && (i || !i && this.settings.showPositiveSign && !n)) switch (this.settings.negativePositiveSignPlacement) {
                                    case e.options.negativePositiveSignPlacement.suffix:
                                    case e.options.negativePositiveSignPlacement.right:
                                    case e.options.negativePositiveSignPlacement.left:
                                        m = s;
                                        break;
                                    case e.options.negativePositiveSignPlacement.prefix:
                                        m = d + s
                                } else m = s;
                                else if (this.settings.caretPositionOnFocus === e.options.caretPositionOnFocus.decimalLeft)
                                if (this.settings.negativePositiveSignPlacement !== e.options.negativePositiveSignPlacement.none && (i || !i && this.settings.showPositiveSign && !n)) switch (this.settings.negativePositiveSignPlacement) {
                                    case e.options.negativePositiveSignPlacement.suffix:
                                    case e.options.negativePositiveSignPlacement.right:
                                    case e.options.negativePositiveSignPlacement.left:
                                        m = r;
                                        break;
                                    case e.options.negativePositiveSignPlacement.prefix:
                                        m = d + r
                                } else m = r;
                                else if (this.settings.caretPositionOnFocus === e.options.caretPositionOnFocus.decimalRight)
                                if (this.settings.negativePositiveSignPlacement !== e.options.negativePositiveSignPlacement.none && (i || !i && this.settings.showPositiveSign && !n)) switch (this.settings.negativePositiveSignPlacement) {
                                    case e.options.negativePositiveSignPlacement.suffix:
                                    case e.options.negativePositiveSignPlacement.right:
                                    case e.options.negativePositiveSignPlacement.left:
                                        m = r + l;
                                        break;
                                    case e.options.negativePositiveSignPlacement.prefix:
                                        m = d + r + l
                                } else m = r + l;
                            return m
                        }
                    }, {
                        key: "_keepAnOriginalSettingsCopy",
                        value: function() {
                            this.originalDigitGroupSeparator = this.settings.digitGroupSeparator, this.originalCurrencySymbol = this.settings.currencySymbol, this.originalSuffixText = this.settings.suffixText
                        }
                    }, {
                        key: "_trimLeadingAndTrailingZeros",
                        value: function(t) {
                            if ("" === t || null === t) return t;
                            if (this.settings.leadingZero !== e.options.leadingZero.keep) {
                                if (0 === Number(t)) return "0";
                                t = t.replace(/^(-)?0+(?=\d)/g, "$1")
                            }
                            return c.default.contains(t, ".") && (t = t.replace(/(\.[0-9]*?)0+$/, "$1")), t = t.replace(/\.$/, "")
                        }
                    }, {
                        key: "_setPersistentStorageName",
                        value: function() {
                            this.settings.saveValueToSessionStorage && ("" === this.domElement.name || c.default.isUndefined(this.domElement.name) ? this.rawValueStorageName = "" + this.storageNamePrefix + this.domElement.id : this.rawValueStorageName = "" + this.storageNamePrefix + decodeURIComponent(this.domElement.name))
                        }
                    }, {
                        key: "_saveValueToPersistentStorage",
                        value: function() {
                            this.settings.saveValueToSessionStorage && (this.sessionStorageAvailable ? sessionStorage.setItem(this.rawValueStorageName, this.rawValue) : document.cookie = this.rawValueStorageName + "=" + this.rawValue + "; expires= ; path=/")
                        }
                    }, {
                        key: "_getValueFromPersistentStorage",
                        value: function() {
                            if (this.settings.saveValueToSessionStorage) {
                                var e = void 0;
                                return e = this.sessionStorageAvailable ? sessionStorage.getItem(this.rawValueStorageName) : this._readCookie(this.rawValueStorageName)
                            }
                            return c.default.warning("`_getValueFromPersistentStorage()` is called but `settings.saveValueToSessionStorage` is false. There must be an error that needs fixing.", this.settings.showWarnings), null
                        }
                    }, {
                        key: "_removeValueFromPersistentStorage",
                        value: function() {
                            if (this.settings.saveValueToSessionStorage)
                                if (this.sessionStorageAvailable) sessionStorage.removeItem(this.rawValueStorageName);
                                else {
                                    var e = new Date;
                                    e.setTime(e.getTime() - 864e5);
                                    var t = "; expires=" + e.toUTCString();
                                    document.cookie = this.rawValueStorageName + "='' ;" + t + "; path=/"
                                }
                        }
                    }, {
                        key: "_onFocusInAndMouseEnter",
                        value: function(t) {
                            this.isEditing = !1;
                            var i = c.default.getElementValue(this.domElement);
                            if (this.settings.unformatOnHover && "mouseenter" === t.type && t.altKey) return void this.constructor._unformatAltHovered(this);
                            if ("focus" === t.type && (this.isFocused = !0), "focus" === t.type && this.settings.unformatOnHover && this.hoveredWithAlt && this.constructor._reformatAltHovered(this), "focus" === t.type || "mouseenter" === t.type && !this.isFocused) {
                                this.settings.emptyInputBehavior === e.options.emptyInputBehavior.focus && this.rawValue < 0 && null !== this.settings.negativeBracketsTypeOnBlur && "" !== this.settings.negativeSignCharacter && c.default.setElementValue(this.domElement, this.constructor._removeBrackets(c.default.getElementValue(this.domElement), this.settings));
                                var n = this._getRawValueToFormat(this.rawValue);
                                if ("" !== n) {
                                    var a = void 0;
                                    if (a = this.isFocused ? this.constructor._roundFormattedValueShownOnFocus(n, this.settings) : this.constructor._roundFormattedValueShownOnBlur(n, this.settings), this.settings.showOnlyNumbersOnFocus === e.options.showOnlyNumbersOnFocus.onlyNumbers) this.settings.digitGroupSeparator = "", this.settings.currencySymbol = "", this.settings.suffixText = "", c.default.setElementValue(this.domElement, a.replace(".", this.settings.decimalCharacter));
                                    else {
                                        var s = void 0;
                                        s = c.default.isNull(a) ? "" : this.constructor._addGroupSeparators(a.replace(".", this.settings.decimalCharacter), this.settings, this.isFocused, n), c.default.setElementValue(this.domElement, s)
                                    }
                                }
                                this.valueOnFocus = c.default.getElementValue(t.target), this.lastVal = this.valueOnFocus;
                                var r = this.constructor._isElementValueEmptyOrOnlyTheNegativeSign(this.valueOnFocus, this.settings),
                                    o = this.constructor._orderValueCurrencySymbolAndSuffixText(this.valueOnFocus, this.settings, !0);
                                r && "" !== o && this.settings.emptyInputBehavior === e.options.emptyInputBehavior.focus && (c.default.setElementValue(this.domElement, o), o === this.settings.currencySymbol && this.settings.currencySymbolPlacement === e.options.currencySymbolPlacement.suffix && c.default.setElementSelection(t.target, 0))
                            }
                            c.default.getElementValue(this.domElement) !== i && c.default.triggerEvent(e.events.formatted, this.domElement, {
                                oldValue: i,
                                newValue: c.default.getElementValue(this.domElement)
                            })
                        }
                    }, {
                        key: "_onFocus",
                        value: function() {
                            this.settings.isCancellable && this._saveCancellableValue()
                        }
                    }, {
                        key: "_onFocusIn",
                        value: function(e) {
                            this.settings.selectOnFocus ? this.select() : c.default.setElementSelection(e.target, this._initialCaretPosition(c.default.getElementValue(this.domElement)))
                        }
                    }, {
                        key: "_onKeydown",
                        value: function(t) {
                            if (this.isEditing = !0, !this.isFocused && this.settings.unformatOnHover && t.altKey && this.domElement === c.default.getHoveredElement()) return void this.constructor._unformatAltHovered(this);
                            if (this._updateEventKeyInfo(t), this.initialValueOnKeydown = c.default.getElementValue(t.target), this.domElement.readOnly) return void(this.processed = !0);
                            this.eventKey === h.default.keyName.Esc && (t.preventDefault(), this.settings.isCancellable && this.rawValue !== this.savedCancellableValue && (this.set(this.savedCancellableValue), c.default.triggerEvent(e.events.native.input, t.target)), this.select());
                            var i = c.default.getElementValue(t.target);
                            return this.eventKey === h.default.keyName.Enter && this.valueOnFocus !== i && (c.default.triggerEvent(e.events.native.change, t.target), this.valueOnFocus = i, this.settings.isCancellable && this._saveCancellableValue()), this._updateInternalProperties(t), this._processNonPrintableKeysAndShortcuts(t) ? void(this.processed = !0) : this.eventKey === h.default.keyName.Backspace || this.eventKey === h.default.keyName.Delete ? (this._processCharacterDeletion(), this.processed = !0, this._formatValue(t), i = c.default.getElementValue(t.target), i !== this.lastVal && this.throwInput && (c.default.triggerEvent(e.events.native.input, t.target), t.preventDefault()), this.lastVal = i, void(this.throwInput = !0)) : void(this.formatted = !1)
                        }
                    }, {
                        key: "_onKeypress",
                        value: function(t) {
                            if (this.eventKey !== h.default.keyName.Insert) {
                                var i = this.processed;
                                if (this._updateInternalProperties(t), !this._processNonPrintableKeysAndShortcuts(t)) {
                                    if (i) return void t.preventDefault();
                                    var n = this._processCharacterInsertion();
                                    if (n) {
                                        this._formatValue(t);
                                        var a = c.default.getElementValue(t.target);
                                        if (a !== this.lastVal && this.throwInput) c.default.triggerEvent(e.events.native.input, t.target), t.preventDefault();
                                        else {
                                            if ((this.eventKey === this.settings.decimalCharacter || this.eventKey === this.settings.decimalCharacterAlternative) && c.default.getElementSelection(t.target).start === c.default.getElementSelection(t.target).end && c.default.getElementSelection(t.target).start === a.indexOf(this.settings.decimalCharacter)) {
                                                var s = c.default.getElementSelection(t.target).start + 1;
                                                c.default.setElementSelection(t.target, s)
                                            }
                                            t.preventDefault()
                                        }
                                        return this.lastVal = c.default.getElementValue(t.target), void(this.throwInput = !0)
                                    }
                                    t.preventDefault(), this.formatted = !1
                                }
                            }
                        }
                    }, {
                        key: "_onInput",
                        value: function(t) {
                            var i = c.default.getElementValue(this.domElement);
                            if (this.androidSelectionStart = null, this.eventKey === h.default.keyName.AndroidDefault) {
                                var n = c.default.getElementSelection(this.domElement);
                                if (i.length > this.lastVal.length || i.length >= this.lastVal.length - n.length) {
                                    this.eventKey = i.charCodeAt(n.start), this.eventKey = i.charAt(n.start);
                                    var a = this._processCharacterInsertion();
                                    if (a) {
                                        this._formatValue(t), n = c.default.getElementSelection(this.domElement), this.androidSelectionStart = n.start;
                                        var s = c.default.getElementValue(this.domElement).indexOf(this.settings.decimalCharacter),
                                            r = s !== -1;
                                        return (this.eventKey === this.settings.decimalCharacter || r && s < this.androidSelectionStart) && (this.androidSelectionStart += this.settings.decimalCharacter.length), this.settings.currencySymbolPlacement === e.options.currencySymbolPlacement.prefix && this.settings.currencySymbol.length && (this.androidSelectionStart += this.settings.currencySymbol.length), n.length > i.length && this._setCaretPosition(this.androidSelectionStart), void(this.lastVal = c.default.getElementValue(this.domElement))
                                    }
                                    c.default.setElementValue(this.lastVal), c.default.setElementSelection(this.domElement, n.start, n.end), this.androidSelectionStart = n.start, t.preventDefault(), this.formatted = !1
                                } else this.eventKey = h.default.keyName.Backspace
                            }
                        }
                    }, {
                        key: "_onKeyup",
                        value: function(t) {
                            if (this.isEditing = !1, this.settings.isCancellable && this.eventKey === h.default.keyName.Esc) return void t.preventDefault();
                            if (this.eventKey === h.default.keyName.Z || this.eventKey === h.default.keyName.z) {
                                if (t.ctrlKey && t.shiftKey) return t.preventDefault(), this._historyTableRedo(), void(this.onGoingRedo = !0);
                                if (t.ctrlKey && !t.shiftKey) {
                                    if (!this.onGoingRedo) return t.preventDefault(), void this._historyTableUndo();
                                    this.onGoingRedo = !1
                                }
                            }
                            if (this.onGoingRedo && (t.ctrlKey || t.shiftKey) && (this.onGoingRedo = !1), this.eventKey === h.default.keyName.Alt && this.hoveredWithAlt) return void this.constructor._reformatAltHovered(this);
                            this._updateInternalProperties(t);
                            var i = this._processNonPrintableKeysAndShortcuts(t);
                            delete this.valuePartsBeforePaste;
                            var n = null !== this.androidSelectionStart,
                                a = c.default.getElementValue(t.target);
                            if ((!i || n) && "" !== a && (a === this.settings.currencySymbol ? this.settings.currencySymbolPlacement === e.options.currencySymbolPlacement.suffix ? c.default.setElementSelection(t.target, 0) : c.default.setElementSelection(t.target, this.settings.currencySymbol.length) : this.eventKey === h.default.keyName.Tab && c.default.setElementSelection(t.target, 0, a.length), (a === this.settings.suffixText || "" === this.rawValue && "" !== this.settings.currencySymbol && "" !== this.settings.suffixText) && c.default.setElementSelection(t.target, 0), null !== this.settings.decimalPlacesShownOnFocus && this._saveValueToPersistentStorage(), this.formatted || this._formatValue(t), a !== this.initialValueOnKeydown && c.default.triggerEvent(e.events.formatted, t.target, {
                                    oldValue: this.initialValueOnKeydown,
                                    newValue: a
                                }), this.historyTable.length > 1)) {
                                var s = c.default.getElementSelection(this.domElement);
                                this.selectionStart = s.start, this.selectionEnd = s.end, this.historyTable[this.historyTableIndex].start = this.selectionStart, this.historyTable[this.historyTableIndex].end = this.selectionEnd
                            }
                        }
                    }, {
                        key: "_onFocusOutAndMouseLeave",
                        value: function(t) {
                            if (this.isEditing = !1, this.settings.unformatOnHover && "mouseleave" === t.type && this.hoveredWithAlt) return void this.constructor._reformatAltHovered(this);
                            if ("mouseleave" === t.type && !this.isFocused || "blur" === t.type) {
                                this._saveValueToPersistentStorage(), this.settings.showOnlyNumbersOnFocus === e.options.showOnlyNumbersOnFocus.onlyNumbers && (this.settings.digitGroupSeparator = this.originalDigitGroupSeparator, this.settings.currencySymbol = this.originalCurrencySymbol, this.settings.suffixText = this.originalSuffixText);
                                var i = this._getRawValueToFormat(this.rawValue),
                                    n = void 0,
                                    a = c.default.isNull(i);
                                if (n = a || "" === i ? i : String(i), "" === i || a) "" === i && this.settings.emptyInputBehavior === e.options.emptyInputBehavior.zero && (this._setRawValue("0"), n = this.constructor._roundValue("0", this.settings, 0));
                                else {
                                    var r = this.constructor._checkIfInRangeWithOverrideOption(i, this.settings),
                                        o = s(r, 2),
                                        l = o[0],
                                        u = o[1];
                                    l && u && !this.constructor._isElementValueEmptyOrOnlyTheNegativeSign(i, this.settings) ? (n = this._modifyNegativeSignAndDecimalCharacterForRawValue(n), this.settings.divisorWhenUnfocused && !c.default.isNull(n) && (n /= this.settings.divisorWhenUnfocused, n = n.toString()), n = this.constructor._roundFormattedValueShownOnBlur(n, this.settings), n = this.constructor._modifyNegativeSignAndDecimalCharacterForFormattedValue(n, this.settings)) : (l || c.default.triggerEvent(e.events.minRangeExceeded, this.domElement), u || c.default.triggerEvent(e.events.maxRangeExceeded, this.domElement))
                                }
                                var d = this.constructor._orderValueCurrencySymbolAndSuffixText(n, this.settings, !1);
                                this.constructor._isElementValueEmptyOrOnlyTheNegativeSign(n, this.settings) || a && this.settings.emptyInputBehavior === e.options.emptyInputBehavior.null || (d = this.constructor._addGroupSeparators(n, this.settings, !1, i)), d === i && "" !== i && this.settings.allowDecimalPadding !== e.options.allowDecimalPadding.never && this.settings.allowDecimalPadding !== e.options.allowDecimalPadding.floats || (this.settings.symbolWhenUnfocused && "" !== i && null !== i && (d = "" + d + this.settings.symbolWhenUnfocused), this._setElementValue(d)), d !== this.valueOnFocus && (c.default.triggerEvent(e.events.native.change, this.domElement), delete this.valueOnFocus), this._onBlur(t)
                            }
                        }
                    }, {
                        key: "_onPaste",
                        value: function(t) {
                            t.preventDefault();
                            var i = void 0;
                            window.clipboardData && window.clipboardData.getData ? i = window.clipboardData.getData("Text") : t.clipboardData && t.clipboardData.getData ? i = t.clipboardData.getData("text/plain") : c.default.throwError("Unable to retrieve the pasted value. Please use a modern browser (ie. Firefox or Chromium).");
                            var n = c.default.getElementValue(t.target),
                                a = t.target.selectionStart || 0,
                                s = t.target.selectionEnd || 0,
                                r = s - a,
                                o = !1;
                            r === n.length && (o = !0);
                            var l = c.default.isNegativeStrict(i);
                            l && (i = i.slice(1, i.length));
                            var u = this._preparePastedText(i),
                                d = void 0;
                            if (d = "." === u ? "." : c.default.arabicToLatinNumbers(u, !1, !1, !1), "." !== d && (!c.default.isNumber(d) || "" === d)) return void(this.settings.onInvalidPaste === e.options.onInvalidPaste.error && c.default.throwError("The pasted value '" + i + "' is not a valid paste content."));
                            var h = void 0,
                                m = this.getNumericString(),
                                g = c.default.isNegativeStrict(m),
                                f = void 0,
                                v = void 0;
                            l && !g ? (m = "-" + m, g = !0, f = !0) : f = !1;
                            var p = !1,
                                y = void 0,
                                S = void 0;
                            switch (this.settings.onInvalidPaste) {
                                case e.options.onInvalidPaste.truncate:
                                case e.options.onInvalidPaste.replace:
                                    var P = n.slice(0, a),
                                        b = n.slice(s, n.length);
                                    v = a !== s ? this._preparePastedText(P + b) : this._preparePastedText(n), g && (v = c.default.setRawNegativeSign(v)), h = c.default.convertCharacterCountToIndexPosition(c.default.countNumberCharactersOnTheCaretLeftSide(n, a, this.settings.decimalCharacter)), f && h++, y = v.slice(0, h), S = v.slice(h, v.length), "." === d && (c.default.contains(y, ".") && (p = !0, y = y.replace(".", "")), S = S.replace(".", ""));
                                    for (var w = c.default.parseStr(this.settings.minimumValue), O = c.default.parseStr(this.settings.maximumValue), N = v, k = 0, E = y; k < d.length && (E += d[k], v = E + S, this.constructor._checkIfInRange(v, w, O));) N = v, k++;
                                    if (h += k, this.settings.onInvalidPaste === e.options.onInvalidPaste.truncate) {
                                        v = N, p && h--;
                                        break
                                    }
                                    for (var _ = h, F = N.length; k < d.length && _ < F;)
                                        if ("." !== N[_]) {
                                            if (v = c.default.replaceCharAt(N, _, d[k]), !this.constructor._checkIfInRange(v, w, O)) break;
                                            N = v, k++, _++
                                        } else _++;
                                    h = _, p && h--, v = N;
                                    break;
                                case e.options.onInvalidPaste.error:
                                case e.options.onInvalidPaste.ignore:
                                case e.options.onInvalidPaste.clamp:
                                default:
                                    var V = n.slice(0, a),
                                        C = n.slice(s, n.length);
                                    if (v = a !== s ? this._preparePastedText(V + C) : this._preparePastedText(n), g && (v = c.default.setRawNegativeSign(v)), h = c.default.convertCharacterCountToIndexPosition(c.default.countNumberCharactersOnTheCaretLeftSide(n, a, this.settings.decimalCharacter)), f && h++, y = v.slice(0, h), S = v.slice(h, v.length), "." === d && (c.default.contains(y, ".") && (p = !0, y = y.replace(".", "")), S = S.replace(".", "")), v = "" + y + d + S, a === s) {
                                        var x = c.default.convertCharacterCountToIndexPosition(c.default.countNumberCharactersOnTheCaretLeftSide(n, a, this.settings.decimalCharacter));
                                        h = x + d.length
                                    } else if (o) h = v.length;
                                    else if ("" === S) h = c.default.convertCharacterCountToIndexPosition(c.default.countNumberCharactersOnTheCaretLeftSide(n, a, this.settings.decimalCharacter)) + d.length;
                                    else {
                                        var T = c.default.convertCharacterCountToIndexPosition(c.default.countNumberCharactersOnTheCaretLeftSide(n, s, this.settings.decimalCharacter)),
                                            A = c.default.getElementValue(t.target).slice(a, s);
                                        h = T - r + c.default.countCharInText(this.settings.digitGroupSeparator, A) + d.length
                                    }
                                    o || (f && h++, p && h--)
                            }
                            if (!c.default.isNumber(v) || "" === v) return void(this.settings.onInvalidPaste === e.options.onInvalidPaste.error && c.default.throwError("The pasted value '" + i + "' would result into an invalid content '" + v + "'."));
                            var L = !1,
                                D = !1;
                            try {
                                this.set(v), L = !0
                            } catch (t) {
                                var B = void 0;
                                switch (this.settings.onInvalidPaste) {
                                    case e.options.onInvalidPaste.clamp:
                                        B = c.default.clampToRangeLimits(v, this.settings);
                                        try {
                                            this.set(B)
                                        } catch (e) {
                                            c.default.throwError("Fatal error: Unable to set the clamped value '" + B + "'.")
                                        }
                                        D = !0, L = !0, v = B;
                                        break;
                                    case e.options.onInvalidPaste.error:
                                    case e.options.onInvalidPaste.truncate:
                                    case e.options.onInvalidPaste.replace:
                                        c.default.throwError("The pasted value '" + i + "' results in a value '" + v + "' that is outside of the minimum [" + this.settings.minimumValue + "] and maximum [" + this.settings.maximumValue + "] value range.");
                                    case e.options.onInvalidPaste.ignore:
                                    default:
                                        return
                                }
                            }
                            var I = c.default.getElementValue(t.target),
                                R = void 0;
                            if (L) switch (this.settings.onInvalidPaste) {
                                case e.options.onInvalidPaste.clamp:
                                    if (D) {
                                        this.settings.currencySymbolPlacement === e.options.currencySymbolPlacement.suffix ? c.default.setElementSelection(t.target, I.length - this.settings.currencySymbol.length) : c.default.setElementSelection(t.target, I.length);
                                        break
                                    }
                                case e.options.onInvalidPaste.error:
                                case e.options.onInvalidPaste.ignore:
                                case e.options.onInvalidPaste.truncate:
                                case e.options.onInvalidPaste.replace:
                                default:
                                    R = c.default.findCaretPositionInFormattedNumber(v, h, I, this.settings.decimalCharacter), c.default.setElementSelection(t.target, R)
                            }
                            L && n !== I && c.default.triggerEvent(e.events.native.input, t.target)
                        }
                    }, {
                        key: "_onBlur",
                        value: function(t) {
                            this.isFocused = !1, this.isEditing = !1, c.default.getElementValue(t.target) !== this.valueOnFocus && c.default.triggerEvent(e.events.native.change, t.target)
                        }
                    }, {
                        key: "_onWheel",
                        value: function(e) {
                            if (!e.shiftKey && this.settings.modifyValueOnWheel) {
                                this.isWheelEvent = !0;
                                var t = e.target.selectionStart || 0,
                                    i = e.target.selectionEnd || 0,
                                    n = this.rawValue,
                                    a = void 0;
                                if (c.default.isUndefinedOrNullOrEmpty(n) ? this.settings.minimumValue > 0 || this.settings.maximumValue < 0 ? c.default.isWheelUpEvent(e) ? a = this.settings.minimumValue : c.default.isWheelDownEvent(e) ? a = this.settings.maximumValue : c.default.throwError("The event is not a 'wheel' event.") : a = 0 : a = n, a = +a, c.default.isNumber(this.settings.wheelStep)) {
                                    var s = +this.settings.wheelStep;
                                    c.default.isWheelUpEvent(e) ? a += s : c.default.isWheelDownEvent(e) && (a -= s)
                                } else c.default.isWheelUpEvent(e) ? a = c.default.addAndRoundToNearestAuto(a, this.settings.decimalPlacesRawValue) : c.default.isWheelDownEvent(e) && (a = c.default.subtractAndRoundToNearestAuto(a, this.settings.decimalPlacesRawValue));
                                a = c.default.clampToRangeLimits(a, this.settings), a !== +n && this.set(a), e.preventDefault(), this._setSelection(t, i), this.isWheelEvent = !1
                            }
                        }
                    }, {
                        key: "_onDrop",
                        value: function(e) {
                            this.isDropEvent = !0, e.preventDefault();
                            var t = e.dataTransfer.getData("text/plain"),
                                i = this.unformatOther(t);
                            this.set(i), this.isDropEvent = !1
                        }
                    }, {
                        key: "_onFormSubmit",
                        value: function() {
                            return this.settings.unformatOnSubmit && this._setElementValue(this.rawValue), !0
                        }
                    }, {
                        key: "_onKeydownGlobal",
                        value: function(t) {
                            if (c.default.character(t) === h.default.keyName.Alt) {
                                var i = c.default.getHoveredElement();
                                if (e.isManagedByAutoNumeric(i)) {
                                    var n = e.getAutoNumericElement(i);
                                    this.constructor._unformatAltHovered(n)
                                }
                            }
                        }
                    }, {
                        key: "_onKeyupGlobal",
                        value: function(t) {
                            if (c.default.character(t) === h.default.keyName.Alt) {
                                var i = c.default.getHoveredElement();
                                if (e.isManagedByAutoNumeric(i)) {
                                    var n = e.getAutoNumericElement(i);
                                    this.constructor._reformatAltHovered(n)
                                }
                            }
                        }
                    }, {
                        key: "_isElementTagSupported",
                        value: function() {
                            return c.default.isElement(this.domElement) || c.default.throwError("The DOM element is not valid, " + this.domElement + " given."), c.default.isInArray(this.domElement.tagName.toLowerCase(), this.allowedTagList)
                        }
                    }, {
                        key: "_isInputElement",
                        value: function() {
                            return "input" === this.domElement.tagName.toLowerCase()
                        }
                    }, {
                        key: "_isInputTypeSupported",
                        value: function() {
                            return "text" === this.domElement.type || "hidden" === this.domElement.type || "tel" === this.domElement.type || c.default.isUndefinedOrNullOrEmpty(this.domElement.type)
                        }
                    }, {
                        key: "_checkElement",
                        value: function() {
                            var e = this.domElement.tagName.toLowerCase();
                            this._isElementTagSupported() || c.default.throwError("The <" + e + "> tag is not supported by autoNumeric"), this._isInputElement() ? (this._isInputTypeSupported() || c.default.throwError('The input type "' + this.domElement.type + '" is not supported by autoNumeric'), this.isInputElement = !0) : (this.isInputElement = !1, this.isContentEditable = this.domElement.hasAttribute("contenteditable") && "true" === this.domElement.getAttribute("contenteditable"))
                        }
                    }, {
                        key: "_formatDefaultValueOnPageLoad",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                                i = !0,
                                n = void 0;
                            if (n = c.default.isNull(t) ? c.default.getElementValue(this.domElement) : t, this.isInputElement || this.isContentEditable) {
                                var a = this.constructor._toNumericValue(n, this.settings);
                                if (this.domElement.hasAttribute("value") && "" !== this.domElement.getAttribute("value")) {
                                    if (null !== this.settings.defaultValueOverride && this.settings.defaultValueOverride.toString() !== n || null === this.settings.defaultValueOverride && "" !== n && n !== this.domElement.getAttribute("value") || "" !== n && "hidden" === this.domElement.getAttribute("type") && !c.default.isNumber(a)) {
                                        if (this.settings.saveValueToSessionStorage && (null !== this.settings.decimalPlacesShownOnFocus || this.settings.divisorWhenUnfocused) && this._setRawValue(this._getValueFromPersistentStorage()), !this.settings.saveValueToSessionStorage) {
                                            var s = void 0;
                                            s = null !== this.settings.negativeBracketsTypeOnBlur && "" !== this.settings.negativeSignCharacter ? this.constructor._removeBrackets(n, this.settings) : n, (this.settings.negativePositiveSignPlacement === e.options.negativePositiveSignPlacement.suffix || this.settings.negativePositiveSignPlacement !== e.options.negativePositiveSignPlacement.prefix && this.settings.currencySymbolPlacement === e.options.currencySymbolPlacement.suffix) && "" !== this.settings.negativeSignCharacter && c.default.isNegative(n) ? this._setRawValue(this.settings.negativeSignCharacter + this.constructor._stripAllNonNumberCharacters(s, this.settings, !0, this.isFocused)) : this._setRawValue(this.constructor._stripAllNonNumberCharacters(s, this.settings, !0, this.isFocused))
                                        }
                                        i = !1
                                    }
                                } else isNaN(Number(a)) || 1 / 0 === a ? c.default.throwError("The value [" + n + "] used in the input is not a valid value autoNumeric can work with.") : (this.set(a), i = !1);
                                if ("" === n) switch (this.settings.emptyInputBehavior) {
                                    case e.options.emptyInputBehavior.focus:
                                        i = !1;
                                        break;
                                    case e.options.emptyInputBehavior.always:
                                        this._setElementValue(this.settings.currencySymbol), i = !1;
                                        break;
                                    case e.options.emptyInputBehavior.zero:
                                        this.set("0"), i = !1
                                } else i && n === this.domElement.getAttribute("value") && this.set(n)
                            } else null === this.settings.defaultValueOverride ? this.set(n) : this.settings.defaultValueOverride === n && this.set(n)
                        }
                    }, {
                        key: "_calculateVMinAndVMaxIntegerSizes",
                        value: function() {
                            var e = this.settings.maximumValue.toString().split("."),
                                t = s(e, 1),
                                i = t[0],
                                n = this.settings.minimumValue || 0 === this.settings.minimumValue ? this.settings.minimumValue.toString().split(".") : [],
                                a = s(n, 1),
                                r = a[0];
                            i = i.replace("-", ""), r = r.replace("-", ""), this.settings.mIntPos = Math.max(i.length, 1), this.settings.mIntNeg = Math.max(r.length, 1)
                        }
                    }, {
                        key: "_setAlternativeDecimalSeparatorCharacter",
                        value: function() {
                            c.default.isNull(this.settings.decimalCharacterAlternative) && Number(this.settings.decimalPlaces) > 0 && ("." === this.settings.decimalCharacter && "," !== this.settings.digitGroupSeparator ? this.settings.decimalCharacterAlternative = "," : "," === this.settings.decimalCharacter && "." !== this.settings.digitGroupSeparator && (this.settings.decimalCharacterAlternative = "."))
                        }
                    }, {
                        key: "_transformOptionsValuesToDefaultTypes",
                        value: function() {
                            for (var e in this.settings)
                                if (this.settings.hasOwnProperty(e)) {
                                    var t = this.settings[e];
                                    "true" !== t && "false" !== t || (this.settings[e] = "true" === t), "number" == typeof t && (this.settings[e] = t.toString())
                                }
                        }
                    }, {
                        key: "_setSettings",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            if (!t && c.default.isNull(e) || this.constructor._convertOldOptionsToNewOnes(e), t) {
                                var i = "decimalPlacesRawValue" in e;
                                i && (this.settings.originalDecimalPlacesRawValue = e.decimalPlacesRawValue);
                                var n = "decimalPlaces" in e;
                                n && (this.settings.originalDecimalPlaces = e.decimalPlaces), this.constructor._calculateDecimalPlacesOnUpdate(e, this.settings), this._mergeSettings(e)
                            } else this.settings = {}, this._mergeSettings(this.constructor.getDefaultConfig(), this.domElement.dataset, e, {
                                rawValue: this.defaultRawValue
                            }), this.caretFix = !1, this.throwInput = !0, this.allowedTagList = h.default.allowedTagList, this.runOnce = !1, this.hoveredWithAlt = !1, this.androidSelectionStart = null;
                            this._transformOptionsValuesToDefaultTypes(), this._runCallbacksFoundInTheSettingsObject(), this.constructor._correctNegativePositiveSignPlacementOption(this.settings), this.constructor._correctCaretPositionOnFocusAndSelectOnFocusOptions(this.settings), this.settings.negativeSignCharacter = this.settings.minimumValue < 0 ? "-" : "", this.settings.positiveSignCharacter = this.settings.maximumValue >= 0 ? "+" : "", t || (c.default.isNull(e) || !e.decimalPlaces ? this.settings.originalDecimalPlaces = null : this.settings.originalDecimalPlaces = e.decimalPlaces, this.settings.originalDecimalPlacesRawValue = this.settings.decimalPlacesRawValue, this.constructor._calculateDecimalPlacesOnInit(this.settings)), this._calculateVMinAndVMaxIntegerSizes(), this._setAlternativeDecimalSeparatorCharacter(), this._setTrailingNegativeSignInfo(), this.regex = {}, this.constructor._cachesUsualRegularExpressions(this.settings, this.regex), this._setBrackets(), c.default.isEmptyObj(this.settings) && c.default.throwError("Unable to set the settings, those are invalid ; an empty object was given."), this.constructor.validate(this.settings, !1, e), this._keepAnOriginalSettingsCopy()
                        }
                    }, {
                        key: "_preparePastedText",
                        value: function(e) {
                            return this.constructor._stripAllNonNumberCharacters(e, this.settings, !0, this.isFocused).replace(this.settings.decimalCharacter, ".")
                        }
                    }, {
                        key: "_updateInternalProperties",
                        value: function() {
                            this.selection = c.default.getElementSelection(this.domElement), this.processed = !1, this.formatted = !1
                        }
                    }, {
                        key: "_updateEventKeyInfo",
                        value: function(e) {
                            this.eventKey = c.default.character(e)
                        }
                    }, {
                        key: "_saveCancellableValue",
                        value: function() {
                            this.savedCancellableValue = this.rawValue
                        }
                    }, {
                        key: "_setSelection",
                        value: function(e, t) {
                            e = Math.max(e, 0), t = Math.min(t, c.default.getElementValue(this.domElement).length), this.selection = {
                                start: e,
                                end: t,
                                length: t - e
                            }, c.default.setElementSelection(this.domElement, e, t)
                        }
                    }, {
                        key: "_setCaretPosition",
                        value: function(e) {
                            this._setSelection(e, e)
                        }
                    }, {
                        key: "_getLeftAndRightPartAroundTheSelection",
                        value: function() {
                            var e = c.default.getElementValue(this.domElement),
                                t = e.substring(0, this.selection.start),
                                i = e.substring(this.selection.end, e.length);
                            return [t, i]
                        }
                    }, {
                        key: "_getUnformattedLeftAndRightPartAroundTheSelection",
                        value: function() {
                            var t = this._getLeftAndRightPartAroundTheSelection(),
                                i = s(t, 2),
                                n = i[0],
                                a = i[1];
                            if ("" === n && "" === a) return ["", ""];
                            var r = !0;
                            return this.eventKey === h.default.keyName.Hyphen && 0 === Number(n) && (r = !1), this.isTrailingNegative && c.default.isNegative(a) && !c.default.isNegative(n) && (n = "-" + n, a = a.replace(this.settings.negativeSignCharacter, "")), n = e._stripAllNonNumberCharacters(n, this.settings, r, this.isFocused), a = e._stripAllNonNumberCharacters(a, this.settings, !1, this.isFocused), [n, a]
                        }
                    }, {
                        key: "_normalizeParts",
                        value: function(t, i) {
                            var n = !0;
                            this.eventKey === h.default.keyName.Hyphen && 0 === Number(t) && (n = !1), this.isTrailingNegative && c.default.isNegative(i) && !c.default.isNegative(t) && (t = "-" + t, i = i.replace(this.settings.negativeSignCharacter, "")), t = e._stripAllNonNumberCharacters(t, this.settings, n, this.isFocused), i = e._stripAllNonNumberCharacters(i, this.settings, !1, this.isFocused), this.settings.leadingZero !== e.options.leadingZero.deny || this.eventKey !== h.default.keyName.num0 && this.eventKey !== h.default.keyName.numpad0 || 0 !== Number(t) || c.default.contains(t, this.settings.decimalCharacter) || "" === i || (t = t.substring(0, t.length - 1));
                            var a = t + i;
                            if (this.settings.decimalCharacter) {
                                var s = a.match(new RegExp("^" + this.regex.aNegRegAutoStrip + "\\" + this.settings.decimalCharacter));
                                s && (t = t.replace(s[1], s[1] + "0"), a = t + i)
                            }
                            return [t, i, a]
                        }
                    }, {
                        key: "_setValueParts",
                        value: function(t, i) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                a = this._normalizeParts(t, i),
                                r = s(a, 3),
                                o = r[0],
                                l = r[1],
                                u = r[2],
                                d = e._checkIfInRangeWithOverrideOption(u, this.settings),
                                h = s(d, 2),
                                m = h[0],
                                g = h[1];
                            if (m && g) {
                                var f = e._truncateDecimalPlaces(u, this.settings, n, this.settings.decimalPlacesRawValue),
                                    v = f.replace(this.settings.decimalCharacter, ".");
                                if ("" === v || v === this.settings.negativeSignCharacter) {
                                    var p = void 0;
                                    switch (this.settings.emptyInputBehavior) {
                                        case e.options.emptyInputBehavior.zero:
                                            p = "0";
                                            break;
                                        case e.options.emptyInputBehavior.null:
                                            p = null;
                                            break;
                                        default:
                                            p = ""
                                    }
                                    this._setRawValue(p)
                                } else this._setRawValue(this._trimLeadingAndTrailingZeros(v));
                                var y = e._truncateDecimalPlaces(u, this.settings, n, this.settings.decimalPlacesShownOnFocus),
                                    S = o.length;
                                return S > y.length && (S = y.length), 1 === S && "0" === o && this.settings.leadingZero === e.options.leadingZero.deny && (S = "" === l || "0" === o && "" !== l ? 1 : 0), c.default.setElementValue(this.domElement, y), this._setCaretPosition(S), !0
                            }
                            return m ? g || c.default.triggerEvent(e.events.maxRangeExceeded, this.domElement) : c.default.triggerEvent(e.events.minRangeExceeded, this.domElement), !1
                        }
                    }, {
                        key: "_getSignPosition",
                        value: function() {
                            var t = void 0;
                            if (this.settings.currencySymbol) {
                                var i = this.settings.currencySymbol.length,
                                    n = c.default.getElementValue(this.domElement);
                                if (this.settings.currencySymbolPlacement === e.options.currencySymbolPlacement.prefix) {
                                    var a = this.settings.negativeSignCharacter && n && n.charAt(0) === this.settings.negativeSignCharacter;
                                    t = a ? [1, i + 1] : [0, i]
                                } else {
                                    var s = n.length;
                                    t = [s - i, s]
                                }
                            } else t = [1e3, -1];
                            return t
                        }
                    }, {
                        key: "_expandSelectionOnSign",
                        value: function() {
                            var e = this._getSignPosition(),
                                t = s(e, 2),
                                i = t[0],
                                n = t[1],
                                a = this.selection;
                            a.start < n && a.end > i && ((a.start < i || a.end > n) && c.default.getElementValue(this.domElement).substring(Math.max(a.start, i), Math.min(a.end, n)).match(/^\s*$/) ? a.start < i ? this._setSelection(a.start, i) : this._setSelection(n, a.end) : this._setSelection(Math.min(a.start, i), Math.max(a.end, n)))
                        }
                    }, {
                        key: "_checkPaste",
                        value: function() {
                            if (!c.default.isUndefined(this.valuePartsBeforePaste)) {
                                var t = this.valuePartsBeforePaste,
                                    i = this._getLeftAndRightPartAroundTheSelection(),
                                    n = s(i, 2),
                                    a = n[0],
                                    r = n[1];
                                delete this.valuePartsBeforePaste;
                                var o = a.substr(0, t[0].length) + e._stripAllNonNumberCharacters(a.substr(t[0].length), this.settings, !0, this.isFocused);
                                this._setValueParts(o, r, !0) || (c.default.setElementValue(this.domElement, t.join("")), this._setCaretPosition(t[0].length))
                            }
                        }
                    }, {
                        key: "_processNonPrintableKeysAndShortcuts",
                        value: function(e) {
                            if ((e.ctrlKey || e.metaKey) && "keyup" === e.type && !c.default.isUndefined(this.valuePartsBeforePaste) || e.shiftKey && this.eventKey === h.default.keyName.Insert) return this._checkPaste(), !1;
                            if (this.constructor._shouldSkipEventKey(this.eventKey)) return !0;
                            if ((e.ctrlKey || e.metaKey) && this.eventKey === h.default.keyName.a) return this.settings.selectNumberOnly && (e.preventDefault(), this.selectNumber()), !0;
                            if ((e.ctrlKey || e.metaKey) && (this.eventKey === h.default.keyName.c || this.eventKey === h.default.keyName.v || this.eventKey === h.default.keyName.x)) return "keydown" === e.type && this._expandSelectionOnSign(), this.eventKey !== h.default.keyName.v && this.eventKey !== h.default.keyName.Insert || ("keydown" === e.type || "keypress" === e.type ? c.default.isUndefined(this.valuePartsBeforePaste) && (this.valuePartsBeforePaste = this._getLeftAndRightPartAroundTheSelection()) : this._checkPaste()), "keydown" === e.type || "keypress" === e.type || this.eventKey === h.default.keyName.c;
                            if (e.ctrlKey || e.metaKey) return this.eventKey !== h.default.keyName.Z && this.eventKey !== h.default.keyName.z;
                            if (this.eventKey === h.default.keyName.LeftArrow || this.eventKey === h.default.keyName.RightArrow) {
                                if ("keydown" === e.type && !e.shiftKey) {
                                    var t = c.default.getElementValue(this.domElement);
                                    this.eventKey !== h.default.keyName.LeftArrow || t.charAt(this.selection.start - 2) !== this.settings.digitGroupSeparator && t.charAt(this.selection.start - 2) !== this.settings.decimalCharacter ? this.eventKey !== h.default.keyName.RightArrow || t.charAt(this.selection.start + 1) !== this.settings.digitGroupSeparator && t.charAt(this.selection.start + 1) !== this.settings.decimalCharacter || this._setCaretPosition(this.selection.start + 1) : this._setCaretPosition(this.selection.start - 1)
                                }
                                return !0
                            }
                            return c.default.isInArray(this.eventKey, h.default.keyName._directionKeys)
                        }
                    }, {
                        key: "_processCharacterDeletionIfTrailingNegativeSign",
                        value: function(t) {
                            var i = s(t, 2),
                                n = i[0],
                                a = i[1],
                                r = c.default.getElementValue(this.domElement);
                            if (this.settings.currencySymbolPlacement === e.options.currencySymbolPlacement.prefix && this.settings.negativePositiveSignPlacement === e.options.negativePositiveSignPlacement.suffix && (this.eventKey === h.default.keyName.Backspace ? (this.caretFix = this.selection.start >= r.indexOf(this.settings.suffixText) && "" !== this.settings.suffixText, "-" === r.charAt(this.selection.start - 1) ? n = n.substring(1) : this.selection.start <= r.length - this.settings.suffixText.length && (n = n.substring(0, n.length - 1))) : (this.caretFix = this.selection.start >= r.indexOf(this.settings.suffixText) && "" !== this.settings.suffixText, this.selection.start >= r.indexOf(this.settings.currencySymbol) + this.settings.currencySymbol.length && (a = a.substring(1, a.length)), c.default.isNegative(n) && "-" === r.charAt(this.selection.start) && (n = n.substring(1)))), this.settings.currencySymbolPlacement === e.options.currencySymbolPlacement.suffix) switch (this.settings.negativePositiveSignPlacement) {
                                case e.options.negativePositiveSignPlacement.left:
                                    this.caretFix = this.selection.start >= r.indexOf(this.settings.negativeSignCharacter) + this.settings.negativeSignCharacter.length, this.eventKey === h.default.keyName.Backspace ? this.selection.start === r.indexOf(this.settings.negativeSignCharacter) + this.settings.negativeSignCharacter.length && c.default.contains(r, this.settings.negativeSignCharacter) ? n = n.substring(1) : "-" !== n && (this.selection.start <= r.indexOf(this.settings.negativeSignCharacter) || !c.default.contains(r, this.settings.negativeSignCharacter)) && (n = n.substring(0, n.length - 1)) : ("-" === n[0] && (a = a.substring(1)), this.selection.start === r.indexOf(this.settings.negativeSignCharacter) && c.default.contains(r, this.settings.negativeSignCharacter) && (n = n.substring(1)));
                                    break;
                                case e.options.negativePositiveSignPlacement.right:
                                    this.caretFix = this.selection.start >= r.indexOf(this.settings.negativeSignCharacter) + this.settings.negativeSignCharacter.length, this.eventKey === h.default.keyName.Backspace ? this.selection.start === r.indexOf(this.settings.negativeSignCharacter) + this.settings.negativeSignCharacter.length ? n = n.substring(1) : "-" !== n && this.selection.start <= r.indexOf(this.settings.negativeSignCharacter) - this.settings.currencySymbol.length ? n = n.substring(0, n.length - 1) : "" === n || c.default.contains(r, this.settings.negativeSignCharacter) || (n = n.substring(0, n.length - 1)) : (this.caretFix = this.selection.start >= r.indexOf(this.settings.currencySymbol) && "" !== this.settings.currencySymbol, this.selection.start === r.indexOf(this.settings.negativeSignCharacter) && (n = n.substring(1)), a = a.substring(1))
                            }
                            return [n, a]
                        }
                    }, {
                        key: "_processCharacterDeletion",
                        value: function() {
                            var e = void 0,
                                t = void 0;
                            if (this.selection.length) {
                                this._expandSelectionOnSign();
                                var i = this._getUnformattedLeftAndRightPartAroundTheSelection(),
                                    n = s(i, 2);
                                e = n[0], t = n[1]
                            } else {
                                var a = this._getUnformattedLeftAndRightPartAroundTheSelection(),
                                    r = s(a, 2);
                                if (e = r[0], t = r[1], "" === e && "" === t && (this.throwInput = !1), this.isTrailingNegative && c.default.isNegative(c.default.getElementValue(this.domElement))) {
                                    var o = this._processCharacterDeletionIfTrailingNegativeSign([e, t]),
                                        l = s(o, 2);
                                    e = l[0], t = l[1]
                                } else this.eventKey === h.default.keyName.Backspace ? e = e.substring(0, e.length - 1) : t = t.substring(1, t.length)
                            }
                            this._setValueParts(e, t)
                        }
                    }, {
                        key: "_isDecimalCharacterInsertionAllowed",
                        value: function() {
                            return this.settings.decimalPlacesShownOnFocus !== e.options.decimalPlacesShownOnFocus.none
                        }
                    }, {
                        key: "_processCharacterInsertion",
                        value: function() {
                            var e = this._getUnformattedLeftAndRightPartAroundTheSelection(),
                                t = s(e, 2),
                                i = t[0],
                                n = t[1];
                            if (this.eventKey !== h.default.keyName.AndroidDefault && (this.throwInput = !0), this.eventKey === this.settings.decimalCharacter || this.settings.decimalCharacterAlternative && this.eventKey === this.settings.decimalCharacterAlternative || "." === this.eventKey || "," === this.eventKey || this.eventKey === h.default.keyName.NumpadDot) return !this._isDecimalCharacterInsertionAllowed() || !this.settings.decimalCharacter || (!(!this.settings.negativeSignCharacter || !c.default.contains(n, this.settings.negativeSignCharacter)) || (!!c.default.contains(i, this.settings.decimalCharacter) || (n.indexOf(this.settings.decimalCharacter) > 0 || (0 === n.indexOf(this.settings.decimalCharacter) && (n = n.substr(1)), this._setValueParts(i + this.settings.decimalCharacter, n), !0))));
                            if (("-" === this.eventKey || "+" === this.eventKey) && "-" === this.settings.negativeSignCharacter) return "" === i && c.default.contains(n, this.settings.negativeSignCharacter) ? n = n.replace(this.settings.negativeSignCharacter, "") : i = c.default.isNegative(i) ? i.replace("-", "") : this.settings.negativeSignCharacter + i, this._setValueParts(i, n), !0;
                            var a = Number(this.eventKey);
                            return a >= 0 && a <= 9 ? (this.settings.negativeSignCharacter && "" === i && c.default.contains(n, this.settings.negativeSignCharacter) && (i = this.settings.negativeSignCharacter, n = n.substring(1, n.length)), this.settings.maximumValue <= 0 && this.settings.minimumValue < this.settings.maximumValue && !c.default.contains(c.default.getElementValue(this.domElement), this.settings.negativeSignCharacter) && "0" !== this.eventKey && (i = this.settings.negativeSignCharacter + i), this._setValueParts(i + this.eventKey, n), !0) : (this.throwInput = !1, !1)
                        }
                    }, {
                        key: "_formatValue",
                        value: function(t) {
                            var i = c.default.getElementValue(this.domElement),
                                n = this._getUnformattedLeftAndRightPartAroundTheSelection(),
                                a = s(n, 1),
                                r = a[0];
                            if (("" === this.settings.digitGroupSeparator || "" !== this.settings.digitGroupSeparator && !c.default.contains(i, this.settings.digitGroupSeparator)) && ("" === this.settings.currencySymbol || "" !== this.settings.currencySymbol && !c.default.contains(i, this.settings.currencySymbol))) {
                                var o = i.split(this.settings.decimalCharacter),
                                    l = s(o, 1),
                                    u = l[0],
                                    d = "";
                                c.default.isNegative(u) && (d = "-", u = u.replace("-", ""), r = r.replace("-", "")), "" === d && u.length > this.settings.mIntPos && "0" === r.charAt(0) && (r = r.slice(1)), "-" === d && u.length > this.settings.mIntNeg && "0" === r.charAt(0) && (r = r.slice(1)), r = d + r
                            }
                            var m = this.constructor._addGroupSeparators(i, this.settings, this.isFocused, this.rawValue),
                                g = m.length;
                            if (m) {
                                var f = r.split("");
                                if ((this.settings.negativePositiveSignPlacement === e.options.negativePositiveSignPlacement.suffix || this.settings.negativePositiveSignPlacement !== e.options.negativePositiveSignPlacement.prefix && this.settings.currencySymbolPlacement === e.options.currencySymbolPlacement.suffix) && "-" === f[0] && "" !== this.settings.negativeSignCharacter && (f.shift(), (this.eventKey === h.default.keyName.Backspace || this.eventKey === h.default.keyName.Delete) && this.caretFix && ((this.settings.currencySymbolPlacement === e.options.currencySymbolPlacement.suffix && this.settings.negativePositiveSignPlacement === e.options.negativePositiveSignPlacement.left || this.settings.currencySymbolPlacement === e.options.currencySymbolPlacement.prefix && this.settings.negativePositiveSignPlacement === e.options.negativePositiveSignPlacement.suffix) && (f.push("-"), this.caretFix = "keydown" === t.type), this.settings.currencySymbolPlacement === e.options.currencySymbolPlacement.suffix && this.settings.negativePositiveSignPlacement === e.options.negativePositiveSignPlacement.right))) {
                                    var v = this.settings.currencySymbol.split(""),
                                        p = ["\\", "^", "$", ".", "|", "?", "*", "+", "(", ")", "["],
                                        y = [];
                                    v.forEach(function(e, t) {
                                        t = v[e], c.default.isInArray(t, p) ? y.push("\\" + t) : y.push(t)
                                    }), this.eventKey === h.default.keyName.Backspace && y.push("-"), f.push(y.join("")), this.caretFix = "keydown" === t.type
                                }
                                for (var S = 0; S < f.length; S++) f[S].match("\\d") || (f[S] = "\\" + f[S]);
                                var P = new RegExp("^.*?" + f.join(".*?")),
                                    b = m.match(P);
                                b ? (g = b[0].length, this.settings.showPositiveSign && (0 === g && b.input.charAt(0) === this.settings.positiveSignCharacter && (g = 1 === b.input.indexOf(this.settings.currencySymbol) ? this.settings.currencySymbol.length + 1 : 1), 0 === g && b.input.charAt(this.settings.currencySymbol.length) === this.settings.positiveSignCharacter && (g = this.settings.currencySymbol.length + 1)), (0 === g && m.charAt(0) !== this.settings.negativeSignCharacter || 1 === g && m.charAt(0) === this.settings.negativeSignCharacter) && this.settings.currencySymbol && this.settings.currencySymbolPlacement === e.options.currencySymbolPlacement.prefix && (g = this.settings.currencySymbol.length + (c.default.isNegativeStrict(m) ? 1 : 0))) : (this.settings.currencySymbol && this.settings.currencySymbolPlacement === e.options.currencySymbolPlacement.suffix && (g -= this.settings.currencySymbol.length), this.settings.suffixText && (g -= this.settings.suffixText.length))
                            }
                            m === i && (m !== i || this.eventKey !== h.default.keyName.num0 && this.eventKey !== h.default.keyName.numpad0) || (this._setElementValue(m), this._setCaretPosition(g)), null !== this.androidSelectionStart && this._setCaretPosition(this.androidSelectionStart), this.formatted = !0
                        }
                    }], [{
                        key: "version",
                        value: function() {
                            return "4.0.1"
                        }
                    }, {
                        key: "_setArgumentsValues",
                        value: function(e, t, i) {
                            c.default.isNull(e) && c.default.throwError("At least one valid parameter is needed in order to initialize an AutoNumeric object");
                            var n = c.default.isElement(e),
                                a = c.default.isString(e),
                                s = c.default.isObject(t),
                                r = Array.isArray(t) && t.length > 0,
                                o = c.default.isNumberOrArabic(t) || "" === t,
                                l = this._isPreDefinedOptionValid(t),
                                u = c.default.isNull(t),
                                d = c.default.isEmptyString(t),
                                h = c.default.isObject(i),
                                m = Array.isArray(i) && i.length > 0,
                                g = c.default.isNull(i),
                                f = this._isPreDefinedOptionValid(i),
                                v = void 0,
                                p = void 0,
                                y = void 0;
                            return n && u && g ? (v = e, y = null, p = null) : n && o && g ? (v = e, y = t, p = null) : n && s && g ? (v = e, y = null, p = t) : n && l && g ? (v = e, y = null, p = this._getOptionObject(t)) : n && r && g ? (v = e, y = null, p = this.mergeOptions(t)) : n && (u || d) && h ? (v = e, y = null, p = i) : n && (u || d) && m ? (v = e, y = null, p = this.mergeOptions(i)) : a && u && g ? (v = document.querySelector(e), y = null, p = null) : a && s && g ? (v = document.querySelector(e), y = null, p = t) : a && l && g ? (v = document.querySelector(e), y = null, p = this._getOptionObject(t)) : a && r && g ? (v = document.querySelector(e), y = null, p = this.mergeOptions(t)) : a && (u || d) && h ? (v = document.querySelector(e), y = null, p = i) : a && (u || d) && m ? (v = document.querySelector(e), y = null, p = this.mergeOptions(i)) : a && o && g ? (v = document.querySelector(e), y = t, p = null) : a && o && h ? (v = document.querySelector(e), y = t, p = i) : a && o && f ? (v = document.querySelector(e), y = t, p = this._getOptionObject(i)) : n && o && h ? (v = e, y = t, p = i) : n && o && f ? (v = e, y = t, p = this._getOptionObject(i)) : n && o && m ? (v = e, y = t, p = this.mergeOptions(i)) : c.default.throwError("The parameters given to the AutoNumeric object are not valid, '" + e + "', '" + t + "' and '" + i + "' given."), c.default.isNull(v) && c.default.throwError("The selector '" + e + "' did not select any valid DOM element. Please check on which element you called AutoNumeric."), {
                                domElement: v,
                                initialValue: y,
                                userOptions: p
                            }
                        }
                    }, {
                        key: "mergeOptions",
                        value: function(e) {
                            var t = this,
                                i = {};
                            return e.forEach(function(e) {
                                r(i, t._getOptionObject(e))
                            }), i
                        }
                    }, {
                        key: "_isPreDefinedOptionValid",
                        value: function(t) {
                            return e.predefinedOptions.hasOwnProperty(t)
                        }
                    }, {
                        key: "_getOptionObject",
                        value: function(t) {
                            var i = void 0;
                            return c.default.isString(t) ? (i = e.getPredefinedOptions()[t], void 0 !== i && null !== i || c.default.warning("The given pre-defined option [" + t + "] is not recognized by autoNumeric. Please check that pre-defined option name.", !0)) : i = t, i
                        }
                    }, {
                        key: "_unformatAltHovered",
                        value: function(e) {
                            e.hoveredWithAlt = !0, e.unformat()
                        }
                    }, {
                        key: "_reformatAltHovered",
                        value: function(e) {
                            e.hoveredWithAlt = !1, e.reformat()
                        }
                    }, {
                        key: "_getChildANInputElement",
                        value: function(e) {
                            var t = this,
                                i = e.getElementsByTagName("input"),
                                n = [],
                                a = Array.prototype.slice.call(i, 0);
                            return a.forEach(function(e) {
                                t.test(e) && n.push(e)
                            }), n
                        }
                    }, {
                        key: "test",
                        value: function(e) {
                            return this._isInGlobalList(e)
                        }
                    }, {
                        key: "_createWeakMap",
                        value: function(e) {
                            window[e] = new WeakMap
                        }
                    }, {
                        key: "_createGlobalList",
                        value: function() {
                            this.autoNumericGlobalListName = "autoNumericGlobalList", this._createWeakMap(this.autoNumericGlobalListName)
                        }
                    }, {
                        key: "_doesGlobalListExists",
                        value: function() {
                            var e = o(window[this.autoNumericGlobalListName]);
                            return "undefined" !== e && "object" === e
                        }
                    }, {
                        key: "_addToGlobalList",
                        value: function(e) {
                            this._doesGlobalListExists() || this._createGlobalList();
                            var t = e.node();
                            if (this._isInGlobalList(t)) {
                                if (this._getFromGlobalList(t) === this) return;
                                c.default.warning("A reference to the DOM element you just initialized already exists in the global AutoNumeric element list. Please make sure to not initialize the same DOM element multiple times.", e.getSettings().showWarnings)
                            }
                            window[this.autoNumericGlobalListName].set(t, e)
                        }
                    }, {
                        key: "_removeFromGlobalList",
                        value: function(e) {
                            this._doesGlobalListExists() && window[this.autoNumericGlobalListName].delete(e.node())
                        }
                    }, {
                        key: "_getFromGlobalList",
                        value: function(e) {
                            return this._doesGlobalListExists() ? window[this.autoNumericGlobalListName].get(e) : null
                        }
                    }, {
                        key: "_isInGlobalList",
                        value: function(e) {
                            return !!this._doesGlobalListExists() && window[this.autoNumericGlobalListName].has(e)
                        }
                    }, {
                        key: "validate",
                        value: function(t) {
                            var i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                            !c.default.isUndefinedOrNullOrEmpty(t) && c.default.isObject(t) || c.default.throwError("The userOptions are invalid ; it should be a valid object, [" + t + "] given.");
                            var a = c.default.isObject(n);
                            a || c.default.isNull(n) || c.default.throwError("The 'originalOptions' parameter is invalid ; it should either be a valid option object or `null`, [" + t + "] given."), c.default.isNull(t) || this._convertOldOptionsToNewOnes(t);
                            var s = void 0;
                            s = i ? r({}, this.getDefaultConfig(), t) : t, c.default.isTrueOrFalseString(s.showWarnings) || c.default.isBoolean(s.showWarnings) || c.default.throwError("The debug option 'showWarnings' is invalid ; it should be either 'false' or 'true', [" + s.showWarnings + "] given.");
                            var l = /^[0-9]+$/,
                                u = /[0-9]+/,
                                d = /^-?[0-9]+(\.?[0-9]+)?$/,
                                h = /^[0-9]+(\.?[0-9]+)?$/;
                            c.default.isTrueOrFalseString(s.allowDecimalPadding) || c.default.isBoolean(s.allowDecimalPadding) || s.allowDecimalPadding === e.options.allowDecimalPadding.floats || c.default.throwError("The decimal padding option 'allowDecimalPadding' is invalid ; it should either be `false`, `true` or `'floats'`, [" + s.allowDecimalPadding + "] given."), s.allowDecimalPadding !== e.options.allowDecimalPadding.never && "false" !== s.allowDecimalPadding && s.allowDecimalPadding !== e.options.allowDecimalPadding.floats || s.decimalPlaces === e.options.decimalPlaces.none && s.decimalPlacesShownOnBlur === e.options.decimalPlacesShownOnBlur.none && s.decimalPlacesShownOnFocus === e.options.decimalPlacesShownOnFocus.none || c.default.warning("Setting 'allowDecimalPadding' to [" + s.allowDecimalPadding + "] will override the current 'decimalPlaces*' settings [" + s.decimalPlaces + ", " + s.decimalPlacesShownOnBlur + " and " + s.decimalPlacesShownOnFocus + "].", s.showWarnings), c.default.isNull(s.caretPositionOnFocus) || c.default.isInArray(s.caretPositionOnFocus, [e.options.caretPositionOnFocus.start, e.options.caretPositionOnFocus.end, e.options.caretPositionOnFocus.decimalLeft, e.options.caretPositionOnFocus.decimalRight]) || c.default.throwError("The display on empty string option 'caretPositionOnFocus' is invalid ; it should either be `null`, 'focus', 'press', 'always' or 'zero', [" + s.caretPositionOnFocus + "] given.");
                            var m = void 0;
                            m = a ? n : this._correctCaretPositionOnFocusAndSelectOnFocusOptions(t), c.default.isNull(m) || m.caretPositionOnFocus === e.options.caretPositionOnFocus.doNoForceCaretPosition || m.selectOnFocus !== e.options.selectOnFocus.select || c.default.warning("The 'selectOnFocus' option is set to 'select', which is in conflict with the 'caretPositionOnFocus' which is set to '" + m.caretPositionOnFocus + "'. As a result, if this has been called when instantiating an AutoNumeric object, the 'selectOnFocus' option is forced to 'doNotSelect'.", s.showWarnings), c.default.isInArray(s.digitGroupSeparator, [e.options.digitGroupSeparator.comma, e.options.digitGroupSeparator.dot, e.options.digitGroupSeparator.normalSpace, e.options.digitGroupSeparator.thinSpace, e.options.digitGroupSeparator.narrowNoBreakSpace, e.options.digitGroupSeparator.noBreakSpace, e.options.digitGroupSeparator.noSeparator, e.options.digitGroupSeparator.apostrophe, e.options.digitGroupSeparator.arabicThousandsSeparator, e.options.digitGroupSeparator.dotAbove]) || c.default.throwError("The thousand separator character option 'digitGroupSeparator' is invalid ; it should be ',', '.', '٬', '˙', \"'\", ' ', ' ', ' ', ' ' or empty (''), [" + s.digitGroupSeparator + "] given."), c.default.isTrueOrFalseString(s.showOnlyNumbersOnFocus) || c.default.isBoolean(s.showOnlyNumbersOnFocus) || c.default.throwError("The 'showOnlyNumbersOnFocus' option is invalid ; it should be either 'false' or 'true', [" + s.showOnlyNumbersOnFocus + "] given."), l.test(s.digitalGroupSpacing) || c.default.throwError("The digital grouping for thousand separator option 'digitalGroupSpacing' is invalid ; it should be a positive integer, [" + s.digitalGroupSpacing + "] given."), c.default.isInArray(s.decimalCharacter, [e.options.decimalCharacter.comma, e.options.decimalCharacter.dot, e.options.decimalCharacter.middleDot, e.options.decimalCharacter.arabicDecimalSeparator, e.options.decimalCharacter.decimalSeparatorKeySymbol]) || c.default.throwError("The decimal separator character option 'decimalCharacter' is invalid ; it should be '.', ',', '·', '⎖' or '٫', [" + s.decimalCharacter + "] given."), s.decimalCharacter === s.digitGroupSeparator && c.default.throwError("autoNumeric will not function properly when the decimal character 'decimalCharacter' [" + s.decimalCharacter + "] and the thousand separator 'digitGroupSeparator' [" + s.digitGroupSeparator + "] are the same character."), c.default.isNull(s.decimalCharacterAlternative) || c.default.isString(s.decimalCharacterAlternative) || c.default.throwError("The alternate decimal separator character option 'decimalCharacterAlternative' is invalid ; it should be a string, [" + s.decimalCharacterAlternative + "] given."), "" === s.currencySymbol || c.default.isString(s.currencySymbol) || c.default.throwError("The currency symbol option 'currencySymbol' is invalid ; it should be a string, [" + s.currencySymbol + "] given."), c.default.isInArray(s.currencySymbolPlacement, [e.options.currencySymbolPlacement.prefix, e.options.currencySymbolPlacement.suffix]) || c.default.throwError("The placement of the currency sign option 'currencySymbolPlacement' is invalid ; it should either be 'p' (prefix) or 's' (suffix), [" + s.currencySymbolPlacement + "] given."), c.default.isInArray(s.negativePositiveSignPlacement, [e.options.negativePositiveSignPlacement.prefix, e.options.negativePositiveSignPlacement.suffix, e.options.negativePositiveSignPlacement.left, e.options.negativePositiveSignPlacement.right, e.options.negativePositiveSignPlacement.none]) || c.default.throwError("The placement of the negative sign option 'negativePositiveSignPlacement' is invalid ; it should either be 'p' (prefix), 's' (suffix), 'l' (left), 'r' (right) or 'null', [" + s.negativePositiveSignPlacement + "] given."), c.default.isTrueOrFalseString(s.showPositiveSign) || c.default.isBoolean(s.showPositiveSign) || c.default.throwError("The show positive sign option 'showPositiveSign' is invalid ; it should be either 'false' or 'true', [" + s.showPositiveSign + "] given."), (!c.default.isString(s.suffixText) || "" !== s.suffixText && (c.default.isNegative(s.suffixText) || u.test(s.suffixText))) && c.default.throwError("The additional suffix option 'suffixText' is invalid ; it should not contains the negative sign '-' nor any numerical characters, [" + s.suffixText + "] given."), c.default.isNull(s.overrideMinMaxLimits) || c.default.isInArray(s.overrideMinMaxLimits, [e.options.overrideMinMaxLimits.ceiling, e.options.overrideMinMaxLimits.floor, e.options.overrideMinMaxLimits.ignore]) || c.default.throwError("The override min & max limits option 'overrideMinMaxLimits' is invalid ; it should either be 'ceiling', 'floor' or 'ignore', [" + s.overrideMinMaxLimits + "] given."), c.default.isString(s.maximumValue) && d.test(s.maximumValue) || c.default.throwError("The maximum possible value option 'maximumValue' is invalid ; it should be a string that represents a positive or negative number, [" + s.maximumValue + "] given."), c.default.isString(s.minimumValue) && d.test(s.minimumValue) || c.default.throwError("The minimum possible value option 'minimumValue' is invalid ; it should be a string that represents a positive or negative number, [" + s.minimumValue + "] given."), parseFloat(s.minimumValue) > parseFloat(s.maximumValue) && c.default.throwError("The minimum possible value option is greater than the maximum possible value option ; 'minimumValue' [" + s.minimumValue + "] should be smaller than 'maximumValue' [" + s.maximumValue + "]."), c.default.isInt(s.decimalPlaces) && s.decimalPlaces >= 0 || c.default.isString(s.decimalPlaces) && l.test(s.decimalPlaces) || c.default.throwError("The number of decimal places option 'decimalPlaces' is invalid ; it should be a positive integer, [" + s.decimalPlaces + "] given."), c.default.isNull(s.decimalPlacesRawValue) || c.default.isInt(s.decimalPlacesRawValue) && s.decimalPlacesRawValue >= 0 || c.default.isString(s.decimalPlacesRawValue) && l.test(s.decimalPlacesRawValue) || c.default.throwError("The number of decimal places for the raw value option 'decimalPlacesRawValue' is invalid ; it should be a positive integer or `null`, [" + s.decimalPlacesRawValue + "] given."), this._validateDecimalPlacesRawValue(s), c.default.isNull(s.decimalPlacesShownOnFocus) || l.test(String(s.decimalPlacesShownOnFocus)) || c.default.throwError("The number of expanded decimal places option 'decimalPlacesShownOnFocus' is invalid ; it should be a positive integer or `null`, [" + s.decimalPlacesShownOnFocus + "] given."), !c.default.isNull(s.decimalPlacesShownOnFocus) && Number(s.decimalPlaces) > Number(s.decimalPlacesShownOnFocus) && c.default.warning("The extended decimal places 'decimalPlacesShownOnFocus' [" + s.decimalPlacesShownOnFocus + "] should be greater than the 'decimalPlaces' [" + s.decimalPlaces + "] value. Currently, this will limit the ability of your user to manually change some of the decimal places. Do you really want to do that?", s.showWarnings), (c.default.isNull(s.divisorWhenUnfocused) || h.test(s.divisorWhenUnfocused)) && 0 !== s.divisorWhenUnfocused && "0" !== s.divisorWhenUnfocused && 1 !== s.divisorWhenUnfocused && "1" !== s.divisorWhenUnfocused || c.default.throwError("The divisor option 'divisorWhenUnfocused' is invalid ; it should be a positive number higher than one, preferably an integer, [" + s.divisorWhenUnfocused + "] given."), c.default.isNull(s.decimalPlacesShownOnBlur) || l.test(s.decimalPlacesShownOnBlur) || c.default.throwError("The number of decimals shown when unfocused option 'decimalPlacesShownOnBlur' is invalid ; it should be a positive integer or `null`, [" + s.decimalPlacesShownOnBlur + "] given."), c.default.isNull(s.symbolWhenUnfocused) || c.default.isString(s.symbolWhenUnfocused) || c.default.throwError("The symbol to show when unfocused option 'symbolWhenUnfocused' is invalid ; it should be a string, [" + s.symbolWhenUnfocused + "] given."), c.default.isTrueOrFalseString(s.saveValueToSessionStorage) || c.default.isBoolean(s.saveValueToSessionStorage) || c.default.throwError("The save to session storage option 'saveValueToSessionStorage' is invalid ; it should be either 'false' or 'true', [" + s.saveValueToSessionStorage + "] given."), c.default.isInArray(s.onInvalidPaste, [e.options.onInvalidPaste.error, e.options.onInvalidPaste.ignore, e.options.onInvalidPaste.clamp, e.options.onInvalidPaste.truncate, e.options.onInvalidPaste.replace]) || c.default.throwError("The paste behavior option 'onInvalidPaste' is invalid ; it should either be 'error', 'ignore', 'clamp', 'truncate' or 'replace' (cf. documentation), [" + s.onInvalidPaste + "] given."), c.default.isInArray(s.roundingMethod, [e.options.roundingMethod.halfUpSymmetric, e.options.roundingMethod.halfUpAsymmetric, e.options.roundingMethod.halfDownSymmetric, e.options.roundingMethod.halfDownAsymmetric, e.options.roundingMethod.halfEvenBankersRounding, e.options.roundingMethod.upRoundAwayFromZero, e.options.roundingMethod.downRoundTowardZero, e.options.roundingMethod.toCeilingTowardPositiveInfinity, e.options.roundingMethod.toFloorTowardNegativeInfinity, e.options.roundingMethod.toNearest05, e.options.roundingMethod.toNearest05Alt, e.options.roundingMethod.upToNext05, e.options.roundingMethod.downToNext05]) || c.default.throwError("The rounding method option 'roundingMethod' is invalid ; it should either be 'S', 'A', 's', 'a', 'B', 'U', 'D', 'C', 'F', 'N05', 'CHF', 'U05' or 'D05' (cf. documentation), [" + s.roundingMethod + "] given."), c.default.isNull(s.negativeBracketsTypeOnBlur) || c.default.isInArray(s.negativeBracketsTypeOnBlur, [e.options.negativeBracketsTypeOnBlur.parentheses, e.options.negativeBracketsTypeOnBlur.brackets, e.options.negativeBracketsTypeOnBlur.chevrons, e.options.negativeBracketsTypeOnBlur.curlyBraces, e.options.negativeBracketsTypeOnBlur.angleBrackets, e.options.negativeBracketsTypeOnBlur.japaneseQuotationMarks, e.options.negativeBracketsTypeOnBlur.halfBrackets, e.options.negativeBracketsTypeOnBlur.whiteSquareBrackets, e.options.negativeBracketsTypeOnBlur.quotationMarks, e.options.negativeBracketsTypeOnBlur.guillemets]) || c.default.throwError("The brackets for negative values option 'negativeBracketsTypeOnBlur' is invalid ; it should either be '(,)', '[,]', '<,>', '{,}', '〈,〉', '｢,｣', '⸤,⸥', '⟦,⟧', '‹,›' or '«,»', [" + s.negativeBracketsTypeOnBlur + "] given."), c.default.isInArray(s.emptyInputBehavior, [e.options.emptyInputBehavior.focus, e.options.emptyInputBehavior.press, e.options.emptyInputBehavior.always, e.options.emptyInputBehavior.zero, e.options.emptyInputBehavior.null]) || c.default.throwError("The display on empty string option 'emptyInputBehavior' is invalid ; it should either be 'focus', 'press', 'always', 'zero' or 'null', [" + s.emptyInputBehavior + "] given."), s.emptyInputBehavior === e.options.emptyInputBehavior.zero && (s.minimumValue > 0 || s.maximumValue < 0) && c.default.throwError("The 'emptyInputBehavior' option is set to 'zero', but this value is outside of the range defined by 'minimumValue' and 'maximumValue' [" + s.minimumValue + ", " + s.maximumValue + "]."), c.default.isInArray(s.leadingZero, [e.options.leadingZero.allow, e.options.leadingZero.deny, e.options.leadingZero.keep]) || c.default.throwError("The leading zero behavior option 'leadingZero' is invalid ; it should either be 'allow', 'deny' or 'keep', [" + s.leadingZero + "] given."), c.default.isTrueOrFalseString(s.formatOnPageLoad) || c.default.isBoolean(s.formatOnPageLoad) || c.default.throwError("The format on initialization option 'formatOnPageLoad' is invalid ; it should be either 'false' or 'true', [" + s.formatOnPageLoad + "] given."), l.test(s.historySize) && 0 !== s.historySize || c.default.throwError("The history size option 'historySize' is invalid ; it should be a positive integer, [" + s.historySize + "] given."), c.default.isTrueOrFalseString(s.selectNumberOnly) || c.default.isBoolean(s.selectNumberOnly) || c.default.throwError("The select number only option 'selectNumberOnly' is invalid ; it should be either 'false' or 'true', [" + s.selectNumberOnly + "] given."), c.default.isTrueOrFalseString(s.selectOnFocus) || c.default.isBoolean(s.selectOnFocus) || c.default.throwError("The select on focus option 'selectOnFocus' is invalid ; it should be either 'false' or 'true', [" + s.selectOnFocus + "] given."), c.default.isNull(s.defaultValueOverride) || "" === s.defaultValueOverride || d.test(s.defaultValueOverride) || c.default.throwError("The unformatted default value option 'defaultValueOverride' is invalid ; it should be a string that represents a positive or negative number, [" + s.defaultValueOverride + "] given."), c.default.isTrueOrFalseString(s.unformatOnSubmit) || c.default.isBoolean(s.unformatOnSubmit) || c.default.throwError("The remove formatting on submit option 'unformatOnSubmit' is invalid ; it should be either 'false' or 'true', [" + s.unformatOnSubmit + "] given."), c.default.isNull(s.outputFormat) || c.default.isInArray(s.outputFormat, [e.options.outputFormat.string, e.options.outputFormat.number, e.options.outputFormat.dot, e.options.outputFormat.negativeDot, e.options.outputFormat.comma, e.options.outputFormat.negativeComma, e.options.outputFormat.dotNegative, e.options.outputFormat.commaNegative]) || c.default.throwError("The custom locale format option 'outputFormat' is invalid ; it should either be null, 'string', 'number', '.', '-.', ',', '-,', '.-' or ',-', [" + s.outputFormat + "] given."), c.default.isTrueOrFalseString(s.isCancellable) || c.default.isBoolean(s.isCancellable) || c.default.throwError("The cancellable behavior option 'isCancellable' is invalid ; it should be either 'false' or 'true', [" + s.isCancellable + "] given."), c.default.isTrueOrFalseString(s.modifyValueOnWheel) || c.default.isBoolean(s.modifyValueOnWheel) || c.default.throwError("The increment/decrement on mouse wheel option 'modifyValueOnWheel' is invalid ; it should be either 'false' or 'true', [" + s.modifyValueOnWheel + "] given."), (!c.default.isString(s.wheelStep) && !c.default.isNumber(s.wheelStep) || "progressive" !== s.wheelStep && !h.test(s.wheelStep) || 0 === Number(s.wheelStep)) && c.default.throwError("The wheel step value option 'wheelStep' is invalid ; it should either be the string 'progressive', or a number or a string that represents a positive number (excluding zero), [" + s.wheelStep + "] given."), c.default.isInArray(s.serializeSpaces, [e.options.serializeSpaces.plus, e.options.serializeSpaces.percent]) || c.default.throwError("The space replacement character option 'serializeSpaces' is invalid ; it should either be '+' or '%20', [" + s.serializeSpaces + "] given."), c.default.isTrueOrFalseString(s.noEventListeners) || c.default.isBoolean(s.noEventListeners) || c.default.throwError("The option 'noEventListeners' that prevent the creation of event listeners is invalid ; it should be either 'false' or 'true', [" + s.noEventListeners + "] given."), c.default.isNull(s.styleRules) || c.default.isObject(s.styleRules) && (s.styleRules.hasOwnProperty("positive") || s.styleRules.hasOwnProperty("negative") || s.styleRules.hasOwnProperty("ranges") || s.styleRules.hasOwnProperty("userDefined")) || c.default.throwError("The option 'styleRules' is invalid ; it should be a correctly structured object, with one or more 'positive', 'negative', 'ranges' or 'userDefined' attributes, [" + s.styleRules + "] given."), c.default.isNull(s.styleRules) || !s.styleRules.hasOwnProperty("userDefined") || c.default.isNull(s.styleRules.userDefined) || s.styleRules.userDefined.forEach(function(e) {
                                e.hasOwnProperty("callback") && !c.default.isFunction(e.callback) && c.default.throwError("The callback defined in the `userDefined` attribute is not a function, " + o(e.callback) + " given.")
                            }), (c.default.isNull(s.rawValueDivisor) || h.test(s.rawValueDivisor)) && 0 !== s.rawValueDivisor && "0" !== s.rawValueDivisor && 1 !== s.rawValueDivisor && "1" !== s.rawValueDivisor || c.default.throwError("The raw value divisor option 'rawValueDivisor' is invalid ; it should be a positive number higher than one, preferably an integer, [" + s.rawValueDivisor + "] given."), c.default.isTrueOrFalseString(s.readOnly) || c.default.isBoolean(s.readOnly) || c.default.throwError("The option 'readOnly' is invalid ; it should be either 'false' or 'true', [" + s.readOnly + "] given."), c.default.isTrueOrFalseString(s.unformatOnHover) || c.default.isBoolean(s.unformatOnHover) || c.default.throwError("The option 'unformatOnHover' is invalid ; it should be either 'false' or 'true', [" + s.unformatOnHover + "] given."), c.default.isTrueOrFalseString(s.failOnUnknownOption) || c.default.isBoolean(s.failOnUnknownOption) || c.default.throwError("The debug option 'failOnUnknownOption' is invalid ; it should be either 'false' or 'true', [" + s.failOnUnknownOption + "] given."), c.default.isTrueOrFalseString(s.createLocalList) || c.default.isBoolean(s.createLocalList) || c.default.throwError("The debug option 'createLocalList' is invalid ; it should be either 'false' or 'true', [" + s.createLocalList + "] given.")
                        }
                    }, {
                        key: "_validateDecimalPlacesRawValue",
                        value: function(e) {
                            c.default.isNull(e.decimalPlacesRawValue) || (e.decimalPlacesRawValue < e.decimalPlaces && c.default.warning("The number of decimal places to store in the raw value [" + e.decimalPlacesRawValue + "] is lower than the ones to display [" + e.decimalPlaces + "]. This will likely confuse your users.\nTo solve that, you'd need to either set `decimalPlacesRawValue` to `null`, or set a number of decimal places for the raw value equal of bigger than `decimalPlaces`.", e.showWarnings), e.decimalPlacesRawValue < e.decimalPlacesShownOnFocus && c.default.warning("The number of decimal places to store in the raw value [" + e.decimalPlacesRawValue + "] is lower than the ones shown on focus [" + e.decimalPlacesShownOnFocus + "]. This will likely confuse your users.\nTo solve that, you'd need to either set `decimalPlacesRawValue` to `null`, or set a number of decimal places for the raw value equal of bigger than `decimalPlacesShownOnFocus`.", e.showWarnings), e.decimalPlacesRawValue < e.decimalPlacesShownOnBlur && c.default.warning("The number of decimal places to store in the raw value [" + e.decimalPlacesRawValue + "] is lower than the ones shown when unfocused [" + e.decimalPlacesShownOnBlur + "]. This will likely confuse your users.\nTo solve that, you'd need to either set `decimalPlacesRawValue` to `null`, or set a number of decimal places for the raw value equal of bigger than `decimalPlacesShownOnBlur`.", e.showWarnings))
                        }
                    }, {
                        key: "areSettingsValid",
                        value: function(e) {
                            var t = !0;
                            try {
                                this.validate(e, !0)
                            } catch (e) {
                                t = !1
                            }
                            return t
                        }
                    }, {
                        key: "getDefaultConfig",
                        value: function() {
                            return e.defaultSettings
                        }
                    }, {
                        key: "getPredefinedOptions",
                        value: function() {
                            return e.predefinedOptions
                        }
                    }, {
                        key: "_generateOptionsObjectFromOptionsArray",
                        value: function(e) {
                            var t = this,
                                i = void 0;
                            return c.default.isUndefinedOrNullOrEmpty(e) || 0 === e.length ? i = null : (i = {}, 1 === e.length && Array.isArray(e[0]) ? e[0].forEach(function(e) {
                                r(i, t._getOptionObject(e))
                            }) : e.length >= 1 && e.forEach(function(e) {
                                r(i, e)
                            })), i
                        }
                    }, {
                        key: "format",
                        value: function(t) {
                            if (c.default.isUndefined(t) || null === t) return null;
                            var i = void 0;
                            i = c.default.isElement(t) ? c.default.getElementValue(t) : t, c.default.isString(i) || c.default.isNumber(i) || c.default.throwError('The value "' + i + '" being "set" is not numeric and therefore cannot be used appropriately.');
                            for (var n = arguments.length, a = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) a[o - 1] = arguments[o];
                            var l = this._generateOptionsObjectFromOptionsArray(a),
                                u = r({}, this.getDefaultConfig(), l);
                            i < 0 ? u.negativeSignCharacter = "-" : u.negativeSignCharacter = "";
                            var d = {};
                            this._cachesUsualRegularExpressions(u, d);
                            var h = this._toNumericValue(i, u);
                            isNaN(Number(h)) && c.default.throwError("The value [" + h + "] that you are trying to format is not a recognized number.");
                            var m = this._checkIfInRangeWithOverrideOption(h, u),
                                g = s(m, 2),
                                f = g[0],
                                v = g[1];
                            return f && v || (c.default.triggerEvent(e.events.formatted, document, "Range test failed"), c.default.throwError("The value [" + h + "] being set falls outside of the minimumValue [" + u.minimumValue + "] and maximumValue [" + u.maximumValue + "] range set for this element")), this._correctNegativePositiveSignPlacementOption(u), this._calculateDecimalPlacesOnInit(u), h = this._roundFormattedValueShownOnFocus(h, u), h = this._modifyNegativeSignAndDecimalCharacterForFormattedValue(h, u), h = this._addGroupSeparators(h, u, !1, h)
                        }
                    }, {
                        key: "formatAndSet",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                i = this.format(e, t);
                            return c.default.setElementValue(e, i), i
                        }
                    }, {
                        key: "unformat",
                        value: function(e) {
                            if (c.default.isNumberStrict(e)) return e;
                            var t = void 0;
                            if (t = c.default.isElement(e) ? c.default.getElementValue(e) : e, c.default.isUndefined(t) || null === t) return null;
                            (c.default.isArray(t) || c.default.isObject(t)) && c.default.throwError("A number or a string representing a number is needed to be able to unformat it, [" + t + "] given.");
                            for (var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) n[a - 1] = arguments[a];
                            var o = this._generateOptionsObjectFromOptionsArray(n),
                                l = r({}, this.getDefaultConfig(), o);
                            if (t = t.toString(), c.default.isNegative(t)) l.negativeSignCharacter = "-";
                            else if (!c.default.isNull(l.negativeBracketsTypeOnBlur)) {
                                var u = l.negativeBracketsTypeOnBlur.split(","),
                                    d = s(u, 2);
                                l.firstBracket = d[0], l.lastBracket = d[1], t.charAt(0) === l.firstBracket && t.charAt(t.length - 1) === l.lastBracket && (l.negativeSignCharacter = "-", t = this._removeBrackets(t, l, !1))
                            }
                            t = this._convertToNumericString(t, l);
                            var h = new RegExp("[^+-0123456789.]", "gi");
                            return h.test(t) ? NaN : (this._correctNegativePositiveSignPlacementOption(l), this._calculateDecimalPlacesOnInit(l), t = this._roundFormattedValueShownOnFocus(t, l), t = t.replace(l.decimalCharacter, "."), t = this._toLocale(t, l.outputFormat))
                        }
                    }, {
                        key: "unformatAndSet",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                i = this.unformat(e, t);
                            return c.default.setElementValue(e, i), i
                        }
                    }, {
                        key: "localize",
                        value: function(t) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                n = void 0;
                            n = c.default.isElement(t) ? c.default.getElementValue(t) : t, c.default.isNull(i) && (i = e.defaultSettings), n = this.unformat(n, i), 0 === Number(n) && i.leadingZero !== e.options.leadingZero.keep && (n = "0");
                            var a = void 0;
                            return a = c.default.isNull(i) ? i.outputFormat : e.defaultSettings.outputFormat, this._toLocale(n, a)
                        }
                    }, {
                        key: "localizeAndSet",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                                i = this.localize(e, t);
                            return c.default.setElementValue(e, i), i
                        }
                    }, {
                        key: "isManagedByAutoNumeric",
                        value: function(e) {
                            return this._isInGlobalList(e)
                        }
                    }, {
                        key: "getAutoNumericElement",
                        value: function(e) {
                            return this.isManagedByAutoNumeric(e) ? this._getFromGlobalList(e) : null
                        }
                    }, {
                        key: "_stripAllNonNumberCharacters",
                        value: function(t, i, n, a) {
                            t = String(t), "" !== i.currencySymbol && (t = t.replace(i.currencySymbol, "")), i.suffixText && (t = t.replace(i.suffixText, "")), t = t.replace(i.skipFirstAutoStrip, "$1$2"), t = t.replace(i.skipLastAutoStrip, "$1"), t = t.replace(i.allowedAutoStrip, ""), i.decimalCharacterAlternative && (t = t.replace(i.decimalCharacterAlternative, i.decimalCharacter));
                            var r = t.match(i.numRegAutoStrip);
                            if (t = r ? [r[1], r[2], r[3]].join("") : "", i.leadingZero === e.options.leadingZero.allow || i.leadingZero === e.options.leadingZero.keep) {
                                var o = "",
                                    l = t.split(i.decimalCharacter),
                                    u = s(l, 2),
                                    d = u[0],
                                    h = u[1],
                                    m = d;
                                c.default.contains(m, i.negativeSignCharacter) && (o = i.negativeSignCharacter, m = m.replace(i.negativeSignCharacter, "")), "" === o && m.length > i.mIntPos && "0" === m.charAt(0) && (m = m.slice(1)), "" !== o && m.length > i.mIntNeg && "0" === m.charAt(0) && (m = m.slice(1)), t = "" + o + m + (c.default.isUndefined(h) ? "" : i.decimalCharacter + h)
                            }
                            return (n && i.leadingZero === e.options.leadingZero.deny || !a && i.leadingZero === e.options.leadingZero.allow) && (t = t.replace(i.stripReg, "$1$2")), t
                        }
                    }, {
                        key: "_toggleNegativeBracket",
                        value: function(e, t, i) {
                            var n = void 0;
                            return n = i ? this._removeBrackets(e, t) : this._addBrackets(e, t)
                        }
                    }, {
                        key: "_addBrackets",
                        value: function(e, t) {
                            var i = void 0;
                            return i = c.default.isNull(t.negativeBracketsTypeOnBlur) ? e : "" + t.firstBracket + e.replace(t.negativeSignCharacter, "") + t.lastBracket
                        }
                    }, {
                        key: "_removeBrackets",
                        value: function(e, t) {
                            var i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                                n = void 0;
                            return c.default.isNull(t.negativeBracketsTypeOnBlur) || e.charAt(0) !== t.firstBracket ? n = e : (n = e.replace(t.firstBracket, ""), n = n.replace(t.lastBracket, ""), i ? (n = n.replace(t.currencySymbol, ""), n = this._mergeCurrencySignNegativePositiveSignAndValue(n, t, !0, !1)) : n = "-" + n), n
                        }
                    }, {
                        key: "_convertToNumericString",
                        value: function(t, i) {
                            t = t.replace(i.currencySymbol, ""), t = t.replace(new RegExp("[" + i.digitGroupSeparator + "]", "g"), ""), "." !== i.decimalCharacter && (t = t.replace(i.decimalCharacter, ".")), i.suffixText !== e.options.suffixText.none && (t = t.replace(i.suffixText, "")), c.default.isNegative(t) && t.lastIndexOf("-") === t.length - 1 && (t = t.replace("-", ""), t = "-" + t);
                            var n = i.leadingZero !== e.options.leadingZero.keep,
                                a = c.default.arabicToLatinNumbers(t, n, !1, !1);
                            return isNaN(a) || (t = a.toString()), t
                        }
                    }, {
                        key: "_toLocale",
                        value: function(t, i) {
                            if (c.default.isNull(i) || i === e.options.outputFormat.string) return t;
                            var n = void 0;
                            switch (i) {
                                case e.options.outputFormat.number:
                                    n = Number(t);
                                    break;
                                case e.options.outputFormat.dotNegative:
                                    n = c.default.isNegative(t) ? t.replace("-", "") + "-" : t;
                                    break;
                                case e.options.outputFormat.comma:
                                case e.options.outputFormat.negativeComma:
                                    n = t.replace(".", ",");
                                    break;
                                case e.options.outputFormat.commaNegative:
                                    n = t.replace(".", ","), n = c.default.isNegative(n) ? n.replace("-", "") + "-" : n;
                                    break;
                                case e.options.outputFormat.dot:
                                case e.options.outputFormat.negativeDot:
                                    n = t;
                                    break;
                                default:
                                    c.default.throwError("The given outputFormat [" + i + "] option is not recognized.")
                            }
                            return n
                        }
                    }, {
                        key: "_modifyNegativeSignAndDecimalCharacterForFormattedValue",
                        value: function(e, t) {
                            return "-" !== t.negativeSignCharacter && "" !== t.negativeSignCharacter && (e = e.replace("-", t.negativeSignCharacter)), "." !== t.decimalCharacter && (e = e.replace(".", t.decimalCharacter)), e
                        }
                    }, {
                        key: "_isElementValueEmptyOrOnlyTheNegativeSign",
                        value: function(e, t) {
                            return "" === e || e === t.negativeSignCharacter
                        }
                    }, {
                        key: "_orderValueCurrencySymbolAndSuffixText",
                        value: function(t, i, n) {
                            var a = void 0;
                            return a = i.emptyInputBehavior === e.options.emptyInputBehavior.always || n ? i.negativePositiveSignPlacement === e.options.negativePositiveSignPlacement.left ? t + i.currencySymbol + i.suffixText : i.currencySymbol + t + i.suffixText : t
                        }
                    }, {
                        key: "_addGroupSeparators",
                        value: function(t, i, n, a) {
                            var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                                o = c.default.isNegative(t) || c.default.isNegativeWithBrackets(t, i.firstBracket, i.lastBracket);
                            if (t = this._stripAllNonNumberCharacters(t, i, !1, n), this._isElementValueEmptyOrOnlyTheNegativeSign(t, i)) return this._orderValueCurrencySymbolAndSuffixText(t, i, !0);
                            var l = c.default.isZeroOrHasNoValue(t);
                            o && (t = t.replace("-", "")), i.digitalGroupSpacing = i.digitalGroupSpacing.toString();
                            var u = void 0;
                            switch (i.digitalGroupSpacing) {
                                case e.options.digitalGroupSpacing.two:
                                    u = /(\d)((\d)(\d{2}?)+)$/;
                                    break;
                                case e.options.digitalGroupSpacing.twoScaled:
                                    u = /(\d)((?:\d{2}){0,2}\d{3}(?:(?:\d{2}){2}\d{3})*?)$/;
                                    break;
                                case e.options.digitalGroupSpacing.four:
                                    u = /(\d)((\d{4}?)+)$/;
                                    break;
                                case e.options.digitalGroupSpacing.three:
                                default:
                                    u = /(\d)((\d{3}?)+)$/
                            }
                            var d = t.split(i.decimalCharacter),
                                h = s(d, 2),
                                m = h[0],
                                g = h[1];
                            if (i.decimalCharacterAlternative && c.default.isUndefined(g)) {
                                var f = t.split(i.decimalCharacterAlternative),
                                    v = s(f, 2);
                                m = v[0], g = v[1]
                            }
                            if ("" !== i.digitGroupSeparator)
                                for (; u.test(m);) m = m.replace(u, "$1" + i.digitGroupSeparator + "$2");
                            var p = void 0;
                            p = n ? i.decimalPlacesShownOnFocus : i.decimalPlacesShownOnBlur, 0 === p || c.default.isUndefined(g) ? t = m : (g.length > p && (g = g.substring(0, p)), t = "" + m + i.decimalCharacter + g), t = e._mergeCurrencySignNegativePositiveSignAndValue(t, i, o, l), c.default.isNull(r) && (r = a), null !== i.negativeBracketsTypeOnBlur && (r < 0 || c.default.isNegativeStrict(t)) && (t = this._toggleNegativeBracket(t, i, n));
                            var y = void 0;
                            return y = i.suffixText ? "" + t + i.suffixText : t
                        }
                    }, {
                        key: "_mergeCurrencySignNegativePositiveSignAndValue",
                        value: function(t, i, n, a) {
                            var s = "";
                            n ? s = i.negativeSignCharacter : i.showPositiveSign && !a && (s = i.positiveSignCharacter);
                            var r = void 0;
                            if (i.currencySymbolPlacement === e.options.currencySymbolPlacement.prefix)
                                if (i.negativePositiveSignPlacement !== e.options.negativePositiveSignPlacement.none && (n || !n && i.showPositiveSign && !a)) switch (i.negativePositiveSignPlacement) {
                                    case e.options.negativePositiveSignPlacement.prefix:
                                    case e.options.negativePositiveSignPlacement.left:
                                        r = "" + s + i.currencySymbol + t;
                                        break;
                                    case e.options.negativePositiveSignPlacement.right:
                                        r = "" + i.currencySymbol + s + t;
                                        break;
                                    case e.options.negativePositiveSignPlacement.suffix:
                                        r = "" + i.currencySymbol + t + s
                                } else r = i.currencySymbol + t;
                                else if (i.currencySymbolPlacement === e.options.currencySymbolPlacement.suffix)
                                if (i.negativePositiveSignPlacement !== e.options.negativePositiveSignPlacement.none && (n || !n && i.showPositiveSign && !a)) switch (i.negativePositiveSignPlacement) {
                                    case e.options.negativePositiveSignPlacement.suffix:
                                    case e.options.negativePositiveSignPlacement.right:
                                        r = "" + t + i.currencySymbol + s;
                                        break;
                                    case e.options.negativePositiveSignPlacement.left:
                                        r = "" + t + s + i.currencySymbol;
                                        break;
                                    case e.options.negativePositiveSignPlacement.prefix:
                                        r = "" + s + t + i.currencySymbol
                                } else r = t + i.currencySymbol;
                            return r
                        }
                    }, {
                        key: "_truncateZeros",
                        value: function(e, t) {
                            var i = void 0;
                            switch (t) {
                                case 0:
                                    i = /(\.(?:\d*[1-9])?)0*$/;
                                    break;
                                case 1:
                                    i = /(\.\d(?:\d*[1-9])?)0*$/;
                                    break;
                                default:
                                    i = new RegExp("(\\.\\d{" + t + "}(?:\\d*[1-9])?)0*")
                            }
                            return e = e.replace(i, "$1"), 0 === t && (e = e.replace(/\.$/, "")), e
                        }
                    }, {
                        key: "_roundRawValue",
                        value: function(e, t) {
                            return this._roundValue(e, t, t.decimalPlacesRawValue)
                        }
                    }, {
                        key: "_roundFormattedValueShownOnFocus",
                        value: function(e, t) {
                            return this._roundValue(e, t, Number(t.decimalPlacesShownOnFocus))
                        }
                    }, {
                        key: "_roundFormattedValueShownOnBlur",
                        value: function(e, t) {
                            return this._roundValue(e, t, Number(t.decimalPlacesShownOnBlur))
                        }
                    }, {
                        key: "_roundValue",
                        value: function(t, i, n) {
                            if (c.default.isNull(t)) return t;
                            if (t = "" === t ? "0" : t.toString(), i.roundingMethod === e.options.roundingMethod.toNearest05 || i.roundingMethod === e.options.roundingMethod.toNearest05Alt || i.roundingMethod === e.options.roundingMethod.upToNext05 || i.roundingMethod === e.options.roundingMethod.downToNext05) return this._roundCloseTo05(t, i);
                            var a = e._prepareValueForRounding(t, i),
                                r = s(a, 2),
                                o = r[0],
                                l = r[1];
                            t = l;
                            var u = t.lastIndexOf("."),
                                d = u === -1,
                                h = t.split("."),
                                m = s(h, 2),
                                g = m[1],
                                f = g > 0;
                            if (!f && (i.allowDecimalPadding === e.options.allowDecimalPadding.never || i.allowDecimalPadding === e.options.allowDecimalPadding.floats)) return 0 === Number(t) ? t : "" + o + t;
                            var v = void 0;
                            v = i.allowDecimalPadding === e.options.allowDecimalPadding.always || i.allowDecimalPadding === e.options.allowDecimalPadding.floats ? n : 0;
                            var p = d ? t.length - 1 : u,
                                y = t.length - 1 - p,
                                S = "";
                            if (y <= n) {
                                if (S = t, y < v) {
                                    d && (S = "" + S + i.decimalCharacter);
                                    for (var P = "000000"; y < v;) P = P.substring(0, v - y), S += P, y += P.length
                                } else y > v ? S = this._truncateZeros(S, v) : 0 === y && 0 === v && (S = S.replace(/\.$/, ""));
                                return 0 === Number(S) ? S : "" + o + S
                            }
                            var b = void 0;
                            b = d ? n - 1 : Number(n) + Number(u);
                            var w = Number(t.charAt(b + 1)),
                                O = t.substring(0, b + 1).split(""),
                                N = void 0;
                            if (N = "." === t.charAt(b) ? t.charAt(b - 1) % 2 : t.charAt(b) % 2, this._shouldRoundUp(w, i, o, N))
                                for (var k = O.length - 1; k >= 0; k -= 1)
                                    if ("." !== O[k]) {
                                        if (O[k] = +O[k] + 1, O[k] < 10) break;
                                        k > 0 && (O[k] = "0")
                                    }
                            return O = O.slice(0, b + 1), S = this._truncateZeros(O.join(""), v), 0 === Number(S) ? S : "" + o + S
                        }
                    }, {
                        key: "_roundCloseTo05",
                        value: function(t, i) {
                            switch (i.roundingMethod) {
                                case e.options.roundingMethod.toNearest05:
                                case e.options.roundingMethod.toNearest05Alt:
                                    t = (Math.round(20 * t) / 20).toString();
                                    break;
                                case e.options.roundingMethod.upToNext05:
                                    t = (Math.ceil(20 * t) / 20).toString();
                                    break;
                                default:
                                    t = (Math.floor(20 * t) / 20).toString()
                            }
                            var n = void 0;
                            return n = c.default.contains(t, ".") ? t.length - t.indexOf(".") < 3 ? t + "0" : t : t + ".00"
                        }
                    }, {
                        key: "_prepareValueForRounding",
                        value: function(t, i) {
                            var n = "";
                            return c.default.isNegativeStrict(t) && (n = "-", t = t.replace("-", "")), t.match(/^\d/) || (t = "0" + t), 0 === Number(t) && (n = ""), (Number(t) > 0 && i.leadingZero !== e.options.leadingZero.keep || t.length > 0 && i.leadingZero === e.options.leadingZero.allow) && (t = t.replace(/^0*(\d)/, "$1")), [n, t]
                        }
                    }, {
                        key: "_shouldRoundUp",
                        value: function(t, i, n, a) {
                            return t > 4 && i.roundingMethod === e.options.roundingMethod.halfUpSymmetric || t > 4 && i.roundingMethod === e.options.roundingMethod.halfUpAsymmetric && "" === n || t > 5 && i.roundingMethod === e.options.roundingMethod.halfUpAsymmetric && "-" === n || t > 5 && i.roundingMethod === e.options.roundingMethod.halfDownSymmetric || t > 5 && i.roundingMethod === e.options.roundingMethod.halfDownAsymmetric && "" === n || t > 4 && i.roundingMethod === e.options.roundingMethod.halfDownAsymmetric && "-" === n || t > 5 && i.roundingMethod === e.options.roundingMethod.halfEvenBankersRounding || 5 === t && i.roundingMethod === e.options.roundingMethod.halfEvenBankersRounding && 1 === a || t > 0 && i.roundingMethod === e.options.roundingMethod.toCeilingTowardPositiveInfinity && "" === n || t > 0 && i.roundingMethod === e.options.roundingMethod.toFloorTowardNegativeInfinity && "-" === n || t > 0 && i.roundingMethod === e.options.roundingMethod.upRoundAwayFromZero
                        }
                    }, {
                        key: "_truncateDecimalPlaces",
                        value: function(e, t, i, n) {
                            i && (e = this._roundFormattedValueShownOnFocus(e, t));
                            var a = e.split(t.decimalCharacter),
                                r = s(a, 2),
                                o = r[0],
                                l = r[1];
                            if (l && l.length > n)
                                if (n > 0) {
                                    var u = l.substring(0, n);
                                    e = "" + o + t.decimalCharacter + u
                                } else e = o;
                            return e
                        }
                    }, {
                        key: "_checkIfInRangeWithOverrideOption",
                        value: function(t, i) {
                            t = t.toString(), t = t.replace(",", ".");
                            var n = c.default.parseStr(i.minimumValue),
                                a = c.default.parseStr(i.maximumValue),
                                s = c.default.parseStr(t),
                                r = void 0;
                            switch (i.overrideMinMaxLimits) {
                                case e.options.overrideMinMaxLimits.floor:
                                    r = [c.default.testMinMax(n, s) > -1, !0];
                                    break;
                                case e.options.overrideMinMaxLimits.ceiling:
                                    r = [!0, c.default.testMinMax(a, s) < 1];
                                    break;
                                case e.options.overrideMinMaxLimits.ignore:
                                    r = [!0, !0];
                                    break;
                                default:
                                    r = [c.default.testMinMax(n, s) > -1, c.default.testMinMax(a, s) < 1]
                            }
                            return r
                        }
                    }, {
                        key: "_readCookie",
                        value: function(e) {
                            for (var t = e + "=", i = document.cookie.split(";"), n = "", a = 0; a < i.length; a += 1) {
                                for (n = i[a];
                                    " " === n.charAt(0);) n = n.substring(1, n.length);
                                if (0 === n.indexOf(t)) return n.substring(t.length, n.length)
                            }
                            return null
                        }
                    }, {
                        key: "_storageTest",
                        value: function() {
                            var e = "modernizr";
                            try {
                                return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0
                            } catch (e) {
                                return !1
                            }
                        }
                    }, {
                        key: "_correctNegativePositiveSignPlacementOption",
                        value: function(t) {
                            if (c.default.isNull(t.negativePositiveSignPlacement))
                                if (c.default.isUndefined(t) || !c.default.isUndefinedOrNullOrEmpty(t.negativePositiveSignPlacement) || c.default.isUndefinedOrNullOrEmpty(t.currencySymbol)) t.negativePositiveSignPlacement = e.options.negativePositiveSignPlacement.left;
                                else switch (t.currencySymbolPlacement) {
                                    case e.options.currencySymbolPlacement.suffix:
                                        t.negativePositiveSignPlacement = e.options.negativePositiveSignPlacement.prefix;
                                        break;
                                    case e.options.currencySymbolPlacement.prefix:
                                        t.negativePositiveSignPlacement = e.options.negativePositiveSignPlacement.left
                                }
                        }
                    }, {
                        key: "_correctCaretPositionOnFocusAndSelectOnFocusOptions",
                        value: function(t) {
                            return c.default.isNull(t) ? null : (!c.default.isUndefinedOrNullOrEmpty(t.caretPositionOnFocus) && c.default.isUndefinedOrNullOrEmpty(t.selectOnFocus) && (t.selectOnFocus = e.options.selectOnFocus.doNotSelect), c.default.isUndefinedOrNullOrEmpty(t.caretPositionOnFocus) && !c.default.isUndefinedOrNullOrEmpty(t.selectOnFocus) && t.selectOnFocus === e.options.selectOnFocus.select && (t.caretPositionOnFocus = e.options.caretPositionOnFocus.doNoForceCaretPosition), t)
                        }
                    }, {
                        key: "_calculateDecimalPlacesOnInit",
                        value: function(t) {
                            this._validateDecimalPlacesRawValue(t), t.decimalPlacesShownOnFocus === e.options.decimalPlacesShownOnFocus.useDefault && (t.decimalPlacesShownOnFocus = t.decimalPlaces), t.decimalPlacesShownOnBlur === e.options.decimalPlacesShownOnBlur.useDefault && (t.decimalPlacesShownOnBlur = t.decimalPlaces), t.decimalPlacesRawValue === e.options.decimalPlacesRawValue.useDefault && (t.decimalPlacesRawValue = t.decimalPlaces);
                            var i = 0;
                            t.rawValueDivisor && t.rawValueDivisor !== e.options.rawValueDivisor.none && (i = String(t.rawValueDivisor).length - 1, i < 0 && (i = 0)), t.decimalPlacesRawValue = Math.max(Math.max(t.decimalPlacesShownOnBlur, t.decimalPlacesShownOnFocus) + i, Number(t.originalDecimalPlacesRawValue) + i)
                        }
                    }, {
                        key: "_calculateDecimalPlacesOnUpdate",
                        value: function(t) {
                            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            this._validateDecimalPlacesRawValue(t), c.default.isNull(i) && c.default.throwError("When updating the settings, the previous ones should be passed as an argument.");
                            var n = "decimalPlaces" in t;
                            if (n || "decimalPlacesRawValue" in t || "decimalPlacesShownOnFocus" in t || "decimalPlacesShownOnBlur" in t || "rawValueDivisor" in t) {
                                n ? ("decimalPlacesShownOnFocus" in t && t.decimalPlacesShownOnFocus !== e.options.decimalPlacesShownOnFocus.useDefault || (t.decimalPlacesShownOnFocus = t.decimalPlaces), "decimalPlacesShownOnBlur" in t && t.decimalPlacesShownOnBlur !== e.options.decimalPlacesShownOnBlur.useDefault || (t.decimalPlacesShownOnBlur = t.decimalPlaces),
                                    "decimalPlacesRawValue" in t && t.decimalPlacesRawValue !== e.options.decimalPlacesRawValue.useDefault || (t.decimalPlacesRawValue = t.decimalPlaces)) : (c.default.isUndefined(t.decimalPlacesShownOnFocus) && (t.decimalPlacesShownOnFocus = i.decimalPlacesShownOnFocus), c.default.isUndefined(t.decimalPlacesShownOnBlur) && (t.decimalPlacesShownOnBlur = i.decimalPlacesShownOnBlur));
                                var a = 0;
                                t.rawValueDivisor && t.rawValueDivisor !== e.options.rawValueDivisor.none && (a = String(t.rawValueDivisor).length - 1, a < 0 && (a = 0)), t.decimalPlaces || t.decimalPlacesRawValue ? t.decimalPlacesRawValue = Math.max(Math.max(t.decimalPlacesShownOnBlur, t.decimalPlacesShownOnFocus) + a, Number(t.decimalPlacesRawValue) + a) : t.decimalPlacesRawValue = Math.max(Math.max(t.decimalPlacesShownOnBlur, t.decimalPlacesShownOnFocus) + a, Number(i.originalDecimalPlacesRawValue) + a)
                            }
                        }
                    }, {
                        key: "_cachesUsualRegularExpressions",
                        value: function(e, t) {
                            var i = "[0-9]",
                                n = "[^0-9]",
                                a = e.negativeSignCharacter ? "([-\\" + e.negativeSignCharacter + "]?)" : "(-?)";
                            t.aNegRegAutoStrip = a;
                            var s = void 0;
                            s = e.negativeSignCharacter ? "\\" + e.negativeSignCharacter : "", e.skipFirstAutoStrip = new RegExp(a + "[^-" + s + "\\" + e.decimalCharacter + i + "].*?(" + i + "|\\" + e.decimalCharacter + i + ")"), e.skipLastAutoStrip = new RegExp("(" + i + "\\" + e.decimalCharacter + "?)[^\\" + e.decimalCharacter + i + "]" + n + "*$");
                            var r = "-0123456789\\" + e.decimalCharacter;
                            e.allowedAutoStrip = new RegExp("[^" + r + "]", "g"), e.numRegAutoStrip = new RegExp(a + "(?:\\" + e.decimalCharacter + "?(" + i + "+\\" + e.decimalCharacter + i + "+)|(" + i + "*(?:\\" + e.decimalCharacter + i + "*)?))"), e.stripReg = new RegExp("^" + t.aNegRegAutoStrip + "0*(" + i + ")")
                        }
                    }, {
                        key: "_convertOldOptionsToNewOnes",
                        value: function(e) {
                            var t = {
                                aSep: "digitGroupSeparator",
                                nSep: "showOnlyNumbersOnFocus",
                                dGroup: "digitalGroupSpacing",
                                aDec: "decimalCharacter",
                                altDec: "decimalCharacterAlternative",
                                aSign: "currencySymbol",
                                pSign: "currencySymbolPlacement",
                                pNeg: "negativePositiveSignPlacement",
                                aSuffix: "suffixText",
                                oLimits: "overrideMinMaxLimits",
                                vMax: "maximumValue",
                                vMin: "minimumValue",
                                mDec: "decimalPlacesOverride",
                                eDec: "decimalPlacesShownOnFocus",
                                scaleDecimal: "decimalPlacesShownOnBlur",
                                aStor: "saveValueToSessionStorage",
                                mRound: "roundingMethod",
                                aPad: "allowDecimalPadding",
                                nBracket: "negativeBracketsTypeOnBlur",
                                wEmpty: "emptyInputBehavior",
                                lZero: "leadingZero",
                                aForm: "formatOnPageLoad",
                                sNumber: "selectNumberOnly",
                                anDefault: "defaultValueOverride",
                                unSetOnSubmit: "unformatOnSubmit",
                                outputType: "outputFormat",
                                debug: "showWarnings",
                                allowDecimalPadding: !0,
                                caretPositionOnFocus: !0,
                                createLocalList: !0,
                                currencySymbol: !0,
                                currencySymbolPlacement: !0,
                                decimalCharacter: !0,
                                decimalCharacterAlternative: !0,
                                decimalPlaces: !0,
                                decimalPlacesRawValue: !0,
                                decimalPlacesShownOnBlur: !0,
                                decimalPlacesShownOnFocus: !0,
                                defaultValueOverride: !0,
                                digitalGroupSpacing: !0,
                                digitGroupSeparator: !0,
                                divisorWhenUnfocused: !0,
                                emptyInputBehavior: !0,
                                failOnUnknownOption: !0,
                                formatOnPageLoad: !0,
                                historySize: !0,
                                isCancellable: !0,
                                leadingZero: !0,
                                maximumValue: !0,
                                minimumValue: !0,
                                modifyValueOnWheel: !0,
                                negativeBracketsTypeOnBlur: !0,
                                negativePositiveSignPlacement: !0,
                                noEventListeners: !0,
                                onInvalidPaste: !0,
                                outputFormat: !0,
                                overrideMinMaxLimits: !0,
                                rawValueDivisor: !0,
                                readOnly: !0,
                                roundingMethod: !0,
                                saveValueToSessionStorage: !0,
                                selectNumberOnly: !0,
                                selectOnFocus: !0,
                                serializeSpaces: !0,
                                showOnlyNumbersOnFocus: !0,
                                showPositiveSign: !0,
                                showWarnings: !0,
                                styleRules: !0,
                                suffixText: !0,
                                symbolWhenUnfocused: !0,
                                unformatOnHover: !0,
                                unformatOnSubmit: !0,
                                wheelStep: !0,
                                allowedAutoStrip: !0,
                                mIntNeg: !0,
                                mIntPos: !0,
                                negativeSignCharacter: !0,
                                numRegAutoStrip: !0,
                                originalDecimalPlaces: !0,
                                originalDecimalPlacesRawValue: !0,
                                positiveSignCharacter: !0,
                                skipFirstAutoStrip: !0,
                                skipLastAutoStrip: !0,
                                stripReg: !0
                            };
                            for (var i in e)
                                if (e.hasOwnProperty(i)) {
                                    if (t[i] === !0) continue;
                                    t.hasOwnProperty(i) ? (c.default.warning("You are using the deprecated option name '" + i + "'. Please use '" + t[i] + "' instead from now on. The old option name will be dropped very soon™.", !0), e[t[i]] = e[i], delete e[i]) : e.failOnUnknownOption && c.default.throwError("Option name '" + i + "' is unknown. Please fix the options passed to autoNumeric")
                                }
                            "mDec" in e && c.default.warning("The old `mDec` option has been deprecated in favor of more accurate options ; `decimalPlaces`, `decimalPlacesRawValue`, `decimalPlacesShownOnFocus` and `decimalPlacesShownOnBlur`.", !0)
                        }
                    }, {
                        key: "_toNumericValue",
                        value: function(e, t) {
                            var i = void 0;
                            return c.default.isNumber(Number(e)) ? i = e : (i = this._convertToNumericString(e.toString(), t), c.default.isNumber(Number(i)) || (c.default.warning('The value "' + e + "\" being 'set' is not numeric and therefore cannot be used appropriately.", t.showWarnings), i = NaN)), i
                        }
                    }, {
                        key: "_checkIfInRange",
                        value: function(e, t, i) {
                            var n = c.default.parseStr(e);
                            return c.default.testMinMax(t, n) > -1 && c.default.testMinMax(i, n) < 1
                        }
                    }, {
                        key: "_shouldSkipEventKey",
                        value: function(e) {
                            var t = c.default.isInArray(e, h.default.keyName._allFnKeys),
                                i = e === h.default.keyName.OSLeft || e === h.default.keyName.OSRight,
                                n = e === h.default.keyName.ContextMenu,
                                a = c.default.isInArray(e, h.default.keyName._someNonPrintableKeys),
                                s = e === h.default.keyName.NumLock || e === h.default.keyName.ScrollLock || e === h.default.keyName.Insert || e === h.default.keyName.Command,
                                r = e === h.default.keyName.Unidentified;
                            return t || i || n || a || r || s
                        }
                    }, {
                        key: "_serialize",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "unformatted",
                                n = this,
                                a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "+",
                                s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                                r = [];
                            "object" === ("undefined" == typeof e ? "undefined" : o(e)) && "form" === e.nodeName.toLowerCase() && Array.prototype.slice.call(e.elements).forEach(function(e) {
                                if (e.name && !e.disabled && ["file", "reset", "submit", "button"].indexOf(e.type) === -1)
                                    if ("select-multiple" === e.type) Array.prototype.slice.call(e.options).forEach(function(i) {
                                        i.selected && (t ? r.push({
                                            name: e.name,
                                            value: i.value
                                        }) : r.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(i.value)))
                                    });
                                    else if (["checkbox", "radio"].indexOf(e.type) === -1 || e.checked) {
                                    var a = void 0;
                                    if (n.isManagedByAutoNumeric(e)) {
                                        var o = void 0;
                                        switch (i) {
                                            case "unformatted":
                                                o = n.getAutoNumericElement(e), c.default.isNull(o) || (a = n.unformat(e, o.getSettings()));
                                                break;
                                            case "localized":
                                                if (o = n.getAutoNumericElement(e), !c.default.isNull(o)) {
                                                    var l = c.default.cloneObject(o.getSettings());
                                                    c.default.isNull(s) || (l.outputFormat = s), a = n.localize(e, l)
                                                }
                                                break;
                                            case "formatted":
                                            default:
                                                a = e.value
                                        }
                                    } else a = e.value;
                                    c.default.isUndefined(a) && c.default.throwError("This error should never be hit. If it has, something really wrong happened!"), t ? r.push({
                                        name: e.name,
                                        value: a
                                    }) : r.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(a))
                                }
                            });
                            var l = void 0;
                            return t ? l = r : (l = r.join("&"), "+" === a && (l = l.replace(/%20/g, "+"))), l
                        }
                    }, {
                        key: "_serializeNumericString",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "+";
                            return this._serialize(e, !1, "unformatted", t)
                        }
                    }, {
                        key: "_serializeFormatted",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "+";
                            return this._serialize(e, !1, "formatted", t)
                        }
                    }, {
                        key: "_serializeLocalized",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "+",
                                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                            return this._serialize(e, !1, "localized", t, i)
                        }
                    }, {
                        key: "_serializeNumericStringArray",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "+";
                            return this._serialize(e, !0, "unformatted", t)
                        }
                    }, {
                        key: "_serializeFormattedArray",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "+";
                            return this._serialize(e, !0, "formatted", t)
                        }
                    }, {
                        key: "_serializeLocalizedArray",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "+",
                                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                            return this._serialize(e, !0, "localized", t, i)
                        }
                    }]), e
                }();
            m.multiple = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        a = [];
                    if (c.default.isObject(t) && (i = t, t = null), c.default.isString(e)) e = [].concat(n(document.querySelectorAll(e)));
                    else if (c.default.isObject(e)) {
                        e.hasOwnProperty("rootElement") || c.default.throwError("The object passed to the 'multiple' function is invalid ; no 'rootElement' attribute found.");
                        var s = [].concat(n(e.rootElement.querySelectorAll("input")));
                        e.hasOwnProperty("exclude") ? (Array.isArray(e.exclude) || c.default.throwError("The 'exclude' array passed to the 'multiple' function is invalid."), e = c.default.filterOut(s, e.exclude)) : e = s
                    } else c.default.isArray(e) || c.default.throwError("The given parameters to the 'multiple' function are invalid.");
                    if (0 === e.length) {
                        var r = !0;
                        return !c.default.isNull(i) && c.default.isBoolean(i.showWarnings) && (r = i.showWarnings), c.default.warning("No valid DOM elements were given hence no AutoNumeric object were instantiated.", r), []
                    }
                    var l = c.default.isArray(t),
                        u = l && t.length >= 1,
                        d = !1,
                        h = !1;
                    if (u) {
                        var g = o(Number(t[0]));
                        d = "number" === g && !isNaN(Number(t[0])), d || ("string" === g || isNaN(g) || "object" === g) && (h = !0)
                    }
                    var f = c.default.isArray(i) && i.length >= 1,
                        v = !1;
                    if (f) {
                        var p = o(i[0]);
                        "string" !== p && "object" !== p || (v = !0)
                    }
                    var y = void 0;
                    y = h ? m.mergeOptions(t) : v ? m.mergeOptions(i) : i;
                    var S = c.default.isNumber(t),
                        P = void 0;
                    return d && (P = t.length), e.forEach(function(e, i) {
                        S ? a.push(new m(e, t, y)) : d && i <= P ? a.push(new m(e, t[i], y)) : a.push(new m(e, null, y))
                    }), a
                },
                function() {
                    function e(e, t) {
                        t = t || {
                            bubbles: !1,
                            cancelable: !1,
                            detail: void 0
                        };
                        var i = document.createEvent("CustomEvent");
                        return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i
                    }
                    return "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, void(window.CustomEvent = e))
                }(), e.exports = m
        }).call(window)
    }, function(e, t) {
        (function() {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var e = {
                get allowedTagList() {
                    return ["b", "caption", "cite", "code", "const", "dd", "del", "div", "dfn", "dt", "em", "h1", "h2", "h3", "h4", "h5", "h6", "input", "ins", "kdb", "label", "li", "option", "output", "p", "q", "s", "sample", "span", "strong", "td", "th", "u"]
                },
                get keyCode() {
                    return {
                        Backspace: 8,
                        Tab: 9,
                        Enter: 13,
                        Shift: 16,
                        Ctrl: 17,
                        Alt: 18,
                        Pause: 19,
                        CapsLock: 20,
                        Esc: 27,
                        Space: 32,
                        PageUp: 33,
                        PageDown: 34,
                        End: 35,
                        Home: 36,
                        LeftArrow: 37,
                        UpArrow: 38,
                        RightArrow: 39,
                        DownArrow: 40,
                        Insert: 45,
                        Delete: 46,
                        num0: 48,
                        num1: 49,
                        num2: 50,
                        num3: 51,
                        num4: 52,
                        num5: 53,
                        num6: 54,
                        num7: 55,
                        num8: 56,
                        num9: 57,
                        a: 65,
                        b: 66,
                        c: 67,
                        d: 68,
                        e: 69,
                        f: 70,
                        g: 71,
                        h: 72,
                        i: 73,
                        j: 74,
                        k: 75,
                        l: 76,
                        m: 77,
                        n: 78,
                        o: 79,
                        p: 80,
                        q: 81,
                        r: 82,
                        s: 83,
                        t: 84,
                        u: 85,
                        v: 86,
                        w: 87,
                        x: 88,
                        y: 89,
                        z: 90,
                        OSLeft: 91,
                        OSRight: 92,
                        ContextMenu: 93,
                        numpad0: 96,
                        numpad1: 97,
                        numpad2: 98,
                        numpad3: 99,
                        numpad4: 100,
                        numpad5: 101,
                        numpad6: 102,
                        numpad7: 103,
                        numpad8: 104,
                        numpad9: 105,
                        MultiplyNumpad: 106,
                        PlusNumpad: 107,
                        MinusNumpad: 109,
                        DotNumpad: 110,
                        SlashNumpad: 111,
                        F1: 112,
                        F2: 113,
                        F3: 114,
                        F4: 115,
                        F5: 116,
                        F6: 117,
                        F7: 118,
                        F8: 119,
                        F9: 120,
                        F10: 121,
                        F11: 122,
                        F12: 123,
                        NumLock: 144,
                        ScrollLock: 145,
                        MyComputer: 182,
                        MyCalculator: 183,
                        Semicolon: 186,
                        Equal: 187,
                        Comma: 188,
                        Hyphen: 189,
                        Dot: 190,
                        Slash: 191,
                        Backquote: 192,
                        LeftBracket: 219,
                        Backslash: 220,
                        RightBracket: 221,
                        Quote: 222,
                        Command: 224,
                        AltGraph: 225,
                        AndroidDefault: 229
                    }
                },
                get fromCharCodeKeyCode() {
                    return {
                        0: "LaunchCalculator",
                        8: "Backspace",
                        9: "Tab",
                        13: "Enter",
                        16: "Shift",
                        17: "Ctrl",
                        18: "Alt",
                        19: "Pause",
                        20: "CapsLock",
                        27: "Escape",
                        32: " ",
                        33: "PageUp",
                        34: "PageDown",
                        35: "End",
                        36: "Home",
                        37: "ArrowLeft",
                        38: "ArrowUp",
                        39: "ArrowRight",
                        40: "ArrowDown",
                        45: "Insert",
                        46: "Delete",
                        48: "0",
                        49: "1",
                        50: "2",
                        51: "3",
                        52: "4",
                        53: "5",
                        54: "6",
                        55: "7",
                        56: "8",
                        57: "9",
                        91: "OS",
                        92: "OSRight",
                        93: "ContextMenu",
                        96: "0",
                        97: "1",
                        98: "2",
                        99: "3",
                        100: "4",
                        101: "5",
                        102: "6",
                        103: "7",
                        104: "8",
                        105: "9",
                        106: "*",
                        107: "+",
                        109: "-",
                        110: ".",
                        111: "/",
                        112: "F1",
                        113: "F2",
                        114: "F3",
                        115: "F4",
                        116: "F5",
                        117: "F6",
                        118: "F7",
                        119: "F8",
                        120: "F9",
                        121: "F10",
                        122: "F11",
                        123: "F12",
                        144: "NumLock",
                        145: "ScrollLock",
                        182: "MyComputer",
                        183: "MyCalculator",
                        186: ";",
                        187: "=",
                        188: ",",
                        189: "-",
                        190: ".",
                        191: "/",
                        192: "`",
                        219: "[",
                        220: "\\",
                        221: "]",
                        222: "'",
                        224: "Meta",
                        225: "AltGraph"
                    }
                },
                get keyName() {
                    return {
                        Unidentified: "Unidentified",
                        AndroidDefault: "AndroidDefault",
                        Alt: "Alt",
                        AltGr: "AltGraph",
                        CapsLock: "CapsLock",
                        Ctrl: "Control",
                        Fn: "Fn",
                        FnLock: "FnLock",
                        Hyper: "Hyper",
                        Meta: "Meta",
                        OSLeft: "OS",
                        OSRight: "OS",
                        Command: "OS",
                        NumLock: "NumLock",
                        ScrollLock: "ScrollLock",
                        Shift: "Shift",
                        Super: "Super",
                        Symbol: "Symbol",
                        SymbolLock: "SymbolLock",
                        Enter: "Enter",
                        Tab: "Tab",
                        Space: " ",
                        LeftArrow: "ArrowLeft",
                        UpArrow: "ArrowUp",
                        RightArrow: "ArrowRight",
                        DownArrow: "ArrowDown",
                        End: "End",
                        Home: "Home",
                        PageUp: "PageUp",
                        PageDown: "PageDown",
                        Backspace: "Backspace",
                        Clear: "Clear",
                        Copy: "Copy",
                        CrSel: "CrSel",
                        Cut: "Cut",
                        Delete: "Delete",
                        EraseEof: "EraseEof",
                        ExSel: "ExSel",
                        Insert: "Insert",
                        Paste: "Paste",
                        Redo: "Redo",
                        Undo: "Undo",
                        Accept: "Accept",
                        Again: "Again",
                        Attn: "Attn",
                        Cancel: "Cancel",
                        ContextMenu: "ContextMenu",
                        Esc: "Escape",
                        Execute: "Execute",
                        Find: "Find",
                        Finish: "Finish",
                        Help: "Help",
                        Pause: "Pause",
                        Play: "Play",
                        Props: "Props",
                        Select: "Select",
                        ZoomIn: "ZoomIn",
                        ZoomOut: "ZoomOut",
                        BrightnessDown: "BrightnessDown",
                        BrightnessUp: "BrightnessUp",
                        Eject: "Eject",
                        LogOff: "LogOff",
                        Power: "Power",
                        PowerOff: "PowerOff",
                        PrintScreen: "PrintScreen",
                        Hibernate: "Hibernate",
                        Standby: "Standby",
                        WakeUp: "WakeUp",
                        Compose: "Compose",
                        Dead: "Dead",
                        F1: "F1",
                        F2: "F2",
                        F3: "F3",
                        F4: "F4",
                        F5: "F5",
                        F6: "F6",
                        F7: "F7",
                        F8: "F8",
                        F9: "F9",
                        F10: "F10",
                        F11: "F11",
                        F12: "F12",
                        Print: "Print",
                        num0: "0",
                        num1: "1",
                        num2: "2",
                        num3: "3",
                        num4: "4",
                        num5: "5",
                        num6: "6",
                        num7: "7",
                        num8: "8",
                        num9: "9",
                        a: "a",
                        b: "b",
                        c: "c",
                        d: "d",
                        e: "e",
                        f: "f",
                        g: "g",
                        h: "h",
                        i: "i",
                        j: "j",
                        k: "k",
                        l: "l",
                        m: "m",
                        n: "n",
                        o: "o",
                        p: "p",
                        q: "q",
                        r: "r",
                        s: "s",
                        t: "t",
                        u: "u",
                        v: "v",
                        w: "w",
                        x: "x",
                        y: "y",
                        z: "z",
                        A: "A",
                        B: "B",
                        C: "C",
                        D: "D",
                        E: "E",
                        F: "F",
                        G: "G",
                        H: "H",
                        I: "I",
                        J: "J",
                        K: "K",
                        L: "L",
                        M: "M",
                        N: "N",
                        O: "O",
                        P: "P",
                        Q: "Q",
                        R: "R",
                        S: "S",
                        T: "T",
                        U: "U",
                        V: "V",
                        W: "W",
                        X: "X",
                        Y: "Y",
                        Z: "Z",
                        Semicolon: ";",
                        Equal: "=",
                        Comma: ",",
                        Hyphen: "-",
                        Minus: "-",
                        Plus: "+",
                        Dot: ".",
                        Slash: "/",
                        Backquote: "`",
                        LeftBracket: "[",
                        RightBracket: "]",
                        Backslash: "\\",
                        Quote: "'",
                        numpad0: "0",
                        numpad1: "1",
                        numpad2: "2",
                        numpad3: "3",
                        numpad4: "4",
                        numpad5: "5",
                        numpad6: "6",
                        numpad7: "7",
                        numpad8: "8",
                        numpad9: "9",
                        NumpadDot: ".",
                        NumpadDotAlt: ",",
                        NumpadMultiply: "*",
                        NumpadPlus: "+",
                        NumpadMinus: "-",
                        NumpadSlash: "/",
                        NumpadDotObsoleteBrowsers: "Decimal",
                        NumpadMultiplyObsoleteBrowsers: "Multiply",
                        NumpadPlusObsoleteBrowsers: "Add",
                        NumpadMinusObsoleteBrowsers: "Subtract",
                        NumpadSlashObsoleteBrowsers: "Divide",
                        _allFnKeys: ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"],
                        _someNonPrintableKeys: ["Tab", "Enter", "Shift", "ShiftLeft", "ShiftRight", "Control", "ControlLeft", "ControlRight", "Alt", "AltLeft", "AltRight", "Pause", "CapsLock", "Escape"],
                        _directionKeys: ["PageUp", "PageDown", "End", "Home", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowUp"]
                    }
                }
            };
            t.default = e
        }).call(window)
    }, function(e, t, i) {
        (function() {
            "use strict";

            function e(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function n(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
                    return i
                }
                return Array.from(e)
            }

            function a(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                    }
                    return e
                },
                r = function() {
                    function e(e, t) {
                        var i = [],
                            n = !0,
                            a = !1,
                            s = void 0;
                        try {
                            for (var r, o = e[Symbol.iterator](); !(n = (r = o.next()).done) && (i.push(r.value), !t || i.length !== t); n = !0);
                        } catch (e) {
                            a = !0, s = e
                        } finally {
                            try {
                                !n && o.return && o.return()
                            } finally {
                                if (a) throw s
                            }
                        }
                        return i
                    }
                    return function(t, i) {
                        if (Array.isArray(t)) return t;
                        if (Symbol.iterator in Object(t)) return e(t, i);
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }
                }(),
                o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                l = function() {
                    function e(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, i, n) {
                        return i && e(t.prototype, i), n && e(t, n), t
                    }
                }(),
                u = i(2),
                c = e(u),
                d = function() {
                    function e() {
                        a(this, e)
                    }
                    return l(e, null, [{
                        key: "isNull",
                        value: function(e) {
                            return null === e
                        }
                    }, {
                        key: "isUndefined",
                        value: function(e) {
                            return void 0 === e
                        }
                    }, {
                        key: "isUndefinedOrNullOrEmpty",
                        value: function(e) {
                            return null === e || void 0 === e || "" === e
                        }
                    }, {
                        key: "isString",
                        value: function(e) {
                            return "string" == typeof e || e instanceof String
                        }
                    }, {
                        key: "isEmptyString",
                        value: function(e) {
                            return "" === e
                        }
                    }, {
                        key: "isBoolean",
                        value: function(e) {
                            return "boolean" == typeof e
                        }
                    }, {
                        key: "isTrueOrFalseString",
                        value: function(e) {
                            var t = String(e).toLowerCase();
                            return "true" === t || "false" === t
                        }
                    }, {
                        key: "isObject",
                        value: function(e) {
                            return "object" === ("undefined" == typeof e ? "undefined" : o(e)) && null !== e && !Array.isArray(e)
                        }
                    }, {
                        key: "isEmptyObj",
                        value: function(e) {
                            for (var t in e)
                                if (e.hasOwnProperty(t)) return !1;
                            return !0
                        }
                    }, {
                        key: "isNumberStrict",
                        value: function(e) {
                            return "number" == typeof e
                        }
                    }, {
                        key: "isNumber",
                        value: function(e) {
                            return !this.isArray(e) && !isNaN(parseFloat(e)) && isFinite(e)
                        }
                    }, {
                        key: "isNumberOrArabic",
                        value: function(e) {
                            var t = this.arabicToLatinNumbers(e, !1, !0, !0);
                            return this.isNumber(t)
                        }
                    }, {
                        key: "isInt",
                        value: function(e) {
                            return "number" == typeof e && parseFloat(e) === parseInt(e, 10) && !isNaN(e)
                        }
                    }, {
                        key: "isFunction",
                        value: function(e) {
                            return "function" == typeof e
                        }
                    }, {
                        key: "contains",
                        value: function(e, t) {
                            return !(!this.isString(e) || !this.isString(t) || "" === e || "" === t) && e.indexOf(t) !== -1
                        }
                    }, {
                        key: "isInArray",
                        value: function(e, t) {
                            return !(!this.isArray(t) || t === [] || this.isUndefined(e)) && t.indexOf(e) !== -1
                        }
                    }, {
                        key: "isArray",
                        value: function(e) {
                            if ("[object Array]" === Object.prototype.toString.call([])) return Array.isArray(e) || "object" === ("undefined" == typeof e ? "undefined" : o(e)) && "[object Array]" === Object.prototype.toString.call(e);
                            throw new Error("toString message changed for Object Array")
                        }
                    }, {
                        key: "isElement",
                        value: function(e) {
                            return e instanceof Element
                        }
                    }, {
                        key: "isInputElement",
                        value: function(e) {
                            return this.isElement(e) && "input" === e.tagName.toLowerCase()
                        }
                    }, {
                        key: "decimalPlaces",
                        value: function(e) {
                            var t = e.split("."),
                                i = r(t, 2),
                                n = i[1];
                            return this.isUndefined(n) ? 0 : n.length
                        }
                    }, {
                        key: "indexFirstNonZeroDecimalPlace",
                        value: function(e) {
                            var t = String(Math.abs(e)).split("."),
                                i = r(t, 2),
                                n = i[1];
                            if (this.isUndefined(n)) return 0;
                            var a = n.lastIndexOf("0");
                            return a === -1 ? a = 0 : a += 2, a
                        }
                    }, {
                        key: "keyCodeNumber",
                        value: function(e) {
                            return "undefined" == typeof e.which ? e.keyCode : e.which
                        }
                    }, {
                        key: "character",
                        value: function(t) {
                            var i = void 0;
                            if ("Unidentified" === t.key || void 0 === t.key || this.isSeleniumBot()) {
                                var n = this.keyCodeNumber(t);
                                if (n === c.default.keyCode.AndroidDefault) return c.default.keyName.AndroidDefault;
                                var a = c.default.fromCharCodeKeyCode[n];
                                i = e.isUndefinedOrNullOrEmpty(a) ? String.fromCharCode(n) : a
                            } else {
                                var s = void 0;
                                switch (t.key) {
                                    case "Add":
                                        i = c.default.keyName.NumpadPlus;
                                        break;
                                    case "Apps":
                                        i = c.default.keyName.ContextMenu;
                                        break;
                                    case "Crsel":
                                        i = c.default.keyName.CrSel;
                                        break;
                                    case "Decimal":
                                        i = c.default.keyName.NumpadDot;
                                        break;
                                    case "Del":
                                        s = this.browser(), i = (s.name = s.version <= 36) || (s.name = s.version <= 9) ? c.default.keyName.Dot : c.default.keyName.Delete;
                                        break;
                                    case "Divide":
                                        i = c.default.keyName.NumpadSlash;
                                        break;
                                    case "Down":
                                        i = c.default.keyName.DownArrow;
                                        break;
                                    case "Esc":
                                        i = c.default.keyName.Esc;
                                        break;
                                    case "Exsel":
                                        i = c.default.keyName.ExSel;
                                        break;
                                    case "Left":
                                        i = c.default.keyName.LeftArrow;
                                        break;
                                    case "Meta":
                                    case "Super":
                                        i = c.default.keyName.OSLeft;
                                        break;
                                    case "Multiply":
                                        i = c.default.keyName.NumpadMultiply;
                                        break;
                                    case "Right":
                                        i = c.default.keyName.RightArrow;
                                        break;
                                    case "Spacebar":
                                        i = c.default.keyName.Space;
                                        break;
                                    case "Subtract":
                                        i = c.default.keyName.NumpadMinus;
                                        break;
                                    case "Up":
                                        i = c.default.keyName.UpArrow;
                                        break;
                                    default:
                                        i = t.key
                                }
                            }
                            return i
                        }
                    }, {
                        key: "browser",
                        value: function() {
                            var e = navigator.userAgent,
                                t = void 0,
                                i = e.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
                            return /trident/i.test(i[1]) ? (t = /\brv[ :]+(\d+)/g.exec(e) || [], {
                                name: "ie",
                                version: t[1] || ""
                            }) : "Chrome" === i[1] && (t = e.match(/\b(OPR|Edge)\/(\d+)/), null !== t) ? {
                                name: t[1].replace("OPR", "opera"),
                                version: t[2]
                            } : (i = i[2] ? [i[1], i[2]] : [navigator.appName, navigator.appVersion, "-?"], null !== (t = e.match(/version\/(\d+)/i)) && i.splice(1, 1, t[1]), {
                                name: i[0].toLowerCase(),
                                version: i[1]
                            })
                        }
                    }, {
                        key: "isSeleniumBot",
                        value: function() {
                            return window.navigator.webdriver === !0
                        }
                    }, {
                        key: "isNegative",
                        value: function(t) {
                            var i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            return "-" === t || "" !== t && (e.isNumber(t) ? t < 0 : i ? this.contains(t, "-") : this.isNegativeStrict(t))
                        }
                    }, {
                        key: "isNegativeStrict",
                        value: function(e) {
                            return "-" === e.charAt(0)
                        }
                    }, {
                        key: "isNegativeWithBrackets",
                        value: function(e, t, i) {
                            return e.charAt(0) === t && this.contains(e, i)
                        }
                    }, {
                        key: "isZeroOrHasNoValue",
                        value: function(e) {
                            return !/[1-9]/g.test(e)
                        }
                    }, {
                        key: "setRawNegativeSign",
                        value: function(e) {
                            return this.isNegativeStrict(e) ? e : "-" + e
                        }
                    }, {
                        key: "replaceCharAt",
                        value: function(e, t, i) {
                            return "" + e.substr(0, t) + i + e.substr(t + i.length)
                        }
                    }, {
                        key: "clampToRangeLimits",
                        value: function(e, t) {
                            return Math.max(t.minimumValue, Math.min(t.maximumValue, e))
                        }
                    }, {
                        key: "countNumberCharactersOnTheCaretLeftSide",
                        value: function(e, t, i) {
                            for (var n = new RegExp("[0-9" + i + "-]"), a = 0, s = 0; s < t; s++) n.test(e[s]) && a++;
                            return a
                        }
                    }, {
                        key: "findCaretPositionInFormattedNumber",
                        value: function(e, t, i, n) {
                            var a = i.length,
                                s = e.length,
                                r = void 0,
                                o = 0;
                            for (r = 0; r < a && o < s && o < t; r++)(e[o] === i[r] || "." === e[o] && i[r] === n) && o++;
                            return r
                        }
                    }, {
                        key: "countCharInText",
                        value: function(e, t) {
                            for (var i = 0, n = 0; n < t.length; n++) t[n] === e && i++;
                            return i
                        }
                    }, {
                        key: "convertCharacterCountToIndexPosition",
                        value: function(e) {
                            return Math.max(e, e - 1)
                        }
                    }, {
                        key: "getElementSelection",
                        value: function(e) {
                            var t = {},
                                i = void 0;
                            try {
                                i = this.isUndefined(e.selectionStart)
                            } catch (e) {
                                i = !1
                            }
                            try {
                                if (i) {
                                    var n = window.getSelection(),
                                        a = n.getRangeAt(0);
                                    t.start = a.startOffset, t.end = a.endOffset, t.length = t.end - t.start
                                } else t.start = e.selectionStart, t.end = e.selectionEnd, t.length = t.end - t.start
                            } catch (e) {
                                t.start = 0, t.end = 0, t.length = 0
                            }
                            return t
                        }
                    }, {
                        key: "setElementSelection",
                        value: function(t, i) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                            if (this.isUndefinedOrNullOrEmpty(n) && (n = i), this.isInputElement(t)) t.setSelectionRange(i, n);
                            else if (!e.isNull(t.firstChild)) {
                                var a = document.createRange();
                                a.setStart(t.firstChild, i), a.setEnd(t.firstChild, n);
                                var s = window.getSelection();
                                s.removeAllRanges(), s.addRange(a)
                            }
                        }
                    }, {
                        key: "throwError",
                        value: function(e) {
                            throw new Error(e)
                        }
                    }, {
                        key: "warning",
                        value: function(e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            t && console.warn("Warning: " + e)
                        }
                    }, {
                        key: "isWheelUpEvent",
                        value: function(e) {
                            return e.deltaY || this.throwError("The event passed as a parameter is not a valid wheel event, '" + e.type + "' given."), e.deltaY < 0
                        }
                    }, {
                        key: "isWheelDownEvent",
                        value: function(e) {
                            return e.deltaY || this.throwError("The event passed as a parameter is not a valid wheel event, '" + e.type + "' given."), e.deltaY > 0
                        }
                    }, {
                        key: "forceDecimalPlaces",
                        value: function(e, t) {
                            var i = String(e).split("."),
                                n = r(i, 2),
                                a = n[0],
                                s = n[1];
                            return s ? a + "." + s.substr(0, t) : e
                        }
                    }, {
                        key: "roundToNearest",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
                            return 0 === e ? 0 : (0 === t && this.throwError("The `stepPlace` used to round is equal to `0`. This value must not be equal to zero."), Math.round(e / t) * t)
                        }
                    }, {
                        key: "modifyAndRoundToNearestAuto",
                        value: function(e, t, i) {
                            e = Number(this.forceDecimalPlaces(e, i));
                            var n = Math.abs(e);
                            if (n >= 0 && n < 1) {
                                var a = Math.pow(10, -i);
                                if (0 === e) return t ? a : -a;
                                var s = void 0,
                                    r = i,
                                    o = this.indexFirstNonZeroDecimalPlace(e);
                                s = o >= r - 1 ? a : Math.pow(10, -(o + 1));
                                var l = void 0;
                                return l = t ? e + s : e - s, this.roundToNearest(l, s)
                            }
                            e = parseInt(e, 10);
                            var u = Math.abs(e).toString().length,
                                c = void 0;
                            switch (u) {
                                case 1:
                                    c = 0;
                                    break;
                                case 2:
                                case 3:
                                    c = 1;
                                    break;
                                case 4:
                                case 5:
                                    c = 2;
                                    break;
                                default:
                                    c = u - 3
                            }
                            var d = Math.pow(10, c),
                                h = void 0;
                            return h = t ? e + d : e - d, h <= 10 && h >= -10 ? h : this.roundToNearest(h, d)
                        }
                    }, {
                        key: "addAndRoundToNearestAuto",
                        value: function(e, t) {
                            return this.modifyAndRoundToNearestAuto(e, !0, t)
                        }
                    }, {
                        key: "subtractAndRoundToNearestAuto",
                        value: function(e, t) {
                            return this.modifyAndRoundToNearestAuto(e, !1, t)
                        }
                    }, {
                        key: "arabicToLatinNumbers",
                        value: function(e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                            if (this.isNull(e)) return e;
                            var a = e.toString();
                            if ("" === a) return e;
                            if (null === a.match(/[٠١٢٣٤٥٦٧٨٩۴۵۶]/g)) return t && (a = Number(a)), a;
                            i && (a = a.replace(/٫/, ".")), n && (a = a.replace(/٬/g, "")), a = a.replace(/[٠١٢٣٤٥٦٧٨٩]/g, function(e) {
                                return e.charCodeAt(0) - 1632
                            }).replace(/[۰۱۲۳۴۵۶۷۸۹]/g, function(e) {
                                return e.charCodeAt(0) - 1776
                            });
                            var s = Number(a);
                            return isNaN(s) ? s : (t && (a = s), a)
                        }
                    }, {
                        key: "triggerEvent",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document,
                                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                                n = void 0;
                            window.CustomEvent ? n = new CustomEvent(e, {
                                detail: i,
                                bubbles: !1,
                                cancelable: !1
                            }) : (n = document.createEvent("CustomEvent"), n.initCustomEvent(e, !0, !0, {
                                detail: i
                            })), t.dispatchEvent(n)
                        }
                    }, {
                        key: "parseStr",
                        value: function(e) {
                            var t = {},
                                i = void 0,
                                n = void 0,
                                a = void 0,
                                s = void 0;
                            if (0 === e && 1 / e < 0 && (e = "-0"), e = e.toString(), this.isNegativeStrict(e) ? (e = e.slice(1), t.s = -1) : t.s = 1, i = e.indexOf("."), i > -1 && (e = e.replace(".", "")), i < 0 && (i = e.length), n = e.search(/[1-9]/i) === -1 ? e.length : e.search(/[1-9]/i), a = e.length, n === a) t.e = 0, t.c = [0];
                            else {
                                for (s = a - 1;
                                    "0" === e.charAt(s); s -= 1) a -= 1;
                                for (a -= 1, t.e = i - n - 1, t.c = [], i = 0; n <= a; n += 1) t.c[i] = +e.charAt(n), i += 1
                            }
                            return t
                        }
                    }, {
                        key: "testMinMax",
                        value: function(e, t) {
                            var i = t.c,
                                n = e.c,
                                a = t.s,
                                s = e.s,
                                r = t.e,
                                o = e.e;
                            if (!i[0] || !n[0]) {
                                var l = void 0;
                                return l = i[0] ? a : n[0] ? -s : 0
                            }
                            if (a !== s) return a;
                            var u = a < 0;
                            if (r !== o) return r > o ^ u ? 1 : -1;
                            for (a = -1, r = i.length, o = n.length, s = r < o ? r : o, a += 1; a < s; a += 1)
                                if (i[a] !== n[a]) return i[a] > n[a] ^ u ? 1 : -1;
                            var c = void 0;
                            return c = r === o ? 0 : r > o ^ u ? 1 : -1
                        }
                    }, {
                        key: "randomString",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5;
                            return Math.random().toString(36).substr(2, e)
                        }
                    }, {
                        key: "getElementValue",
                        value: function(e) {
                            return "input" === e.tagName.toLowerCase() ? e.value : this.text(e)
                        }
                    }, {
                        key: "setElementValue",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                            "input" === e.tagName.toLowerCase() ? e.value = t : e.textContent = t
                        }
                    }, {
                        key: "cloneObject",
                        value: function(e) {
                            return s({}, e)
                        }
                    }, {
                        key: "camelize",
                        value: function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-",
                                i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                                n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                            if (this.isNull(e)) return null;
                            i && (e = e.replace(/^data-/, ""));
                            var a = e.split(t),
                                s = a.map(function(e) {
                                    return "" + e.charAt(0).toUpperCase() + e.slice(1)
                                });
                            return s = s.join(""), n && (s = "" + s.charAt(0).toLowerCase() + s.slice(1)), s
                        }
                    }, {
                        key: "text",
                        value: function(e) {
                            var t = e.nodeType,
                                i = void 0;
                            return i = t === Node.ELEMENT_NODE || t === Node.DOCUMENT_NODE || t === Node.DOCUMENT_FRAGMENT_NODE ? e.textContent : t === Node.TEXT_NODE ? e.nodeValue : ""
                        }
                    }, {
                        key: "setText",
                        value: function(e, t) {
                            var i = e.nodeType;
                            i !== Node.ELEMENT_NODE && i !== Node.DOCUMENT_NODE && i !== Node.DOCUMENT_FRAGMENT_NODE || (e.textContent = t)
                        }
                    }, {
                        key: "filterOut",
                        value: function(e, t) {
                            var i = this;
                            return e.filter(function(e) {
                                return !i.isInArray(e, t)
                            })
                        }
                    }, {
                        key: "trimPaddedZerosFromDecimalPlaces",
                        value: function(e) {
                            if (e = String(e), "" === e) return "";
                            var t = e.split("."),
                                i = r(t, 2),
                                n = i[0],
                                a = i[1];
                            if (this.isUndefinedOrNullOrEmpty(a)) return n;
                            var s = a.replace(/0+$/g, ""),
                                o = void 0;
                            return o = "" === s ? n : n + "." + s
                        }
                    }, {
                        key: "getHoveredElement",
                        value: function() {
                            var e = [].concat(n(document.querySelectorAll(":hover")));
                            return e[e.length - 1]
                        }
                    }, {
                        key: "arrayTrim",
                        value: function(e, t) {
                            var i = e.length;
                            return 0 === i || t > i ? e : t < 0 ? [] : (e.length = parseInt(t, 10), e)
                        }
                    }, {
                        key: "arrayUnique",
                        value: function() {
                            var e;
                            return [].concat(n(new Set((e = []).concat.apply(e, arguments))))
                        }
                    }, {
                        key: "mergeMaps",
                        value: function() {
                            for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                            return new Map(t.reduce(function(e, t) {
                                return e.concat([].concat(n(t)))
                            }, []))
                        }
                    }]), e
                }();
            t.default = d
        }).call(window)
    }, function(e, t, i) {
        (function() {
            "use strict";

            function e(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var t = i(1),
                n = e(t);
            Object.defineProperty(n.default, "options", {
                get: function() {
                    return {
                        allowDecimalPadding: {
                            always: !0,
                            never: !1,
                            floats: "floats"
                        },
                        caretPositionOnFocus: {
                            start: "start",
                            end: "end",
                            decimalLeft: "decimalLeft",
                            decimalRight: "decimalRight",
                            doNoForceCaretPosition: null
                        },
                        createLocalList: {
                            createList: !0,
                            doNotCreateList: !1
                        },
                        currencySymbol: {
                            none: "",
                            currencySign: "¤",
                            austral: "₳",
                            australCentavo: "¢",
                            baht: "฿",
                            cedi: "₵",
                            cent: "¢",
                            colon: "₡",
                            cruzeiro: "₢",
                            dollar: "$",
                            dong: "₫",
                            drachma: "₯",
                            dram: "​֏",
                            european: "₠",
                            euro: "€",
                            florin: "ƒ",
                            franc: "₣",
                            guarani: "₲",
                            hryvnia: "₴",
                            kip: "₭",
                            att: "ອັດ",
                            lepton: "Λ.",
                            lira: "₺",
                            liraOld: "₤",
                            lari: "₾",
                            mark: "ℳ",
                            mill: "₥",
                            naira: "₦",
                            peseta: "₧",
                            peso: "₱",
                            pfennig: "₰",
                            pound: "£",
                            real: "R$",
                            riel: "៛",
                            ruble: "₽",
                            rupee: "₹",
                            rupeeOld: "₨",
                            shekel: "₪",
                            shekelAlt: "ש״ח‎‎",
                            taka: "৳",
                            tenge: "₸",
                            togrog: "₮",
                            won: "₩",
                            yen: "¥"
                        },
                        currencySymbolPlacement: {
                            prefix: "p",
                            suffix: "s"
                        },
                        decimalCharacter: {
                            comma: ",",
                            dot: ".",
                            middleDot: "·",
                            arabicDecimalSeparator: "٫",
                            decimalSeparatorKeySymbol: "⎖"
                        },
                        decimalCharacterAlternative: {
                            none: null,
                            comma: ",",
                            dot: "."
                        },
                        decimalPlaces: {
                            none: 0,
                            one: 1,
                            two: 2,
                            three: 3,
                            four: 4,
                            five: 5,
                            six: 6
                        },
                        decimalPlacesRawValue: {
                            useDefault: null,
                            none: 0,
                            one: 1,
                            two: 2,
                            three: 3,
                            four: 4,
                            five: 5,
                            six: 6
                        },
                        decimalPlacesShownOnBlur: {
                            useDefault: null,
                            none: 0,
                            one: 1,
                            two: 2,
                            three: 3,
                            four: 4,
                            five: 5,
                            six: 6
                        },
                        decimalPlacesShownOnFocus: {
                            useDefault: null,
                            none: 0,
                            one: 1,
                            two: 2,
                            three: 3,
                            four: 4,
                            five: 5,
                            six: 6
                        },
                        defaultValueOverride: {
                            doNotOverride: null
                        },
                        digitalGroupSpacing: {
                            two: "2",
                            twoScaled: "2s",
                            three: "3",
                            four: "4"
                        },
                        digitGroupSeparator: {
                            comma: ",",
                            dot: ".",
                            normalSpace: " ",
                            thinSpace: " ",
                            narrowNoBreakSpace: " ",
                            noBreakSpace: " ",
                            noSeparator: "",
                            apostrophe: "'",
                            arabicThousandsSeparator: "٬",
                            dotAbove: "˙"
                        },
                        divisorWhenUnfocused: {
                            none: null,
                            percentage: 100,
                            permille: 1e3,
                            basisPoint: 1e4
                        },
                        emptyInputBehavior: {
                            null: "null",
                            focus: "focus",
                            press: "press",
                            always: "always",
                            zero: "zero"
                        },
                        failOnUnknownOption: {
                            fail: !0,
                            ignore: !1
                        },
                        formatOnPageLoad: {
                            format: !0,
                            doNotFormat: !1
                        },
                        historySize: {
                            verySmall: 5,
                            small: 10,
                            medium: 20,
                            large: 50,
                            veryLarge: 100,
                            insane: Number.MAX_SAFE_INTEGER
                        },
                        isCancellable: {
                            cancellable: !0,
                            notCancellable: !1
                        },
                        leadingZero: {
                            allow: "allow",
                            deny: "deny",
                            keep: "keep"
                        },
                        maximumValue: {
                            tenTrillions: "9999999999999.99",
                            tenTrillionsNoDecimals: "9999999999999",
                            oneBillion: "999999999.99",
                            zero: "0"
                        },
                        minimumValue: {
                            tenTrillions: "-9999999999999.99",
                            tenTrillionsNoDecimals: "-9999999999999",
                            oneBillion: "-999999999.99",
                            zero: "0"
                        },
                        modifyValueOnWheel: {
                            modifyValue: !0,
                            doNothing: !1
                        },
                        negativeBracketsTypeOnBlur: {
                            parentheses: "(,)",
                            brackets: "[,]",
                            chevrons: "<,>",
                            curlyBraces: "{,}",
                            angleBrackets: "〈,〉",
                            japaneseQuotationMarks: "｢,｣",
                            halfBrackets: "⸤,⸥",
                            whiteSquareBrackets: "⟦,⟧",
                            quotationMarks: "‹,›",
                            guillemets: "«,»",
                            none: null
                        },
                        negativePositiveSignPlacement: {
                            prefix: "p",
                            suffix: "s",
                            left: "l",
                            right: "r",
                            none: null
                        },
                        noEventListeners: {
                            noEvents: !0,
                            addEvents: !1
                        },
                        onInvalidPaste: {
                            error: "error",
                            ignore: "ignore",
                            clamp: "clamp",
                            truncate: "truncate",
                            replace: "replace"
                        },
                        outputFormat: {
                            string: "string",
                            number: "number",
                            dot: ".",
                            negativeDot: "-.",
                            comma: ",",
                            negativeComma: "-,",
                            dotNegative: ".-",
                            commaNegative: ",-",
                            none: null
                        },
                        overrideMinMaxLimits: {
                            ceiling: "ceiling",
                            floor: "floor",
                            ignore: "ignore",
                            doNotOverride: null
                        },
                        rawValueDivisor: {
                            none: null,
                            percentage: 100,
                            permille: 1e3,
                            basisPoint: 1e4
                        },
                        readOnly: {
                            readOnly: !0,
                            readWrite: !1
                        },
                        roundingMethod: {
                            halfUpSymmetric: "S",
                            halfUpAsymmetric: "A",
                            halfDownSymmetric: "s",
                            halfDownAsymmetric: "a",
                            halfEvenBankersRounding: "B",
                            upRoundAwayFromZero: "U",
                            downRoundTowardZero: "D",
                            toCeilingTowardPositiveInfinity: "C",
                            toFloorTowardNegativeInfinity: "F",
                            toNearest05: "N05",
                            toNearest05Alt: "CHF",
                            upToNext05: "U05",
                            downToNext05: "D05"
                        },
                        saveValueToSessionStorage: {
                            save: !0,
                            doNotSave: !1
                        },
                        selectNumberOnly: {
                            selectNumbersOnly: !0,
                            selectAll: !1
                        },
                        selectOnFocus: {
                            select: !0,
                            doNotSelect: !1
                        },
                        serializeSpaces: {
                            plus: "+",
                            percent: "%20"
                        },
                        showOnlyNumbersOnFocus: {
                            onlyNumbers: !0,
                            showAll: !1
                        },
                        showPositiveSign: {
                            show: !0,
                            hide: !1
                        },
                        showWarnings: {
                            show: !0,
                            hide: !1
                        },
                        styleRules: {
                            none: null,
                            positiveNegative: {
                                positive: "autoNumeric-positive",
                                negative: "autoNumeric-negative"
                            },
                            range0To100With4Steps: {
                                ranges: [{
                                    min: 0,
                                    max: 25,
                                    class: "autoNumeric-red"
                                }, {
                                    min: 25,
                                    max: 50,
                                    class: "autoNumeric-orange"
                                }, {
                                    min: 50,
                                    max: 75,
                                    class: "autoNumeric-yellow"
                                }, {
                                    min: 75,
                                    max: 100,
                                    class: "autoNumeric-green"
                                }]
                            },
                            evenOdd: {
                                userDefined: [{
                                    callback: function(e) {
                                        return e % 2 === 0
                                    },
                                    classes: ["autoNumeric-even", "autoNumeric-odd"]
                                }]
                            },
                            rangeSmallAndZero: {
                                userDefined: [{
                                    callback: function(e) {
                                        return e >= -1 && e < 0 ? 0 : 0 === Number(e) ? 1 : e > 0 && e <= 1 ? 2 : null
                                    },
                                    classes: ["autoNumeric-small-negative", "autoNumeric-zero", "autoNumeric-small-positive"]
                                }]
                            }
                        },
                        suffixText: {
                            none: "",
                            percentage: "%",
                            permille: "‰",
                            basisPoint: "‱"
                        },
                        symbolWhenUnfocused: {
                            none: null,
                            percentage: "%",
                            permille: "‰",
                            basisPoint: "‱"
                        },
                        unformatOnHover: {
                            unformat: !0,
                            doNotUnformat: !1
                        },
                        unformatOnSubmit: {
                            unformat: !0,
                            keepCurrentValue: !1
                        },
                        wheelStep: {
                            progressive: "progressive"
                        }
                    }
                }
            })
        }).call(window)
    }, function(e, t, i) {
        (function() {
            "use strict";

            function e(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var t = i(1),
                n = e(t),
                a = i(4);
            e(a);
            Object.defineProperty(n.default, "defaultSettings", {
                get: function() {
                    return {
                        allowDecimalPadding: n.default.options.allowDecimalPadding.always,
                        caretPositionOnFocus: n.default.options.caretPositionOnFocus.doNoForceCaretPosition,
                        createLocalList: n.default.options.createLocalList.createList,
                        currencySymbol: n.default.options.currencySymbol.none,
                        currencySymbolPlacement: n.default.options.currencySymbolPlacement.prefix,
                        decimalCharacter: n.default.options.decimalCharacter.dot,
                        decimalCharacterAlternative: n.default.options.decimalCharacterAlternative.none,
                        decimalPlaces: n.default.options.decimalPlaces.two,
                        decimalPlacesRawValue: n.default.options.decimalPlacesRawValue.useDefault,
                        decimalPlacesShownOnBlur: n.default.options.decimalPlacesShownOnBlur.useDefault,
                        decimalPlacesShownOnFocus: n.default.options.decimalPlacesShownOnFocus.useDefault,
                        defaultValueOverride: n.default.options.defaultValueOverride.doNotOverride,
                        digitalGroupSpacing: n.default.options.digitalGroupSpacing.three,
                        digitGroupSeparator: n.default.options.digitGroupSeparator.comma,
                        divisorWhenUnfocused: n.default.options.divisorWhenUnfocused.none,
                        emptyInputBehavior: n.default.options.emptyInputBehavior.focus,
                        failOnUnknownOption: n.default.options.failOnUnknownOption.ignore,
                        formatOnPageLoad: n.default.options.formatOnPageLoad.format,
                        historySize: n.default.options.historySize.medium,
                        isCancellable: n.default.options.isCancellable.cancellable,
                        leadingZero: n.default.options.leadingZero.deny,
                        maximumValue: n.default.options.maximumValue.tenTrillions,
                        minimumValue: n.default.options.minimumValue.tenTrillions,
                        modifyValueOnWheel: n.default.options.modifyValueOnWheel.modifyValue,
                        negativeBracketsTypeOnBlur: n.default.options.negativeBracketsTypeOnBlur.none,
                        negativePositiveSignPlacement: n.default.options.negativePositiveSignPlacement.none,
                        noEventListeners: n.default.options.noEventListeners.addEvents,
                        onInvalidPaste: n.default.options.onInvalidPaste.error,
                        outputFormat: n.default.options.outputFormat.none,
                        overrideMinMaxLimits: n.default.options.overrideMinMaxLimits.doNotOverride,
                        rawValueDivisor: n.default.options.rawValueDivisor.none,
                        readOnly: n.default.options.readOnly.readWrite,
                        roundingMethod: n.default.options.roundingMethod.halfUpSymmetric,
                        saveValueToSessionStorage: n.default.options.saveValueToSessionStorage.doNotSave,
                        selectNumberOnly: n.default.options.selectNumberOnly.selectNumbersOnly,
                        selectOnFocus: n.default.options.selectOnFocus.select,
                        serializeSpaces: n.default.options.serializeSpaces.plus,
                        showOnlyNumbersOnFocus: n.default.options.showOnlyNumbersOnFocus.showAll,
                        showPositiveSign: n.default.options.showPositiveSign.hide,
                        showWarnings: n.default.options.showWarnings.show,
                        styleRules: n.default.options.styleRules.none,
                        suffixText: n.default.options.suffixText.none,
                        symbolWhenUnfocused: n.default.options.symbolWhenUnfocused.none,
                        unformatOnHover: n.default.options.unformatOnHover.unformat,
                        unformatOnSubmit: n.default.options.unformatOnSubmit.keepCurrentValue,
                        wheelStep: n.default.options.wheelStep.progressive
                    }
                }
            })
        }).call(window)
    }, function(e, t, i) {
        (function() {
            "use strict";

            function e(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var t = i(1),
                n = e(t);
            Object.defineProperty(n.default, "events", {
                get: function() {
                    return {
                        formatted: "autoNumeric:formatted",
                        minRangeExceeded: "autoNumeric:minExceeded",
                        maxRangeExceeded: "autoNumeric:maxExceeded",
                        native: {
                            input: "input",
                            change: "change"
                        }
                    }
                }
            })
        }).call(window)
    }, function(e, t, i) {
        (function() {
            "use strict";

            function e(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var t = i(1),
                n = e(t),
                a = i(3),
                s = e(a),
                r = {
                    digitGroupSeparator: n.default.options.digitGroupSeparator.dot,
                    decimalCharacter: n.default.options.decimalCharacter.comma,
                    decimalCharacterAlternative: n.default.options.decimalCharacterAlternative.dot,
                    currencySymbol: " €",
                    currencySymbolPlacement: n.default.options.currencySymbolPlacement.suffix,
                    negativePositiveSignPlacement: n.default.options.negativePositiveSignPlacement.prefix
                },
                o = {
                    digitGroupSeparator: n.default.options.digitGroupSeparator.comma,
                    decimalCharacter: n.default.options.decimalCharacter.dot,
                    currencySymbol: n.default.options.currencySymbol.dollar,
                    currencySymbolPlacement: n.default.options.currencySymbolPlacement.prefix,
                    negativePositiveSignPlacement: n.default.options.negativePositiveSignPlacement.right
                },
                l = {
                    digitGroupSeparator: n.default.options.digitGroupSeparator.comma,
                    decimalCharacter: n.default.options.decimalCharacter.dot,
                    currencySymbol: n.default.options.currencySymbol.yen,
                    currencySymbolPlacement: n.default.options.currencySymbolPlacement.prefix,
                    negativePositiveSignPlacement: n.default.options.negativePositiveSignPlacement.right
                },
                u = s.default.cloneObject(r);
            u.minimumValue = 0;
            var c = s.default.cloneObject(r);
            c.maximumValue = 0, c.negativePositiveSignPlacement = n.default.options.negativePositiveSignPlacement.prefix;
            var d = s.default.cloneObject(r);
            d.digitGroupSeparator = n.default.options.digitGroupSeparator.normalSpace;
            var h = s.default.cloneObject(d);
            h.minimumValue = 0;
            var m = s.default.cloneObject(d);
            m.maximumValue = 0, m.negativePositiveSignPlacement = n.default.options.negativePositiveSignPlacement.prefix;
            var g = s.default.cloneObject(r);
            g.currencySymbol = n.default.options.currencySymbol.none, g.suffixText = " " + n.default.options.suffixText.percentage, g.wheelStep = 1e-4, g.rawValueDivisor = n.default.options.rawValueDivisor.percentage;
            var f = s.default.cloneObject(g);
            f.minimumValue = 0;
            var v = s.default.cloneObject(g);
            v.maximumValue = 0, v.negativePositiveSignPlacement = n.default.options.negativePositiveSignPlacement.prefix;
            var p = s.default.cloneObject(g);
            p.decimalPlaces = 3;
            var y = s.default.cloneObject(f);
            y.decimalPlaces = 3;
            var S = s.default.cloneObject(v);
            S.decimalPlaces = 3;
            var P = s.default.cloneObject(o);
            P.minimumValue = 0;
            var b = s.default.cloneObject(o);
            b.maximumValue = 0, b.negativePositiveSignPlacement = n.default.options.negativePositiveSignPlacement.prefix;
            var w = s.default.cloneObject(b);
            w.negativeBracketsTypeOnBlur = n.default.options.negativeBracketsTypeOnBlur.parentheses;
            var O = s.default.cloneObject(o);
            O.currencySymbol = n.default.options.currencySymbol.none, O.suffixText = n.default.options.suffixText.percentage, O.wheelStep = 1e-4, g.rawValueDivisor = n.default.options.rawValueDivisor.percentage;
            var N = s.default.cloneObject(O);
            N.minimumValue = 0;
            var k = s.default.cloneObject(O);
            k.maximumValue = 0, k.negativePositiveSignPlacement = n.default.options.negativePositiveSignPlacement.prefix;
            var E = s.default.cloneObject(O);
            E.decimalPlaces = 3;
            var _ = s.default.cloneObject(N);
            _.decimalPlaces = 3;
            var F = s.default.cloneObject(k);
            F.decimalPlaces = 3, Object.defineProperty(n.default, "predefinedOptions", {
                get: function() {
                    return {
                        euro: r,
                        euroPos: u,
                        euroNeg: c,
                        euroSpace: d,
                        euroSpacePos: h,
                        euroSpaceNeg: m,
                        percentageEU2dec: g,
                        percentageEU2decPos: f,
                        percentageEU2decNeg: v,
                        percentageEU3dec: p,
                        percentageEU3decPos: y,
                        percentageEU3decNeg: S,
                        dollar: o,
                        dollarPos: P,
                        dollarNeg: b,
                        dollarNegBrackets: w,
                        percentageUS2dec: O,
                        percentageUS2decPos: N,
                        percentageUS2decNeg: k,
                        percentageUS3dec: E,
                        percentageUS3decPos: _,
                        percentageUS3decNeg: F,
                        French: r,
                        Spanish: r,
                        NorthAmerican: o,
                        British: {
                            digitGroupSeparator: n.default.options.digitGroupSeparator.comma,
                            decimalCharacter: n.default.options.decimalCharacter.dot,
                            currencySymbol: n.default.options.currencySymbol.pound,
                            currencySymbolPlacement: n.default.options.currencySymbolPlacement.prefix,
                            negativePositiveSignPlacement: n.default.options.negativePositiveSignPlacement.right
                        },
                        Swiss: {
                            digitGroupSeparator: n.default.options.digitGroupSeparator.apostrophe,
                            decimalCharacter: n.default.options.decimalCharacter.dot,
                            currencySymbol: " CHF",
                            currencySymbolPlacement: n.default.options.currencySymbolPlacement.suffix,
                            negativePositiveSignPlacement: n.default.options.negativePositiveSignPlacement.prefix
                        },
                        Japanese: l,
                        Chinese: l,
                        Brazilian: {
                            digitGroupSeparator: n.default.options.digitGroupSeparator.dot,
                            decimalCharacter: n.default.options.decimalCharacter.comma,
                            currencySymbol: n.default.options.currencySymbol.real,
                            currencySymbolPlacement: n.default.options.currencySymbolPlacement.prefix,
                            negativePositiveSignPlacement: n.default.options.negativePositiveSignPlacement.right
                        },
                        dotDecimalCharCommaSeparator: {
                            digitGroupSeparator: n.default.options.digitGroupSeparator.comma,
                            decimalCharacter: n.default.options.decimalCharacter.dot
                        },
                        commaDecimalCharDotSeparator: {
                            digitGroupSeparator: n.default.options.digitGroupSeparator.dot,
                            decimalCharacter: n.default.options.decimalCharacter.comma,
                            decimalCharacterAlternative: n.default.options.decimalCharacterAlternative.dot
                        },
                        integer: {
                            decimalPlaces: 0
                        },
                        integerPos: {
                            minimumValue: n.default.options.minimumValue.zero,
                            decimalPlaces: 0
                        },
                        integerNeg: {
                            maximumValue: n.default.options.maximumValue.zero,
                            decimalPlaces: 0
                        },
                        float: {
                            allowDecimalPadding: n.default.options.allowDecimalPadding.never
                        },
                        floatPos: {
                            allowDecimalPadding: n.default.options.allowDecimalPadding.never,
                            minimumValue: n.default.options.minimumValue.zero,
                            maximumValue: n.default.options.maximumValue.tenTrillions
                        },
                        floatNeg: {
                            allowDecimalPadding: n.default.options.allowDecimalPadding.never,
                            minimumValue: n.default.options.minimumValue.tenTrillions,
                            maximumValue: n.default.options.maximumValue.zero
                        },
                        numeric: {
                            digitGroupSeparator: n.default.options.digitGroupSeparator.noSeparator,
                            decimalCharacter: n.default.options.decimalCharacter.dot,
                            currencySymbol: n.default.options.currencySymbol.none
                        },
                        numericPos: {
                            digitGroupSeparator: n.default.options.digitGroupSeparator.noSeparator,
                            decimalCharacter: n.default.options.decimalCharacter.dot,
                            currencySymbol: n.default.options.currencySymbol.none,
                            minimumValue: n.default.options.minimumValue.zero,
                            maximumValue: n.default.options.maximumValue.tenTrillions
                        },
                        numericNeg: {
                            digitGroupSeparator: n.default.options.digitGroupSeparator.noSeparator,
                            decimalCharacter: n.default.options.decimalCharacter.dot,
                            currencySymbol: n.default.options.currencySymbol.none,
                            minimumValue: n.default.options.minimumValue.tenTrillions,
                            maximumValue: n.default.options.maximumValue.zero
                        }
                    }
                }
            })
        }).call(window)
    }, function(e, t, i) {
        (function() {
            "use strict";

            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var n = i(1),
                a = t(n),
                s = i(6),
                r = (t(s), i(4)),
                o = (t(r), i(5)),
                l = (t(o), i(7));
            t(l);
            e.exports = a.default
        }).call(window)
    }])
}); //# sourceMappingURL=autoNumeric.min.js.map