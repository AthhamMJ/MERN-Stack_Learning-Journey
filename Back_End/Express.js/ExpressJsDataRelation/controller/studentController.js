import students from "../model/studentModel.js";

export const createStudent = async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, registrationNumber, course } = req.body;

    const existRegno = await students.findOne({ registrationNumber });

    if (existRegno) {
      return res.status(409).json({
        message: "User Already Exists",
      });
    }

    const studentData = new students(req.body);

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
    const studentData = await students.find();

    return res.status(200).json({
      message: "Here is the Student Data",
      Student: studentData
    });
  
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server.Error",
      error: error.message,
    });
  
  }

};

// get the data by id

export const getStudent = async (req, res) => {
  try {
    const {registrationNumber} = req.params
    const gotStudent = await students.findOne({
      registrationNumber,
    });

    if (!gotStudent) {
      return res.status(404).json({
        message: "Student not Found",
      });
    }

    return res.status(200).json(gotStudent);
  
  
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

    const updatedStudent = await students.findOneAndUpdate(
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
    const deletedStudent = await students.findByIdAndDelete({registrationNumber});

    if (!deletedStudent) {
      return res.status(404).json({
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
