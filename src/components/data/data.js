
export const modalNames = [
  {
    id: "register-modal",
    name: "Registration",
  },
  {
    id: "login-modal",
    name: "Login",
  },
  {
    id: "portfolio-ask-modal",
    name: "Portfolio Ask",
  },
  {
    id: "forgot-pw-modal",
    name: "Forgot Password",
  },
];

export default modalNames;

export const userColumns = [
  {
    field: "id",
    headerName: "ID",
    width: 70,
  },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "address",
    headerName: "Address",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
export const userInputs = [
  {
    id: "uid",
    label: "User ID",
    type: "text",
    placeholder: "",
  },
  {
    id: "accountType",
    label: "Account Type",
    type: "text",
    placeholder: "",
  },
  {
    id: "email",
    label: "Email",
    type: "mail",
    placeholder: "",
  },
  {
    id: "userName",
    label: "User Name",
    type: "text",
    placeholder: "",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
  },
];

export const listingInputs = [
  {
    id: "ListingType",
    label: "Listing Type",
    type: "text",
    placeholder: "Rental,For Sale,Sold",
  },
  {
    id: "Address",
    label: "Address",
    type: "text",
    placeholder: "Enter Street Address",
  },
  {
    id: "City",
    label: "Enter City",
    type: "text",
    placeholder: "City",
  },
  {
    id: "State",
    label: "State",
    type: "text",
    placeholder: "Enter State",
  },
  {
    id: "Zip",
    label: "Zip Code",
    type: "text",
    placeholder: "Enter Zip",
  },
  {
    id: "Bedrooms",
    label: "Bedrooms(#)",
    type: "number",
    placeholder: "No. of Bedrooms",
  },
  {
    id: "Bathrooms",
    label: "Bathrooms(#)",
    type: "number",
    placeholder: "No. of Bathrooms",
  },
  {
    id: "Price",
    label: "Price",
    type: "number",
    placeholder: "Enter Price",
  },
  {
    id: "Description",
    label: "Description",
    type: "text",
    placeholder: "Enter Description",
  },
];

export const commonLinks = [
  {
    id: "Home",
    label: "Home",
    type: "text",
    path: "/",
  },
  {
    id: "Listings",
    label: "Listings",
    type: "text",
    path: "/listings",
  },
  {
    id: "Contact",
    label: "Contact",
    type: "text",
    path: "/contact",
  },
  {
    id: "Login",
    label: "Login/Register",
    type: "text",
    path: "/login",
  },
];