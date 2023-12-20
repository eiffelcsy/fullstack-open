const Header = ({ course_name }) => <h1>{course_name}</h1>

const Total = ({ sum }) => <b>total of {sum} exercises</b>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map(part =>
      <Part part={part} key={part.id} />
    )}
  </>

const Course = ({ course }) => 
  <>
    <Header course_name={course.name} />
    <Content parts={course.parts} />
    <Total sum={course.parts.reduce((sum, part) => sum + part.exercises, 0)} />
  </>

export default Course