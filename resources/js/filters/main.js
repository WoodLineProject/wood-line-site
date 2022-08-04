import Vue from 'vue'
import moment from 'moment';

Vue.filter('currencyDecimal', value => value.toFixed(2));
Vue.filter('meterToKilometer', value => value / 1000);
Vue.filter('secondsToMinutes', value => value / 60);
Vue.filter('numberBit', value => value.toLocaleString());
Vue.filter('moneyFormat', amount => {
    let decimalCount = 2;
    let decimal = ".";
    let thousands = " ";
    return formatMoney(amount, decimalCount, decimal, thousands);
});
Vue.filter('currencySpaces', value => {
    if (!value && typeof value !== 'number' && typeof value !== 'string')
        return value;
    var str = value.toString().split('. ');
    if (str[0].length >= 5) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    }
    if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
});
Vue.filter('hidePanValue', value => {
    if (value!='') {
        return value.substring(0,4) +'****'+ value.substring(12,16);
    }
    return '';
});

Vue.filter('timestampToPeopDateTime', value => {
    if (value > 0)
        return  moment(value * 1000).format('DD.MM.YYYY HH:mm');
    return '';
});

Vue.filter('timestampMongoToPeopDateTime', value => {
    if (value > 0)
        return  moment(value * 1).format('DD.MM.YYYY HH:mm');
    return '';
});

Vue.filter('timestampToPeopDate', value => {
    if (value > 0)
        return  moment(value * 1000).format('DD.MM.YYYY');
    return '';
});

Vue.filter('dateToPeopDate', value => {
    let date = moment(value);

    if (
        value !== ''
        && value !== undefined
        && date.isValid()
    )
        return  moment(value).format('DD.MM.YYYY');
    return '';
});
Vue.filter('dateToPeopDateTime', value => {
    let date = moment(value);

    if (
        value !== ''
        && value !== undefined
        && date.isValid()
    )
        return  moment(value).format('DD.MM.YYYY HH:mm');
    return '';
});

Vue.filter('UPPERCASE', value => {
     if (value && value != '')
        return value.toUpperCase();
    return value;
});

Vue.filter('HIDE_BARCODE', value => {
    return value;
    //https://itsm.privatbank.ua/predmine/km_web/issue/1287636.htm#edit_block #3
    value = value + '';
    if (value && value != '' && value.length > 10) {
        let len = value.length;
        return value.substr(0, 4) + HIDE_SYMBOL.repeat( len - 8) + value.substr(len - 4);
    } else
        return value;
});

Vue.filter('percent', value => {
    return `${value} %`;
});

function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
        console.log(e)
    }
};
