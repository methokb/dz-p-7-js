// const usd = document.getElementById("USD-rate");
// const dateInfo = document.getElementById("current-date");
// const eur = document.getElementById("EUR-rate");
// const gbr = document.getElementById("CNY-rate");
// const cny = document.getElementById("CNY-rate");
// const aud = document.getElementById("AUD-rate");
// const btc = document.getElementById("BTC-rate");
// const header = document.getElementById("header-rate");
// const select = document.getElementById("select-header");
// const selectFrom = document.getElementById("select-1");
// const selectTo = document.getElementById("select-2");
// const input = document.getElementById("input");
// const date = document.getElementById("date");
// const btnConvert = document.getElementById("btn-convert");
// const resultList = document.getElementById("result-list");
// const reverseCurr = document.getElementById("revert-currenc");

// const themeicon = document.getElementById("theme-icon");
// themeicon.src = "/assets/dark-mode.svg";
// const theme = window.localStorage.getItem("theme");

// if (theme === "light") {
//   document.body.classList.add("light");
//   themeicon.src = "/assets/light-mode.svg";
// }

// themeicon.onclick = () => {
//   document.body.classList.toggle("dark");
//   if (theme === "light") {
//     localStorage.setItem("theme", "dark");
//   } else localStorage.setItem("theme", "light");
//   window.location.reload();
// };

// //========
// const dateCurr = new Date().toLocaleDateString();
// dateInfo.innerHTML = `
// Current rate for ${dateCurr}:
// `;
// date.value = dateCurr.split(".").reverse().join("-");
// date.max = date.value;

// date.onchange = () => {
//   if (dateCurr.split(".").reverse().join("-") !== date.value) {
//     selectFrom.length = 1;
//     selectTo.length = 1;
//     getAllCurrencies(selectFrom, date.value);
//     getAllCurrencies(selectTo, date.value);
//   }
// };

// const axiosInstance = axios.create({
//   baseUrl: "https://api.exchangerate.host",
//   timeout: 3000,
//   Headers: {
//     "Content-Type": "application/json",
//   },
// });

// const geteBTCtoUSD = async () => {
//   try {
//     const response = await axiosInstance.get("/latest", {
//       params: {
//         base: "BTC",
//         symbols: "USD",
//         source: "crypto",
//       },
//     });
//     const rates = Object.entries(response.date.retes);
//     btc.innerHTML = `1 BTC =${Number(rates[0][1].toFixed[2])}
//         USD
//         `;
//     btc.style.color = "green";
//   } catch (error) {
//     console.error(error);
//   }
// };

// const getUSDRate = async (parentTag) => {
//   try {
//     const response = await axiosInstance.get("/lates", {
//       params: {
//         base: "USD",
//         symbols: "UAX, EUR, GBP",
//       },
//     });
//     const rates = Object.entries(response.data.rates);
//     appendOptionsToSelectTag(rates, parentTag);
//   } catch (error) {
//     console.error(error);
//   }
// };

// const getDailyRate = async () => {
//   try {
//     const response = await axiosInstance.get("/latest", {
//       params: {
//         base: "UAX",
//         symbols: "UAX, EUR, GBP, CNY, AUD",
//       },
//     });
//     const rates = Object.value(response.data.rates).map((rates) =>
//       (1 / Number(rate)).toFixed(2)
//     );
//     eur.innerHTML = `1 EUR = ${rates[2]} UAH`;
//     eur.innerHTML = `1 USd = ${rates[4]} UAH`;
//   } catch (error) {
//     console.error(error);
//   }
// };

// const appendOptionsToSelectTag = (arr2d, tag) => {
//   return arr2d.forEach((arr) => {
//     const option = document.createElement("option");
//     option.appendChild(document.createTextNode(arr[0]));
//     option.value = arr[1];
//     tag.appendChild(option);
//   });
// };

// window.onload = () => {
//   geteBTCtoUSD();
//   getUSDRate(selectHeader);
//   getDailyRate();
//   getAllCurrencies(selectFrom) 
//   getAllCurrencies(selectTo)

// };
const usd = document.getElementById("USD-rate");
const eur = document.getElementById("EUR-rate");
const gbp = document.getElementById("GBP-rate");
const cny = document.getElementById("CNY-rate");
const aud = document.getElementById("AUD-rate");
const btc = document.getElementById("BTC-rate");
const headerRate = document.getElementById("header-rate");
const selectHeader = document.getElementById("select-header");
const dateInfo = document.getElementById("current-date");
const selectFrom = document.getElementById("select-1");
const selectTo = document.getElementById("select-2");
const input = document.getElementById("input");
const date = document.getElementById("date");
const btnConvert = document.getElementById("btn-convert");
const resultList = document.getElementById("result-list");
const reverseCurr = document.getElementById("reverse-currency");

//????????????/??????????????
const themeIcon = document.getElementById("theme-icon");
themeIcon.src = "/assets/dark-mode.svg";
const theme = window.localStorage.getItem("theme");
if (theme === "light") {
  document.body.classList.add("light");
  themeIcon.src = "/assets/light-mode.svg";
}
themeIcon.onclick = () => {
  document.body.classList.toggle("dark");
  if (theme === "light") {
    localStorage.setItem("theme", "dark");
  } else localStorage.setItem("theme", "light");
  window.location.reload();
};

//----
const dateCurr = new Date().toLocaleDateString();
dateInfo.innerHTML = `
Current rate for ${dateCurr}:
`;
date.value = dateCurr.split(".").reverse().join(".");
date.max = date.value;

date.onchange = () => {
  if (dateCurr.split(".").reverse().join(".") !== date.value) {
    selectFrom.length = 1;
    selectTo.length = 1;

    getAllCurrencies(selectFrom, date.value);
    getAllCurrencies(selectTo, date.value);
  }
};

const axiosInstance = axios.create({
  baseURL: "https://api.exchangerate.host",
  timeout: 3000,
  Headers: {
    "Content-Type": "application/json",
  },
});

const getBTCtoUSD = async () => {
  try {
    const response = await axiosInstance.get("/latest", {
      params: {
        base: "BTC",
        symbol: "USD",
        sources: "crypto",
      },
    });
    const rates = Object.entries(response.date.rates);
    btc.innerHTML = `
        1 BTC = ${Number(rates[0][1].toFixed(2))} USD
        `;
    btc.style.color = "green";
  } catch (error) {
    console.error(error);
  }
};

const getUSDRate = async (parentTag) => {
  try {
    const response = await axiosInstance.get("/latest", {
      params: {
        base: "USD",
        symbols: "UAH,EUR,GBP,BTC,AUD,CNY",
      },
    });
    const rates = Object.entries(response.data.rates);
    appendObtionsToSelectTag(rates, parentTag);
  } catch (error) {
    console.error(error);
  }
};

const getDailyRate = async () => {
  try {
    const response = await axiosInstance.get("/latest", {
      params: {
        base: "UAH",
        symbols: "USD,EUR,GBP,CNY,AUD",
      },
    });
    const rates = Object.value(response.data.rates).map((rates) =>
      (1 / Number(rates)).toFixed(2)
    );
    eur.innerHTML = `1 EUR = ${rates[2]} UAH`;
    usd.innerHTML = `1 USD = ${rates[4]} UAH`;
    eur.innerHTML = `1 GBP = ${rates[3]} UAH`;
  } catch (error) {
    console.error(error);
  }
};

const appendObtionsToSelectTag = (arr2d, tag) => {
  return arr2d.forEach((arr) => {
    const option = document.createElement("option");
    option.appendChild(document.createTextNode(arr[0]));
    option.value = arr[1];
    tag.appendChild(option);
  });
};    

window.onload = () => {
  getBTCtoUSD();
  getUSDRate(selectHeader);
  getDailyRate();
  getAllCurrencies(selectFrom);
  getAllCurrencies(selectTo);
};

selectHeader.onchange = () => {
  headerRate.innerHTML = `1 USD = ${Number(selectHeader.value).toFixed(4)} ${
    selectHeader.options[selectHeader.selectedIndex].text
  }`;
};

let rateFrom;
let rateTo;
let currencyFrom;
let currencyTo;

selectFrom.onchange = () => {
  rateFrom = selectFrom.options[selectFrom.selectedIndex].value;
};

selectTo.onchange = () => {
  rateFrom = selectTo.options[selectTo.selectedIndex].value;
};
