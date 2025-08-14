import React from "react";

function page({ params }: { params: { genre: string } }) {
  return (
    <div className="text-white">
      {params.genre}
      {/* {params.type} */}
    </div>
  );
}

export default page;
