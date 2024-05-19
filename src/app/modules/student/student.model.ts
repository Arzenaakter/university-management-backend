import { Schema, model, connect } from 'mongoose';
import {
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface';

const studentNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
    trim: true, // remove space
    maxlength: [20, 'First name can not be more than 20 '],
    validate: {
      validator: function (value: String) {
        const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1); // Arzena
        return firstNameStr === value;
      },
      message: '{VALUE} is not capitalize format',
    },
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, 'Last Name is required'],
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: [true, 'Father Name is required'],
  },
  fatherOccupation: {
    type: String,
    required: [true, 'Father Occupation is required'],
  },
  fatherContactNo: {
    type: String,
    required: [true, 'Father Contact Number is required'],
  },
  motherName: {
    type: String,
    required: [true, 'Mother Name is required'],
  },
  motherOccupation: {
    type: String,
    required: [true, 'Mother Occupation is required'],
  },
  motherContactNo: {
    type: String,
    required: [true, 'Mother Contact Number is required'],
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String, required: [true, 'Local Guardian Name is required'] },
  occupation: {
    type: String,
    required: [true, 'Local Guardian Occupation is required'],
  },
  contactNo: {
    type: String,
    required: [true, 'Local Guardian Contact Number is required'],
  },
  address: {
    type: String,
    required: [true, 'Local Guardian Address is required'],
  },
});

const studentSchema = new Schema<Student>({
  id: {
    type: String,
    required: [true, 'Student ID is required'],
    unique: true,
  },
  name: {
    type: studentNameSchema,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    // validate: {
    //   validator: function (v: string) {
    //     return /^\S+@\S+\.\S+$/.test(v);
    //   },
    //   message: (props) => `${props.value} is not a valid email address!`,
    // },
  },
  gender: {
    type: String,
    enum: {
      values: ['Male', 'Female', 'other'],
      message: '{VALUE} is not supported',
    },
    required: [true, 'Gender is required'],
  },
  dateOfBirth: {
    type: String,
    required: [true, 'Date of Birth is required'],
  },
  contactNo: {
    type: String,
    required: [true, 'Contact Number is required'],
  },
  emergencyContactNo: {
    type: String,
    required: [true, 'Emergency Contact Number is required'],
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'],
      message: '{VALUE} is not a valid blood group',
    },
  },
  presentAddress: {
    type: String,
    required: [true, 'Present Address is required'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent Address is required'],
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian information is required'],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local Guardian information is required'],
  },
  profileImg: {
    type: String,
  },
  isActive: {
    type: String,
    enum: {
      values: ['active', 'inActive'],
      message: '{VALUE} is not a valid status',
    },
    default: 'active',
  },
});

export const studentModel = model<Student>('Student', studentSchema);
