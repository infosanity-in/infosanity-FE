import * as moment from 'moment';

function getFormattedDateTime(dateString) {
    const formattedDate = moment(dateString).format("DD MMM YYYY");
    return formattedDate;
}

export {
    getFormattedDateTime
};