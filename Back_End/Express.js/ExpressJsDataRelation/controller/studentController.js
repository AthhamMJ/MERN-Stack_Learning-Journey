import student from "../model/studentModel.js";

export const createStudent = async (req, res) => {
  try {
    const { name, email, registrationNumber, course } = req.body;

    const existRegno = await student.findOne({ registrationNumber });

    if (existRegno) {
      return res.status(409).json({
        message: "User Already Exists",
      });
    }

    const studentData = new student(req.body);

    const newStudent = await studentData.save();

    return res.status(201).json({
      message: "Student Created Successfully",
      student: newStudent,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

// let us to getall Data

export const getStudents = async (req, res) => {
  try {
    const students = await student.find();

    return res.status(200).json(students);
  
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server.Error",
      error: error.message,
    });
  
  }

};

// get the data by id

export const getstudent = async (req, res) => {
  try {
    const {registrationNumber} = req.params
    const getStudent = await student.findOne({
      registrationNumber,
    });

    if (!getStudent) {
      return res.status(404).json({
        message: "Student not Found",
      });
    }

    return res.status(200).json(getStudent);
  
  
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const {registrationNumber} = req.params

    const updatedStudent = await student.findByIdAndUpdate(
      { registrationNumber },
      req.body,
      { new: true },
    );

    if (!updatedStudent) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    return res.status(200).json({
      message: "Student Created Successfully",
      student: updatedStudent,
    });
  
  
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const {registrationNumber} = req.params
    const deletedStudent = await student.findByIdAndDelete({registrationNumber});

    if (!deletedStudent) {
      res.status(404).json({
        message: "Student not Found bro",
      });
    }

    return res.status(200).json({
      message: "Student Created Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error",
      error: error.message,
    });
  }
};
