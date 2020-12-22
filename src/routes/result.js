let express = require('express')
let resultsRouter = express.Router()
let db = require('../database');

//GET all results
resultsRouter.get('/allResults', (req, res) => {
  console.log("Get all results");
  let sql = "select * from results";
  db.all(sql, (err, row) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json({
      "message": "success",
      "data": row
    })
  });
})
//GET a result with goodsType
resultsRouter.get('/result', (req, res) => {
    if (!req.query.goodsType) {
      return res.status(400).send('Missing URL parameter goodsType')
    }
    let sql = "select results.id, goodsType, searchNum" +
      " from results" +
      " where results.goodsType = ?"
    console.log("req.query.goodsType: " + req.query.goodsType)
    let params = [req.query.goodsType]
    db.get(sql, params, (err, row) => {
      if (err) {
        res.status(400).json({ "error": err.message });
        return;
      }
      res.json({
        "message": "success",
        "data": row
      })
    });
  })
  //PUT update a result
resultsRouter.put('/result', (req, res) => {
  console.log("PUT called")
  var data = {
    id: req.query.typeId,
    goodsType: req.body.goodsType,
    searchNum: req.body.searchNum + 1
  }
  console.log("data.id:" + data.id + " goodsType:" + data.goodsType + " searchNum:" + data.searchNum)
  if (!data.id) {
    return res.status(400).send('Missing URL parameter id')
  }
  db.run(
    `UPDATE results set 
         goodsType = ?,
         searchNum = ?
         WHERE id = ?`,
    [data.goodsType, data.searchNum, data.id],
    function (err, result) {
      if (err) {
        res.status(400).json({ "error": res.message })
        console.log(err);
        return;
      }
      res.json({
        message: "success",
        data: data,
        changes: this.changes

      })
    });
})

// POST add a new result with goodsType
resultsRouter.post('/result', async (req, res) => {
  if (!req.body) {
    return resizeBy.status(400).send('Request body is missing')
  }

  let newType = {
    goodsType: req.body.goodsType
  }
  // Check if the goods type is already exist
  let checkIfExistSql = "select * from results where goodsType = ?"
  console.log("req.body.goodsType: " + req.body.goodsType)
  let params = [req.body.goodsType]
  let nameExists = false;
  const rows = await new Promise((resolve, reject) => {
    db.all(checkIfExistSql, params, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message }).send();
        return;
      }
      console.log("ROWS:" + rows.length);
      if (rows.length > 0) {
        nameExists = true;
        res.json({
          "message": "goodsType already exists"
        }).send()
        resolve(rows);
      }
      else {
        resolve(rows);
      }
    });
  });

  console.log("goodsType exists:" + nameExists);
  if (nameExists)
    return;

  var insertsql = 'INSERT INTO results (goodsType, searchNum) VALUES (?,?)'
  let input = [req.body.goodsType, 1]
  db.run(insertsql, input, function (err, result) {
    if (err) {
      res.status(400).json({ "error": err.message })
      return;
    }
    res.json({
      "message": "success",
      "data": newType,
      "id": this.lastID
    })
  });

})

module.exports = resultsRouter