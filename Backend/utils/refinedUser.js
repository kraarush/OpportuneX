const refinedUser = (user) => {
    if (!user) return null;

    const userObject = user.toObject();

    delete userObject.password;

    return {
        _id: userObject._id,
        fullname: userObject.fullname,
        email: userObject.email,
        phoneNumber: userObject.phoneNumber,
        role: userObject.role,
        profile: {
            bio: userObject.profile?.bio,
            skills: userObject.profile?.skills,
            resume: userObject.profile?.resume,
            resumeOriginalName: userObject.profile?.resumeOriginalName,
            company: userObject.profile?.company,
            profilePhoto: userObject.profile?.profilePhoto
        },
        createdAt: userObject.createdAt,
        updatedAt: userObject.updatedAt
    };
};

export default refinedUser;