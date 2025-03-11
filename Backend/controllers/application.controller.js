import Application from "../models/application.model.js";
import Job from "../models/job.model.js";


export const applyJob = async (req, res) => {               // student
    try {
        const userId = req.id;
        const jobId = req.params.id;

        if (!jobId) {
            return res.status(404).json({
                message: "Job Id not found",
                success: false,
            });
        }

        // checking if the job exists in the jobs collection
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({
                message: "Job not found",
                success: false,
            });
        }

        // checking if the user already applied for the job
        const isAlreadyApplied = await Application.findOne({ job: jobId, applicant: userId });
        if (isAlreadyApplied) {
            return res.status(409).json({
                message: "Already applied for job",
                success: false,
            });
        }

        const newApplication = await Application.create({
            job: jobId,
            applicant: userId
        });

        // pushing the new applications into the applications array of the job model
        job.applications.push(newApplication._id);
        await job.save();

        return res.status(201).json({
            message: "Application applied successfully",
            success: true,
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error applying for job, " + error.message,
            success: false,
        });
    }
}

// can be more secured by not sending the populated results to the user with sensitve data -- will work on that later
export const getAppliedJobs = async (req, res) => {             // student
    try {
        const userId = req.id;
        
        const jobs = await Application.find({applicant: userId}).populate({
            path:'job',
            populate: {
                path: 'company',
            }
        }).sort({createdAt: -1});

        if(jobs.length === 0){
            return res.status(404).json({
                message: "No job applications found",
                success: false,
            });
        }

        return res.status(200).json({
            jobs,
            success: true,
        });

    }
    catch (error) {
        return res.status(500).json({
            message: "Internal server error getting applied jobs, " + error.message,
            success: false,
        });
    }
};


export const getApplicants = async (req, res) => {              // admin
    try {
        
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error getting applicants, " + error.message,
            success: false,
        });
    }
}


export const updateStatus = async (req, res) => {               // admin
    try {

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error updating status of applicant, " + error.message,
            success: false,
        });
    }
}