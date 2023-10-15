module.exports = (matchScore) => {
    if(isNaN(matchScore)) return {category:"Not-maching", matching_percentage:0}

    if(matchScore >= 0 && matchScore < 30) return {category:"Low", matching_percentage:matchScore}
    if(matchScore >= 30 && matchScore < 50) return {category:"Upper low", matching_percentage:matchScore}
    if(matchScore >= 50 && matchScore < 70) return {category:"Good", matching_percentage:matchScore}
    if(matchScore >= 70 && matchScore < 90) return {category:"Better", matching_percentage:matchScore}
    if(matchScore >= 90 && matchScore < 101) return {category:"Great", matching_percentage:matchScore}

    return {category:"Not found", matching_percentage:matchScore}
}