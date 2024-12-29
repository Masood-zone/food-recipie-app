const CustomError = require("../utils/customErrorClass");
const httpstatus = require("../utils/httpstatus");
const logger = require("../utils/loggerUtil");
const bcrypt = require("../utils/bcrypt");
const { signToken } = require("../utils/tokenUtil");

const {
  signUp,
  getClients,
  getClientById,
  editClient,
  removeClient,
  login,
} = require("../helpers/client");
// add cartegory

exports.addClient = async (req, res, next) => {
  try {
    const data = req.body;
    data.password = await bcrypt.hash(data.password);
    const client = await signUp(data);
    delete client.password;
    res.status(httpstatus.CREATED).json({
      client,
    });
  } catch (error) {
    logger.error(error);
    next(new CustomError(500, error));
  }
};

exports.getClients = async (req, res, next) => {
  try {
    const clients = await getClients();
    res.status(httpstatus.OK).json({
      clients,
    });
  } catch (error) {
    logger.error(error);
    next(new CustomError(500, error));
  }
};

exports.getClientById = async (req, res, next) => {
  try {
    const client = await getClientById(req.params.id);
    delete client.password;
    res.status(httpstatus.OK).json({
      client,
    });
  } catch (error) {
    logger.error(error);
    next(new CustomError(500, error));
  }
};

exports.editClient = async (req, res, next) => {
  console.log(req.params.id);
  console.log(req.body);
  try {
    const client = await editClient(req.params.id, req.body);
    // delete client.password;
    res.status(httpstatus.OK).json({
      client,
    });
  } catch (error) {
    logger.error(error);
    next(new CustomError(500, error));
  }
};

exports.removeClient = async (req, res, next) => {
  try {
    const client = await removeClient(req.params.id);
    res.status(httpstatus.OK).json({
      client,
    });
  } catch (error) {
    logger.error(error);
    next(new CustomError(500, error));
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const client = await login(email);
    if (!client) {
      throw new Error("email not found");
    } else {
      const checkPassword = await bcrypt.compare(password, client.password);

      if (!checkPassword) {
        throw new Error("Invalid credentials");
      } else {
        delete client.password;
        const token = signToken(client.id);
        res.status(httpstatus.OK).json({
          message: "User succesfully logged in !",
          username: client.username,
          email: client.email,
          token,
          id: client.id,
          role: client.role,
        });
      }
    }
  } catch (error) {
    logger.error(error);
    next(new CustomError(500, error));
  }
};
