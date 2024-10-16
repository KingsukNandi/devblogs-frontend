import React from "react";

const Moon = (props) => {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.9994 3.3733C11.3211 3.69498 11.4469 4.16374 11.3295 4.60326C10.7419 6.80366 11.3123 9.24326 13.0345 10.9655C14.7567 12.6877 17.1963 13.2581 19.3967 12.6705C19.8363 12.5531 20.305 12.6789 20.6267 13.0006C20.9484 13.3223 21.0742 13.791 20.9568 14.2306C20.556 15.7314 19.7664 17.1501 18.5916 18.3249C15.0248 21.8917 9.24189 21.8917 5.67509 18.3249C2.1083 14.7581 2.1083 8.9752 5.67509 5.40841C6.84993 4.23357 8.26857 3.44398 9.76945 3.04318C10.209 2.9258 10.6777 3.05162 10.9994 3.3733Z"
      ></path>
    </svg>
  );
};

export default Moon;