import React from "react";
import "./info.scss";
import info from "../../images/information/info";
import whiteBakcground from "../../images/white bakcground.png";

import Card from "../ui/card/Card";
const Info = () => {
  return (
    <div dir="rtl" className="info">
      <img src={whiteBakcground} alt="" />
      <h1 className="info__title">עדכונים ומידע חדש</h1>
      <div className="info__cards">
        <Card
          title={`הרצאה 
            אוטיזם - קשיי התקשורת והשפה`}
          more={"לפרטים נוספים"}
          src={info.info1}
          width="374px"
          height="249px"
          styleT="info__content-title"
          styleS="info__content-subTitle"
          className="info__cards-marginLeft"
        />
        <Card
          title={`הליך הגשת בקשה לסיוע 
            במימון מעונות יום ומשפחתונים`}
          more={"לפרטים נוספים"}
          src={info.info3}
          width="374px"
          height="249px"
          styleT="info__content-title"
          styleS="info__content-subTitle"
          className="info__cards-marginLeft"
        />
        <Card
          title={`הכנס הלאומי לחקר האוטיזם
            מרץ 2023`}
          more={"לפרטים נוספים"}
          src={info.info2}
          width="374px"
          height="249px"
          styleT="info__content-title"
          styleS="info__content-subTitle"
          className="info__cards-marginLeft"
        />
      <h3 className="info__more">צפה בכל העדכונים</h3>
      </div>
    </div>
  );
};

export default Info;
