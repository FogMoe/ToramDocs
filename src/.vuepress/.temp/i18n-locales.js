export const translationGuides = {"/": "null"};
    export const locales = {"/": {lang: "en-US",untranslated: {title: "Notice",content: (linkRenderer, translationGuide) => `This page has not yet been translated${translationGuide ? `, see how you can help ${linkRenderer("here", translationGuide)}` : ""}.`},outdated: {title: "Warning",content: (linkRenderer, sourceUpdateTime, translationUpdateTime, sourceLink) => {
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      const getDateString = (timestamp) => {
        const date = new Date(timestamp);
        return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
      };
      return `This translation was modified on ${getDateString(
        translationUpdateTime
      )} and an updated version (${getDateString(
        sourceUpdateTime
      )}) is available on the source page. ${linkRenderer(
        "View the original page",
        sourceLink
      )}`;
    }}}};