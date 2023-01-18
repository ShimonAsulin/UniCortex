import React from "react";
import Footer from "../ui/footer/Footer";
import Input from "../ui/input/Input";
import "./preferences.scss"
const Preferences = () => {
  return (
    <div className="preferences">
      <h1 className="preferences__title">ג. העדפות</h1>
      <h3 className="preferences__title-sub">האם מעוניין בהצעות לרופאים ובתי חולים? </h3>
      <Input
        type="radio"
        name="  מעוניין "
        text="  מעוניין "
        htmlFor="   מעוניין"
        //   handleChange={handleChange}
      />
      <Input
        type="radio"
        name=" לא מעוניין "
        text=" לא מעוניין "
        htmlFor=" לא מעוניין "
        //   handleChange={handleChange}
      />
      <h3 className="preferences__title-sub"> אם כן, אנא בחר סוג:</h3>
      <Input
        type="radio"
        name=" ציבורי "
        text=" ציבורי "
        htmlFor=" ציבורי "
        //   handleChange={handleChange}
      />
      <Input
        type="radio"
        name=" פרטי "
        text=" פרטי "
        htmlFor=" פרטי "
        //   handleChange={handleChange}
      />
      <Input
        type="radio"
        name=" רפואה אלטרנטיבית "
        text=" רפואה אלטרנטיבית "
        htmlFor=" רפואה אלטרנטיבית "
        //   handleChange={handleChange}
      />
      <h3 className="preferences__title-sub">האם מעוניין בשיקום? </h3>
      <Input
        type="radio"
        name="  מעוניין "
        text="  מעוניין "
        value="כן"
        htmlFor=" מעוניין "
        //   handleChange={handleChange}
      />
      <Input
        type="radio"
        name=" לא מעוניין "
        text=" לא מעוניין "
        htmlFor=" לא מעוניין "
        //   handleChange={handleChange}
      />
      <h3 className="preferences__title-sub">אם כן, אנא בחר סוג: </h3>
      <Input
        type="radio"
        name=" ציבורי "
        text=" ציבורי "
        htmlFor=" ציבורי "
        //   handleChange={handleChange}
      />
      <Input
        type="radio"
        name=" פרטי "
        text=" פרטי "
        htmlFor=" פרטי "
        //   handleChange={handleChange}
      />
      <h3 className="preferences__title-sub">האם מעוניין בעזרה ממשלתית? </h3>

      <Input
        type="radio"
        name="מעוניין  "
        text="מעוניין  "
        htmlFor=" מעוניין "
        //   handleChange={handleChange}
      />
      <Input
        type="radio"
        name=" לא מעוניין "
        text=" לא מעוניין "
        htmlFor=" לא מעוניין "
        //   handleChange={handleChange}
      />
      <h3 className="preferences__title-sub">אם כן, אנא בחר סוג: </h3>

      <Input
        type="radio"
        name=" רישום בעל מוגבלות "
        text=" רישום בעל מוגבלות "
        htmlFor=" רישום בעל מוגבלות "
        //   handleChange={handleChange}
      />
      <Input
        type="radio"
        name="הטבות  "
        text="הטבות  "
        htmlFor=" הטבות "
        //   handleChange={handleChange}
      />
      <Input
        type="radio"
        name=" זכויות בעלי מוגבלות "
        text=" זכויות בעלי מוגבלות "
        htmlFor=" זכויות בעלי מוגבלות "
        //   handleChange={handleChange}
      />
      <Input
        type="radio"
        name=" ציוד רפואי "
        text=" ציוד רפואי "
        htmlFor=" ציוד רפואי "
        //   handleChange={handleChange}
      />
      <h3 className="preferences__title-sub"> האם מעוניין בחינוך?</h3>

      <Input
        type="radio"
        name=" מעוניין "
        text=" מעוניין "
        htmlFor=" מעוניין "
        //   handleChange={handleChange}
      />
      <Input
        type="radio"
        name=" לא מעוניין "
        text=" לא מעוניין "
        htmlFor=" לא מעוניין "
        //   handleChange={handleChange}
      />
      <h3 className="preferences__title-sub"> האם מעוניין במימון ותמיכה בחסות?</h3>

      <Input
        type="radio"
        name=" מעוניין "
        text=" מעוניין "
        htmlFor=" מעוניין "
        //   handleChange={handleChange}
      />
      <Input
        type="radio"
        name=" לא מעוניין  "
        text=" לא מעוניין  "
        htmlFor=" לא מעוניין  "
        //   handleChange={handleChange}
      />
      <h3 className="preferences__title-sub">האם מעוניין במחקר בתחום האוטיזם? </h3>

      <Input
        type="radio"
        name=" מעוניין "
        text=" מעוניין "
        htmlFor=" מעוניין "
        //   handleChange={handleChange}
      />
      <Input
        type="radio"
        name=" לא מעוניין  "
        text=" לא מעוניין  "
        htmlFor=" לא מעוניין  "
        //   handleChange={handleChange}
      />
      <h3 className="preferences__title-sub">האם מעוניין בפיתוח ובכלים החדשים ביותר בתחום האוטיזם? </h3>

      <Input
        type="radio"
        name=" מעוניין "
        text=" מעוניין "
        htmlFor=" מעוניין "
        //   handleChange={handleChange}
      />
      <Input
        type="radio"
        name=" לא מעוניין  "
        text=" לא מעוניין  "
        htmlFor=" לא מעוניין  "
        //   handleChange={handleChange}
      />
      <Footer />
    </div>
  );
};

export default Preferences;
