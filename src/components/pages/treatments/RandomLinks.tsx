import React, { useState, ChangeEvent } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import BlogImg1 from "../../../assets/massage-2-390x344.jpg";

interface SubItem {
  path: string;
  label: string;
}

interface RandomLinksProps {
  subItems: SubItem[];
}

const RandomLinks: React.FC<RandomLinksProps> = ({ subItems }) => {
  const getRandomLinks = (subItems: SubItem[], count = 8) => {
    const shuffled = subItems.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [randomLinks, setRandomLinks] = useState<SubItem[]>(
    getRandomLinks(subItems)
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredLinks = subItems.filter((item) =>
      item.label.toLowerCase().includes(query)
    );

    setRandomLinks(getRandomLinks(filteredLinks));
  };

  return (
    <div>
      <div className="mb-5">
        <div className="input-group">
          <input
            type="text"
            className="form-control p-3"
            placeholder="Keyword"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <button className="btn btn-primary px-3">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      <>
        {randomLinks.map((item, index) => (
          <div className="d-flex rounded overflow-hidden mb-3" key={index}>
            <img
              className="img-fluid"
              src={BlogImg1}
              style={{ width: 100, height: 100, objectFit: "cover" }}
              alt="img"
            />
            <Link
              to={item.path}
              className="h5 d-flex align-items-center px-3 mb-0"
            >
              {item.label}
            </Link>
          </div>
        ))}
      </>
    </div>
  );
};

export default RandomLinks;
