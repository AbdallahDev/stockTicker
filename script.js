import { stocks } from "./stockData.js";

const containerEl = document.getElementById("container");

renderApp();
// setInterval(renderApp, 5000);

function renderApp() {
  let dateTimeHtml = renderDateTime();
  let stockQoutesHtml = renderStockQuotes();

  containerEl.innerHTML = dateTimeHtml + stockQoutesHtml;
}

function renderDateTime() {
  const now = new Date();
  // console.log(now.toLocaleString())

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
    let statusClass = "neutral";
    let sign = "";

    if (stock.change_percent > 0) {
      statusClass = "up";
      sign = "+";
    } else if (stock.change_percent < 0) {
      statusClass = "down";
    }

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
        <div class="rightData">
          <div class="priceAndCurrency">
            <div class="price">
              ${stock.price.toFixed(2)}
            </div>
            <div class="currency">
              ${stock.currency}
            </div>
          </div>
          <div class="changePercentAndChangePrice">
            <div class="changePrice">
              ${stock.change_price}
            </div>
            <div class="changePercent">
              ${stock.change_percent}
            </div>
          </div>
        </div>
    </div>
    `;
    containerDOM += stockDOM;
  });

  return containerDOM;
}
