import React from "react";
import { connect } from "dva";
import LayoutIndex from "../components/LayoutIndex";

function LayoutIndexShow() {
  return (
    <div style={{ height: '100%' }}>
      <LayoutIndex />
    </div>
  );
}

LayoutIndexShow.propTypes = {};

export default connect()(LayoutIndexShow);
