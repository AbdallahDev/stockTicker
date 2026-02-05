import { stocks } from "./stockData.js";

const containerEl = document.getElementById("container");

renderApp();
setInterval(renderApp, 5000);

function renderApp() {
  let dateTimeHtml = renderDateTime();
  let stockQoutesHtml = renderStockQuotes();

  containerEl.innerHTML = dateTimeHtml + stockQoutesHtml;
}

function renderDateTime() {
  const now = new Date();

  const options = {
    timeZone: "Asia/Amman", // Explicitly set to Jordan
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  const jordanTime = now.toLocaleString("en-JO", options);
  const dateTimeEl = `<div id="dateTime">${jordanTime}</div>`;
  return dateTimeEl;
}

function renderStockQuotes() {
  let containerDOM = "";

  stocks.forEach((stock) => {
    const stockDOM = `
    <div class="stockQoute">
        <div class="leftData">
            <img class="logo" src="${stock.logo_url}" alt="${stock.security_name} logo">
            <div class="nameAndSymbol">
                <div class="securityName">
                    ${stock.security_name}
                </div>
                <div class="tickerSymbol">
                    ${stock.ticker_symbol}
                </div>
            </div>
        </div>
    </div>
    `;
    containerDOM += stockDOM;
  });

  return containerDOM;
}
