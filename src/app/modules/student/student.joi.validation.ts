import Joi from 'joi';
// Helper schema for UserName
const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .regex(/^[A-Z][a-z]*$/)
    .messages({
      'string.pattern.base': '{#label} is not capitalize format',
      'string.max': 'First name can not be more than 20 characters',
      'any.required': 'First Name is required',
    })
    .required(),
  middleName: Joi.string().allow(null, ''),
  lastName: Joi.string().required().messages({
    'any.required': 'Last Name is required',
  }),
});

// Helper schema for Guardian
const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    'any.required': 'Father Name is required',
  }),
  fatherOccupation: Joi.string().required().messages({
    'any.required': 'Father Occupation is required',
  }),
  fatherContactNo: Joi.string().required().messages({
    'any.required': 'Father Contact Number is required',
  }),
  motherName: Joi.string().required().messages({
    'any.required': 'Mother Name is required',
  }),
  motherOccupation: Joi.string().required().messages({
    'any.required': 'Mother Occupation is required',
  }),
  motherContactNo: Joi.string().required().messages({
    'any.required': 'Mother Contact Number is required',
  }),
});

// Helper schema for LocalGuardian
const localguardianValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': 'Local Guardian Name is required',
  }),
  occupation: Joi.string().required().messages({
    'any.required': 'Local Guardian Occupation is required',
  }),
  contactNo: Joi.string().required().messages({
    'any.required': 'Local Guardian Contact Number is required',
  }),
  address: Joi.string().required().messages({
    'any.required': 'Local Guardian Address is required',
  }),
});

// Main schema for Student
const studentValidationSchema = Joi.object({
  id: Joi.string().required(),
  name: userNameValidationSchema.required().messages({
    'any.required': 'Name is required',
  }),
  email: Joi.string().email().required().messages({
    'string.email': '{#label} is not a valid email address!',
    'any.required': 'Email is required',
  }),
  gender: Joi.string().valid('Male', 'Female', 'other').required().messages({
    'any.only': '{#label} is not supported',
    'any.required': 'Gender is required',
  }),
  dateOfBirth: Joi.string().required().messages({
    'any.required': 'Date of Birth is required',
  }),
  contactNo: Joi.string().required().messages({
    'any.required': 'Contact Number is required',
  }),
  emergencyContactNo: Joi.string().required().messages({
    'any.required': 'Emergency Contact Number is required',
  }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-')
    .messages({
      'any.only': '{#label} is not a valid blood group',
    }),
  presentAddress: Joi.string().required().messages({
    'any.required': 'Present Address is required',
  }),
  permanentAddress: Joi.string().required().messages({
    'any.required': 'Permanent Address is required',
  }),
  guardian: guardianValidationSchema.required().messages({
    'any.required': 'Guardian information is required',
  }),
  localGuardian: localguardianValidationSchema.required().messages({
    'any.required': 'Local Guardian information is required',
  }),
  profileImg: Joi.string(),

  isActive: Joi.string()
    .valid('active', 'inActive')
    .default('active')
    .messages({
      'any.only': '{#label} is not a valid status',
    }),
});
//
export default studentValidationSchema;
