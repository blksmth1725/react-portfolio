import React from "react";

import Aboutme from "../../../static/assets/images/Aboutme/Aboutme.png";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + Aboutme + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <div className="right-column">
        <p>
          Tempor id cillum excepteur quis laborum nisi laboris tempor. Culpa
          sint culpa ullamco tempor. Officia exercitation deserunt mollit quis
          deserunt laborum consequat in dolor sint reprehenderit ut. Consectetur
          mollit sit velit nostrud pariatur esse. Sunt labore est labore dolor
          excepteur ullamco laborum voluptate ea reprehenderit velit. Id ad
          culpa cillum amet quis reprehenderit reprehenderit reprehenderit
          ullamco aute ipsum. Fugiat cillum quis ut quis. Nisi duis consectetur
          commodo pariatur eiusmod ad. Cillum dolore amet nulla nulla sunt ea
          sunt nostrud. Sint qui aute irure culpa. Voluptate aliquip deserunt
          nisi veniam et exercitation elit aute ea minim ipsum aliquip irure.
          Laborum consectetur officia magna aliquip incididunt ex irure. Minim
          dolore eiusmod dolore esse labore dolore laboris ad velit Lorem non
          Lorem exercitation id. Minim nostrud culpa nisi nostrud et non enim
          nisi culpa est sit est Lorem sit. Cillum minim sint incididunt dolore
          fugiat magna elit. Consectetur fugiat aute fugiat ipsum anim eiusmod
          excepteur enim. Et consequat culpa est voluptate dolor. Cillum cillum
          tempor ullamco laborum do excepteur consectetur est incididunt aute
          mollit ullamco quis nulla.
        </p>
      </div>
    </div>
  );
}
