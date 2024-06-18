import { z } from 'zod';

// Define Zod schema for UserName
const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: 'First Name is required' })
    .max(20, { message: 'First name cannot be more than 20 characters' })
    .regex(/^[A-Z][a-z]*$/, { message: 'First Name must be capitalized' }),
  middleName: z.string().optional(),
  lastName: z.string().min(1, { message: 'Last Name is required' }),
});

// Define Zod schema for Guardian
const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, { message: 'Father Name is required' }),
  fatherOccupation: z
    .string()
    .min(1, { message: 'Father Occupation is required' }),
  fatherContactNo: z
    .string()
    .min(1, { message: 'Father Contact Number is required' }),
  motherName: z.string().min(1, { message: 'Mother Name is required' }),
  motherOccupation: z
    .string()
    .min(1, { message: 'Mother Occupation is required' }),
  motherContactNo: z
    .string()
    .min(1, { message: 'Mother Contact Number is required' }),
});

// Define Zod schema for LocalGuardian
const localGuardianValidationSchema = z.object({
  name: z.string().min(1, { message: 'Local Guardian Name is required' }),
  occupation: z
    .string()
    .min(1, { message: 'Local Guardian Occupation is required' }),
  contactNo: z
    .string()
    .min(1, { message: 'Local Guardian Contact Number is required' }),
  address: z.string().min(1, { message: 'Local Guardian Address is required' }),
});

// Define Zod schema for Student
const createStudentValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20, { message: 'Password is required' }),
    student: z.object({
      name: userNameValidationSchema,
      email: z
        .string()
        .min(1, { message: 'Email is required' })
        .email({ message: 'Invalid email address' }),
      gender: z.enum(['Male', 'Female', 'other'], {
        errorMap: () => ({ message: 'Gender is not supported' }),
      }),
      dateOfBirth: z.string().optional(),
      contactNo: z.string().min(1, { message: 'Contact Number is required' }),
      emergencyContactNo: z
        .string()
        .min(1, { message: 'Emergency Contact Number is required' }),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'])
        .optional(),
      presentAddress: z
        .string()
        .min(1, { message: 'Present Address is required' }),
      permanentAddress: z
        .string()
        .min(1, { message: 'Permanent Address is required' }),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      profileImg: z.string().optional(),
      admissionSemester: z.string(),
      academicDepartment: z.string(),
    }),
  }),
});

// Export the Zod schema
export const studentValidations = {
  createStudentValidationSchema,
};
