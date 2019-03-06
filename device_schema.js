var mongoose=require('mongoose');

var deviceSchema=mongoose.Schema({
    name: { type: String, required: true },
    devId: { type: String, required: true },
    // userId: {type:ObjectId},
    // groupId: {type:ObjectId,default:null},
    description: { type: String},
    ver: { type: String },
    // warranty: { type: Date},
    status: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    geoLoc: {
        type: {
            type: String, // Don't do `{ location: { type: String } }`
            enum: ['Point'], // 'location.type' must be 'Point'
        },
        coordinates: {
            type: [Number],
        }
    }
 });
mongoose.model('Device', deviceSchema);