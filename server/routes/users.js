var express = require('express');
var wave=require('../model/wave');
var mongoose=require('mongoose');

//configure routes

var router = express.Router();

router.route('/')
    .get(function(req, res) {
        wave.find(function(err,batches) {
            if (err)
                res.send(err);
            res.json(batches);
        });
    })
    .post(function(req, res) {
        var waves=new wave(req.body);
        waves.waveName=req.body.waveName;
        waves.waveType=req.body.waveType;
        waves.location=req.body.location;
        waves.NumberOfParticipants=req.body.NumberOfParticipants;
        waves.plannedStartDate=req.body.plannedStartDate;
        waves.plannedEndDate=req.body.plannedEndDate;
        waves.actualStartDate=req.body.actualStartDate;
        waves.actualEndDate=req.body.actualEndDate;
        waves.ParticipantsMovingOut=req.body.ParticipantsMovingOut;
        waves.save(function(err) {
            if (err)
                res.send(err);
            res.send(
                     'Batch Added'
            );
        });
    });


module.exports = router;
