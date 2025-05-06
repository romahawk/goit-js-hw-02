function checkForSpam(message) {
  const lower = message.toLowerCase();
  return lower.includes("spam") || lower.includes("sale");
}