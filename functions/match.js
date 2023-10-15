let similarity = require('sentence-similarity')
let similarityScore = require('similarity-score')
const match_category = require('./match_category');

module.exports = (user_jobs, candidate_job, threshold) => {
    let winkOpts = { f: similarityScore.winklerMetaphone, options : {threshold} };

    // let {matched} = similarity(candidate_job,user_jobs,winkOpts);
    let {score,exact, order,size, matched} = similarity(candidate_job,user_jobs, winkOpts);
   
    const match = score*size;

    let check = {}; let res = 0;
    for (let i = 0; i < matched.length; i++) {
        const match_score = matched[i];
        const match_label = candidate_job[i];
        
        // check[match_label] = match_score * size;
        if(match_score > 0) {check[match_label] = 1; res ++}
        else check[match_label] = 0;
    }
    // let {match_percent, matched_items} = match_percentage(matchScore);
    // let match = score/matched_items;

    // final match
    let {matching_percentage, category} = match_category(res/matched.length * 100);

    // return matchScore
    return {score, order,size, exact, check, user_jobs, matched, matching_percentage, match, category}
}