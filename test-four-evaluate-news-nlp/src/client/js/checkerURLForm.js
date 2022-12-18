function formURLChecker(inputText) {
  const regex =
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

  console.log("::: Running checkForName :::", inputText);

  return regex.test(inputText);
}

export { formURLChecker };
