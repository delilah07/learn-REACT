import React from 'react';
import { useState, useEffect } from 'react';
import courses from '../data/courses';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

const SORT_KEY = ['id', 'title', 'slug'];

function sortCourses(corses, key) {
  const sortedCourses = [...courses];
  if (!key || !SORT_KEY.includes(key)) return sortedCourses;
  sortedCourses.sort((a, b) => (a[key] > b[key] ? 1 : -1));
  return sortedCourses;
}

const Courses = () => {
  const location = useLocation();
  console.log('location:', location);

  const query = queryString.parse(location.search);
  console.log('sort :', query);

  const [sortKey, setSortKey] = useState(query.sort);

  const [sortedCourses, setSortedCourses] = useState(
    sortCourses(courses, sortKey)
  );

  const navigate = useNavigate();
  useEffect(() => {
    if (!SORT_KEY.includes(sortKey)) {
      navigate('.');
      setSortKey();
      setSortedCourses([...courses]);
    }
  }, [sortKey, navigate]);

  return (
    <section className="courses">
      <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>
      <ul className="courses__list">
        {sortedCourses.map((course) => {
          return (
            <div key={course.id} className="course">
              <Link to={course.slug}>
                {/* <Link to={course.id.toString()} */}
                <h2>{course.title}</h2>
              </Link>
            </div>
          );
        })}
      </ul>
    </section>
  );
};

export default Courses;
