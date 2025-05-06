function formatMessage(message, maxLength) {
  return message.length <= maxLength
    ? message
    : message.slice(0, maxLength) + "...";
}