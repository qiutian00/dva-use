import React from "react";
import { connect } from "dva";
import CURD from "../components/CURD";

function CURDShow() {
  return (
    <div>
      <CURD />
    </div>
  );
}

CURDShow.propTypes = {};

export default connect()(CURDShow);
