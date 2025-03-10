import Job from "../models/job.model.js";

export const createJob = async (req, res) => {
    try {
        const { title, description, salary, location, requirements, experience, jobType, position, companyId } = req.body;

        if (!title || !description || !salary || !location || !requirements || !experience || !jobType || !position || !companyId) {
            return res.status(400).json({
                message: "Missing some fields",
                success: false
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
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error creating job, " + error.message,
            success: false
        });
    }
}