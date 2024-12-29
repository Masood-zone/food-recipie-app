const CustomError = require("../utils/customErrorClass");
const httpstatus = require("../utils/httpstatus");
const logger = require("../utils/loggerUtil");

const {
     addDelivery,
     getDeliveries,
     getDeliveryByClientId,
     getSingleDelivery,
     editDelivery,
     removeDelivery,
} = require("../helpers/delivery");
// add cartegory

exports.saveDeliveryInfo = async (req, res, next) => {
     try {
          const data = req.body;
          const delivery = await addDelivery(data);
          res.status(httpstatus.CREATED).json({
               delivery,
          });
     } catch (error) {
          logger.error(error);
          next(new CustomError(500, error));
     }
};

exports.getDeliveries = async (req, res, next) => {
     try {
          const deliveries = await getDeliveries({});
          res.status(httpstatus.OK).json({
               deliveries,
          });
     } catch (error) {
          logger.error(error);
          next(new CustomError(500, error));
     }
};

exports.getSingleDelivery = async (req, res, next) => {
     try {
          const { id } = req.params;
          const delivery = await getSingleDelivery(id);
          res.status(httpstatus.OK).json({
               delivery,
          });
     } catch (error) {
          logger.error(error);
          next(new CustomError(500, error));
     }
};
exports.edit_delivery = async (req, res, next) => {
     try {
          const { id } = req.param;
          const data = req.body;
          const delivery = await editDelivery(id, data);
          res.status(httpstatus.OK).json({
               delivery,
          });
     } catch (error) {
          logger.error(error);
          next(new CustomError(500, error));
     }
};
exports.deleteDelivery = async (req, res, next) => {
     try {
          const { id } = req.param;
          const delivery = await removeDelivery(id);
          res.status(httpstatus.OK).json({
               delivery,
          });
     } catch (error) {
          logger.error(error);
          next(new CustomError(500, error));
     }
};

//  get a delivery info by client id
exports.get_delivery_info_by_clientId = async (req, res, next) => {
     try {
          const { clientId } = req.params;
          const delivery = await getDeliveryByClientId({ id: clientId });
          res.status(httpstatus.OK).json({
               delivery,
          });
     } catch (error) {
          logger.error(error);
          next(new CustomError(500, error));
     }
};
