import Company from "../models/company.model.js";
import Job from "../models/job.model.js";


// for admin
export const createJob = async (req, res) => {
    try {
        const { title, description, salary, location, requirements, experience, jobType, position, companyId } = req.body;

        if (!title || !description || !salary || !location || !requirements || !experience || !jobType || !position || !companyId) {
            return res.status(400).json({
                message: "Missing some fields",
                success: false
            });
        }

        // checking if the recruiter who is creating a job is actually the owner of the passed companyId
        const company = await Company.findById(companyId);

        if (!company) {
            return res.status(404).json({
                message: "Company not found",
                success: false
            });
        }        

        if(company.userId.toString() !== req.id.toString()){
            return res.status(403).json({
                message: "Only the owner of the company can create Job",
                success: false,
            });
        }

        const job = await Job.create({
            title,
            description,
            salary,
            location,
            requirements: requirements.split(','),
            experienceLevel: experience,
            jobType,
            position,
            company: companyId,
            created_by: req.id,
        });

        return res.status(200).json({
            message: "Job created successfully",
            success: true,
            job,
        });
    } 
    catch (error) {
        return res.status(500).json({
            message: "Internal server error creating job, " + error.message,
            success: false
        });
    }
}

// for students
export const getAllJobs = async(req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query ={
            $or:[
                {title: {$regex:keyword, $options:'i'}},
                {description: {$regex:keyword, $options:'i'}}
            ]
        };

        const jobs = await Job.find(query).populate({
            path: "company"
        }).sort({createdAt: -1});

        if(jobs.length === 0){
            return res.status(404).json({
                message: "No jobs found",
                success: false
            });
        }

        return res.status(200).json({
            jobs,
            success: true
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error getting all jobs, " + error.message,
            success: false
        });
    }
}

// for students
export const getJobById = async (req, res) => {
    try {
        const jobId = req.params.id;

        if(!jobId){
            return res.status(404).json({
                message: "No job id found",
                success: false
            });
        }

        const job = await Job.findOne({_id: jobId}).populate('applications').populate('company');

        if(!job){
            return res.status(404).json({
                message: "No jobs found with given id",
                success: false,
            });
        }

        return res.status(200).json({
            job,
            success: true,
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error fetching job with id, " + error.message,
            success: false
        });
    }
}


// for admin
export const getAdminJobs = async (req, res) => {
    try {
        const userId = req.id;

        const job = await Job.find({created_by: userId});

        if(job.length === 0){
            return res.status(404).json({
                message: "No jobs found",
                success: false,
            });
        }

        return res.status(200).json({job, success: true});
        
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error fetching jobs for admin, " + error.message,
            success: false
        });
    }
}