module.exports = (matched) => {
    // variable for matched percent greater than 0
    let matched_items = 0.0

    matched.forEach(element => {
        matched_items += element > 0.7
    });

    // define the percent of how many jobs are matching
    let match_percent = matched_items / matched.length;

    return {matched_items, match_percent};
    // return {matched_items, match_percent};
}