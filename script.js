import { stocks } from "./stockData.js";

const containerEl = document.getElementById("container");
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
containerEl.innerHTML = containerDOM;
