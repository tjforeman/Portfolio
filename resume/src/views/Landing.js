import React from "react";

import mixpanel from "../helpers/mixpanel";

const Landing = () => {
  return (
    <div>
      <p>Placeholder for Landing page</p>
    </div>
  );
};
mixpanel.track("viewed landing");

export default Landing