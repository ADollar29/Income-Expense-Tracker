const Account = require("../../model/Account");
const Transaction = require("../../model/Transaction");
const User = require("../../model/User");
const { AppErr } = require("../../utils/appErr");
//create
const createTransactionCtrl = async (req, res, next) => {
  const {name, amount, notes, transactionType, account, category} = req.body;
    try {
      // 1.) Find user
      const userFound = await User.findById(req.user);
      if(!userFound) return next(new AppErr("User not found", 404));
      // 2.) Find the account
      const accountFound = await Account.findById(account);
      if(!accountFound) return next(new AppErr("Account not found", 404));
      // 3.) Create the transaction
      const transaction = await Transaction.create({
        amount,
        notes,
        account,
        transactionType,
        category,
        name,
        createdBy: req.user,
      });
      // 4.) Push the transaction to the account
      accountFound.transactions.push(transaction._id);
      // 5.) Resave the account
      await accountFound.save();

      res.json({status: "success", data: transaction});
    } catch (error) {
      res.json(error);
    }
  };
  
  //all
  const getTransactionsCtrl = async (req, res) => {
    try {
      res.json({ msg: "all route" });
    } catch (error) {
      res.json(error);
    }
  };
  
  //single
  const getTransactionCtrl = async (req, res) => {
    try {
      res.json({ msg: "get transaction route" });
    } catch (error) {
      res.json(error);
    }
  };
  
  //delete
  const deleteTransactionCtrl = async (req, res) => {
    try {
      res.json({ msg: "delete route" });
    } catch (error) {
      res.json(error);
    }
  };
  
  //update
  const updateTransactionCtrl = async (req, res) => {
    try {
      res.json({ msg: "update route" });
    } catch (error) {
      res.json(error);
    }
  };
  
  module.exports = {
    createTransactionCtrl,
    getTransactionsCtrl,
    getTransactionsCtrl,
    getTransactionCtrl,
    deleteTransactionCtrl,
    updateTransactionCtrl,
  };
  