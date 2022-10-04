const express = require('express')
const router = express.Router()
const urlController = require('../controllers/urlController')


router.post("/test-me")

router.post("/url/shorten", urlController.createUrl)

router.get("/:urlCode", urlController.getLinkWithShortUrl)

router.delete("/:urlCode", urlController.deleteurl)


module.exports = router