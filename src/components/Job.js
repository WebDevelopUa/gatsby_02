import React from "react";
import Title from "./Title";
import { FaAngleDoubleRight } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

const query = graphql`
  {
    allStrapiJobSections(sort: {fields: strapiId, order: DESC}) {
      nodes {
        company
        date
        position
        description {
          id
          name
        }
        strapiId
      }
    }
  }
`;

const Job = () => {
  const sectionTitle = `Job section`;
  const data = useStaticQuery(query);
  const { allStrapiJobSections: { nodes: jobs } } = data;
  const [value, setValue] = React.useState(0);
  const { company, position, date, description } = jobs[value];
  // console.log(company, position, date, description);

  return <section className="section jobs">
    <Title title={sectionTitle} />
    <div className="jobs-center">

      <div className="btn-container">
        {jobs.map((item, index) =>
          <button
            onClick={() => setValue(index)}
            className={`job-btn ${index === value && "active-btn"}`}
            key={item.strapiId}>
            {item.company}
          </button>
        )}
      </div>

      <article className="job-info">
        <h3>{position}</h3>
        <h4>{company}</h4>
        <p className="job-date">{date}</p>
        {description.map(item => <div key={item.id} className="job-desc">
          <FaAngleDoubleRight className="job-icon" />
          <p>{item.name}</p>
        </div>)
        }
      </article>

    </div>
    <Link to={`/about`} className="btn center-btn">more info</Link>
  </section>;
};

export default Job;
