export const validationResponse = (res, validation) => {
    return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: Object.fromEntries(
            Object.entries(
                validation.error.flatten().fieldErrors
            ).map(([key, value]) => [key, value[0]])
        ),
    });
};