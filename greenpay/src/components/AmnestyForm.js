import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig"; // Import Firestore configuration
import "../styles/AmnestyForm.css";

const AmnestyForm = () => {
  const {
    register,
    handleSubmit,n
    formState: { errors },
  } = useForm();

  const [consumerType, setConsumerType] = useState("");

  // Function to handle form submission
  const onSubmit = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "amnestyForms"), data);
      alert(`Form submitted successfully! Document ID: ${docRef.id}`);
    } catch (err) {
      alert("Failed to submit form. Please try again.");
    }
  };

  return (
    <div className="form-container">
      {/* Logos */}
      <div className="logo-container">
        <img src="greenpay\resources\ppl_logo.png" alt="" className="logo pngpower-logo" />
        <img src="greenpay\resources\usaid-logo.png" alt="" className="USAID" />
      </div>

      <h1>Amnesty Consumer Registration Form</h1>
      <p className="form-description">
        This registration form is for both REGISTERED (metered) and UNREGISTERED (unmetered direct connection)
        electricity consumers (Easipay or credit meters). They are currently consuming electricity but not paying any bills.
        This is their opportunity to register for FREE, during this Amnesty period (Mar – Aug).
        They will not pay any penalty fees, charges, back-bills or service fees.
        This form is STRICTLY to be filled by a PPL STAFF and signed off below. DO NOT leave a field/box empty.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Section 1: Date and Full Name */}
        <h3>Section 1: Date and Full Name</h3>
        <div className="field-row">
          <label>Date:</label>
          <input type="date" {...register("date", { required: true })} />
          <label>Full Name:</label>
          <input type="text" {...register("fullName", { required: true })} />
        </div>
        {errors.date && <p className="error">Date is required.</p>}
        {errors.fullName && <p className="error">Full name is required.</p>}
        <div className="section-divider"></div>

        {/* Section 2: Consumer Type */}
        <h3>Section 2: Consumer Type</h3>
        <select
          {...register("consumerType", { required: true })}
          onChange={(e) => setConsumerType(e.target.value)}
        >
          <option value="">Select type</option>
          <option value="Metered">Metered</option>
          <option value="Unmetered">Unmetered</option>
        </select>
        {errors.consumerType && <p className="error">Consumer type is required.</p>}

        {consumerType === "Metered" && (
          <div className="metered-options">
            <label>Meter Number:</label>
            <input type="text" {...register("meterNumber", { required: true })} />
            <div>
              <label>
                <input type="checkbox" {...register("meteredDetails")} value="Active" /> Active
              </label>
              <label>
                <input type="checkbox" {...register("meteredDetails")} value="Inactive" /> Inactive
              </label>
              <label>
                <input type="checkbox" {...register("meteredDetails")} value="Damaged" /> Damaged
              </label>
              <label>
                <input type="checkbox" {...register("meteredDetails")} value="Single Phase" /> Single Phase
              </label>
              <label>
                <input type="checkbox" {...register("meteredDetails")} value="3-Phase" /> 3-Phase
              </label>
            </div>
          </div>
        )}

        {consumerType === "Unmetered" && (
          <div className="unmetered-options">
            <label>Wiring Type:</label>
            <div>
              <label>
                <input type="radio" {...register("wiringType", { required: true })} value="Standard Wiring" /> Standard Wiring
              </label>
              <label>
                <input type="radio" {...register("wiringType", { required: true })} value="Sub-Standard Wiring" /> Sub-Standard Wiring
              </label>
            </div>
          </div>
        )}
        <div className="section-divider"></div>

        {/* Section 3: Location */}
        <h3>Section 3: Location</h3>
<div className="field-row">
  <label>Section:</label>
  <input type="text" {...register("section", { required: true })} />
  <label>Lot:</label>
  <input type="text" {...register("lot", { required: true })} />
</div>
<div className="field-row">
  <label>Street:</label>
  <input type="text" {...register("street", { required: true })} />
  <label>Suburb:</label>
  <input type="text" {...register("suburb", { required: true })} />
</div>
<div className="field-row">
  <label>Town:</label>
  <input type="text" {...register("town", { required: true })} />
  <label>District:</label>
  <input type="text" {...register("district", { required: true })} />
</div>
<div className="field-row">
  <label>Province:</label>
  <select {...register("province", { required: true })}>
    <option value="">Select Province</option>
    <option value="Central">Central</option>
    <option value="Chimbu">Chimbu</option>
    <option value="Eastern Highlands">Eastern Highlands</option>
    <option value="East New Britain">East New Britain</option>
    <option value="East Sepik">East Sepik</option>
    <option value="Enga">Enga</option>
    <option value="Gulf">Gulf</option>
    <option value="Hela">Hela</option>
    <option value="Jiwaka">Jiwaka</option>
    <option value="Madang">Madang</option>
    <option value="Manus">Manus</option>
    <option value="Milne Bay">Milne Bay</option>
    <option value="Morobe">Morobe</option>
    <option value="New Ireland">New Ireland</option>
    <option value="Northern (Oro)">Northern (Oro)</option>
    <option value="Port Moresby (NCD)">Port Moresby (NCD)</option>
    <option value="Sandaun (West Sepik)">Sandaun (West Sepik)</option>
    <option value="Southern Highlands">Southern Highlands</option>
    <option value="Western">Western</option>
    <option value="Western Highlands">Western Highlands</option>
    <option value="West New Britain">West New Britain</option>
  </select>
  {errors.province && <p className="error">Province is required.</p>}
</div>
<div className="field-row">
  <label>Pole Number:</label>
  <input type="text" {...register("poleNumber", { required: true })} />
  <label>Feeder Number:</label>
  <input type="text" {...register("feederNumber", { required: true })} />
  <label>Transformer:</label>
  <input type="text" {...register("transformerNumber", { required: true })} />
</div>
<div className="section-divider"></div>

        {/* Section 4: Property Type */}
        <h3>Section 4: Property Type</h3>
        <div className="property-type">
          <label>
            <input type="radio" {...register("propertySize", { required: true })} value="Small House" /> Small House
          </label>
          <label>
            <input type="radio" {...register("propertySize", { required: true })} value="Medium House" /> Medium House
          </label>
          <label>
            <input type="radio" {...register("propertySize", { required: true })} value="Large House" /> Large House
          </label>
        </div>
        <div className="property-details">
          <label>
            <input type="radio" {...register("propertyDetails", { required: true })} value="Home" /> Home
          </label>
          <label>
            <input type="radio" {...register("propertyDetails", { required: true })} value="Rental Room/Unit" /> Rental Room/Unit
          </label>
          <label>
            <input type="radio" {...register("propertyDetails", { required: true })} value="Trade Store" /> Trade Store
          </label>
        </div>
        <div className="section-divider"></div>

        {/* Section 5: Contact Details */}
        <h3>Section 5: Contact Details</h3>
        <div className="field-row">
          <label>Postal Address:</label>
          <input type="text" {...register("postalAddress", { required: true })} />
        </div>
        <div className="field-row">
          <label>Main Phone:</label>
          <input type="tel" {...register("mainPhoneNumber", { required: true })} />
          <label>Secondary Phone:</label>
          <input type="tel" {...register("secondPhoneNumber")} />
        </div>
        <div className="field-row">
          <label>Third Phone:</label>
          <input type="tel" {...register("thirdPhoneNumber")} />
          <label>Email:</label>
          <input type="email" {...register("emailAddress", { required: true })} />
        </div>
        <div className="section-divider"></div>

        {/* Section 6: Terms and Conditions */}
        <h3>Section 6: Terms & Conditions</h3>
        <p>The information you provide here will be kept confidential. 
          You will pay a monthly fee of K30 (Small), K40 (Medium) or K50 (Large House), 
          for consuming electricity. You will also pay K50 for tradestore/takabox. 
          If you selected UNMETERED above, you will not hold PPL liable for any accidents, 
          fires and/or damages that may occur. If you selected METERED, you agree not 
          to tamper or bypass the Easipay meter again ( do illegal connection) during 
          and after the amnesty period or at any time. If caught tampering, you agree 
          to be charged, back-billed, and/or prosecuted.</p>
        <label>
          <input type="checkbox" {...register("agreement", { required: true })} /> I agree to the terms and conditions.
        </label>
        {errors.agreement && <p className="error">You must agree to the terms.</p>}
        <div className="field-row">
          <label>Registering Officer Name:</label>
          <input type="text" {...register("officerName", { required: true })} />
          <label>ID Number:</label>
          <input type="text" {...register("officerID", { required: true })} />
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AmnestyForm;
