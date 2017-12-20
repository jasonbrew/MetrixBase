// function getLocation(locationId) {
//     var result = {};
   
//     // mock up call to AWS REST service
   
//     result =
//     {
//       "locationId": "eb3d4cd6-e120-11e7-80c1-9a214cf093ae",
//       "locatioName": "CARROLLTON-1105 S.JOSEY",
//       "locationNumber": "03770"
//     }
   
//     return result;
//   }
   
//   function getMetrics(locationId) {
//     var result = {};
   
//     // mock up call to AWS REST service
   
//     result =
//     {
//       "locationId": "eb3d4cd6-e120-11e7-80c1-9a214cf093ae",
//       "aorCurrent": 415,
//       "aorDayGrowth": 9,
//       "aorWeekGrowth": 21,
//       "aorMonthGrowth": 39,
//       "customerCountCurrent": 384,
//       "customerCountDayGrowth": 8,
//       "customerCountWeekGrowth": 17,
//       "customerCountMonthGrowth": 35
//     }
   
//     return result;
//   }
   
//   var locationId = "eb3d4cd6-e120-11e7-80c1-9a214cf093ae";
//   var location = getLocation(locationId);
//   var metrics = getMetrics(locationId);
   
//   console.log("AOR Current for Store " + location.locationName + " is " + metrics.aorCurrent);