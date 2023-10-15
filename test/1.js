const {translate} = require('@vitalets/google-translate-api');
const { query } = require("../database/query");

(async()=>{
    let jobs = await query('select * from jobs_keys order by name desc');

    const {text} = await translate(jobs[0].name, {to: 'en'})
    console.log(text);

    // let i = 0;
    // let intervalID = setInterval(async() => {
    //     console.log(jobs[i].name);
    //     const {text} = translate(jobs[i].name, { to: 'en'});
    //     console.log(text);
        
    //     // await query('update jobs_keys set name_en = ? where id = ?',
    //     //     [text, jobs[i].id ])

    //     i++
    //     if(i == jobs.length) clearInterval(intervalID)
    // }, 3000);

})();