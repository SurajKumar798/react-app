const express = require("express");
const LocationListController = require("../controller/location")
const RestaurantController = require("../controller/restaurants");
const MealTypeController = require("../controller/mealType")

const router = express.Router();
router.get('/getLocationList',LocationListController.getLocationList);
router.get('/getRestaurantByCityName/:city', RestaurantController.getRestaurantByCityName);
router.get('/mealType', MealTypeController.getMealData);


module.exports = router;