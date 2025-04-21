export const sanitizeContent = (content) =>
  content
    // .replace(/ +/, " ")
    .replaceAll("&nbsp", " ")
    .replaceAll("&amp;nbsp; ", " ")
    .replaceAll("<div><br></div>", "\n")
    .replaceAll("<div>", "\n")
    .replaceAll("</div>", "");
