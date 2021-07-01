const {
  generateMessage,
  goodbye,
  generateSlogan,
} = require("../utils/slogan-generator");

// async function getSlogan(request, response, next) {
//   try {
//     const data = await generateSlogan.list();
//     response.json({ data });
//     console.log(
//       `Your request was: ${request}`,
//       `Your slogan is: ${response.slogan}`
//     );
//   } catch (error) {
//     next(error);
//   }
// }

function getSlogan(request) {
  generateSlogan(request).then((response) => {
    console.log(`Your request was: ${request}`);
    console.log(`Your slogan is: ${response.slogan}`);
  });
}
// function list(req, res, next) {
//   categoriesService
//     .list()
//     .then((data) => res.json({ data }))
//     .catch(next);
// }
function fullSession(request) {
  generateMessage()
    .then(console.log)
    .then(() => getSlogan(request))
    .then(() => goodbye())
    .then(console.log);
}

module.exports = { getSlogan, fullSession };
