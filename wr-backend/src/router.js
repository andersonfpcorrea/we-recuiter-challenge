const router = require('express').Router();

router
  .route('/')
  .get(() => console.log('teste'))
  .put()
  .delete();

module.exports = router;
