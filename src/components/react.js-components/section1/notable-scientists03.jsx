import Image from "next/image";

function getImageUrl(imageId, size = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}
const Profile = (prop) => {
  return (
    <section className="rounded-xl bg-cyan-100 p-4 text-stone-700">
      <h2>{prop.name}</h2>
      <Image
        className="rounded-full"
        src={getImageUrl(prop.url)}
        alt={prop.name}
        width={80}
        height={80}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {prop.profession}
        </li>
        <li>
          <b>Awards: 4 </b>
          {prop.awards}
        </li>
        <li>
          <b>Discovered: </b>
          {prop.discovery}
        </li>
      </ul>
    </section>
  );
};
export default function NotableScientist() {
  return (
    <div className="space-y-4 rounded-xl bg-cyan-50 p-4 text-stone-700">
      <h1>Notable Scientists</h1>
      <Profile
        profession="physicist and chemist"
        awards="(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal,
          Matteucci Medal)"
        discovery="polonium (chemical element)"
        name="Maria Skłodowska-Curie"
        url="szV5sdG"
      />
      <Profile
        profession="geochemist"
        awards="(Miyake Prize for geochemistry, Tanaka Prize)"
        discovery="a method for measuring carbon dioxide in seawater"
        name="Katsuko Saruhashi"
        url="YfeOqp2"
      />
    </div>
  );
}

{
  /* <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src={getImageUrl("YfeOqp2")}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            
          </li>
          <li>
            <b>Awards: 2 </b>
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
          </li>
        </ul>
      </section> */
}
