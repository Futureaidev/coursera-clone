function filterCourses(category) {
    const courses = document.querySelectorAll('.course-card');
    courses.forEach(course => {
      if (category === 'all' || course.classList.contains(category)) {
        course.style.display = 'block';
      } else {
        course.style.display = 'none';
      }
    });
  }
  