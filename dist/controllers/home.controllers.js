import AsyncHandler from "../utils/AsyncHandler.js";
const homePage = AsyncHandler(async (req, res) => {
    res.render('home');
});
export { homePage };
