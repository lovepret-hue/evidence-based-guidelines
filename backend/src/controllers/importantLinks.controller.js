import { createImportantLinkSchema   } from "../validators/importantLink.validation.js";
import { updateImportantLinkValidation } from "../validators/ImportantLinkUpdate.validation.js";
import { validationResponse } from "../utils/validationResponse.js"; 
import { successResponse, errorResponse, } from "../utils/errors.js";
import {
createImportantLinkService,
getImportantLinkService,
getImportantLinkByIdService,
deleteImportantLinkService,
updateImportantLinkService } from "../services/importantLinks.service.js";
// Get all Important Links
export const getImportantLinks = async (req, res) => { 
    try {
        const data = await getImportantLinkService();
       return successResponse( res, data, "Important links fetched successfully", 200 );

    } catch (error) {
       console.error("GET IMPORTANT LINKS ERROR:", error); 
       return errorResponse( res, error, "Unable to fetch important links", 500 );
    }
};
export const createImportantLink = async (req, res) => {
    try {
        // Prepare request data
        
        const data = {
            title: req.body.title,
            sub_title: req.body.sub_title,
            icon: req.body.icon,
            external_link: req.body.external_link,
            status: req.body.status,
            // PDF comes from multer
            pdf: req.file
                ? `/uploads/important-links/${req.file.filename}`
                : null,
        };

        // Validate part
        const validation = createImportantLinkSchema.safeParse(data);
       if (!validation.success) {
           return validationResponse(res, validation);
              }

        // Get validated data
        const validatedData = validation.data;

        // Create database part 
        const result = await createImportantLinkService(
            validatedData
        );

        // Generate complete PDF URL
        const fileUrl = result.pdf
            ? `${process.env.APP_URL}${result.pdf}`
            : null;

        // Success response
        return successResponse(res, {
            ...result,
            pdf: fileUrl,
        }, "Important link created successfully", 201);

    } catch (error) {
        console.error(
            "Create Important Link Error:",
            error
        );
        return errorResponse( res, error, "Failed to create Important Link", 500 );
    }
};
export const getImportantLinkById =async(req,res)=>{
    try{
        const{id}=req.params;
        const data=await getImportantLinkByIdService(id);
        if(!data){
            return errorResponse(res,null,"Important Link not found",404);
        }  if(!data){
            return errorResponse(res,null,"Important Link not found",404);
        }
        return successResponse(res,data,"Important Link fetched successfully",200);

    }catch(error){
        console.error("Get Important Link By ID Error:",error);
        return errorResponse(res,error,"Failed to fetch Important Link by ID",500);
    }
};

export const deleteImportantLink=async(req,res)=>{
        try{
            const{id}=req.params;
            const data=await deleteImportantLinkService(id);
              if(!data){
            return errorResponse(res,null,"Important Link not found",404);
        }
            return successResponse(res,data,"Important Link deleted successfully",200);
        }catch(error){
            console.error("Delete Important Link Error:",error);
            return errorResponse(res,error,"Failed to delete Important Link",500);
        }

   
        
};


export const updateImportantLink = async (req, res) => {
  try {
    const { id } = req.params;

    // Prepare request data
     const data = {
            title: req.body.title,
            sub_title: req.body.sub_title,
            icon: req.body.icon,
            external_link: req.body.external_link,
            status: req.body.status,
            // PDF comes from multer
            pdf: req.file
                ? `/uploads/important-links/${req.file.filename}`
                : null,
        };

    
    const validation = updateImportantLinkValidation.safeParse(data);
    console.log("Validation Result g:", validation);

    if (!validation.success) {
      return validationResponse(res, validation);
    }
    console.log("Validated  RG GR:", validation.data);

    // Update database
    const result = await updateImportantLinkService(
      Number(id),
      validation.data
    );

    // Generate complete PDF URL
    const fileUrl = result.pdf
      ? `${process.env.APP_URL}${result.pdf}`
      : null;

    // Success response
    return successResponse(
      res,
      {
        ...result,
        pdf: fileUrl,
      },
      "Important link updated successfully",
      200
    );

  } catch (error) {
    console.error(
      "Update Important Link Error:",
      error
    );

    return errorResponse(
      res,
      error,
      "Failed to update Important Link"
    );
  }
};


