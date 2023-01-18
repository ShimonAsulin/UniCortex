import Card from "../../ui/card/Card";
import Images from "../../../images/cards/images.js";
import "./cards.scss";
import orangeBell from "../../../images/icons/bell-orange.png"
const  Cards = () => {
  return (
    <div className="cards">
      <h1 className="cards__title">המידע שלך</h1>
      <Card
        src={Images.logo1}
        title="רופאים ובתי חולים"
        more={"למידע נוסף"}
        width="244px"
        height="152px"
        className="card-marginLeft"
        styleT="card__content-title"
        styleS="card__content-subTitle"
      />
      {/* <img className="cards__notfication" src={orangeBell} alt="" /> */}
      <Card
        title="מיצוי זכויות"
        src={Images.logo2}
        more={"למידע נוסף"}
        width="244px"
        height="152px"
        className="card-marginLeft"
        styleT="card__content-title"
        styleS="card__content-subTitle"
      />
      <Card
        title="מטפלים ומרכזי שיקום"
        src={Images.logo3}
        more={"למידע נוסף"}
        width="244px"
        height="152px"
        className="card-marginLeft"
        styleT="card__content-title"
        styleS="card__content-subTitle"
      />
      <Card
        title="תמיכת הקהילה"
        src={Images.logo4}
        more={"למידע נוסף"}
        width="244px"
        height="152px"
        className="card-marginLeft"
        styleT="card__content-title"
        styleS="card__content-subTitle"
      />
      <Card
        title="חדשנות"
        src={Images.logo5}
        more={"למידע נוסף"}
        width="244px"
        height="152px"
        className="card-marginLeft"
        styleT="card__content-title"
        styleS="card__content-subTitle"
      />
      <Card
        title="מעטפת משפחתית"
        src={Images.logo6}
        more={"למידע נוסף"}
        width="244px"
        height="152px"
        className="card-marginLeft"
        styleT="card__content-title"
        styleS="card__content-subTitle"
      />
      <Card
        title="חינוך"
        src={Images.logo7}
        more={"למידע נוסף"}
        width="244px"
        height="152px"
        className="card-marginLeft"
        styleT="card__content-title"
        styleS="card__content-subTitle"
      />
      <Card
        title="מחקרים"
        src={Images.logo8}
        more={"למידע נוסף"}
        width="244px"
        height="152px"
        className="card-marginLeft"
        styleT="card__content-title"
        styleS="card__content-subTitle"
      />
    </div>
  );
};

export default Cards;
