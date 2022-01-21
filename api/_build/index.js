var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/mauricioblum/Development/Fun/good-morning/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
init_react();
var import_remix2 = __toModule(require_remix());

// app/styles/global.css
var global_default = "/build/_assets/global-4LEISOJA.css";

// app/styles/tailwindy.css
var tailwindy_default = "/build/_assets/tailwindy-NFJONYTT.css";

// route-module:/Users/mauricioblum/Development/Fun/good-morning/app/root.tsx
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: global_default
    },
    { rel: "stylesheet", href: tailwindy_default }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), false));
}

// route-module:/Users/mauricioblum/Development/Fun/good-morning/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_remix3 = __toModule(require_remix());

// data/data.json
var list = [
  {
    id: "brazil-1",
    phrase: "Bom dia",
    description: "Brazilian Portuguese (Portugu\xEAs do Brasil) is the variety of Portuguese dialect spoken in Brazil. It is spoken by virtually all of the 200 million inhabitants of Brazil and spoken widely across the Brazilian diaspora. European Portuguese differs from the Brazilian variety in pronunciation, as well as in some vocabulary.",
    flag: "\u{1F1E7}\u{1F1F7}"
  },
  {
    id: "us-1",
    phrase: "Good morning",
    description: "The term is derived from Middle English gud mornynge (also as goode morne, gode morne), from Old English *g\u014Ddne morgen (\u201Cgood morning\u201D), a conjugate for an expression such as \u201CI wish you a good morning.\u201D",
    flag: "\u{1F1FA}\u{1F1F8}"
  },
  {
    id: "es-1",
    phrase: "Buenos d\xEDas",
    description: "Spanish is a Romance language spoken in much of the world. It is the official language of Spain, the United States, Mexico, and other Latin American countries. It is also the most widely spoken language in the Americas.",
    flag: "\u{1F1EA}\u{1F1F8}"
  },
  {
    id: "afrikaans-1",
    phrase: "Goeie more",
    description: "Afrikaans is a West Germanic language of Southern Africa mostly derived from Dutch. It developed as Dutch settlers and indigenous African mixed languages beginning in the 17th century. Today, an estimated 15 to 23 million people call Afrikaans their mother tongue. It is mainly spoken in South Africa and Namibia and can also be heard in parts of Botswana and Zimbabwe.",
    flag: "\u{1F1FF}\u{1F1E6}"
  },
  {
    id: "albanian-1",
    phrase: "Mir\xEBm\xEBngjes",
    description: "Albanian is an Indo-European language, spoken mainly in Albania and Kosovo, though it is also spoken in other areas of the Balkans. With about 7.5 million speakers, it comprises an independent branch within the Indo-European languages and is not closely related to any other language in Europe.",
    flag: "\u{1F1E6}\u{1F1F1}"
  },
  {
    id: "arabic-1",
    phrase: "\u0635\u0628\u0627\u062D \u0627\u0644\u062E\u064A\u0631 (Sabah alkhyr)",
    description: "Arabic (\u0627\u0644\u0639\u0631\u0628\u064A\u0629) is a Semitic language spoken by over 420 million people as their first language in areas including North Africa, the Arabian Peninsula, and other parts of the Middle East. Many more people can also understand it as a second language. Modern Standard Arabic is the liturgical language for 1.6 billion Muslims and is the official written form of the language with the Arabic alphabet, which is written from right to left.",
    flag: "\u{1F1F8}\u{1F1E6}"
  },
  {
    id: "armenian-1",
    phrase: "\u0532\u0561\u0580\u056B\u2019 \u056C\u0578\u0582\u0575\u057D: (Bari luys)",
    description: "Armenian is an Indo-European language spoken in the Republic of Armenia, as well as in large communities of Armenian diaspora by around 6.7 million people.",
    flag: "\u{1F1E6}\u{1F1F2}"
  },
  {
    id: "azerbaijani-1",
    phrase: "Sabah\u0131n\u0131z xeyir",
    description: "Azerbaijani or Azeri is the primary and official language of Azerbaijan by its 8.8 million native speakers. It is also widely spoken in Northern Iran and to a small extent in southern Dagestan, the Kvemo Kartli region of Georgia, eastern Turkey, in Shia cities of Iraq, like Karbala and Kirkuk. The language is a Turkic language and is highly intelligible with modern-day Turkish.",
    flag: "\u{1F1E6}\u{1F1FF}"
  },
  {
    id: "aklan-1",
    phrase: "mayad nga agahon",
    description: "Aklan also known as Aklanon is an Austronesian language spoken by 460,000 Aklanon people in the province of Aklan on the island of Panay in the Philippines.",
    flag: "\u{1F1F5}\u{1F1ED}"
  },
  {
    id: "aleut-1",
    phrase: "Qilachxizax\u0302",
    description: "Aleut or Unangam Tunuu is a member of the Eskimo-Aleut language family, spoken by the Aleut people living on the Alaskan Peninsula, and on the Commander, Aleutian, and Pribilof Islands. It is the only language in the Aleut branch of the Eskimo\u2013Aleut language family.",
    flag: "\u{1F1E6}\u{1F1FD}"
  },
  {
    id: "als-1",
    phrase: "G\xFCete Morge",
    description: "Alsatian is a West Germanic language spoken by around 900,000 people, mainly in the Alsace region of northeastern France.",
    flag: "\u{1F1EB}\u{1F1F7}"
  },
  {
    id: "alt-1",
    phrase: "\u0408\u0430\u043A\u0448\u044B\u043B\u044B\u043A\u0442\u0443 \u0442\u0430\u04A5\u043B\u0430 (\u0134ak\u0161\u0131l\u0131ktu ta\xF1la)",
    description: "Altai is a language belonging to the Turkic language family and is officially spoken in the Altai Republic of Russia.",
    flag: "\u{1F1F7}\u{1F1FA}"
  },
  {
    id: "arag-1",
    phrase: "Buen diya",
    description: "Aragonese is a language in the Romance language family that is native to Spain and spoken by just over 10, 000 people in the Pyrenees valley of Aragon.",
    flag: "\u{1F1EA}\u{1F1F8}"
  },
  {
    id: "aus-1",
    phrase: "G\u2019day",
    description: "Australia has no official language, however Australian English is the variety of English spoken here.",
    flag: "\u{1F1E6}\u{1F1FA}"
  },
  {
    id: "aramaic-1",
    phrase: "Safro bricho | Yasetel liesbukh",
    description: "Aramaic \u05D0\u05E8\u05DE\u05D9\u05EA is a member of the Semitic branch of the Afro-Asiatic language family that originated among the Arameans in the ancient region of Syria. It has a 3,000-year history and is still spoken by small groups of people in different parts of the Middle East.",
    flag: "\u{1F1F8}\u{1F1FE}"
  },
  {
    id: "assyrian-1",
    phrase: "Kedamtookh brikhta",
    description: "Assyrian, also known as Syrian or neo Aramaic is the East Semitic dialect that evolved from ancient Akkadian after 1950 B.C. As a Semitic language, it originated from the middle eastern region and is related to Arabic and Hebrew.",
    flag: "\u{1F1F8}\u{1F1FE}"
  },
  {
    id: "asturian-1",
    phrase: "Bonos dies",
    description: "Asturian is a West Iberian Romance language spoken by around 400,000 people in Asturias, Spain.",
    flag: "\u{1F1EA}\u{1F1F8}"
  },
  {
    id: "bali-1",
    phrase: "Rahajeng semeng",
    description: "Balinese belongs to the Malayo-Polynesian language family and is spoken by around 3.3 million people on the Indonesian island of Bali as well as the regions of Nusa Penida, Lombok, Java, Sumatra, and Sulawesi.",
    flag: "\u{1F1EE}\u{1F1E9}"
  },
  {
    id: "bas-1",
    phrase: "Egun on",
    description: "Basque (euskara) is a language spoken in the Basque Country (Gipuzkoa, Araba, Bizkaia) and Navarra (in Spain) as well as in the French Basque Country (Labourd, Soule and Basse-Navarre). Linguistically, Basque is a language isolate and is unrelated to the other languages of Europe.",
    flag: "\u{1F1EA}\u{1F1F8}"
  },
  {
    id: "bashkir-1",
    phrase: "\u0445\u04D9\u0439\u0435\u0440\u043B\u0435 \u0438\u0440\u0442\u0435 (x\xE4yyerlye irtye)",
    description: "Bashkir is an endangered language belonging to the Kipchak branch of the Turkic languages. Closely related to the Tatar and Kazakh languages, it is spoken by around 1.4 million native speakers in Russia, as well as in Ukraine, Kazakhstan, Belarus, Uzbekistan, and other neighboring post-Soviet regions.",
    flag: "\u{1F1F7}\u{1F1FA}"
  },
  {
    id: "bavar-1",
    phrase: "Guadn moing",
    description: "Bavarian is a regional dialect of German spoken in the German state of Bavaria, western Austria, and Northeastern Italy by over 14 million people. It uses German grammar, but takes several root words from Latin.",
    flag: "\u{1F1F7}\u{1F1FA}"
  },
  {
    id: "belarusian-1",
    phrase: "\u0414\u043E\u0431\u0440\u0430\u0439 \u0440\u0430\u043D\u0456\u0446\u044B (Dobray ranici)",
    description: "Belarusian is the official language of Belarus. This East Slavic language is also spoken in Russia, Ukraine and Poland.",
    flag: "\u{1F1F7}\u{1F1FA}"
  },
  {
    id: "bengali-1",
    phrase: "\u09B8\u09C1\u09AA\u09CD\u09B0\u09AD\u09BE\u09A4 Nomoskar",
    description: "Bengali \u09AC\u09BE\u0982\u09B2\u09BE is the only official language of Bangladesh, one of the 22 official languages of India, and the sixth most spoken language in the world. It is spoken as a first language by the majority of the population in Bangladesh, as well as people in the Indian state of West Bengal.",
    flag: "\u{1F1E7}\u{1F1E9}"
  },
  {
    id: "bhojpuri-1",
    phrase: "\u0930\u093E\u092E \u0930\u093E\u092E (raam raam)",
    description: "Bhojpuri is an Indo-Aryan language, considered to be one of the most rapidly growing languages in the world, spoken by over 40 million speakers in northern-eastern India and the Terai region of Nepal.",
    flag: "\u{1F1EE}\u{1F1F3}"
  },
  {
    id: "bislama-1",
    phrase: "Gudmoning",
    description: "Bislama is an English-based creole language and one of the official languages of the island of Vanuatu with around 10,000 native speakers.",
    flag: "\u{1F1FB}\u{1F1FA}"
  },
  {
    id: "bosnian-1",
    phrase: "Dobro jutro",
    description: "Bosnian, a south Slavic language of the Indo-European family, is the official language of Bosnia and is essentially the same language as Croatian and Serbian. All three languages used to be known as Serbo-Croatian before the break-up of Yugoslavia.",
    flag: "\u{1F1E7}\u{1F1E6}"
  },
  {
    id: "breton-1",
    phrase: "Demat",
    description: "Breton is a Southwestern Brittonic language of the Celtic language spoken in Brittany in the northwest of France.",
    flag: "\u{1F3F3}"
  },
  {
    id: "bulgarian-1",
    phrase: "\u0414\u043E\u0431\u0440\u043E \u0443\u0442\u0440\u043E (Dobro utro)",
    description: "Bulgarian is a South Slavic language spoken in Southeastern Europe, primarily in Bulgaria. It is the country\u2019s only official language and Bulgarian is written with Cyrillic.",
    flag: "\u{1F1E7}\u{1F1EC}"
  },
  {
    id: "burmese-",
    phrase: "Mingalarba \u1019\u1004\u103A\u1039\u1002\u101C\u102C\u1014\u1036\u1014\u1000\u103A\u1001\u1004\u103A\u1038\u1015\u102B",
    description: "Burmese is a Sino-Tibetan language spoken in Myanmar where it is an official language and the language of the Bamar people, the country\u2019s principal ethnic group.",
    flag: "\u{1F1F2}\u{1F1F2}"
  },
  {
    id: "cambodian-1",
    phrase: "\u2019\xE2r\u016Dn su\u014F sdei \u17A2\u179A\u17BB\u178E\u200B\u179F\u17BD\u179F\u17D2\u178F\u17B8",
    description: "Khmer is the language of the Khmer people and the official language of Cambodia. With over 16 million speakers, it is the second most widely spoken Austroasiatic language.",
    flag: "\u{1F1F0}\u{1F1ED}"
  },
  {
    id: "catalan-1",
    phrase: "Bon dia",
    description: "Catalan is a Western Romance language derived from Vulgar Latin and named after the medieval Principality of Catalonia, in northeastern of modern Spain. It is the only official language of Andorra, and a co-official language of the Spanish autonomous communities of Catalonia, the Balearic Islands and Valencia.",
    flag: "\u{1F1EA}\u{1F1F8}"
  },
  {
    id: "de-1",
    phrase: "Guten Morgen",
    description: "German Deutsch is the official language of both Germany and Austria and one of the three official languages of Switzerland. German belongs to the West Germanic group of the Indo-European language family. One of the major languages of the world, German is a native language to almost 100 million people worldwide and the most widely spoken native language in the European Union.",
    flag: "\u{1F1E9}\u{1F1EA}"
  },
  {
    id: "dutch-1",
    phrase: "Goedemorgen",
    description: "Dutch is a West Germanic language spoken by about 27 million people world-wide mostly in the Netherlands, northern Belgium, and Suriname.",
    flag: "\u{1F1F3}\u{1F1F1}"
  },
  {
    id: "portugal-1",
    phrase: "Bom dia",
    description: "Portuguese is the sole official language of Portugal, Angola, Mozambique, Guinea-Bissau, Cape Verde, S\xE3o Tom\xE9 and Pr\xEDncipe, and Brazil, while having co-official language status in East Timor, Equatorial Guinea, and Macau. A Portuguese-speaking person or nation is referred to as Lusophone (lus\xF3fono).",
    flag: "\u{1F1F5}\u{1F1F9}"
  }
];
var data_default = {
  list
};

// app/components/GithubIcon/index.tsx
init_react();
var import_react = __toModule(require("react"));
var GithubIcon = () => /* @__PURE__ */ import_react.default.createElement("svg", {
  version: "1.1",
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  "aria-hidden": "true"
}, /* @__PURE__ */ import_react.default.createElement("path", {
  fillRule: "evenodd",
  d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
}));
var GithubIcon_default = GithubIcon;

// route-module:/Users/mauricioblum/Development/Fun/good-morning/app/routes/index.tsx
function randomGoodMorning(list2) {
  return Math.floor(Math.random() * list2.length);
}
var loader = () => {
  return {
    list: data_default.list,
    selectedIndex: randomGoodMorning(data_default.list)
  };
};
var meta = ({ data }) => {
  if (!data) {
    return {
      title: "A new good morning every day",
      description: "A random good morning phrase in a different language every day"
    };
  }
  const goodMorningOfTheDay = data.list[data.selectedIndex];
  return {
    title: `${goodMorningOfTheDay.flag} | ${goodMorningOfTheDay.phrase}`,
    description: goodMorningOfTheDay.description
  };
};
function Index() {
  const data = (0, import_remix3.useLoaderData)();
  const goodMorningOfTheDay = data.list[data.selectedIndex];
  return /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-col items-center justify-center text-center h-screen px-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex absolute right-3 top-3"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "flex items-center",
    href: "https://github.com/mauricioblum/good-morning"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "mr-2"
  }, "View on GitHub"), " ", /* @__PURE__ */ React.createElement(GithubIcon_default, null))), /* @__PURE__ */ React.createElement("p", {
    className: "text-center text-gray-700 md:text-8xl text-6xl font-bold transition-all"
  }, goodMorningOfTheDay.flag), /* @__PURE__ */ React.createElement("h1", {
    className: "md:text-8xl text-6xl font-bold mb-8 transition-all max-w-full"
  }, goodMorningOfTheDay.phrase), /* @__PURE__ */ React.createElement("p", {
    className: "md:text-xl text-lg px-4 transition-all"
  }, goodMorningOfTheDay.description));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
