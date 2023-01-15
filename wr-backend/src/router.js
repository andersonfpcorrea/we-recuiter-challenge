const router = require('express').Router();

router
  .route('/')
  .get(() => {
    console.log('get');
  })
  .put(() => {
    console.log('put');
  })
  .delete(() => {
    console.log('delete');
  });

module.exports = router;
