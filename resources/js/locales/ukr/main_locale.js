const main_locale = 'ukr'

export default {
    projectName: "Wood Line Factory",
    app: require(`../../locales/${main_locale}/app.json`),
    navMenu: require(`../../locales/${main_locale}/nav-menu.json`),
    auth: require(`../../locales/${main_locale}/auth.json`),
    validation: require(`../../locales/${main_locale}/validation.json`),
    current_lang: require(`../../locales/${main_locale}/locale.json`),
    common:{
        templateDic: require(`../../locales/${main_locale}/common/template-dic.json`),
    },
    adminPanel:{
        adminPanelMain: require(`../../locales/${main_locale}/AdminPanelMain/admin-panel-main.json`),
        userManagement: require(`../../locales/${main_locale}/UserManagement/user-management.json`),
        ordersCallBackPanel: require(`../../locales/${main_locale}/OrdersCallBackPanel/orders-call-back-panel.json`),
        emailSenderPanel: require(`../../locales/${main_locale}/EmailSenderPanel/email-sender-panel.json`),
        productManagement: require(`../../locales/${main_locale}/ProductManagement/product-management.json`),
        textileManagement: require(`../../locales/${main_locale}/TextileManagement/textile-management.json`),
        adminHomePageCarousel: require(`../../locales/${main_locale}/AdminHomePageCarousel/admin-home-page-carousel.json`),
    },
    pages:{
        aboutAs: require(`../../locales/${main_locale}/AboutAs/about-as.json`),
        wholesaleCustomers: require(`../../locales/${main_locale}/WholesaleCustomers/wholesale-customers.json`),
        homePage: require(`../../locales/${main_locale}/HomePage/home-page.json`),
    }
}
