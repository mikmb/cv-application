import "./../styles/personalInfo.css";
import Input from "./Input";
function PersonalInfo({ onChange, firstName, lastName, email, phone }) {
  console.log(firstName);
  return (
    <form className="personal-info-form">
      <h2>Personal Info</h2>
      <Input
        type="text"
        id="first-name"
        labelText="First Name"
        placeholder="First Name"
        value={firstName}
        onChange={onChange}
        data-key="firstName"
      />
      <Input
        type="text"
        id="last-name"
        labelText="Last Name"
        placeholder="Last Name"
        value={lastName}
        onChange={onChange}
        data-key="lastName"
      />
      <Input
        type="email"
        id="email"
        labelText="Email"
        placeholder="Email"
        value={email}
        onChange={onChange}
        data-key="email"
      />
      <Input
        type="tel"
        id="first-name"
        labelText="Phone"
        placeholder="Phone"
        value={phone}
        onChange={onChange}
        data-key="phone"
      />
    </form>
  );
}

export default PersonalInfo;
