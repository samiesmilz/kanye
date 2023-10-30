const $quote = $("#qoute");
const $nextQuestBtn = $("#quest-btn");

async function getQuote() {
  console.debug("getQuote");
  const response = await axios.get("https://api.kanye.rest");
  return response.data.quote;
}

async function nextQuest() {
  console.debug("nextQuest");
  const newQuote = await getQuote();
  $quote.text(newQuote);
}
$nextQuestBtn.on("click", nextQuest);

async function autoQuotes() {
  setInterval(async function () {
    const newQuote = await getQuote();
    $quote.text(newQuote);
  }, 10000);
}

$(document).ready(function () {
  nextQuest();
  autoQuotes();
});
