const query = require('./database/query').query;
const match_jobs = require('./functions/match');
const express = require('express')
const app = express()

app.get('/', async (req, res) => {
    let jobs = await query("select job_id, group_concat(`name` SEPARATOR ', ') as `names` from tech_award.jobs_keys group by job_id", [])
    let user = await query("select distinct user_id, group_concat(`name`  SEPARATOR ', ') as `names` from user_keys where user_id = ? group by user_id", 
        [1]);
    user = user[0];
    let user_job_names = user.names.toLowerCase();
    user_job_names = user_job_names.split(',');

    let recommendation = [];

    for (let i = 0; i < jobs.length; i++) {
        const job = jobs[i];
        let job_names = job.names.toLowerCase();
        job_names = job_names.split(',');
        
        if(job.job_id == 3757){
        let result = match_jobs(user_job_names, job_names, 0.1);
        
        let {matching_percentage, candidate_job, matched, match, category} = result;

        console.log(result);
        
        if(category == 'Low') recommendation.push(result);
        }
    }

    console.log(recommendation.length);
    res.json(recommendation)
});


app.listen(3000, ()=> console.log('started at http://localhost:3000'))
