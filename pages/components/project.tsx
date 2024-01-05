import "@/styles/project.css";

export interface ProjectProps {
  title: string;
  tagline: string;
  description: string;
  thumbnail: string;
  cover: string;
  addl: string[];
  link: string;
  id: string;
}

export default function Project(props: ProjectProps) {
  const thumbnailStyle: React.CSSProperties = {
    backgroundImage: `url(${props.thumbnail})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "360px",
    height: "200px",
  };

  return (
    <div className="starterPackCard" id="react">
      <div style={thumbnailStyle} className="thumbnail hoverable"></div>
      <div className="cardInfo">
        <h3 className="cardTitle hoverable">{props.title}</h3>
        <div className="cardDescription hoverable">{props.tagline}</div>
      </div>
    </div>
  );
}
