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

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
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

// server.js
__export(exports, {
  default: () => server_default
});
init_react();
var import_vercel = __toModule(require("@remix-run/vercel"));

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
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

// route:/Users/mauricioblum/Development/Fun/good-morning/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
init_react();
var import_remix2 = __toModule(require_remix());
var import_react = __toModule(require("react"));

// app/styles/global.css
var global_default = "/build/_assets/global-OGHEWKFH.css";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-2TXVX27M.css";

// route:/Users/mauricioblum/Development/Fun/good-morning/app/root.tsx
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: global_default
    },
    { rel: "stylesheet", href: tailwind_default }
  ];
};
function App() {
  (0, import_react.useEffect)(() => {
    if (localStorage.themePreference) {
      localStorage.themePreference === "dark" ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark");
    } else if (localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      localStorage.themePreference = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.themePreference = "";
    }
  }, []);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "bg-white dark:bg-zinc-800 text-neutral-800 dark:text-white"
  }, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), false));
}

// route:/Users/mauricioblum/Development/Fun/good-morning/app/routes/social/$phrase.ts
var phrase_exports = {};
__export(phrase_exports, {
  loader: () => loader
});
init_react();
var import_canvas = __toModule(require("canvas"));

// app/utils/canvasUtils.ts
init_react();
var getLines = (ctx, text, maxWidth) => {
  const words = text.split(" ");
  const lines = [];
  let currentLine = words[0];
  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const width = ctx.measureText(currentLine + " " + word).width;
    if (width < maxWidth) {
      currentLine += " " + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);
  return lines;
};

// app/utils/parseEmojiFlag.ts
init_react();
var regionalIndicatorSymbolsMap = {
  "\u{1F1E6}": "a",
  "\u{1F1E7}": "b",
  "\u{1F1E8}": "c",
  "\u{1F1E9}": "d",
  "\u{1F1EA}": "e",
  "\u{1F1EB}": "f",
  "\u{1F1EC}": "g",
  "\u{1F1ED}": "h",
  "\u{1F1EE}": "i",
  "\u{1F1EF}": "j",
  "\u{1F1F0}": "k",
  "\u{1F1F1}": "l",
  "\u{1F1F2}": "m",
  "\u{1F1F3}": "n",
  "\u{1F1F4}": "o",
  "\u{1F1F5}": "p",
  "\u{1F1F6}": "q",
  "\u{1F1F7}": "r",
  "\u{1F1F8}": "s",
  "\u{1F1F9}": "t",
  "\u{1F1FA}": "u",
  "\u{1F1FB}": "v",
  "\u{1F1FC}": "w",
  "\u{1F1FD}": "x",
  "\u{1F1FE}": "y",
  "\u{1F1FF}": "z"
};
function parseEmojiFlag(flag) {
  const country = [...flag].map((char) => regionalIndicatorSymbolsMap[char]).join("");
  return country;
}

// route:/Users/mauricioblum/Development/Fun/good-morning/app/routes/social/$phrase.ts
var generateImage = async ({
  phrase = "Good morning",
  flag,
  width = 1200,
  height = 630,
  fontSize = 40,
  margin = 60,
  font = "Open Sans"
}) => {
  const canvas = (0, import_canvas.createCanvas)(width, height);
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, width, width, height);
  gradient.addColorStop(0.45, "#87CEEB");
  gradient.addColorStop(1, "#f2d544");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  ctx.font = `bold ${fontSize}px ${font}`;
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  const titleLines = getLines(ctx, "Good Morning of the day", width - margin * 2);
  const lineHeight = fontSize * 1.2;
  const textHeight = titleLines.length * lineHeight;
  const offset = 150;
  titleLines.map((line, index) => ({
    text: line,
    x: width / 2,
    y: (height - textHeight) / 2 + index * lineHeight - offset
  })).forEach(({ text, x, y }) => {
    ctx.fillStyle = "#000";
    ctx.fillText(text, x, y);
  });
  const spacingAfterTitle = 20;
  const spacingAfterFlag = 40;
  const bottomOfTitleText = height / 2 + textHeight / 2 + spacingAfterTitle;
  const phraseHeight = ctx.measureText(phrase).actualBoundingBoxAscent;
  if (flag) {
    const country = parseEmojiFlag(flag);
    const flagImage = await (0, import_canvas.loadImage)(`https://flagcdn.com/108x81/${country}.png`);
    const x = width / 2.18;
    const y = bottomOfTitleText + lineHeight / 2 - offset;
    ctx.drawImage(flagImage, x, y);
  }
  const phrasePosition = {
    x: width / 2,
    y: bottomOfTitleText + phraseHeight / 2 + spacingAfterFlag
  };
  ctx.font = `${fontSize + 30}px ${font}`;
  ctx.fillText(phrase, phrasePosition.x, phrasePosition.y);
  return canvas.toBuffer("image/png");
};
async function loader({ params }) {
  const imageName = params.phrase.slice(0, params.phrase.indexOf("."));
  const canvasImage = await generateImage({ flag: "\u{1F1EE}\u{1F1F9}", phrase: imageName });
  return new Response(canvasImage, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Content-Disposition": `inline; filename="${imageName}.png"`,
      "Cache-Control": "public, max-age=2419200",
      "x-content-type-options": "nosniff"
    }
  });
}

// route:/Users/mauricioblum/Development/Fun/good-morning/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader2,
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
    id: "chinese-mandarin-1",
    phrase: "n\u01D0 z\u01CEo \u4F60\u65E9",
    description: "Mandarin Chinese is the official language of Mainland China and Taiwan, and is one of the official languages of Singapore. Mandarin is often placed first in lists of languages by number of native speakers with almost a billion speakers.",
    flag: "\u{1F1E8}\u{1F1F3}"
  },
  {
    id: "croatian-1",
    phrase: "Dobro jutro",
    description: "Croatian or Hrvatski is a South Slavic language spoken mainly in Croatia, Bosnia and Herzegovina, some parts of Serbia, and the neighbouring countries by about 5.5 million people.",
    flag: "\u{1F1ED}\u{1F1F7}"
  },
  {
    id: "czech-1",
    phrase: "dobr\xFD den",
    description: "Czech is a Western Slavic language which is mutually intelligible with Slovak. It is mainly spoken in the Czech Republic with over 10,5 million speakers.",
    flag: "\u{1F1E8}\u{1F1FF}"
  },
  {
    id: "danish-1",
    phrase: "Godmorgen",
    description: "Danish is a Scandinavian language and the only official language of the Kingdom of Denmark. Closely related to Swedish and Norwegian, it is spoken in Denmark and in some parts of Greenland and northern Germany.",
    flag: "\u{1F1E9}\u{1F1F0}"
  },
  {
    id: "dhiveni-1",
    phrase: "Ba\u2019ajjaveri hedhuneh",
    description: "Dhivehi or Maldivian is an Indo-Aryan language spoken on the islands of Maldives where it is an official language.",
    flag: "\u{1F1F2}\u{1F1FB}"
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
    id: "dzhongkao-1",
    phrase: "\u0F44\u0FB2\u0F7C\u0F0B\u0F54\u0F51\u0F7A\u0F0B\u0F63\u0F7A\u0F42\u0F66\u0F0D Dobro delek",
    description: "Dzonkha or Bhutanese is the sole official and national language of the Kingdom of Bhutan. This Sino-Tibetan language is spoken by over half a million people in Bhutan and is written with the Tibetan alphabet.",
    flag: "\u{1F1E7}\u{1F1F9}"
  },
  {
    id: "elfdalian-1",
    phrase: "Gum\xE5ron",
    description: "Elfdalian also called \xD6vdalian is a North Germanic Indo-European language spoken by up to 3,000 people in the \xC4lvdalen region of Sweden.",
    flag: "\u{1F1F8}\u{1F1EA}"
  },
  {
    id: "estonian-1",
    phrase: "tere hommikust",
    description: "Estonian is a Finno-Ugric language spoken as the official language in Estonia. It is closely related to Finnish.",
    flag: "\u{1F1EA}\u{1F1EA}"
  },
  {
    id: "faorese-1",
    phrase: "G\xF3\xF0an morgun",
    description: "Faroese is a North Germanic language spoken as a first language by Faroe Islanders, residing on the Faroe Islands and in other areas, mainly Denmark.",
    flag: "\u{1F1EB}\u{1F1F4}"
  },
  {
    id: "farsi-1",
    phrase: "Sob Bekhair  \u0635\u0628\u062D \u0628\u062E\u06CC\u0631",
    description: "Persian is an ancient language belonging to the Iranian branch of the Indo-Iranian subdivision of the Indo-European languages. It is a pluricentric language predominantly spoken and used officially within Iran, Afghanistan, and Tajikistan.",
    flag: "\u{1F1EE}\u{1F1F7}"
  },
  {
    id: "fijian-1",
    phrase: "Ni sa yadra",
    description: "Fijian is an Austronesian language of the Malayo-Polynesian family. It is an official language of Fiji spoken by some 350,000\u2013450,000 ethnic Fijians as a native language.",
    flag: "\u{1F1EB}\u{1F1EF}"
  },
  {
    id: "finnish-1",
    phrase: "Hyv\xE4\xE4 huomenta",
    description: "Finnish is a Finno-Ugric language spoken only in Finland as the official language and by ethnic Finns elsewhere in Scandinavia.",
    flag: "\u{1F1EB}\u{1F1EE}"
  },
  {
    id: "flemish-1",
    phrase: "Goeije morn",
    description: "Native to the historical region of Flanders in northern Belgium, Flemish is a Low Franconian dialect cluster of the Dutch language. It is sometimes referred to as Flemish Dutch, Belgian Dutch, or Southern Dutch spoken by over 6 million people.",
    flag: "\u{1F1E7}\u{1F1EA}"
  },
  {
    id: "french-1",
    phrase: "Bonjour",
    description: "French is a Romance language of the Indo-European family spoken by over 354 million people in France and around the world. It is the third most spoken language in Europe, the official language of 29 countries, spoken in parts of Africa, North America, and South America.",
    flag: "\u{1F1EB}\u{1F1F7}"
  },
  {
    id: "frisian-1",
    phrase: "Goeie moarn",
    description: "The Frisian languages are a closely related group of Germanic languages, spoken by about 500,000 Frisian people, who live on the southern fringes of the North Sea in the Netherlands and Germany.",
    flag: "\u{1F1E9}\u{1F1EA}"
  },
  {
    id: "friulian-1",
    phrase: "Bund\xEC",
    description: "Friulian or Friulan is a Romance language of the Rhaeto-Romance family. It is spoken in the Friuli region of northeastern Italy with around 600,000 total speakers.",
    flag: "\u{1F1EE}\u{1F1F9}"
  },
  {
    id: "galician-1",
    phrase: "Bos d\xEDas",
    description: "Galician is a Romance language spoken by around 2.4 million people in Galicia, a region in northwestern Spain, where it is the official language.",
    flag: "\u{1F1EA}\u{1F1F8}"
  },
  {
    id: "georgian-1",
    phrase: "\u10D3\u10D8\u10DA\u10D0 \u10DB\u10E8\u10D5\u10D8\u10D3\u10DD\u10D1\u10D8\u10E1\u10D0 Dila mushwidobisa",
    description: "Georgian is the official language of Georgia and the country\u2019s most widely spoken language with over 4.1 million people.",
    flag: "\u{1F1EC}\u{1F1EA}"
  },
  {
    id: "greek-1",
    phrase: "\u039A\u03B1\u03BB\u03B7\u03BC\u03AD\u03C1\u03B1 (Kalim\xE9ra)",
    description: "Greek (\u03B5\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC) belongs to the Hellenic branch of the Indo-European language family, mainly spoken in Greece and Cyprus an an official language. It has the longest documented history of any living Indo-European language, spanning more than 3000 years of written records. There are about 13.1 million speakers of Greek worldwide and it is recognised as a minority language in Albania, Armenia, Hungary, Italy, Romania, Turkey and Ukraine.",
    flag: "\u{1F1EC}\u{1F1F7}"
  },
  {
    id: "greenlandic-1",
    phrase: "Iterluarit",
    description: "Greenlandic falls under the Eskimo\u2013Aleut language family, spoken by around 57,000 Greenlandic Inuit people in Greenland.",
    flag: "\u{1F1EC}\u{1F1F1}"
  },
  {
    id: "haitian-1",
    phrase: "Bonjou",
    description: "Haitian Creole (krey\xF2l ayisyen)) is a French-based creole language spoken by 10\u201312 million people worldwide and the only language of most Haitians. Along with French it is one of the official languages of Haiti.",
    flag: "\u{1F1ED}\u{1F1F9}"
  },
  {
    id: "hausa-1",
    phrase: "Ina kwana",
    description: "Hausa language, the most important indigenous bridge language in West and Central Africa, spoken as a first or second language by about 40\u201350 million people. It belongs to the Western branch of the Chadic language family within the Afro-Asiatic language phylum. It is spoken mainly in northern Nigeria and Niger, and also in Benin, Burkina Faso, Cameroon, the Central African Republic (CAR), Chad, Congo, Eritrea, Germany, Ghana, Sudan and Togo.",
    flag: "\u{1F1F9}\u{1F1E9}"
  },
  {
    id: "hawaiian-1",
    phrase: "Aloha kakahiaka",
    description: "The Hawaiian language is a Polynesian language that takes its name from Hawai\u02BBi, the largest island in the tropical North Pacific archipelago where it developed. Hawaiian, along with English, is an official language of the State of Hawaii, one of the best islands to visit.",
    flag: "\u{1F3F4}\u{E0075}\u{E0073}\u{E0068}\u{E0069}\u{E007F}"
  },
  {
    id: "hebrew-1",
    phrase: "Boker tov \u05D1\u05D5\u05E7\u05E8 \u05D8\u05D5\u05D1",
    description: "Hebrew is a Northwest Semitic language spoken by over nine million people worldwide. Historically, it is regarded as the language of the Israelites and their ancestors. It is written using its own script from right to left.",
    flag: "\u{1F1EE}\u{1F1F1}"
  },
  {
    id: "hindi-1",
    phrase: "\u0928\u092E\u0938\u094D\u0924\u0947 namaste",
    description: "Hindi (\u0939\u093F\u0928\u094D\u0926\u0940) is an Indo-European language spoken in India, Nepal, and throughout the Indian diaspora. Hindi is descended from Sanskrit, sometimes called \u201Cthe mother of all languages.\u201D While there are 22 official languages and over 1,000 dialects of India, Hindi and English take precedence in government affairs. It is a link-language for over half of India\u2019s population.",
    flag: "\u{1F1EE}\u{1F1F3}"
  },
  {
    id: "hmong-1",
    phrase: "Zoo thaum sawv ntxov",
    description: "Hmong is a Hmong-Mien language spoken by about 2.6 million people in China, Vietnam, Laos, Thailand, USA, and French Guiana.",
    flag: "\u{1F1FB}\u{1F1F3}"
  },
  {
    id: "hungarian-1",
    phrase: "J\xF3 reggelt",
    description: "Hungarian is a Uralic language of the Ugric branch spoken in Hungary and parts of several neighbouring countries. It is the official language of Hungary and one of the 24 official languages of the European Union.",
    flag: "\u{1F1ED}\u{1F1FA}"
  },
  {
    id: "icelandic-1",
    phrase: "G\xF3\xF0an daginn",
    description: "Icelandic (\xEDslenska) is a North Germanic language spoken in Iceland as its official language. It\u2019s most closely related to Faroese and Western Norwegian and has around 314,000 speakers. The language is more conservative than most other Western European languages.",
    flag: "\u{1F1EE}\u{1F1F8}"
  },
  {
    id: "igbo-1",
    phrase: "\u1EE4t\u1EE5t\u1EE5 \u1ECDma",
    description: "Igbo is the principal native language of the Igbo people of southeastern Nigeria with around 45 million speakers and over 20 dialects.",
    flag: "\u{1F1F3}\u{1F1EC}"
  },
  {
    id: "indo-bahasa-1",
    phrase: "Selamat pagi",
    description: "Indonesian (bahasa Indonesia) is the official language of Indonesia.With over 230 million speakers, it is one of the most widely spoken languages in the world. It is a group of varieties of Malay, an Austronesian language that has been used as the common language in the multilingual Indonesian archipelago for centuries. Indonesia uses the Latin alphabet system and Arabic numerals.",
    flag: "\u{1F1EE}\u{1F1E9}"
  },
  {
    id: "irish-1",
    phrase: "Maidin mhaith",
    description: "Irish (Gaeilge) is one of the three Goidelic languages, along with Scottish Gaelic and Manx. This Goidelic branch together with the Brythonic branch (Welsh, Cornish and Breton) form the Celtic language family.",
    flag: "\u{1F1EE}\u{1F1EA}"
  },
  {
    id: "italian-1",
    phrase: "Buongiorno",
    description: "Italian (Italiano) is a Romance language of the Indo-European language family spoken by over 90 million people, the vast majority of which are in Italy, Sicily and Sardinia. It is the official language of Italy, San Marino, and the Vatican City, closely descended from Latin.",
    flag: "\u{1F1EE}\u{1F1F9}"
  },
  {
    id: "japanese-1",
    phrase: "\u304A\u306F\u3088\u3046\u3054\u3056\u3044\u307E\u3059 (Ohay\u014D gozaimasu)",
    description: "Japanese (\u65E5\u672C\u8A9E Nihongo) is an East Asian language of the Japonic language family. It is spoken by about 125 million people, mostly in Japan, where it is the official and national language. Bowing, dating back to the 5th century, is a huge part of Japanese culture and is a sign of respect. In Japan, people readily bow to one another rather than actually saying the words.",
    flag: "\u{1F1EF}\u{1F1F5}"
  },
  {
    id: "jamaican-1",
    phrase: "Gud mawnin",
    description: "Jamaican Patois, often also referred to as Jamaican Creole, is an English-based creole language with West African influences spoken mainly in Jamaica. Belonging to the English Creole language family, it is spoken by the the majority of Jamaicans with over 3 million native speakers.",
    flag: "\u{1F1EF}\u{1F1F2}"
  },
  {
    id: "javanese-1",
    phrase: "Sugeng \xE9njing",
    description: "Javanese is the language of the Javanese people of the island of Java, in Indonesia that is the native language of more than 98 million people.",
    flag: "\u{1F1EE}\u{1F1E9}"
  },
  {
    id: "kannada-1",
    phrase: "\u0CB6\u0CC1\u0CAD\u0CCB\u0CA6\u0CAF shubhodaya",
    description: "Kannada, spoken by nearly 45 million native speakers, is a Dravidian language of the people of Karnataka in southwestern India, and by significant linguistic minorities in the states of Maharashtra, Andhra Pradesh, Tamil Nadu, Telangana, Kerala and abroad.",
    flag: "\u{1F1EE}\u{1F1F3}"
  },
  {
    id: "kazakh-1",
    phrase: "\u049A\u0430\u0439\u044B\u0440\u043B\u044B \u0442\u0430\u04A3 Qay\u0131rl\u0131 ta\xF1",
    description: "Kazakh is a Turkic language of the Kipchak branch spoken in Central Asia and the official language of Kazakhstan. The language comprises 21 million native speakers including regions of Bayan-Ulgii in Mongolia and the Dzungarian region of Xinjiang, China.",
    flag: "\u{1F1F0}\u{1F1FF}"
  },
  {
    id: "korean-1",
    phrase: "\uC548\uB155\uD558\uC2ED\uB2C8\uAE4C (annyeong hashimnikka)",
    description: "Korean, an East Asian language, is the official language of South Korea (Republic of Korea) and North Korea (Democratic People\u2019s Republic of Korea) spoken by more than 75 million people.",
    flag: "\u{1F1F0}\u{1F1F7}"
  },
  {
    id: "lao-1",
    phrase: "\u0EAA\u0EB0\u200B\u0E9A\u0EB2\u0E8D\u200B\u0E94\u0EB5\u200B\u0E95\u0EAD\u0E99\u200B\u0EC0\u0E8A\u0EBB\u0EC9\u0EB2 - Arrun Suo Sdey",
    description: "Lao is the main language of Laos. It is a Kra\u2013Dai language serving as a common language among all citizens of Laos, who speak approximately 90 other languages, many of which are unrelated to Lao. Modern Lao is heavily influenced by the Thai language and comprises over 30 million native speakers.",
    flag: "\u{1F1F1}\u{1F1E6}"
  },
  {
    id: "latin-1",
    phrase: "Bonum mane",
    description: "Latin was the dominant language of the Roman Empire from 6th century BC to 600 AD. When the Roman Empire collapsed, Latin evolved into the various languages that we know today. Italian, French, Portuguese, Spanish and Romanian all consider Latin as their parent tongue. Latin is a classical language belonging to the Italic branch of the Indo-European languages.",
    flag: "\u{1F3F3}"
  },
  {
    id: "latin-2",
    phrase: "Quid agis mane",
    description: "Latin was the dominant language of the Roman Empire from 6th century BC to 600 AD. When the Roman Empire collapsed, Latin evolved into the various languages that we know today. Italian, French, Portuguese, Spanish and Romanian all consider Latin as their parent tongue. Latin is a classical language belonging to the Italic branch of the Indo-European languages.",
    flag: "\u{1F3F3}"
  },
  {
    id: "latvian-1",
    phrase: "Labr\u012Bt",
    description: "Latvian (latvie\u0161u valoda) is an Indo-European Eastern Baltic language spoken in the Baltic region. It is the official language of Latvia and one of the official languages of the European Union.",
    flag: "\u{1F1F1}\u{1F1FB}"
  },
  {
    id: "lithuanian-1",
    phrase: "Labas rytas",
    description: "Lithuanian (lietuvi\u0173 kalba) is an Eastern Baltic language spoken in the Baltic region as the official language of Lithuania. It is also one of the official languages of the European Union spoken by just under 3 million native speakers. The language is one of the oldest in the world.",
    flag: "\u{1F1F1}\u{1F1F9}"
  },
  {
    id: "luxembourgish-1",
    phrase: "Gudde Moien",
    description: "Luxembourgish is a West Germanic language that is spoken mainly in Luxembourg. About 390,000 people speak Luxembourgish worldwide.",
    flag: "\u{1F1F1}\u{1F1FA}"
  },
  {
    id: "luganda-1",
    phrase: "Wasuze otya nno",
    description: "Luganda, a Bantu language, is an official language of Uganda along with English and Swahili. It is spoken primarily in Kampala, but may be understood in much of the country and in the African Great Lakes region.",
    flag: "\u{1F1FA}\u{1F1EC}"
  },
  {
    id: "macedonian-1",
    phrase: "\u0414\u043E\u0431\u0440\u043E \u0443\u0442\u0440\u043E (Dobro utro)",
    description: "Macedonian, the official language of the Republic of North Macedonia, is a south Slavic language spoken as a first language by 2 million people.",
    flag: "\u{1F1F2}\u{1F1F0}"
  },
  {
    id: "malagasy-1",
    phrase: "Salama",
    description: "Malagasy is the national language of Madagascar belonging to the Austronesian Malayo-Polynesia family of languages spoken by 25 million people.",
    flag: "\u{1F1F2}\u{1F1EC}"
  },
  {
    id: "malay-1",
    phrase: "Selamat Pagi",
    description: "Malay (Bahasa Melayu) is an Austronesian language spoken as the sole official language of Malaysia and Brunei. It is also heard in Indonesia, Singapore, and Thailand at a total of 250 \u2013 300 million speakers.",
    flag: "\u{1F1F2}\u{1F1FE}"
  },
  {
    id: "maltese-1",
    phrase: "Bon\u0121ornu",
    description: "Maltese, a language of central Semitic origin written in the Latin script, is the national language of the island of Malta. It is spoken by around 420,000 people on the Mediterranean islands of Malta, Gozo and Comino. The Maltese language developed from Sicilian Arabic, Over the centuries, it has incorporated many words derived from English, Italian and French.",
    flag: "\u{1F1F2}\u{1F1F9}"
  },
  {
    id: "maori-1",
    phrase: "Ata m\u0101rie",
    description: "M\u0101ori is an Eastern Polynesian language spoken by the M\u0101ori people, the indigenous population of New Zealand. it has also gained recognition as one of New Zealand\u2019s official languages.",
    flag: "\u{1F1F3}\u{1F1FF}"
  },
  {
    id: "mongolia-1",
    phrase: "\u04E8\u0433\u043B\u04E9\u04E9\u043D\u0438\u0439 \u043C\u044D\u043D\u0434 \xD6glouny mend",
    description: "Mongolian is the official language of Mongolia and both the most widely-spoken and best-known member of the Mongolic language family. It is an Altaic language spoken by approximately 5 million people in Mongolia, China, Afghanistan, and Russia.",
    flag: "\u{1F1F2}\u{1F1F3}"
  },
  {
    id: "navajo-1",
    phrase: "y\xE1\u2019\xE1t\u2019\xE9\xE9h ab\xEDn\xED",
    description: "Navajo is an American Indian language of the Athabascan family, spoken by around 170, 000 Navajo people in the Southwestern United States regions of Arizona, New Mexico, Utah, and Colorado.",
    flag: "\u{1F6A9}"
  },
  {
    id: "nepali-1",
    phrase: "namaste \u0928\u092E\u0938\u094D\u0924\u0947",
    description: "Nepali (\u0928\u0947\u092A\u093E\u0932\u0940), is an Indo-Aryan language of the sub-branch of Eastern Pahari written in Devanagari script It is the sole official language of Nepal and one of the 22 scheduled languages of India. While most Nepalese people speak at least some Nepali, there are more than 100 different languages and dialects spoken in Nepal.",
    flag: "\u{1F1F3}\u{1F1F5}"
  },
  {
    id: "norwegian-1",
    phrase: "God morgen",
    description: "Norwegian (norsk) is a Germanic language derived from Old Norse spoken primarily in Norway by over 5 million people where it is the official language.",
    flag: "\u{1F1F3}\u{1F1F4}"
  },
  {
    id: "polish-1",
    phrase: "Dzie\u0144 dobry",
    description: "Polish (polski) is a West Slavic language spoken by about 45 million people. Said to be one of the hardest languages to learn, it is the official language of Poland. It is understood and can be used for communication in the western parts of Ukraine, Belarus and Lithuania.",
    flag: "\u{1F1F5}\u{1F1F1}"
  },
  {
    id: "portugal-1",
    phrase: "Bom dia",
    description: "Portuguese is the sole official language of Portugal, Angola, Mozambique, Guinea-Bissau, Cape Verde, S\xE3o Tom\xE9 and Pr\xEDncipe, and Brazil, while having co-official language status in East Timor, Equatorial Guinea, and Macau. A Portuguese-speaking person or nation is referred to as Lusophone (lus\xF3fono).",
    flag: "\u{1F1F5}\u{1F1F9}"
  },
  {
    id: "punjab-1",
    phrase: "\u0A38\u0A3C\u0A41\u0A2D \u0A38\u0A35\u0A47\u0A30 - Sat Shri Akal",
    description: "Punjabi is an Indo-Aryan language with more than 130 million native speakers in the Indian subcontinent and around the world. It is the 10th most spoken language in the world.",
    flag: "\u{1F1EE}\u{1F1F3}"
  },
  {
    id: "romanian-1",
    phrase: "Bun\u0103 diminea\u021Ba",
    description: "Romanian (limba rom\xE2n\u0103) is a Balkan Romance language spoken by approximately 24\u201326 million people as a native language, primarily in Romania and Moldova, and by another 4 million people as a second language. Although it descended from Vulgar Latin, Romanian was influenced by Slavic and Greek languages in the Middle Ages. It is an official and national language of both Romania and Moldova.",
    flag: "\u{1F1F7}\u{1F1F4}"
  },
  {
    id: "russian-1",
    phrase: "\u0414\u043E\u0431\u0440\u043E\u0435 \u0443\u0442\u0440\u043E (Dobroye utro)",
    description: "Russian is an East Slavic language spoken by 300+ million people worldwide. It is  is an official language in the Russian Federation, Belarus, Kazakhstan and Kyrgyzstan, and many other people in Central Asia, the Baltic states, the Caucasus, and Eastern Europe know it as a second language. Commonly written in Cyrillic, it is the 8th most widely spoken language in the world.",
    flag: "\u{1F1F7}\u{1F1FA}"
  },
  {
    id: "samoan-1",
    phrase: "oa mai le ataeao",
    description: "Samoan is the official language spoken in the Samoan Islands, which is made up of the Independent State of Samoa and the American Samoa. The language is the most spoken of the Polynesian language family with a total of 510,000 speakers worldwide.",
    flag: "\u{1F1FC}\u{1F1F8}"
  },
  {
    id: "sanskrit-1",
    phrase: "\u0938\u0941\u092A\u094D\u0930\u092D\u093E\u0924\u092E\u094D (suprabh\u0101tam)",
    description: "Sanskrit is a 4,000-year-old classical language that belongs to the Indo-Aryan branch of the Indo-European languages. Known as \u2018the mother of all languages,\u2019 Sanskrit is the root of many, but not all, Indian languages. It is also the liturgical language of Buddhism, Hinduism, and Jainism. Sanskrit has less than 15,000 native speakers at present and is mostly used by Hindu priests during religious ceremonies.",
    flag: "\u{1F3F3}"
  },
  {
    id: "scots-gaelic-1",
    phrase: "Madainn mhath",
    description: "Scots Gaelic is a Goidelic language of the Celtic and Indo-European language family, native to the Gaels of Scotland. As a Goidelic language, Scottish Gaelic, like Modern Irish and Manx, developed out of Middle Irish.",
    flag: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}"
  },
  {
    id: "serbian-1",
    phrase: "\u0414\u043E\u0431\u0440\u043E \u0458\u0443\u0442\u0440\u043E (Dobro utro)",
    description: "Serbian is a South Slavic language spoken mainly in Serbia, Bosnia and Herzegovina, Montenegro, Croatia and Macedonia by about 9 million people. Serbian is the official and main language of Serbia and Montenegro.",
    flag: "\u{1F1F7}\u{1F1F8}"
  },
  {
    id: "shangainese-wu-1",
    phrase: "\u4FAC\u65E9 (n\xF3ng z\u014D)",
    description: "Shanghainese, part of the Sino-Tibetan language family, is a variety of Wu Chinese spoken in the central districts of the City of Shanghai and its surrounding areas by 10 \u2013 14 million speakers.",
    flag: "\u{1F1E8}\u{1F1F3}"
  },
  {
    id: "slovak-1",
    phrase: "Dobr\xE9 r\xE1no",
    description: "Slovak, the official language of Slovakia, is a West Slavic language where it is spoken by approximately 5.6 million people.",
    flag: "\u{1F1F8}\u{1F1F0}"
  },
  {
    id: "slovak-2",
    phrase: "Dobr\xFD de\u0148",
    description: "Slovak, the official language of Slovakia, is a West Slavic language where it is spoken by approximately 5.6 million people.",
    flag: "\u{1F1F8}\u{1F1F0}"
  },
  {
    id: "slovenian-1",
    phrase: "Dobro jutro",
    description: "Slovenian, an Indo-European language of the South Slavic language branch is the official and national language of Slovenia spoken by less than 3 million people.",
    flag: "\u{1F1F8}\u{1F1EE}"
  },
  {
    id: "slovenian-2",
    phrase: "Dober dan",
    description: "Slovenian, an Indo-European language of the South Slavic language branch is the official and national language of Slovenia spoken by less than 3 million people.",
    flag: "\u{1F1F8}\u{1F1EE}"
  },
  {
    id: "somali-1",
    phrase: "Subax wanaagsan",
    description: "Somali, an Afro-Asiatic language spoken by over 16 million people, is an official language of Somalia, a national language in Djibouti, and a working language in the Somali Region of Ethiopia.",
    flag: "\u{1F1F8}\u{1F1F4}"
  },
  {
    id: "swedish-1",
    phrase: "God morgon",
    description: "Swedish is a North Germanic language, closely related to Norwegian and Danish spoken by around 10 million people. A descendant of Old Norse, it is the national language of Sweden and the official language of the \xC5land Islands.",
    flag: "\u{1F1F8}\u{1F1EA}"
  },
  {
    id: "swiss-german-1",
    phrase: "Guten Morgen",
    description: "Swiss German is the collective name for the great variety of Upper German dialects spoken in Switzerland, Liechtenstein, in the Austrian province of Vorarlberg, in parts of Baden-W\xFCrttemberg in Germany and Alsace in France.",
    flag: "\u{1F1E8}\u{1F1ED}"
  },
  {
    id: "tagalog-1",
    phrase: "Magandang umaga po",
    description: "Tagalog is an Austronesian language spoken as a first language by a quarter of the population of the Philippines and as a second language by the majority. Its standardized form, officially named Filipino, is the national language of the Philippines, and is one of two official languages alongside English.",
    flag: "\u{1F1F5}\u{1F1ED}"
  },
  {
    id: "tagalog-2",
    phrase: "Magandang umaga",
    description: "Tagalog is an Austronesian language spoken as a first language by a quarter of the population of the Philippines and as a second language by the majority. Its standardized form, officially named Filipino, is the national language of the Philippines, and is one of two official languages alongside English.",
    flag: "\u{1F1F5}\u{1F1ED}"
  },
  {
    id: "tahitian-1",
    phrase: "\u2018Ia ora na \u2018oe",
    description: "Tahitian belongs to the Eastern Polynesian language group, spoken mainly on the Society Islands in French Polynesia and Bora Bora.",
    flag: "\u{1F1E6}\u{1F1F9}"
  },
  {
    id: "taiwanese-1",
    phrase: "\u723B\u65E9 (gau-tsa)",
    description: "Taiwanese Hokkien is the Hokkien dialect of Min Nan as spoken by about 70 percent of the population of Taiwan.",
    flag: "\u{1F1F9}\u{1F1FC}"
  },
  {
    id: "telugu-1",
    phrase: "\u0C36\u0C41\u0C2D\u0C4B\u0C26\u0C2F\u0C02 subhodayamu",
    description: "Telugu is a Dravidian language spoken in the Indian states of Andhra Pradesh, Telangana and the union territories of Puducherry by 75 million Telugu people.",
    flag: "\u{1F1EE}\u{1F1F3}"
  },
  {
    id: "thai-1",
    phrase: "\u0E2A\u0E27\u0E31\u0E2A\u0E14\u0E35\u0E04\u0E23\u0E31\u0E1A (s\xE0-w\xE0t-dee kr\xE1p)",
    description: "Thai \u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22, the sole official and national language of Thailand, spoken by 50 million people, belongs to the Tai group of the Kra\u2013Dai language family of Southeast Asia.",
    flag: "\u{1F1F9}\u{1F1ED}"
  },
  {
    id: "thai-2",
    phrase: "\u0E2A\u0E27\u0E31\u0E2A\u0E14\u0E35\u0E04\u0E48\u0E30 (s\xE0-w\xE0t-dee k\xE2)",
    description: "Thai \u0E20\u0E32\u0E29\u0E32\u0E44\u0E17\u0E22, the sole official and national language of Thailand, spoken by 50 million people, belongs to the Tai group of the Kra\u2013Dai language family of Southeast Asia.",
    flag: "\u{1F1F9}\u{1F1ED}"
  },
  {
    id: "tibet-1",
    phrase: "\u0F66\u0F94\u0F0B\u0F51\u0FB2\u0F7C\u0F0B\u0F56\u0F51\u0F7A\u0F0B\u0F63\u0F7A\u0F42\u0F66\u0F0D (nga-to delek)",
    description: "Tibetan is an official language of the Tibet Autonomous Region of the People\u2019s Republic of China. The Tibetic languages are a cluster of Tibeto-Burman languages descended from Old Tibetan, spoken across a wide area of eastern Central Asia bordering the Indian subcontinent, including the Tibetan Plateau and the Himalayas.",
    flag: "\u{1F3F3}"
  },
  {
    id: "turkish-1",
    phrase: "G\xFCnayd\u0131n",
    description: "Turkish is a Turkic language believed to be of the Altaic language family spoken mainly in Turkey, Northern Cyprus, Cyprus and other countries of the former Ottoman Empire by about 88 million people.",
    flag: "\u{1F1F9}\u{1F1F7}"
  },
  {
    id: "turkmen-1",
    phrase: "Ertiri\u0148iz ha\xFDyrly bolsun",
    description: "Turkmen belongs to the Turkic language family and is spoken by around 11 million Turkmen people of Central Asia, mainly in Turkmenistan, Afghanistan, and Iran.",
    flag: "\u{1F1F9}\u{1F1F2}"
  },
  {
    id: "ukrainian-1",
    phrase: "\u0414\u043E\u0431\u0440\u0438\u0439 \u0440\u0430\u043D\u043E\u043A (Dobre rano)",
    description: "Ukrainian is an Eastern Slavic language spoken mainly in Ukraine by about 51 million people.",
    flag: "\u{1F1FA}\u{1F1E6}"
  },
  {
    id: "ukrainian-2",
    phrase: "\u0414\u043E\u0431\u0440\u043E\u0433\u043E \u0440\u0430\u043D\u043A\u0443 (Dobroho ranku)",
    description: "Ukrainian is an Eastern Slavic language spoken mainly in Ukraine by about 51 million people.",
    flag: "\u{1F1FA}\u{1F1E6}"
  },
  {
    id: "urdu-1",
    phrase: "\u0635\u0628\u062D \u0628\u062E\u06CC\u0631",
    description: "Urdu is the official national language and lingua franca of Pakistan. It is a member of the Indo-Aryan group within the Indo-European family of languages and is mutually intelligible with Hindi.",
    flag: "\u{1F1F5}\u{1F1F0}"
  },
  {
    id: "uzbek-1",
    phrase: "Xayrli tong",
    description: "Uzbek is a Turkic language that is the official national language of Uzbekistan spoken by around 27 million people.",
    flag: "\u{1F1FA}\u{1F1FF}"
  },
  {
    id: "vietnamese-1",
    phrase: "Ch\xE0o bu\u1ED5i s\xE1ng",
    description: "Vietnamese is an Austroasiatic language spoken mainly in Vietnam, where it is the national and official language, by about 82 million people.",
    flag: "\u{1F1FB}\u{1F1F3}"
  },
  {
    id: "welsh-1",
    phrase: "Bore da",
    description: "Welsh is a Brittonic language of the Celtic language family spoken natively in Wales, and by some in England.",
    flag: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}"
  },
  {
    id: "zulu-1",
    phrase: "Sawubona",
    description: "Zulu is a member of the Bantu/Nguni family of languages. It is one of the official languages of South Africa spoken by about 10 million people mainly in Zululand and northern Natal in South Africa and also in Botswana, Lesotho, Malawi, Mozambique and Eswatini.",
    flag: "\u{1F1FF}\u{1F1E6}"
  }
];
var data_default = {
  list
};

// app/components/GithubIcon/index.tsx
init_react();
var import_react2 = __toModule(require("react"));
var GithubIcon = ({ fill = "#27272a" }) => /* @__PURE__ */ import_react2.default.createElement("svg", {
  version: "1.1",
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  "aria-hidden": "true"
}, /* @__PURE__ */ import_react2.default.createElement("path", {
  fillRule: "evenodd",
  fill,
  d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
}));
var GithubIcon_default = GithubIcon;

// app/utils/useLocalStorage.ts
init_react();
var import_react3 = __toModule(require("react"));
function useLocalStorage(key) {
  const [state, setState] = (0, import_react3.useState)(null);
  (0, import_react3.useEffect)(() => {
    setState(localStorage.getItem(key));
  }, [key]);
  const setWithLocalStorage = (nextState) => {
    localStorage.setItem(key, nextState);
    setState(nextState);
  };
  return {
    state,
    setWithLocalStorage
  };
}

// app/components/ToggleButton/index.tsx
init_react();
var import_react4 = __toModule(require("react"));
var import_react5 = __toModule(require("react"));
var ToggleButton = (props) => {
  var _a;
  const dotRef = (0, import_react4.useRef)(null);
  const inputRef = (0, import_react4.useRef)(null);
  const [icon, setIcon] = (0, import_react4.useState)(((_a = props.icons) == null ? void 0 : _a.notChecked) || "\u{1F506}");
  const onToggle = (e) => {
    var _a2, _b, _c;
    console.log("\u{1F680} ~ onToggle ~ .target.checked", e.target.checked);
    setIcon(e.target.checked ? ((_a2 = props.icons) == null ? void 0 : _a2.checked) || "\u{1F506}" : ((_b = props.icons) == null ? void 0 : _b.notChecked) || "\u{1F506}");
    if (dotRef.current) {
      dotRef.current.classList.toggle("translate-x-full");
      dotRef.current.classList.toggle("bg-slate-800");
    }
    (_c = props.onChange) == null ? void 0 : _c.call(props, e);
  };
  (0, import_react5.useEffect)(() => {
    var _a2;
    if (dotRef.current && localStorage.themePreference === "dark") {
      setIcon(((_a2 = props.icons) == null ? void 0 : _a2.checked) || "\u{1F319}");
      if (inputRef.current) {
        inputRef.current.checked = true;
      }
      dotRef.current.classList.toggle("translate-x-full");
      dotRef.current.classList.toggle("bg-slate-800");
    }
  }, []);
  return /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "flex items-center justify-center w-full mb-12"
  }, /* @__PURE__ */ import_react4.default.createElement("label", {
    htmlFor: "toggle",
    className: "flex items-center cursor-pointer"
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "relative"
  }, /* @__PURE__ */ import_react4.default.createElement("input", {
    ref: inputRef,
    onChange: onToggle,
    type: "checkbox",
    id: "toggle",
    className: "sr-only"
  }), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "block bg-gray-600 dark:bg-gray-200 w-14 h-8 rounded-full"
  }), /* @__PURE__ */ import_react4.default.createElement("div", {
    ref: dotRef,
    className: "dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"
  })), /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "ml-3 text-gray-700 font-medium"
  }, icon)));
};

// route:/Users/mauricioblum/Development/Fun/good-morning/app/routes/index.tsx
function getGoodMorningOfTheDay(goodMorningList) {
  const epochMs = new Date("January 1, 2022 00:00:00").valueOf();
  const msInDay = 864e5;
  const now = Date.now();
  const index = Math.floor((now - epochMs) / msInDay);
  const nextday = (index + 1) * msInDay + epochMs;
  return {
    solution: goodMorningList[index % goodMorningList.length],
    solutionIndex: index,
    tomorrow: nextday
  };
}
var loader2 = () => {
  return {
    goodMorning: getGoodMorningOfTheDay(data_default.list).solution,
    ENV: {
      WEBSITE_URL: false ? process.env.WEBSITE_URL : process.env.VERCEL_URL
    }
  };
};
var meta = ({ data }) => {
  if (!data) {
    return {
      title: "A new good morning every day",
      description: "A random good morning phrase in a different language every day",
      "og:title": "A new good morning every day",
      "og:description": "A random good morning phrase in a different language every day",
      "og:image": ""
    };
  }
  const goodMorningOfTheDay = data.goodMorning;
  return {
    title: `${goodMorningOfTheDay.flag} | ${goodMorningOfTheDay.phrase}`,
    description: goodMorningOfTheDay.description,
    "og:title": `${goodMorningOfTheDay.flag} | ${goodMorningOfTheDay.phrase}`,
    "og:description": goodMorningOfTheDay.description,
    "og:image": `${data.ENV.WEBSITE_URL}/social/${goodMorningOfTheDay.phrase}.png`
  };
};
function Index() {
  const data = (0, import_remix3.useLoaderData)();
  const goodMorningOfTheDay = data.goodMorning;
  const { state: themePreference, setWithLocalStorage } = useLocalStorage("themePreference");
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setWithLocalStorage(document.documentElement.classList[0] ? "dark" : "light");
  };
  return /* @__PURE__ */ React.createElement("section", {
    className: "flex flex-col items-center justify-center text-center h-screen px-5"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex absolute left-3 top-3"
  }, /* @__PURE__ */ React.createElement(ToggleButton, {
    onChange: toggleDarkMode,
    icons: {
      checked: "\u{1F319}",
      notChecked: "\u2600\uFE0F"
    }
  })), /* @__PURE__ */ React.createElement("div", {
    className: "flex absolute right-3 top-3"
  }, /* @__PURE__ */ React.createElement("a", {
    className: "flex items-center",
    href: "https://github.com/mauricioblum/good-morning"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "mr-2"
  }, "View on GitHub"), " ", /* @__PURE__ */ React.createElement(GithubIcon_default, {
    fill: themePreference === "light" ? void 0 : "#fff"
  }))), /* @__PURE__ */ React.createElement("p", {
    className: "text-center text-gray-700 md:text-8xl text-6xl font-bold transition-all"
  }, goodMorningOfTheDay.flag), /* @__PURE__ */ React.createElement("h1", {
    className: "md:text-8xl text-6xl font-bold mb-8 transition-all max-w-full"
  }, goodMorningOfTheDay.phrase), /* @__PURE__ */ React.createElement("p", {
    className: "md:text-xl text-lg px-4 transition-all"
  }, goodMorningOfTheDay.description));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "29980aaa", "entry": { "module": "/build/entry.client-VBAVAGRF.js", "imports": ["/build/_shared/chunk-SMJPRWOU.js", "/build/_shared/chunk-EFF4OLHG.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-5UUVUPYR.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-WNEZVKCL.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/social/$phrase": { "id": "routes/social/$phrase", "parentId": "root", "path": "social/:phrase", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/social/$phrase-CACG4V3Y.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-29980AAA.js" };

// server-entry-module:@remix-run/dev/server-build
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
  "routes/social/$phrase": {
    id: "routes/social/$phrase",
    parentId: "root",
    path: "social/:phrase",
    index: void 0,
    caseSensitive: void 0,
    module: phrase_exports
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

// server.js
var server_default = (0, import_vercel.createRequestHandler)({ build: server_build_exports, mode: "production" });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
/**
 * @remix-run/node v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
