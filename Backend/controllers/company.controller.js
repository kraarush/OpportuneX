import Company from '../models/company.model.js';

export const registerCompany = async (req,res) => {
    try {
        const { companyName } = req.body;

        if (!companyName) {
            return res.status(400).json({
                message: "Company name is required",
                success: false
            });
        }

        const company = await Company.findOne({name: companyName});
        if(company){
            return res.status(400).json({
                message: "company already exists",
                success: false
            });
        }

        await Company.create({
            name: companyName,
            userId: req.id,     // middleware Auth
        });

        return res.status(201).json({
            message: "Company registered Successfully",
            success: true
        });
        
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error, " + error.message,
            success: false,
        });
    }
}


export const getCompanies = async (req, res) => {
    try {
        const companies = await Company.find({userId: req.id});

        if(companies.length === 0){
            return res.status(404).json({
                message: "No companies found for this recruiter",
                success: false,
            });
        }

        return res.status(200).json({
            message: "Companies retrieved successfully",
            companies,
            success: true
        });        

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error, " + error.message,
            success: false,
        });
    }
}


export const getCompanyById = async (req, res) => {
    try {
        const companyId = req.params.id;
        const company = await Company.findById(companyId);

        if(!company){
            return res.status(404).json({
                message: "No company found with given id",
                success: false
            });
        }

        return res.status(200).json({
            message: "company found",
            success: true,
            company
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error, " + error.message,
            success: false,
        });
    }
}

export const updateCompany = async (req,res) => {
    try {

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error, " + error.message,
            success: false,
        });
    }    
}
