import React from 'react';
import courses from '../data/courses';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
// import NotFound from './NotFound';

const SingleCourse = () => {
  const params = useParams();
  console.log('params:', params);
  const navigate = useNavigate();

  const course = courses.find((course) => course.slug === params.slug);
  console.log(course);

  //   if (!course) return <NotFound />;

  useEffect(() => {
    if (!course) {
      navigate('..', { relative: 'path' });
    }
  }, [course, navigate]);

  return (
    <div>
      <h1>Course: {course?.title}</h1>
      <h2>{course?.slug}</h2>
      <h3>Id: {course?.id}</h3>
      {/* <Link to="/courses">To All Courses</Link> */}
      <Link to=".." relative="path">
        To All Courses
      </Link>
    </div>
  );
};

export default SingleCourse;
