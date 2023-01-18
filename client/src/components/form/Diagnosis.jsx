import React from "react";
import "./diagnosis.scss";
import Input from "../ui/input/Input";
import Footer from "../ui/footer/Footer";
const Diagnosis = () => {
  return (
    <div className="diagnosis">
      <h2 className="diagnosis__header">ב. אבחון</h2>
      <h3 className="diagnosis__header-sub">האם בוצע אבחון ?</h3>
      <Input
        type="radio"
        name=""
        text="כן"
        htmlFor="כן"
        //   handleChange={handleChange}
      />

      <Input
        type="radio"
        name="לא"
        text="לא"
        htmlFor="לא"
        //   handleChange={handleChange}
      />
      <Input
        type="radio"
        name="בתהליך"
        htmlFor="בתהליך"
        text="בתהליך"
        //   handleChange={handleChange}
      />
      <h3 className="diagnosis__header-sub2">
        במידה ובוצע אבחון, בחר ספקטרום מהרשימה
      </h3>

      <Input
        type="radio"
        name="אוטיזם קלאסי"
        htmlFor="אוטיזם קלאסי"
        text="אוטיזם קלאסי"
        //   handleChange={handleChange}
      />
      <Input
        type="radio"
        name="תסמונת אספרגר"
        htmlFor="סנדרום אספרגר"
        text="תסמונת אספרגר"
        //   handleChange={handleChange}
      />
      <Input
        type="radio"
        name="סדרום רט "
        htmlFor="סדרום רט"
        text="תסמונת רט"
        //   handleChange={handleChange}
      />
      <Input
        type="radio"
        text="הפרעה התפתחותית נרחבת לא משויכת (PDD-NOS)"
        htmlFor="נדרש תרגום Augmentative and Alternative Communication (AAC)"
        //   handleChange={handleChange}
      />
      <Input
        type="radio"
        text="תקשורת תומכת וחלופית (AAC)"
        htmlFor="Pervasive Developmental Disorder - Not Otherwise Specified נדרש תרגום "
        //   handleChange={handleChange}
      />
      <h3 className="diagnosis__header-sub">
        האם מעוניין במידע כללי על אוטיזם?
      </h3>
      <Input
        type="radio"
        name="מעוניין "
        text="מעוניין "
        htmlFor=" מעוניין"
        //   handleChange={handleChange}
      />
      <Input
        type="radio"
        name="לא מעוניין "
        text="לא מעוניין "
        htmlFor=" לא מעוניין"
        //   handleChange={handleChange}
      />
      <div className="div-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Diagnosis;
