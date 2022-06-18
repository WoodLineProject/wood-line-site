const main_locale = 'ukr';

const locale = {
    projectName: "Wood line",
    current_lang: "Язык: {locale}",
    app: require(`../../locales/${main_locale}/app.json`),
    //menu: require(`@/locales/${main_locale}/menu.json`),
    pages: {
        //test: require(`@/locales/${main_locale}/pages/test/test.json`),
    }
}
module.exports = locale;
