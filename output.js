//Sun Jun 01 2025 15:14:37 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("xnftej");
const crypto = require("crypto");
const notify = $.isNode() ? require("./sendNotify") : "";
(() => {
  function z(aj) {
    z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (am) {
      return typeof am;
    } : function (am) {
      return am && "function" == typeof Symbol && am.constructor === Symbol && am !== Symbol.prototype ? "symbol" : typeof am;
    };
    return z(aj);
  }
  function B(aj, ak) {
    var am = "undefined" != typeof Symbol && aj[Symbol.iterator] || aj["@@iterator"];
    if (!am) {
      if (Array.isArray(aj) || (am = function (at, au) {
        if (at) {
          if ("string" == typeof at) {
            return D(at, au);
          }
          var av = {}.toString.call(at).slice(8, -1);
          "Object" === av && at.constructor && (av = at.constructor.name);
          return "Map" === av || "Set" === av ? Array.from(at) : "Arguments" === av || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(av) ? D(at, au) : void 0;
        }
      }(aj)) || ak && aj && "number" == typeof aj.length) {
        am && (aj = am);
        var an = 0,
          ao = function () {};
        return {
          s: ao,
          n: function () {
            var at = {
              done: !0
            };
            return an >= aj.length ? at : {
              done: !1,
              value: aj[an++]
            };
          },
          e: function (at) {
            throw at;
          },
          f: ao
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var ap,
      aq = !0,
      ar = !1;
    return {
      s: function () {
        am = am.call(aj);
      },
      n: function () {
        var au = am.next();
        aq = au.done;
        return au;
      },
      e: function (au) {
        ar = !0;
        ap = au;
      },
      f: function () {
        try {
          aq || null == am.return || am.return();
        } finally {
          if (ar) {
            throw ap;
          }
        }
      }
    };
  }
  function D(aj, ak) {
    (null == ak || ak > aj.length) && (ak = aj.length);
    for (var al = 0, am = Array(ak); al < ak; al++) {
      am[al] = aj[al];
    }
    return am;
  }
  function F() {
    'use strict';

    F = function () {
      return al;
    };
    var ak,
      al = {},
      am = Object.prototype,
      an = am.hasOwnProperty,
      ao = Object.defineProperty || function (aQ, aR, aS) {
        aQ[aR] = aS.value;
      },
      ap = "function" == typeof Symbol ? Symbol : {},
      aq = ap.iterator || "@@iterator",
      ar = ap.asyncIterator || "@@asyncIterator",
      as = ap.toStringTag || "@@toStringTag";
    function at(aQ, aR, aS) {
      var aT = {
        value: aS,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aQ, aR, aT);
      return aQ[aR];
    }
    try {
      at({}, "");
    } catch (aR) {
      at = function (aS, aT, aU) {
        return aS[aT] = aU;
      };
    }
    function au(aT, aU, aV, aW) {
      var aX = aU && aU.prototype instanceof aB ? aU : aB,
        aY = Object.create(aX.prototype),
        aZ = new aO(aW || []);
      ao(aY, "_invoke", {
        value: aK(aT, aV, aZ)
      });
      return aY;
    }
    function av(aT, aU, aV) {
      try {
        return {
          type: "normal",
          arg: aT.call(aU, aV)
        };
      } catch (aZ) {
        var aX = {
          type: "throw",
          arg: aZ
        };
        return aX;
      }
    }
    al.wrap = au;
    var aw = "suspendedStart",
      ax = "suspendedYield",
      ay = "executing",
      az = "completed",
      aA = {};
    function aB() {}
    function aC() {}
    function aD() {}
    var aE = {};
    at(aE, aq, function () {
      return this;
    });
    var aF = Object.getPrototypeOf,
      aG = aF && aF(aF(aP([])));
    aG && aG !== am && an.call(aG, aq) && (aE = aG);
    aD.prototype = aB.prototype = Object.create(aE);
    var aH = aD.prototype;
    function aI(aT) {
      ["next", "throw", "return"].forEach(function (aW) {
        at(aT, aW, function (aY) {
          return this._invoke(aW, aY);
        });
      });
    }
    function aJ(aT, aU) {
      function aY(aZ, b0, b1, b2) {
        var b4 = av(aT[aZ], aT, b0);
        if ("throw" !== b4.type) {
          var b5 = b4.arg,
            b6 = b5.value;
          return b6 && "object" == z(b6) && an.call(b6, "__await") ? aU.resolve(b6.__await).then(function (b8) {
            aY("next", b8, b1, b2);
          }, function (b8) {
            aY("throw", b8, b1, b2);
          }) : aU.resolve(b6).then(function (b8) {
            b5.value = b8;
            b1(b5);
          }, function (b8) {
            return aY("throw", b8, b1, b2);
          });
        }
        b2(b4.arg);
      }
      var aW;
      ao(this, "_invoke", {
        value: function (aZ, b0) {
          function b1() {
            return new aU(function (b3, b4) {
              aY(aZ, b0, b3, b4);
            });
          }
          return aW = aW ? aW.then(b1, b1) : b1();
        }
      });
    }
    function aK(aT, aU, aV) {
      var aY = aw;
      return function (b0, b1) {
        if (aY === ay) {
          throw Error("Generator is already running");
        }
        if (aY === az) {
          if ("throw" === b0) {
            throw b1;
          }
          var b3 = {
            value: ak,
            done: !0
          };
          return b3;
        }
        for (aV.method = b0, aV.arg = b1;;) {
          var b4 = aV.delegate;
          if (b4) {
            var b5 = aL(b4, aV);
            if (b5) {
              if (b5 === aA) {
                continue;
              }
              return b5;
            }
          }
          if ("next" === aV.method) {
            aV.sent = aV._sent = aV.arg;
          } else {
            if ("throw" === aV.method) {
              if (aY === aw) {
                throw aY = az, aV.arg;
              }
              aV.dispatchException(aV.arg);
            } else {
              "return" === aV.method && aV.abrupt("return", aV.arg);
            }
          }
          aY = ay;
          var b6 = av(aT, aU, aV);
          if ("normal" === b6.type) {
            if (aY = aV.done ? az : ax, b6.arg === aA) {
              continue;
            }
            var b7 = {};
            b7.value = b6.arg;
            b7.done = aV.done;
            return b7;
          }
          "throw" === b6.type && (aY = az, aV.method = "throw", aV.arg = b6.arg);
        }
      };
    }
    function aL(aT, aU) {
      var aZ = aU.method,
        b0 = aT.iterator[aZ];
      if (b0 === ak) {
        aU.delegate = null;
        "throw" === aZ && aT.iterator.return && (aU.method = "return", aU.arg = ak, aL(aT, aU), "throw" === aU.method) || "return" !== aZ && (aU.method = "throw", aU.arg = new TypeError("The iterator does not provide a '" + aZ + "' method"));
        return aA;
      }
      var aX = av(b0, aT.iterator, aU.arg);
      if ("throw" === aX.type) {
        aU.method = "throw";
        aU.arg = aX.arg;
        aU.delegate = null;
        return aA;
      }
      var aY = aX.arg;
      return aY ? aY.done ? (aU[aT.resultName] = aY.value, aU.next = aT.nextLoc, "return" !== aU.method && (aU.method = "next", aU.arg = ak), aU.delegate = null, aA) : aY : (aU.method = "throw", aU.arg = new TypeError("iterator result is not an object"), aU.delegate = null, aA);
    }
    function aM(aT) {
      var aU = {
        tryLoc: aT[0]
      };
      var aV = aU;
      1 in aT && (aV.catchLoc = aT[1]);
      2 in aT && (aV.finallyLoc = aT[2], aV.afterLoc = aT[3]);
      this.tryEntries.push(aV);
    }
    function aN(aT) {
      var aU = aT.completion || {};
      aU.type = "normal";
      delete aU.arg;
      aT.completion = aU;
    }
    function aO(aT) {
      var aV = {
        tryLoc: "root"
      };
      this.tryEntries = [aV];
      aT.forEach(aM, this);
      this.reset(!0);
    }
    function aP(aT) {
      if (aT || "" === aT) {
        var aV = aT[aq];
        if (aV) {
          return aV.call(aT);
        }
        if ("function" == typeof aT.next) {
          return aT;
        }
        if (!isNaN(aT.length)) {
          var aW = -1,
            aX = function aZ() {
              for (; ++aW < aT.length;) {
                if (an.call(aT, aW)) {
                  aZ.value = aT[aW];
                  aZ.done = !1;
                  return aZ;
                }
              }
              aZ.value = ak;
              aZ.done = !0;
              return aZ;
            };
          return aX.next = aX;
        }
      }
      throw new TypeError(z(aT) + " is not iterable");
    }
    aC.prototype = aD;
    ao(aH, "constructor", {
      value: aD,
      configurable: !0
    });
    ao(aD, "constructor", {
      value: aC,
      configurable: !0
    });
    aC.displayName = at(aD, as, "GeneratorFunction");
    al.isGeneratorFunction = function (aT) {
      var aU = "function" == typeof aT && aT.constructor;
      return !!aU && (aU === aC || "GeneratorFunction" === (aU.displayName || aU.name));
    };
    al.mark = function (aT) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aT, aD) : (aT.__proto__ = aD, at(aT, as, "GeneratorFunction"));
      aT.prototype = Object.create(aH);
      return aT;
    };
    al.awrap = function (aT) {
      var aU = {
        __await: aT
      };
      return aU;
    };
    aI(aJ.prototype);
    at(aJ.prototype, ar, function () {
      return this;
    });
    al.AsyncIterator = aJ;
    al.async = function (aT, aU, aV, aW, aX) {
      void 0 === aX && (aX = Promise);
      var b0 = new aJ(au(aT, aU, aV, aW), aX);
      return al.isGeneratorFunction(aU) ? b0 : b0.next().then(function (b2) {
        return b2.done ? b2.value : b0.next();
      });
    };
    aI(aH);
    at(aH, as, "Generator");
    at(aH, aq, function () {
      return this;
    });
    at(aH, "toString", function () {
      return "[object Generator]";
    });
    al.keys = function (aT) {
      var aV = Object(aT),
        aW = [];
      for (var aX in aV) aW.push(aX);
      aW.reverse();
      return function aY() {
        for (; aW.length;) {
          var aZ = aW.pop();
          if (aZ in aV) {
            aY.value = aZ;
            aY.done = !1;
            return aY;
          }
        }
        aY.done = !0;
        return aY;
      };
    };
    al.values = aP;
    aO.prototype = {
      constructor: aO,
      reset: function (aT) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = ak, this.done = !1, this.delegate = null, this.method = "next", this.arg = ak, this.tryEntries.forEach(aN), !aT) {
          for (var aW in this) "t" === aW.charAt(0) && an.call(this, aW) && !isNaN(+aW.slice(1)) && (this[aW] = ak);
        }
      },
      stop: function () {
        this.done = !0;
        var aT = this.tryEntries[0].completion;
        if ("throw" === aT.type) {
          throw aT.arg;
        }
        return this.rval;
      },
      dispatchException: function (aT) {
        if (this.done) {
          throw aT;
        }
        var aV = this;
        function b2(b3, b4) {
          aY.type = "throw";
          aY.arg = aT;
          aV.next = b3;
          b4 && (aV.method = "next", aV.arg = ak);
          return !!b4;
        }
        for (var aW = this.tryEntries.length - 1; aW >= 0; --aW) {
          var aX = this.tryEntries[aW],
            aY = aX.completion;
          if ("root" === aX.tryLoc) {
            return b2("end");
          }
          if (aX.tryLoc <= this.prev) {
            var aZ = an.call(aX, "catchLoc"),
              b0 = an.call(aX, "finallyLoc");
            if (aZ && b0) {
              if (this.prev < aX.catchLoc) {
                return b2(aX.catchLoc, !0);
              }
              if (this.prev < aX.finallyLoc) {
                return b2(aX.finallyLoc);
              }
            } else {
              if (aZ) {
                if (this.prev < aX.catchLoc) {
                  return b2(aX.catchLoc, !0);
                }
              } else {
                if (!b0) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aX.finallyLoc) {
                  return b2(aX.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aT, aU) {
        for (var aW = this.tryEntries.length - 1; aW >= 0; --aW) {
          var aX = this.tryEntries[aW];
          if (aX.tryLoc <= this.prev && an.call(aX, "finallyLoc") && this.prev < aX.finallyLoc) {
            var aY = aX;
            break;
          }
        }
        aY && ("break" === aT || "continue" === aT) && aY.tryLoc <= aU && aU <= aY.finallyLoc && (aY = null);
        var aZ = aY ? aY.completion : {};
        aZ.type = aT;
        aZ.arg = aU;
        return aY ? (this.method = "next", this.next = aY.finallyLoc, aA) : this.complete(aZ);
      },
      complete: function (aT, aU) {
        if ("throw" === aT.type) {
          throw aT.arg;
        }
        "break" === aT.type || "continue" === aT.type ? this.next = aT.arg : "return" === aT.type ? (this.rval = this.arg = aT.arg, this.method = "return", this.next = "end") : "normal" === aT.type && aU && (this.next = aU);
        return aA;
      },
      finish: function (aT) {
        for (var aU = this.tryEntries.length - 1; aU >= 0; --aU) {
          var aV = this.tryEntries[aU];
          if (aV.finallyLoc === aT) {
            this.complete(aV.completion, aV.afterLoc);
            aN(aV);
            return aA;
          }
        }
      },
      catch: function (aT) {
        for (var aW = this.tryEntries.length - 1; aW >= 0; --aW) {
          var aX = this.tryEntries[aW];
          if (aX.tryLoc === aT) {
            var aY = aX.completion;
            if ("throw" === aY.type) {
              var aZ = aY.arg;
              aN(aX);
            }
            return aZ;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aT, aU, aV) {
        this.delegate = {
          iterator: aP(aT),
          resultName: aU,
          nextLoc: aV
        };
        "next" === this.method && (this.arg = ak);
        return aA;
      }
    };
    return al;
  }
  function G(aj, ak, al, am, an, ao, ap) {
    try {
      var ar = aj[ao](ap),
        as = ar.value;
    } catch (av) {
      return void al(av);
    }
    ar.done ? ak(as) : Promise.resolve(as).then(am, an);
  }
  function H(aj) {
    return function () {
      var am = this,
        an = arguments;
      return new Promise(function (ao, ap) {
        var aq = aj.apply(am, an);
        function ar(at) {
          G(aq, ao, ap, ar, as, "next", at);
        }
        function as(at) {
          G(aq, ao, ap, ar, as, "throw", at);
        }
        ar(void 0);
      });
    };
  }
  var J = ($.isNode() ? process.env.FTEJ : $.getdata("FTEJ")) || "",
    K = ($.isNode() ? process.env.TEXTURL : $.getdata("TEXTURL")) || "https://api.btstu.cn/yan/api.php",
    Q = "",
    R = "",
    U = "",
    V = "",
    W = "";
  function X() {
    return Y.apply(this, arguments);
  }
  function Y() {
    Y = H(F().mark(function ak() {
      var am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP;
      return F().wrap(function (aQ) {
        for (;;) {
          switch (aQ.prev = aQ.next) {
            case 0:
              if (J) {
                aQ.next = 5;
                break;
              }
              console.log("先去boxjs填写账号密码");
              aQ.next = 4;
              return ah("先去boxjs填写账号密码");
            case 4:
              return aQ.abrupt("return");
            case 5:
              am = J.split(" ");
              an = B(am);
              aQ.prev = 7;
              an.s();
            case 9:
              if ((ao = an.n()).done) {
                aQ.next = 150;
                break;
              }
              var aS = {};
              aS.deviceType = 1;
              ap = ao.value;
              aQ.prev = 11;
              Q = ap.split("&")[0];
              R = ap.split("&")[1];
              console.log("用户：".concat(Q, "开始任务"));
              console.log("获取皮卡生活safeKey");
              aQ.next = 18;
              return a3("/ehomes-new/pkHome/version/getVersion", aS);
            case 18:
              if (as = aQ.sent, 200 != as.code) {
                aQ.next = 39;
                break;
              }
              V = as.data.safeKey;
              console.log(V);
              console.log("皮卡生活登录");
              aQ.next = 25;
              return a3("/ehomes-new/pkHome/api/user/getLoginMember2nd", {
                memberId: "",
                memberID: "",
                mobile: "",
                token: "7fe186bb15ff4426ae84f300f05d9c8d",
                vin: "",
                safeEnc: Date.now() - V,
                name: Q,
                password: R,
                position: "",
                deviceId: "",
                deviceBrand: "",
                brandName: "",
                deviceType: "0",
                versionCode: "21",
                versionName: "V1.1.16"
              });
            case 25:
              if (at = aQ.sent, console.log(null == at ? void 0 : at.msg), 200 != (null == at ? void 0 : at.code)) {
                aQ.next = 37;
                break;
              }
              uid = at.data.uid;
              memberComplexCode = at.data.memberComplexCode;
              memberId = at.data.user.memberNo;
              U = at.data.token;
              console.log("开始签到");
              aQ.next = 35;
              return a9("/ehomes-new/pkHome/api/bonus/signActivity2nd", {
                memberId: memberComplexCode,
                memberID: memberId,
                mobile: Q,
                token: "7fe186bb15ff4426ae84f300f05d9c8d",
                vin: "",
                safeEnc: Date.now() - V
              });
            case 35:
              au = aQ.sent;
              au.data.integral ? console.log("签到成功，获得".concat(au.data.integral, "积分")) : console.log(au.data.msg);
            case 37:
              aQ.next = 40;
              break;
            case 39:
              console.log(as.msg);
            case 40:
              console.log("————————————");
              console.log("获取福田e家safeKey");
              aQ.next = 44;
              return a5("/est/getVersion.action", ae(JSON.stringify({
                limit: {
                  auth: "null",
                  uid: "",
                  userType: "61"
                },
                param: {
                  deviceType: "1",
                  version: "7.5.1",
                  versionCode: "345"
                }
              })));
            case 44:
              if (as = aQ.sent, 0 == as.code) {
                aQ.next = 48;
                break;
              }
              console.log(as.msg);
              return aQ.abrupt("continue", 148);
            case 48:
              V = JSON.parse(as.data).safeKey;
              console.log(V);
              console.log("福田e家登录");
              aQ.next = 53;
              return Z("/ehomes-new/homeManager/getLoginMember", {
                password: R,
                version_name: "7.4.9",
                version_auth: "svHgvcBi/9f/MyYFLY3aFQ==",
                device_id: "",
                device_model: "",
                ip: "",
                name: Q,
                version_code: "342",
                deviceSystemVersion: "12",
                device_type: "0"
              });
            case 53:
              if (av = aQ.sent, 200 == av.code) {
                aQ.next = 57;
                break;
              }
              console.log(av.msg);
              return aQ.abrupt("continue", 148);
            case 57:
              console.log("登陆成功");
              uid = av.data.uid;
              memberComplexCode = av.data.memberComplexCode;
              memberId = av.data.memberID;
              aQ.next = 63;
              return a7("/ehomes-new/homeManager/api/share/corsToActicity", {
                memberId: memberId,
                userId: uid,
                userType: "61",
                uid: uid,
                mobile: Q,
                tel: Q,
                phone: Q,
                brandName: "",
                seriesName: "",
                token: "ebf76685e48d4e14a9de6fccc76483e3",
                safeEnc: Date.now() - V,
                businessId: 1,
                activityNumber: "open",
                requestType: "0",
                type: "5",
                userNumber: memberId,
                channel: "1",
                name: "",
                remark: "打开APP"
              });
            case 63:
              if (aw = aQ.sent, 200 == aw.code ? console.log("打开app成功") : console.log("打开app：".concat(aw.msg)), console.log("开始签到"), "未签到" != av.data.signIn) {
                aQ.next = 73;
                break;
              }
              aQ.next = 69;
              return a7("/ehomes-new/homeManager/api/bonus/signActivity2nd", {
                memberId: memberComplexCode,
                userId: uid,
                userType: "61",
                uid: uid,
                mobile: Q,
                tel: Q,
                phone: Q,
                brandName: "",
                seriesName: "",
                token: "ebf76685e48d4e14a9de6fccc76483e3",
                safeEnc: Date.now() - V,
                businessId: 1
              });
            case 69:
              ay = aQ.sent;
              console.log("签到成功，获得".concat(null == ay || null === (ax = ay.data) || void 0 === ax ? void 0 : ax.integral, "积分"));
              aQ.next = 74;
              break;
            case 73:
              console.log(null == av || null === (az = av.data) || void 0 === az ? void 0 : az.signIn);
            case 74:
              console.log("————————————");
              console.log("开始任务");
              aQ.next = 78;
              return a7("/ehomes-new/homeManager/api/Member/getTaskList", {
                memberId: memberId,
                userId: uid,
                userType: "61",
                uid: uid,
                mobile: Q,
                tel: Q,
                phone: Q,
                brandName: "",
                seriesName: "",
                token: "ebf76685e48d4e14a9de6fccc76483e3",
                safeEnc: Date.now() - V,
                businessId: 1
              });
            case 78:
              aA = aQ.sent;
              aB = B(aA.data);
              aQ.prev = 80;
              aB.s();
            case 82:
              if ((aC = aB.n()).done) {
                aQ.next = 128;
                break;
              }
              if (aD = aC.value, console.log("任务：".concat(aD.ruleName)), "1" != aD.isComplete) {
                aQ.next = 89;
                break;
              }
              console.log("任务已完成");
              aQ.next = 126;
              break;
            case 89:
              if ("33" != aD.ruleId) {
                aQ.next = 97;
                break;
              }
              aQ.next = 92;
              return a1("/FONTON_PROD/ehomes-new/ehomesService/api/safeH5/getSafeInfo");
            case 92:
              aE = aQ.sent;
              aQ.next = 95;
              return a1("/FONTON_PROD/ehomes-new/homeManager/api/bonus/addIntegralForShare", {
                safeEnc: Date.now() - aE.data.key,
                userId: null,
                tel: Q,
                id: aD.ruleId,
                memberId: memberComplexCode
              });
            case 95:
              aF = aQ.sent;
              200 == aF.code ? console.log("分享成功，获得".concat(aF.data.integral, "积分")) : console.log(aF.msg);
            case 97:
              if ("130" != aD.ruleId) {
                aQ.next = 111;
                break;
              }
              aQ.next = 100;
              return a7("/ehomes-new/ehomesCommunity/api/post/recommendPostList", {
                memberId: memberId,
                userId: uid,
                userType: "61",
                uid: uid,
                mobile: Q,
                tel: Q,
                phone: Q,
                brandName: "",
                seriesName: "",
                token: "ebf76685e48d4e14a9de6fccc76483e3",
                safeEnc: Date.now() - V,
                businessId: 1,
                position: "1",
                pageNumber: "1",
                pageSize: 9
              });
            case 100:
              aG = aQ.sent;
              aH = Math.floor(Math.random() * aG.data.length);
              aI = aG.data[aH].memberId;
              aQ.next = 105;
              return a7("/ehomes-new/ehomesCommunity/api/post/follow2nd", {
                memberId: memberComplexCode,
                userId: uid,
                userType: "61",
                uid: uid,
                mobile: Q,
                tel: Q,
                phone: Q,
                brandName: "",
                seriesName: "",
                token: "ebf76685e48d4e14a9de6fccc76483e3",
                safeEnc: Date.now() - V,
                businessId: 1,
                behavior: "1",
                memberIdeds: aI,
                navyId: "null"
              });
            case 105:
              aJ = aQ.sent;
              200 == aJ.code ? console.log("关注成功") : console.log(aJ.msg);
              aQ.next = 109;
              return a7("/ehomes-new/ehomesCommunity/api/post/follow2nd", {
                memberId: memberComplexCode,
                userId: uid,
                userType: "61",
                uid: uid,
                mobile: Q,
                tel: Q,
                phone: Q,
                brandName: "",
                seriesName: "",
                token: "ebf76685e48d4e14a9de6fccc76483e3",
                safeEnc: Date.now() - V,
                businessId: 1,
                behavior: "2",
                memberIdeds: aI,
                navyId: "null"
              });
            case 109:
              aJ = aQ.sent;
              200 == aJ.code ? console.log("取关成功") : console.log(aJ.msg);
            case 111:
              if ("125" != aD.ruleId) {
                aQ.next = 126;
                break;
              }
              aQ.next = 114;
              return Z("/ehomes-new/ehomesCommunity/api/post/topicList", {
                memberId: memberId,
                userId: uid,
                userType: "61",
                uid: uid,
                mobile: Q,
                tel: Q,
                phone: Q,
                brandName: "",
                seriesName: "",
                token: "ebf76685e48d4e14a9de6fccc76483e3",
                safeEnc: Date.now() - V,
                businessId: 1
              });
            case 114:
              aK = aQ.sent;
              aL = Math.floor(Math.random() * aK.data.top.length);
              aM = aK.data.top[aL].topicId;
              aQ.next = 119;
              return ab();
            case 119:
              aN = aQ.sent;
              (!aN || aN.length < 10) && (aN = "如果觉得没有朋友，就去找喜欢的人表白，对方会提出和你做朋友的。");
              console.log("文本：".concat(aN));
              aQ.next = 124;
              return a7("/ehomes-new/ehomesCommunity/api/post/addJson2nd", {
                memberId: memberComplexCode,
                userId: uid,
                userType: "61",
                uid: uid,
                mobile: Q,
                tel: Q,
                phone: Q,
                brandName: "",
                seriesName: "",
                token: "ebf76685e48d4e14a9de6fccc76483e3",
                safeEnc: Date.now() - V,
                businessId: 1,
                content: aN,
                postType: 1,
                topicIdList: [aM],
                uploadFlag: 3,
                title: "",
                urlList: []
              });
            case 124:
              aO = aQ.sent;
              200 == aO.code ? console.log("发帖成功") : console.log(aO.msg);
            case 126:
              aQ.next = 82;
              break;
            case 128:
              aQ.next = 133;
              break;
            case 130:
              aQ.prev = 130;
              aQ.t0 = aQ.catch(80);
              aB.e(aQ.t0);
            case 133:
              aQ.prev = 133;
              aB.f();
              return aQ.finish(133);
            case 136:
              console.log("————————————");
              console.log("查询积分");
              aQ.next = 140;
              return a7("/ehomes-new/homeManager/api/Member/findMemberPointsInfo", {
                memberId: memberId,
                userId: uid,
                userType: "61",
                uid: uid,
                mobile: Q,
                tel: Q,
                phone: Q,
                brandName: "",
                seriesName: "",
                token: "ebf76685e48d4e14a9de6fccc76483e3",
                safeEnc: Date.now() - V,
                businessId: 1
              });
            case 140:
              aP = aQ.sent;
              console.log("拥有积分: ".concat(null == aP || null === (aq = aP.data) || void 0 === aq ? void 0 : aq.pointValue, "\n"));
              W += "用户：".concat(Q, " 拥有积分: ").concat(null == aP || null === (ar = aP.data) || void 0 === ar ? void 0 : ar.pointValue, "\n");
              aQ.next = 148;
              break;
            case 145:
              aQ.prev = 145;
              aQ.t1 = aQ.catch(11);
              console.log(aQ.t1);
            case 148:
              aQ.next = 9;
              break;
            case 150:
              aQ.next = 155;
              break;
            case 152:
              aQ.prev = 152;
              aQ.t2 = aQ.catch(7);
              an.e(aQ.t2);
            case 155:
              aQ.prev = 155;
              an.f();
              return aQ.finish(155);
            case 158:
              if (!W) {
                aQ.next = 161;
                break;
              }
              aQ.next = 161;
              return ah(W);
            case 161:
            case "end":
              return aQ.stop();
          }
        }
      }, ak, null, [[7, 152, 155, 158], [11, 145], [80, 130, 133, 136]]);
    }));
    return Y.apply(this, arguments);
  }
  function Z(aj, ak) {
    return a0.apply(this, arguments);
  }
  function a0() {
    a0 = H(F().mark(function ak(al, am) {
      return F().wrap(function (an) {
        for (;;) {
          switch (an.prev = an.next) {
            case 0:
              return an.abrupt("return", new Promise(function (ap) {
                var aq = {
                  "content-type": "application/json;charset=utf-8",
                  Connection: "Keep-Alive",
                  "user-agent": "okhttp/3.14.9",
                  "Accept-Encoding": "gzip"
                };
                var ar = {
                  url: "https://czyl.foton.com.cn".concat(al),
                  headers: aq,
                  body: JSON.stringify(am)
                };
                $.post(ar, function () {
                  var at = H(F().mark(function au(av, aw, ax) {
                    return F().wrap(function (ay) {
                      for (;;) {
                        switch (ay.prev = ay.next) {
                          case 0:
                            if (ay.prev = 0, !av) {
                              ay.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(av)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ay.next = 9;
                            break;
                          case 6:
                            ay.next = 8;
                            return $.wait(2000);
                          case 8:
                            ap(JSON.parse(ax));
                          case 9:
                            ay.next = 14;
                            break;
                          case 11:
                            ay.prev = 11;
                            ay.t0 = ay.catch(0);
                            $.logErr(ay.t0, aw);
                          case 14:
                            ay.prev = 14;
                            ap();
                            return ay.finish(14);
                          case 17:
                          case "end":
                            return ay.stop();
                        }
                      }
                    }, au, null, [[0, 11, 14, 17]]);
                  }));
                  return function (av, aw, ax) {
                    return at.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return an.stop();
          }
        }
      }, ak);
    }));
    return a0.apply(this, arguments);
  }
  function a1(aj) {
    return a2.apply(this, arguments);
  }
  function a2() {
    a2 = H(F().mark(function ak(al) {
      var am,
        an = arguments;
      return F().wrap(function (ao) {
        for (;;) {
          switch (ao.prev = ao.next) {
            case 0:
              am = an.length > 1 && void 0 !== an[1] ? an[1] : {};
              return ao.abrupt("return", new Promise(function (aq) {
                var as = {
                  url: "https://finance.foton.com.cn".concat(al),
                  headers: {
                    "content-type": "application/json;charset=utf-8",
                    accept: "*/*",
                    channel: "H5",
                    "Sec-Fetch-Site": "cross-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Connection: "Keep-Alive",
                    "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 18_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) ftejIOS",
                    "Accept-Encoding": "gzip"
                  },
                  body: JSON.stringify(am)
                };
                $.post(as, function () {
                  var au = H(F().mark(function av(aw, ax, ay) {
                    return F().wrap(function (aA) {
                      for (;;) {
                        switch (aA.prev = aA.next) {
                          case 0:
                            if (aA.prev = 0, !aw) {
                              aA.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aw)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aA.next = 9;
                            break;
                          case 6:
                            aA.next = 8;
                            return $.wait(2000);
                          case 8:
                            aq(JSON.parse(ay));
                          case 9:
                            aA.next = 14;
                            break;
                          case 11:
                            aA.prev = 11;
                            aA.t0 = aA.catch(0);
                            $.logErr(aA.t0, ax);
                          case 14:
                            aA.prev = 14;
                            aq();
                            return aA.finish(14);
                          case 17:
                          case "end":
                            return aA.stop();
                        }
                      }
                    }, av, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aw, ax, ay) {
                    return au.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ao.stop();
          }
        }
      }, ak);
    }));
    return a2.apply(this, arguments);
  }
  function a3(aj, ak) {
    return a4.apply(this, arguments);
  }
  function a4() {
    a4 = H(F().mark(function ak(al, am) {
      return F().wrap(function (an) {
        for (;;) {
          switch (an.prev = an.next) {
            case 0:
              return an.abrupt("return", new Promise(function (ap) {
                var ar = {
                  url: "https://czyl.foton.com.cn".concat(al),
                  headers: {
                    "content-type": "application/json;charset=utf-8",
                    channel: "1",
                    "Accept-Encoding": "gzip"
                  },
                  body: JSON.stringify(am)
                };
                $.post(ar, function () {
                  var at = H(F().mark(function au(av, aw, ax) {
                    return F().wrap(function (az) {
                      for (;;) {
                        switch (az.prev = az.next) {
                          case 0:
                            if (az.prev = 0, !av) {
                              az.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(av)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            az.next = 9;
                            break;
                          case 6:
                            az.next = 8;
                            return $.wait(2000);
                          case 8:
                            ap(JSON.parse(ax));
                          case 9:
                            az.next = 14;
                            break;
                          case 11:
                            az.prev = 11;
                            az.t0 = az.catch(0);
                            $.logErr(az.t0, aw);
                          case 14:
                            az.prev = 14;
                            ap();
                            return az.finish(14);
                          case 17:
                          case "end":
                            return az.stop();
                        }
                      }
                    }, au, null, [[0, 11, 14, 17]]);
                  }));
                  return function (av, aw, ax) {
                    return at.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return an.stop();
          }
        }
      }, ak);
    }));
    return a4.apply(this, arguments);
  }
  function a5(aj, ak) {
    return a6.apply(this, arguments);
  }
  function a6() {
    a6 = H(F().mark(function ak(al, am) {
      return F().wrap(function (ao) {
        for (;;) {
          switch (ao.prev = ao.next) {
            case 0:
              return ao.abrupt("return", new Promise(function (aq) {
                var ar = {
                  url: "https://czyl.foton.com.cn".concat(al),
                  headers: {
                    encrypt: "yes",
                    "Content-Type": "application/x-www-form-urlencoded",
                    Connection: "Keep-Alive",
                    "User-Agent": "okhttp/3.14.9",
                    "Accept-Encoding": "gzip"
                  },
                  body: "jsonParame=".concat(encodeURIComponent(am))
                };
                $.post(ar, function () {
                  var at = H(F().mark(function au(av, aw, ax) {
                    return F().wrap(function (ay) {
                      for (;;) {
                        switch (ay.prev = ay.next) {
                          case 0:
                            if (ay.prev = 0, !av) {
                              ay.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(av)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ay.next = 9;
                            break;
                          case 6:
                            ay.next = 8;
                            return $.wait(2000);
                          case 8:
                            aq(JSON.parse(ad(ax)));
                          case 9:
                            ay.next = 14;
                            break;
                          case 11:
                            ay.prev = 11;
                            ay.t0 = ay.catch(0);
                            $.logErr(ay.t0, aw);
                          case 14:
                            ay.prev = 14;
                            aq();
                            return ay.finish(14);
                          case 17:
                          case "end":
                            return ay.stop();
                        }
                      }
                    }, au, null, [[0, 11, 14, 17]]);
                  }));
                  return function (av, aw, ax) {
                    return at.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ao.stop();
          }
        }
      }, ak);
    }));
    return a6.apply(this, arguments);
  }
  function a7(aj, ak) {
    return a8.apply(this, arguments);
  }
  function a8() {
    a8 = H(F().mark(function ak(al, am) {
      return F().wrap(function (ao) {
        for (;;) {
          switch (ao.prev = ao.next) {
            case 0:
              return ao.abrupt("return", new Promise(function (aq) {
                var ar = {
                  "content-type": "application/json;charset=utf-8",
                  Connection: "Keep-Alive",
                  token: "",
                  "app-key": "7918d2d1a92a02cbc577adb8d570601e72d3b640",
                  "app-token": "58891364f56afa1b6b7dae3e4bbbdfbfde9ef489",
                  "user-agent": "web",
                  "Accept-Encoding": "gzip"
                };
                var as = {
                  url: "https://czyl.foton.com.cn".concat(al),
                  headers: ar,
                  body: JSON.stringify(am)
                };
                $.post(as, function () {
                  var au = H(F().mark(function av(aw, ax, ay) {
                    return F().wrap(function (aA) {
                      for (;;) {
                        switch (aA.prev = aA.next) {
                          case 0:
                            if (aA.prev = 0, !aw) {
                              aA.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aw)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aA.next = 9;
                            break;
                          case 6:
                            aA.next = 8;
                            return $.wait(2000);
                          case 8:
                            aq(JSON.parse(ay));
                          case 9:
                            aA.next = 14;
                            break;
                          case 11:
                            aA.prev = 11;
                            aA.t0 = aA.catch(0);
                            $.logErr(aA.t0, ax);
                          case 14:
                            aA.prev = 14;
                            aq();
                            return aA.finish(14);
                          case 17:
                          case "end":
                            return aA.stop();
                        }
                      }
                    }, av, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aw, ax, ay) {
                    return au.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ao.stop();
          }
        }
      }, ak);
    }));
    return a8.apply(this, arguments);
  }
  function a9(aj, ak) {
    return aa.apply(this, arguments);
  }
  function aa() {
    aa = H(F().mark(function aj(ak, al) {
      return F().wrap(function (an) {
        for (;;) {
          switch (an.prev = an.next) {
            case 0:
              return an.abrupt("return", new Promise(function (ap) {
                var ar = {
                  url: "https://czyl.foton.com.cn".concat(ak),
                  headers: {
                    "content-type": "application/json;charset=utf-8",
                    channel: "1",
                    token: U,
                    "Accept-Encoding": "gzip"
                  },
                  body: JSON.stringify(al)
                };
                $.post(ar, function () {
                  var at = H(F().mark(function au(av, aw, ax) {
                    return F().wrap(function (az) {
                      for (;;) {
                        switch (az.prev = az.next) {
                          case 0:
                            if (az.prev = 0, !av) {
                              az.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(av)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            az.next = 9;
                            break;
                          case 6:
                            az.next = 8;
                            return $.wait(2000);
                          case 8:
                            ap(JSON.parse(ax));
                          case 9:
                            az.next = 14;
                            break;
                          case 11:
                            az.prev = 11;
                            az.t0 = az.catch(0);
                            $.logErr(az.t0, aw);
                          case 14:
                            az.prev = 14;
                            ap();
                            return az.finish(14);
                          case 17:
                          case "end":
                            return az.stop();
                        }
                      }
                    }, au, null, [[0, 11, 14, 17]]);
                  }));
                  return function (av, aw, ax) {
                    return at.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return an.stop();
          }
        }
      }, aj);
    }));
    return aa.apply(this, arguments);
  }
  function ab() {
    return ac.apply(this, arguments);
  }
  function ac() {
    ac = H(F().mark(function ak() {
      return F().wrap(function (al) {
        for (;;) {
          switch (al.prev = al.next) {
            case 0:
              return al.abrupt("return", new Promise(function (an) {
                var ap = {
                  url: K,
                  headers: {}
                };
                $.get(ap, function () {
                  var as = H(F().mark(function at(au, av, aw) {
                    return F().wrap(function (ax) {
                      for (;;) {
                        switch (ax.prev = ax.next) {
                          case 0:
                            if (ax.prev = 0, !au) {
                              ax.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(au)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ax.next = 9;
                            break;
                          case 6:
                            ax.next = 8;
                            return $.wait(2000);
                          case 8:
                            an(aw);
                          case 9:
                            ax.next = 14;
                            break;
                          case 11:
                            ax.prev = 11;
                            ax.t0 = ax.catch(0);
                            $.logErr(ax.t0, av);
                          case 14:
                            ax.prev = 14;
                            an();
                            return ax.finish(14);
                          case 17:
                          case "end":
                            return ax.stop();
                        }
                      }
                    }, at, null, [[0, 11, 14, 17]]);
                  }));
                  return function (au, av, aw) {
                    return as.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return al.stop();
          }
        }
      }, ak);
    }));
    return ac.apply(this, arguments);
  }
  function ad(aj) {
    var ak = Buffer.from("Zm9udG9uZS10cmFuc0BseDEwMCQjMzY1", "base64"),
      al = Buffer.from("MjAxNjEyMDE=", "base64"),
      am = crypto.createDecipheriv("des-ede3-cbc", ak, al);
    am.setAutoPadding(!0);
    var an = Buffer.from(aj, "base64"),
      ao = am.update(an, void 0, "utf8");
    ao += am.final("utf8");
    return ao;
  }
  function ae(aj) {
    var ak = Buffer.from("Zm9udG9uZS10cmFuc0BseDEwMCQjMzY1", "base64"),
      al = Buffer.from("MjAxNjEyMDE=", "base64"),
      am = crypto.createCipheriv("des-ede3-cbc", ak, al);
    am.setAutoPadding(!0);
    var an = am.update(aj, "utf8", "base64");
    an += am.final("base64");
    return an;
  }
  function af() {
    return ag.apply(this, arguments);
  }
  function ag() {
    ag = H(F().mark(function aj() {
      return F().wrap(function (al) {
        for (;;) {
          switch (al.prev = al.next) {
            case 0:
              return al.abrupt("return", new Promise(function (am) {
                var ao = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(ao, function () {
                  var ap = H(F().mark(function aq(ar, as, at) {
                    return F().wrap(function (av) {
                      for (;;) {
                        switch (av.prev = av.next) {
                          case 0:
                            try {
                              ar ? (console.log("".concat(JSON.stringify(ar))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(at).notice);
                            } catch (aw) {
                              $.logErr(aw, as);
                            } finally {
                              am();
                            }
                          case 1:
                          case "end":
                            return av.stop();
                        }
                      }
                    }, aq);
                  }));
                  return function (ar, as, at) {
                    return ap.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return al.stop();
          }
        }
      }, aj);
    }));
    return ag.apply(this, arguments);
  }
  function ah(aj) {
    return ai.apply(this, arguments);
  }
  function ai() {
    ai = H(F().mark(function al(am) {
      return F().wrap(function (an) {
        for (;;) {
          switch (an.prev = an.next) {
            case 0:
              if (!$.isNode()) {
                an.next = 5;
                break;
              }
              an.next = 3;
              return notify.sendNotify($.name, am);
            case 3:
              an.next = 6;
              break;
            case 5:
              $.msg($.name, "", am);
            case 6:
            case "end":
              return an.stop();
          }
        }
      }, al);
    }));
    return ai.apply(this, arguments);
  }
  H(F().mark(function aj() {
    return F().wrap(function (ak) {
      for (;;) {
        switch (ak.prev = ak.next) {
          case 0:
            ak.next = 2;
            return af();
          case 2:
            ak.next = 4;
            return X();
          case 4:
          case "end":
            return ak.stop();
        }
      }
    }, aj);
  }))().catch(function (ak) {
    $.log(ak);
  }).finally(function () {
    $.done({});
  });
})();
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@"),
          n = {
            url: `http://${a}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: o
            },
            headers: {
              "X-Key": r,
              Accept: "*/*"
            },
            timeout: o
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], void 0 === o) {
        return s;
      }
      return o;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          o = s ? this.getval(s) : "";
        if (o) {
          try {
            const t = JSON.parse(o);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e),
          r = this.getval(i),
          a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.cookie && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
                statusCode: i,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
                statusCode: s,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case void 0:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t, e, s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";"),
                          [, o] = i.split(",");
                        e = o;
                        s = t.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          const e = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var s in e) if (0 === t.indexOf(s)) {
                            return e[s];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  });
                  return r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  i?.startsWith("http") && (r = i);
                  r && Object.assign(s, {
                    mediaUrl: r
                  });
                  console.log(JSON.stringify(s));
                  return s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  n && Object.assign(o, {
                    "update-pasteboard": n
                  });
                  console.log(JSON.stringify(o));
                  return o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, i, r(o));
            break;
          case "Quantumult X":
            $notify(e, s, i, r(o));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, void 0 !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}