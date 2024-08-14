import React from "react";

function Tips({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Tip {params.id}</h1>
    </div>
  );
}

export default Tips;
