export interface Template {
  link: string;
  title: string;
  location: string;
  date: string;
};
const one: Template = {
  link: "https://www.redstorm.com/",
  title: "Game Intelligence Analyst",
  location: "Red Storm Entertainment",
  date: "01.2023-Present",
};
const two: Template = {
// link: "https://unwrapped.design",
  title: "Rebate Finance Analyst",
  location: "CVS Health",
  date: "03.2022-08.2022",
};
const three: Template = {
// link: "https://colorsandfonts.com",
  title: "Socail Media/Ecommerce Analyst",
  location: "Freelance",
  date: "04.2021-12.2021",
};
const four = {
// link: "https://example.com",
title: "Mobile Sales Consultant",
location: "Best Buy",
date: "08.2018-10.2020",
};



export interface projectTemplate {
  link: string;
  title: string;
  description: string;
  date: string;
};

const projectOne: projectTemplate = {
  link: "https://github.com/patrickmcalinden/sql-work",
  title: "Citi Bike Analysis",
  description: "This project involves analyzing Citibike data through interactive visualizations and insights using Tableau, based on a public BigQuery dataset.",
  date: "05.2023",
};
const projectTwo: projectTemplate = {
  link: "https://github.com/patrickmcalinden/kaggle_ml_sleep",
  title: "Kaggle Sleep Prediction",
  description: "I joined a Kaggle competition, applying my skills and diving into data science, to predict sleep patterns using machine learning...I didn't win :(",
  date: "04.2023",
};
const projectThree: projectTemplate = {
  link: "https://github.com/patrickmcalinden/Spotify-Data-Analysis",
  title: "Spotify Data Analysis",
  description: "I leveraged my Spotify usage data and expertise with the Spotify API to develop a dashboard and conduct data analysis, enhancing my understanding of the platform.",
  date: "02.2023",
};
const projectFour: projectTemplate = {
  link: "https://github.com/patrickmcalinden/spotfiy-stats",
  title: "Spotify Stats",
  description: "A Bootstrap and JS-based website retrieves a user's Spotify stats using Spotify's API and presents them in a dashboard format, showcasing 'Top Song' and 'Top Artist' data for weekly, half-yearly, and yearly periods.",
  date: "10.2021",
};

export const bytitle = {
one,two,three,four,
  };
export const byProjectTitle = {
  projectOne,projectTwo,projectThree,projectFour,
  };

export const details = Object.values(bytitle);
export const projectDetails = Object.values(byProjectTitle);
