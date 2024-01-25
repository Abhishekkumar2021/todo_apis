import AsyncHandler from "../utils/AsyncHandler.js";
const errorPage = AsyncHandler(async (req, res) => {
    res.render('error');
});
export { errorPage };
