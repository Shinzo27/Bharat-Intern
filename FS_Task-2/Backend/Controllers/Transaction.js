import Transaction from "../Models/Transaction.js";
import User from "../Models/Users.js";

export const getExpenses = async (req, res) => {
  const user = req.user;

  const userId = await User.findOne({
    email: user.email,
  });

  const expenses = await Transaction.find({
    userId: userId._id,
    type: "Expense",
  });

  if (expenses) {
    return res.status(200).json({
      expenses: expenses,
    });
  } else {
    return res.status(200).json({
      message: "No expenses found!",
    });
  }
};

export const getIncome = async (req, res) => {
  const user = req.user;

  const userId = await User.findOne({
    email: user.email,
  });

  const income = await Transaction.find({
    userId: userId._id,
    type: "Income",
  });

  if (income) {
    return res.status(200).json({
      incomes: income,
    });
  } else {
    return res.status(200).json({
      message: "No income found!",
    });
  }
};

export const getTotalIncome = async (req, res) => {
  const user = req.user;

  const totalIncome = await User.findOne({
    email: user.email,
  });

  return res.status(200).json({
    totalIncome: totalIncome.totalIncome,
  });
};

export const addIncome = async (req, res) => {
  const userId = req.user;
  const { amount, category, description, date } = req.body;

  const user = await User.findOne({
    email: userId.email,
  });

  const transaction = await Transaction.create({
    userId: user._id,
    type: "Income",
    amount: Number(amount),
    category,
    description,
    date,
  });

  if (transaction) {
    const increment = await User.findOneAndUpdate(
      { _id: user._id },
      { $inc: { totalIncome: Number(amount) } }
    );

    if (increment) {
      return res.status(200).json({
        success: true,
        message: "Income added successfully!",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Something went wrong!",
      });
    }
  } else {
    return res.status(400).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

export const addExpense = async (req, res) => {
  const userId = req.user;
  const { amount, category, description, date } = req.body;

  const user = await User.findOne({
    email: userId.email,
  });

  const totalIncome = user.totalIncome

  if(amount > totalIncome) return res.status(200).json({
      message: "Not enough income!"
  })

  const transaction = await Transaction.create({
    userId: user._id,
    type: "Expense",
    amount: Number(amount),
    category,
    description,
    date,
  });

  if (transaction) {
    const decrement = await User.findOneAndUpdate(
      { _id: user._id },
      { $inc: { totalIncome: -Number(amount) } }
    );

    if (decrement) {
      return res.status(200).json({
        success: true,
        message: "Expense added successfully!",
      });
    } else {
      return res.status(200).json({
        success: false,
        message: "Something went wrong!",
      });
    }
  } else {
    return res.status(200).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};