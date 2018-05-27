var mongoose   = require('mongoose');   // req

var stitchstepsSchema = new mongoose.Schema({ //req
    step_number: {
        type: Number,
        required: true,
        min:0
    },
    step_instruction: {
        type: String,
        required: true
    },
    count_number: Number,
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
});
module.exports = mongoose.model('StitchSteps', stitchstepsSchema) //req