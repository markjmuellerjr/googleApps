'use strict';

import mongoose from 'mongoose';
var Schema = mongoose.Schema

var XmlsanitizerSchema = new Schema({
  dateTime: String,
  userLogin: String,
  campaignName: String,
  adgroupName: String,
  changes: {
    productGroup: String,
    keyword: String,
    oldBid: Number,
    newBid: Number
  }

});

export default mongoose.model('Xmlsanitizer', XmlsanitizerSchema);
