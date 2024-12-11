const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
  date: { type: Date, required: true },
  fullName: { type: String, required: true },
  consumerType: { type: String, required: true },
  meterNumber: { type: String },
  meteredDetails: [String],
  wiringType: { type: String },
  location: {
    section: { type: String, required: true },
    lot: { type: String, required: true },
    street: { type: String, required: true },
    suburb: { type: String, required: true },
    town: { type: String, required: true },
    district: { type: String, required: true },
    poleNumber: { type: String, required: true },
    feederNumber: { type: String, required: true },
    transformerNumber: { type: String, required: true },
  },
  propertyType: { type: String, required: true },
  propertyDetails: { type: String, required: true },
  postalAddress: { type: String, required: true },
  mainPhoneNumber: { type: String, required: true },
  secondPhoneNumber: { type: String },
  thirdPhoneNumber: { type: String },
  emailAddress: { type: String, required: true },
  agreement: { type: Boolean, required: true },
  officerName: { type: String, required: true },
  officerID: { type: String, required: true },
});

module.exports = mongoose.model("Form", FormSchema);
