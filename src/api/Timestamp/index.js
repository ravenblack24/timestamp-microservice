    /**
     * Pass current date to parseTimeStamp method
     * 
     * @returns {Object} Object containing unix and utc key value pairs
     */
    const currentTimeStamp = () => {
        const date = new Date();
        return parseTimeStamp(date);
    }

    /**
     * Process user input and return Object
     * 
     * @param {String} date_string the date parameter or unix timestamp
     * 
     * @returns {Object} Object containing unix and utc key value pairs or error key value pair
     */
    const processTimeStampRequest = (date_string) => {

        if(/^\d{5,}/.test(date_string)) {
            return {"unix": date_string, "utc": new Date(parseInt(date_string)).toUTCString()};
        }

        const date = new Date(date_string);
        const dateInMilliseconds = date.getTime();

        if (!dateInMilliseconds) {
            return {"error": "Invalid Date"};
        }

        return parseTimeStamp(date);
    }

    /**
     * Return Object populated from date parameter
     * 
     * @param {Date} date the date parameter
     * 
     * @returns {Object} Object containing unix and utc key value pairs
     */
    const parseTimeStamp = (date) => {
        return {"unix": date.getTime(), "utc": date.toUTCString()};
    }

    module.exports = {currentTimeStamp, processTimeStampRequest, parseTimeStamp}