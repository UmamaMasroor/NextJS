import {data} from"@/app/data"

// type IData = {
//   title:string,
//   description :string
// }

// // Dynamic Component
// const data:IData[] =[
//   {title: "AI",description : "Welcome to my blog page"},
//   {title: "Web",description : "Welcome to my WEB blog page"},
//   {title: "Health",description : "Welcome to my Healthblog page"}
// ];
// {
//  title: "Web Dev",
//   description : "Welcome to Web dev blog page"
// }


export default function Responsive() {
  return (
    <div className="parentContainer">
      {data.map((IData)=>(
        <div className="childContainer bounce-in-right">
        <div className="imageContainer"></div>
        <h1 className="title">{IData.title}</h1>
        <p className="description">
         {IData.description}
        </p>
        <button className="readMore">Read More</button>
      </div>
      ))}
      

    
    </div>
  );
}
