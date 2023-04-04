import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import GetUser from "../../data/GetUser";
import GetCourse from "../../data/GetCourse";
import "./ProgressBar.css";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#7282fe" : "#7282fe",
  },
}));

export default function ProgressBar(props) {
  const user = GetUser();
  const courseData = GetCourse(`/categories/${props.category}`);
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    function calculateCompletion() {
      let completed_chapters = user.completed_chapters;
      function filter(value) {
        return value.category === props.category;
      }

      console.log(courseData);

      const filtered = completed_chapters.filter(filter);
      let count = 0;

      const chapters = [];

      courseData.forEach((e) => {
        chapters.push(e.chapter);
      });

      filtered.forEach((e) => {
        if (chapters.includes(e.chapter)) count++;
      });

      console.log((count * 100) / chapters.length);

      return (count * 100) / chapters.length;
    }

    if (user && courseData) setCompletion(calculateCompletion());
  }, [user, courseData, props.category]);

  return (
    <div className="progress-content">
      <Box sx={{ flexGrow: 1 }}>
        <BorderLinearProgress variant="determinate" value={completion} />{" "}
      </Box>
      <p className="completion-rate">{Math.floor(completion)}%</p>
    </div>
  );
}
