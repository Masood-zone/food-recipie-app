const CustomError = require("../utils/customErrorClass");
const httpstatus = require("../utils/httpstatus");
const logger = require("../utils/loggerUtil");
const cloudinary = require("../utils/cloudinary");

const {
  addCategory,
  getCartegories,
  getSingleCartegory,
  editCartegory,
  removeCartegory,
} = require("../helpers/cartegory");
// const { category } = require("../utils/prismaUtil");
// add cartegory

exports.register_cartegory = async (req, res, next) => {
  try {
    const data = req.body;
    const image = req.file ? req.file.path : undefined;
    if (image) {
      const uploaded = await cloudinary.uploader.upload(image, {
        folder: "food-delivery-images",
      });
      if (uploaded) {
        data.image = uploaded.secure_url;
      }
    }
    const category = await addCategory(data);

    res.status(httpstatus.OK).json({
      category,
    });
  } catch (error) {
    logger.error(error);
    next(new CustomError(500, error));
  }
};

exports.getAllCartegories = async (req, res, next) => {
  try {
    const categories = await getCartegories();
    res.status(httpstatus.OK).json({
      categories,
    });
  } catch (error) {
    logger.error(error);
    next(new CustomError(500, error));
  }
};

exports.getSingleCartegory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await getSingleCartegory(parseInt(id));
    res.status(httpstatus.OK).json({
      category,
    });
  } catch (error) {
    logger.error(error);
    next(new CustomError(500, error));
  }
};

exports.editCartegory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const category = await editCartegory(parseInt(id), req.body);
    res.status(httpstatus.OK).json({
      category,
    });
  } catch (error) {
    logger.error(error);
    next(new CustomError(500, error));
  }
};
exports.removeCartegory = async (req, res, next) => {
  const id = req.params.id;
  try {
    const category = await removeCartegory(parseInt(id));
    res.status(httpstatus.OK).json({
      category,
    });
  } catch (error) {
    logger.error(error);
    next(new CustomError(500, error));
  }
};
