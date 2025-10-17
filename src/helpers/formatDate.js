function FormatDate(dateInput) {

    const date = new Date(dateInput);
    const longOptions = {
        day: "numeric",
        month: "long",
        year: "numeric",
    };

    return date.toLocaleDateString('nl-NL', longOptions);
}

export default FormatDate;