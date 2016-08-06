// etch v1.0.0 https://github.com/edsilv/etch#readme
var requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 200);
        };
})();
var etch;
(function (etch) {
    var engine;
    (function (engine) {
        var ClockTimer = (function () {
            function ClockTimer() {
                this._listeners = [];
                this._lastTime = 0;
            }
            ClockTimer.prototype.registerTimer = function (listener) {
                var ls = this._listeners;
                var index = ls.indexOf(listener);
                if (index > -1)
                    return;
                ls.push(listener);
                if (ls.length === 1)
                    this._requestAnimationTick();
            };
            ClockTimer.prototype.unregisterTimer = function (listener) {
                var ls = this._listeners;
                var index = ls.indexOf(listener);
                if (index > -1)
                    ls.splice(index, 1);
            };
            ClockTimer.prototype._doTick = function () {
                var nowTime = new Date().getTime();
                var lastTime = this._lastTime;
                this._lastTime = nowTime;
                var ls = this._listeners;
                var len = ls.length;
                if (len === 0)
                    return;
                for (var i = 0; i < len; i++) {
                    ls[i].onTicked(lastTime, nowTime);
                }
                this._requestAnimationTick();
            };
            ClockTimer.prototype._requestAnimationTick = function () {
                var _this = this;
                requestAnimFrame(function () { return _this._doTick(); });
            };
            return ClockTimer;
        }());
        engine.ClockTimer = ClockTimer;
    })(engine = etch.engine || (etch.engine = {}));
})(etch || (etch = {}));

var etch;
(function (etch) {
    var primitives;
    (function (primitives) {
        var Vector = (function () {
            function Vector(x, y) {
                this.x = x;
                this.y = y;
            }
            Vector.prototype.get = function () {
                return new Vector(this.x, this.y);
            };
            Vector.prototype.set = function (x, y) {
                this.x = x;
                this.y = y;
            };
            Vector.prototype.add = function (v) {
                this.x += v.x;
                this.y += v.y;
                return this;
            };
            Vector.add = function (v1, v2) {
                return new Vector(v1.x + v2.x, v1.y + v2.y);
            };
            Vector.prototype.clone = function () {
                return new Vector(this.x, this.y);
            };
            Vector.LERP = function (start, end, p) {
                var x = start.x + (end.x - start.x) * p;
                var y = start.y + (end.y - start.y) * p;
                return new Vector(x, y);
            };
            Vector.prototype.sub = function (v) {
                this.x -= v.x;
                this.y -= v.y;
                return this;
            };
            Vector.sub = function (v1, v2) {
                return new Vector(v1.x - v2.x, v1.y - v2.y);
            };
            Vector.prototype.mult = function (n) {
                this.x = this.x * n;
                this.y = this.y * n;
                return this;
            };
            Vector.mult = function (v1, v2) {
                return new Vector(v1.x * v2.x, v1.y * v2.y);
            };
            Vector.multN = function (v1, n) {
                return new Vector(v1.x * n, v1.y * n);
            };
            Vector.prototype.div = function (n) {
                this.x = this.x / n;
                this.y = this.y / n;
                return this;
            };
            Vector.div = function (v1, v2) {
                return new Vector(v1.x / v2.x, v1.y / v2.y);
            };
            Vector.divN = function (v1, n) {
                return new Vector(v1.x / n, v1.y / n);
            };
            Vector.prototype.mag = function () {
                return Math.sqrt(this.x * this.x + this.y * this.y);
            };
            Vector.prototype.magSq = function () {
                return (this.x * this.x + this.y * this.y);
            };
            Vector.prototype.normalize = function () {
                var m = this.mag();
                if (m != 0 && m != 1) {
                    this.div(m);
                }
                return this;
            };
            Vector.prototype.limit = function (max) {
                if (this.magSq() > max * max) {
                    this.normalize();
                    this.mult(max);
                }
                return this;
            };
            Vector.prototype.heading = function () {
                var angle = Math.atan2(-this.y, this.x);
                return -1 * angle;
            };
            Vector.random2D = function () {
                return Vector.fromAngle((Math.random() * Math.TAU));
            };
            Vector.fromAngle = function (angle) {
                return new Vector(Math.cos(angle), Math.sin(angle));
            };
            Vector.prototype.toPoint = function () {
                return new primitives.Point(this.x, this.y);
            };
            return Vector;
        }());
        primitives.Vector = Vector;
    })(primitives = etch.primitives || (etch.primitives = {}));
})(etch || (etch = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var etch;
(function (etch) {
    var exceptions;
    (function (exceptions) {
        var Exception = (function () {
            function Exception(message) {
                this.Message = message;
            }
            Exception.prototype.toString = function () {
                var typeName = this.constructor.name;
                if (typeName)
                    return typeName + ": " + this.Message;
                return this.Message;
            };
            return Exception;
        }());
        exceptions.Exception = Exception;
        var ArgumentException = (function (_super) {
            __extends(ArgumentException, _super);
            function ArgumentException(message) {
                _super.call(this, message);
            }
            return ArgumentException;
        }(Exception));
        exceptions.ArgumentException = ArgumentException;
        var ArgumentNullException = (function (_super) {
            __extends(ArgumentNullException, _super);
            function ArgumentNullException(message) {
                _super.call(this, message);
            }
            return ArgumentNullException;
        }(Exception));
        exceptions.ArgumentNullException = ArgumentNullException;
        var InvalidOperationException = (function (_super) {
            __extends(InvalidOperationException, _super);
            function InvalidOperationException(message) {
                _super.call(this, message);
            }
            return InvalidOperationException;
        }(Exception));
        exceptions.InvalidOperationException = InvalidOperationException;
        var NotSupportedException = (function (_super) {
            __extends(NotSupportedException, _super);
            function NotSupportedException(message) {
                _super.call(this, message);
            }
            return NotSupportedException;
        }(Exception));
        exceptions.NotSupportedException = NotSupportedException;
        var IndexOutOfRangeException = (function (_super) {
            __extends(IndexOutOfRangeException, _super);
            function IndexOutOfRangeException(index) {
                _super.call(this, index.toString());
            }
            return IndexOutOfRangeException;
        }(Exception));
        exceptions.IndexOutOfRangeException = IndexOutOfRangeException;
        var ArgumentOutOfRangeException = (function (_super) {
            __extends(ArgumentOutOfRangeException, _super);
            function ArgumentOutOfRangeException(msg) {
                _super.call(this, msg);
            }
            return ArgumentOutOfRangeException;
        }(Exception));
        exceptions.ArgumentOutOfRangeException = ArgumentOutOfRangeException;
        var AttachException = (function (_super) {
            __extends(AttachException, _super);
            function AttachException(message, data) {
                _super.call(this, message);
                this.Data = data;
            }
            return AttachException;
        }(Exception));
        exceptions.AttachException = AttachException;
        var InvalidJsonException = (function (_super) {
            __extends(InvalidJsonException, _super);
            function InvalidJsonException(jsonText, innerException) {
                _super.call(this, "Invalid json.");
                this.JsonText = jsonText;
                this.InnerException = innerException;
            }
            return InvalidJsonException;
        }(Exception));
        exceptions.InvalidJsonException = InvalidJsonException;
        var TargetInvocationException = (function (_super) {
            __extends(TargetInvocationException, _super);
            function TargetInvocationException(message, innerException) {
                _super.call(this, message);
                this.InnerException = innerException;
            }
            return TargetInvocationException;
        }(Exception));
        exceptions.TargetInvocationException = TargetInvocationException;
        var UnknownTypeException = (function (_super) {
            __extends(UnknownTypeException, _super);
            function UnknownTypeException(fullTypeName) {
                _super.call(this, fullTypeName);
                this.FullTypeName = fullTypeName;
            }
            return UnknownTypeException;
        }(Exception));
        exceptions.UnknownTypeException = UnknownTypeException;
        var FormatException = (function (_super) {
            __extends(FormatException, _super);
            function FormatException(message) {
                _super.call(this, message);
            }
            return FormatException;
        }(Exception));
        exceptions.FormatException = FormatException;
    })(exceptions = etch.exceptions || (etch.exceptions = {}));
})(etch || (etch = {}));

var etch;
(function (etch) {
    var collections;
    (function (collections) {
        var ObservableCollection = (function () {
            function ObservableCollection() {
                this._ht = [];
                this.CollectionChanged = new nullstone.Event();
                this.PropertyChanged = new nullstone.Event();
            }
            ObservableCollection.prototype.getEnumerator = function () {
                return nullstone.IEnumerator_.fromArray(this._ht);
            };
            Object.defineProperty(ObservableCollection.prototype, "Count", {
                get: function () {
                    return this._ht.length;
                },
                enumerable: true,
                configurable: true
            });
            ObservableCollection.prototype.ToArray = function () {
                return this._ht.slice(0);
            };
            ObservableCollection.prototype.GetValueAt = function (index) {
                var ht = this._ht;
                if (index < 0 || index >= ht.length)
                    throw new etch.exceptions.IndexOutOfRangeException(index);
                return ht[index];
            };
            ObservableCollection.prototype.SetValueAt = function (index, value) {
                var ht = this._ht;
                if (index < 0 || index >= ht.length)
                    throw new etch.exceptions.IndexOutOfRangeException(index);
                var oldValue = ht[index];
                ht[index] = value;
                this.CollectionChanged.raise(this, CollectionChangedEventArgs.Replace(value, oldValue, index));
            };
            ObservableCollection.prototype.Add = function (value) {
                var index = this._ht.push(value) - 1;
                this.CollectionChanged.raise(this, CollectionChangedEventArgs.Add(value, index));
                this._RaisePropertyChanged("Count");
            };
            ObservableCollection.prototype.AddRange = function (values) {
                var index = this._ht.length;
                var len = values.length;
                for (var i = 0; i < len; i++) {
                    this._ht.push(values[i]);
                }
                this.CollectionChanged.raise(this, CollectionChangedEventArgs.AddRange(values, index));
                this._RaisePropertyChanged("Count");
            };
            ObservableCollection.prototype.Insert = function (index, value) {
                var ht = this._ht;
                if (index < 0 || index > ht.length)
                    throw new etch.exceptions.IndexOutOfRangeException(index);
                if (index >= ht.length)
                    ht.push(value);
                else
                    ht.splice(index, 0, value);
                this.CollectionChanged.raise(this, CollectionChangedEventArgs.Add(value, index));
                this._RaisePropertyChanged("Count");
            };
            ObservableCollection.prototype.IndexOf = function (value) {
                return this._ht.indexOf(value);
            };
            ObservableCollection.prototype.Contains = function (value) {
                return this._ht.indexOf(value) > -1;
            };
            ObservableCollection.prototype.Remove = function (value) {
                var index = this._ht.indexOf(value);
                if (index < 0)
                    return false;
                this._ht.splice(index, 1);
                this.CollectionChanged.raise(this, CollectionChangedEventArgs.Remove(value, index));
                this._RaisePropertyChanged("Count");
                return true;
            };
            ObservableCollection.prototype.RemoveAt = function (index) {
                if (index < 0 || index >= this._ht.length)
                    throw new etch.exceptions.IndexOutOfRangeException(index);
                var item = this._ht.splice(index, 1)[0];
                this.CollectionChanged.raise(this, CollectionChangedEventArgs.Remove(item, index));
                this._RaisePropertyChanged("Count");
            };
            ObservableCollection.prototype.Clear = function () {
                var old = this._ht;
                this._ht = [];
                this.CollectionChanged.raise(this, CollectionChangedEventArgs.Reset(old));
                this._RaisePropertyChanged("Count");
            };
            ObservableCollection.prototype._RaisePropertyChanged = function (propertyName) {
                this.PropertyChanged.raise(this, new collections.PropertyChangedEventArgs(propertyName));
            };
            return ObservableCollection;
        }());
        collections.ObservableCollection = ObservableCollection;
    })(collections = etch.collections || (etch.collections = {}));
})(etch || (etch = {}));

/// <reference path="./Engine/ClockTimer.ts" />
/// <reference path="./Primitives/Vector.ts" />
/// <reference path="./Exceptions/Exceptions.ts" />
/// <reference path="./Collections/ObservableCollection.ts" /> 

var etch;
(function (etch) {
    var collections;
    (function (collections) {
        var PropertyChangedEventArgs = (function () {
            function PropertyChangedEventArgs(propertyName) {
                Object.defineProperty(this, "PropertyName", { value: propertyName, writable: false });
            }
            return PropertyChangedEventArgs;
        }());
        collections.PropertyChangedEventArgs = PropertyChangedEventArgs;
        // todo: remove?
        collections.INotifyPropertyChanged_ = new nullstone.Interface("INotifyPropertyChanged");
        collections.INotifyPropertyChanged_.is = function (o) {
            return o && o.PropertyChanged instanceof nullstone.Event;
        };
    })(collections = etch.collections || (etch.collections = {}));
})(etch || (etch = {}));

var Size = minerva.Size;
var etch;
(function (etch) {
    var drawing;
    (function (drawing) {
        var Canvas = (function () {
            function Canvas(parentElement) {
                this.isCached = false;
                this.htmlElement = document.createElement("canvas");
                if (parentElement) {
                    parentElement.appendChild(this.htmlElement);
                }
                else {
                    document.body.appendChild(this.htmlElement);
                }
            }
            Object.defineProperty(Canvas.prototype, "ctx", {
                get: function () {
                    return this.htmlElement.getContext("2d");
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Canvas.prototype, "width", {
                get: function () {
                    return this.ctx.canvas.width;
                },
                set: function (value) {
                    this.ctx.canvas.width = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Canvas.prototype, "height", {
                get: function () {
                    return this.ctx.canvas.height;
                },
                set: function (value) {
                    this.ctx.canvas.height = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Canvas.prototype, "size", {
                get: function () {
                    return new Size(this.width, this.height);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Canvas.prototype, "style", {
                get: function () {
                    return this.ctx.canvas.style;
                },
                enumerable: true,
                configurable: true
            });
            Canvas.prototype.hide = function () {
                this.style.display = 'none';
            };
            Canvas.prototype.show = function () {
                this.style.display = 'block';
            };
            return Canvas;
        }());
        drawing.Canvas = Canvas;
    })(drawing = etch.drawing || (etch.drawing = {}));
})(etch || (etch = {}));

var etch;
(function (etch) {
    var drawing;
    (function (drawing) {
        // todo: make abstract?
        var DisplayObject = (function () {
            function DisplayObject() {
                this._displayList = new drawing.DisplayObjectCollection();
                this.frameCount = -1;
                this.isCached = false;
                this.isInitialised = false;
                this.isPaused = false;
                this.isVisible = true;
                this.lastVisualTick = 0;
            }
            DisplayObject.prototype.init = function (drawTo, drawFrom) {
                this.drawTo = drawTo;
                if (drawFrom)
                    this.drawFrom = drawFrom;
                this.isInitialised = true;
            };
            Object.defineProperty(DisplayObject.prototype, "ctx", {
                get: function () {
                    return this.drawTo.ctx;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DisplayObject.prototype, "canvasWidth", {
                get: function () {
                    return this.ctx.canvas.width;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DisplayObject.prototype, "canvasHeight", {
                get: function () {
                    return this.ctx.canvas.height;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DisplayObject.prototype, "stage", {
                get: function () {
                    return this.drawTo.ctx.stage;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DisplayObject.prototype, "displayList", {
                get: function () {
                    return this._displayList;
                },
                set: function (value) {
                    this._displayList = value;
                },
                enumerable: true,
                configurable: true
            });
            DisplayObject.prototype.setup = function () {
            };
            DisplayObject.prototype.update = function () {
            };
            DisplayObject.prototype.draw = function () {
            };
            DisplayObject.prototype.isFirstFrame = function () {
                return this.frameCount === 0;
            };
            DisplayObject.prototype.dispose = function () {
            };
            DisplayObject.prototype.play = function () {
                this.isPaused = false;
                for (var i = 0; i < this.displayList.Count; i++) {
                    var displayObject = this.displayList.GetValueAt(i);
                    displayObject.play();
                }
            };
            DisplayObject.prototype.pause = function () {
                this.isPaused = true;
                for (var i = 0; i < this.displayList.Count; i++) {
                    var displayObject = this.displayList.GetValueAt(i);
                    displayObject.pause();
                }
            };
            DisplayObject.prototype.resize = function () {
            };
            DisplayObject.prototype.show = function () {
                this.isVisible = true;
                for (var i = 0; i < this.displayList.Count; i++) {
                    var displayObject = this.displayList.GetValueAt(i);
                    displayObject.show();
                }
            };
            DisplayObject.prototype.hide = function () {
                this.isVisible = false;
                for (var i = 0; i < this.displayList.Count; i++) {
                    var displayObject = this.displayList.GetValueAt(i);
                    displayObject.hide();
                }
            };
            return DisplayObject;
        }());
        drawing.DisplayObject = DisplayObject;
    })(drawing = etch.drawing || (etch.drawing = {}));
})(etch || (etch = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ObservableCollection = etch.collections.ObservableCollection;
var etch;
(function (etch) {
    var drawing;
    (function (drawing) {
        var DisplayObjectCollection = (function (_super) {
            __extends(DisplayObjectCollection, _super);
            function DisplayObjectCollection() {
                var _this = this;
                _super.call(this);
                this.CollectionChanged.on(function () {
                    // update ZIndex properties
                    for (var i = 0; i < _this.Count; i++) {
                        var obj = _this.GetValueAt(i);
                        obj.zIndex = i;
                    }
                }, this);
            }
            DisplayObjectCollection.prototype.add = function (value) {
                _super.prototype.Add.call(this, value);
            };
            DisplayObjectCollection.prototype.addRange = function (values) {
                _super.prototype.AddRange.call(this, values);
            };
            DisplayObjectCollection.prototype.remove = function (value) {
                return _super.prototype.Remove.call(this, value);
            };
            // todo: use utils.Collections.swap
            DisplayObjectCollection.prototype.swap = function (obj1, obj2) {
                var obj1Index = this.IndexOf(obj1);
                var obj2Index = this.IndexOf(obj2);
                this.setIndex(obj1, obj2Index);
                this.setIndex(obj2, obj1Index);
            };
            DisplayObjectCollection.prototype.toFront = function (obj) {
                var index = 0;
                if (this.Count > 0) {
                    index = this.Count - 1;
                }
                this.setIndex(obj, index);
            };
            DisplayObjectCollection.prototype.toBack = function (obj) {
                this.setIndex(obj, 0);
            };
            DisplayObjectCollection.prototype.setIndex = function (obj, index) {
                if (index > this.Count || index < 0) {
                    throw new etch.exceptions.Exception("index out of range");
                }
                this.Remove(obj);
                this.Insert(index, obj);
            };
            Object.defineProperty(DisplayObjectCollection.prototype, "bottom", {
                get: function () {
                    return this.GetValueAt(0);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DisplayObjectCollection.prototype, "top", {
                get: function () {
                    return this.GetValueAt(this.Count - 1);
                },
                enumerable: true,
                configurable: true
            });
            return DisplayObjectCollection;
        }(ObservableCollection));
        drawing.DisplayObjectCollection = DisplayObjectCollection;
    })(drawing = etch.drawing || (etch.drawing = {}));
})(etch || (etch = {}));



var DisplayObjectCollection = etch.drawing.DisplayObjectCollection;
var Point = etch.primitives.Point;
var Stage = etch.drawing.Stage;

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ClockTimer = etch.engine.ClockTimer;
var Canvas = etch.drawing.Canvas;
var DisplayObject = etch.drawing.DisplayObject;
var etch;
(function (etch) {
    var drawing;
    (function (drawing) {
        var Stage = (function (_super) {
            __extends(Stage, _super);
            function Stage(maxDelta) {
                _super.call(this);
                this.deltaTime = new Date(0).getTime();
                this.lastVisualTick = new Date(0).getTime();
                this.mousePos = new etch.primitives.Point(0, 0);
                this.ticked = new nullstone.Event();
                this._maxDelta = maxDelta || 1000 / 60; // 60 fps
            }
            Stage.prototype.init = function (drawTo) {
                var _this = this;
                drawTo.ctx.stage = this;
                _super.prototype.init.call(this, drawTo);
                this.timer = new ClockTimer();
                this.timer.registerTimer(this);
                this.canvas.htmlElement.addEventListener('mousemove', function (e) {
                    _this.mousePos = _this._getMousePos(_this.canvas.htmlElement, e);
                    //console.log('mouseX: ', this.mousePos.x, ' mouseY: ', this.mousePos.y);
                }, false);
            };
            Object.defineProperty(Stage.prototype, "canvas", {
                get: function () {
                    return this.drawTo;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Stage.prototype, "width", {
                get: function () {
                    return this.canvas.width;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Stage.prototype, "height", {
                get: function () {
                    return this.canvas.height;
                },
                enumerable: true,
                configurable: true
            });
            Stage.prototype._getMousePos = function (canvas, e) {
                var rect = canvas.getBoundingClientRect();
                var pos = new etch.primitives.Point();
                pos.x = e.clientX - rect.left;
                pos.y = e.clientY - rect.top;
                return pos;
            };
            Stage.prototype.onTicked = function (lastTime, nowTime) {
                this.frameCount++;
                this.deltaTime = Math.min(nowTime - this.lastVisualTick, this._maxDelta);
                this.lastVisualTick = nowTime;
                this.ticked.raise(this, this.lastVisualTick);
                // reset transform.
                this.ctx.setTransform(1, 0, 0, 1, 0, 0);
                this.ctx.clearRect(0, 0, this.width, this.height);
                if (this.isFirstFrame()) {
                    this.setup();
                    this.setupDisplayList(this.displayList);
                }
                this.update();
                this.updateDisplayList(this.displayList);
                this.draw();
                this.drawDisplayList(this.displayList);
            };
            Stage.prototype.setup = function () {
                _super.prototype.setup.call(this);
            };
            Stage.prototype.setupDisplayList = function (displayList) {
                for (var i = 0; i < displayList.Count; i++) {
                    var displayObject = displayList.GetValueAt(i);
                    displayObject.setup();
                    this.setupDisplayList(displayObject.displayList);
                }
            };
            Stage.prototype.update = function () {
                _super.prototype.update.call(this);
            };
            Stage.prototype.updateDisplayList = function (displayList) {
                for (var i = 0; i < displayList.Count; i++) {
                    var displayObject = displayList.GetValueAt(i);
                    displayObject.frameCount++;
                    displayObject.deltaTime = this.deltaTime;
                    displayObject.lastVisualTick = this.lastVisualTick;
                    if (!displayObject.isPaused) {
                        displayObject.update();
                    }
                    this.updateDisplayList(displayObject.displayList);
                }
            };
            Stage.prototype.draw = function () {
                _super.prototype.draw.call(this);
            };
            Stage.prototype.drawDisplayList = function (displayList) {
                for (var i = 0; i < displayList.Count; i++) {
                    var displayObject = displayList.GetValueAt(i);
                    if (displayObject.isVisible) {
                        displayObject.draw();
                    }
                    this.drawDisplayList(displayObject.displayList);
                }
            };
            Stage.prototype.resizeDisplayList = function (displayList) {
                for (var i = 0; i < displayList.Count; i++) {
                    var displayObject = displayList.GetValueAt(i);
                    displayObject.resize();
                    this.resizeDisplayList(displayObject.displayList);
                }
            };
            Stage.prototype.resize = function () {
                _super.prototype.resize.call(this);
                this.resizeDisplayList(this.displayList);
            };
            return Stage;
        }(drawing.DisplayObject));
        drawing.Stage = Stage;
    })(drawing = etch.drawing || (etch.drawing = {}));
})(etch || (etch = {}));



var etch;
(function (etch) {
    var events;
    (function (events) {
        (function (CollectionChangedAction) {
            CollectionChangedAction[CollectionChangedAction["Add"] = 1] = "Add";
            CollectionChangedAction[CollectionChangedAction["Remove"] = 2] = "Remove";
            CollectionChangedAction[CollectionChangedAction["Replace"] = 3] = "Replace";
            CollectionChangedAction[CollectionChangedAction["Reset"] = 4] = "Reset";
        })(events.CollectionChangedAction || (events.CollectionChangedAction = {}));
        var CollectionChangedAction = events.CollectionChangedAction;
        var CollectionChangedEventArgs = (function () {
            function CollectionChangedEventArgs() {
            }
            CollectionChangedEventArgs.Reset = function (allValues) {
                var args = new CollectionChangedEventArgs();
                Object.defineProperty(args, "Action", { value: CollectionChangedAction.Reset, writable: false });
                Object.defineProperty(args, "OldStartingIndex", { value: 0, writable: false });
                Object.defineProperty(args, "NewStartingIndex", { value: -1, writable: false });
                Object.defineProperty(args, "OldItems", { value: allValues, writable: false });
                Object.defineProperty(args, "NewItems", { value: null, writable: false });
                return args;
            };
            CollectionChangedEventArgs.Replace = function (newValue, oldValue, index) {
                var args = new CollectionChangedEventArgs();
                Object.defineProperty(args, "Action", { value: CollectionChangedAction.Replace, writable: false });
                Object.defineProperty(args, "OldStartingIndex", { value: -1, writable: false });
                Object.defineProperty(args, "NewStartingIndex", { value: index, writable: false });
                Object.defineProperty(args, "OldItems", { value: [oldValue], writable: false });
                Object.defineProperty(args, "NewItems", { value: [newValue], writable: false });
                return args;
            };
            CollectionChangedEventArgs.Add = function (newValue, index) {
                var args = new CollectionChangedEventArgs();
                Object.defineProperty(args, "Action", { value: CollectionChangedAction.Add, writable: false });
                Object.defineProperty(args, "OldStartingIndex", { value: -1, writable: false });
                Object.defineProperty(args, "NewStartingIndex", { value: index, writable: false });
                Object.defineProperty(args, "OldItems", { value: null, writable: false });
                Object.defineProperty(args, "NewItems", { value: [newValue], writable: false });
                return args;
            };
            CollectionChangedEventArgs.AddRange = function (newValues, index) {
                var args = new CollectionChangedEventArgs();
                Object.defineProperty(args, "Action", { value: CollectionChangedAction.Add, writable: false });
                Object.defineProperty(args, "OldStartingIndex", { value: -1, writable: false });
                Object.defineProperty(args, "NewStartingIndex", { value: index, writable: false });
                Object.defineProperty(args, "OldItems", { value: null, writable: false });
                Object.defineProperty(args, "NewItems", { value: newValues, writable: false });
                return args;
            };
            CollectionChangedEventArgs.Remove = function (oldValue, index) {
                var args = new CollectionChangedEventArgs();
                Object.defineProperty(args, "Action", { value: CollectionChangedAction.Remove, writable: false });
                Object.defineProperty(args, "OldStartingIndex", { value: index, writable: false });
                Object.defineProperty(args, "NewStartingIndex", { value: -1, writable: false });
                Object.defineProperty(args, "OldItems", { value: [oldValue], writable: false });
                Object.defineProperty(args, "NewItems", { value: null, writable: false });
                return args;
            };
            return CollectionChangedEventArgs;
        }());
        events.CollectionChangedEventArgs = CollectionChangedEventArgs;
    })(events = etch.events || (etch.events = {}));
})(etch || (etch = {}));

var CollectionChangedEventArgs = etch.events.CollectionChangedEventArgs;
var etch;
(function (etch) {
    var events;
    (function (events) {
        events.INotifyCollectionChanged_ = new nullstone.Interface("INotifyCollectionChanged");
        // todo: remove?
        events.INotifyCollectionChanged_.is = function (o) {
            return o && o.CollectionChanged instanceof nullstone.Event;
        };
    })(events = etch.events || (etch.events = {}));
})(etch || (etch = {}));

var etch;
(function (etch) {
    var events;
    (function (events) {
        var PropertyChangedEventArgs = (function () {
            function PropertyChangedEventArgs(propertyName) {
                Object.defineProperty(this, "PropertyName", { value: propertyName, writable: false });
            }
            return PropertyChangedEventArgs;
        }());
        events.PropertyChangedEventArgs = PropertyChangedEventArgs;
        events.INotifyPropertyChanged_ = new nullstone.Interface("INotifyPropertyChanged");
        // todo: remove?
        events.INotifyPropertyChanged_.is = function (o) {
            return o && o.PropertyChanged instanceof nullstone.Event;
        };
    })(events = etch.events || (etch.events = {}));
})(etch || (etch = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var RoutedEventArgs = etch.events.RoutedEventArgs;
var etch;
(function (etch) {
    var events;
    (function (events) {
        var RoutedEvent = (function (_super) {
            __extends(RoutedEvent, _super);
            function RoutedEvent() {
                _super.apply(this, arguments);
            }
            return RoutedEvent;
        }(nullstone.Event));
        events.RoutedEvent = RoutedEvent;
    })(events = etch.events || (etch.events = {}));
})(etch || (etch = {}));

var etch;
(function (etch) {
    var events;
    (function (events) {
        var RoutedEventArgs = (function () {
            function RoutedEventArgs() {
                this.Handled = false;
                this.Source = null;
                this.OriginalSource = null;
            }
            return RoutedEventArgs;
        }());
        events.RoutedEventArgs = RoutedEventArgs;
    })(events = etch.events || (etch.events = {}));
})(etch || (etch = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var etch;
(function (etch) {
    var primitives;
    (function (primitives) {
        var Point = (function (_super) {
            __extends(Point, _super);
            function Point() {
                _super.apply(this, arguments);
            }
            Point.prototype.clone = function () {
                return new Point(this.x, this.y);
            };
            Point.prototype.toVector = function () {
                return new primitives.Vector(this.x, this.y);
            };
            return Point;
        }(minerva.Point));
        primitives.Point = Point;
    })(primitives = etch.primitives || (etch.primitives = {}));
})(etch || (etch = {}));
